import React, { useState, useEffect } from "react";
import type { CartItem } from "./types";

interface CheckoutPageProps {
  cartItems: CartItem[];
  clearCart: () => void;
  setCartItems: React.Dispatch<React.SetStateAction<CartItem[]>>;
}

const CheckoutPage: React.FC<CheckoutPageProps> = ({ cartItems, clearCart, setCartItems }) => {
  const deliveryFee = 5;

  const [paymentMethod, setPaymentMethod] = useState("Cash on Delivery");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [showPopup, setShowPopup] = useState(false);
  const [popupTotal, setPopupTotal] = useState<number | null>(null);
  const [popupPaymentMethod, setPopupPaymentMethod] = useState<string>("");

  const [quantities, setQuantities] = useState<{ [productId: number]: number }>({});

  // Sync initial quantities from cartItems
  useEffect(() => {
    const initial: { [productId: number]: number } = {};
    cartItems.forEach(item => {
      initial[item.productId] = item.quantity;
    });
    setQuantities(initial);
  }, [cartItems]);

  const incrementQuantity = (productId: number) => {
    setQuantities(prev => {
      const current = prev[productId] ?? 0;
      const next = current === 0 ? 0.5 : current === 0.5 ? 1 : current + 1;
      return { ...prev, [productId]: next };
    });
  };

  const decrementQuantity = (productId: number) => {
    setQuantities(prev => {
      const current = prev[productId] ?? 0;
      let next = current <= 0.5 ? 0 : current === 1 ? 0.5 : current - 1;

      // If next is 0, remove item from cart
      if (next === 0) {
        removeItem(productId);
        const { [productId]: _, ...rest } = prev;
        return rest;
      }

      return { ...prev, [productId]: next };
    });
  };

  const removeItem = (productId: number) => {
    setCartItems(prev => prev.filter(item => item.productId !== productId));
    setQuantities(prev => {
      const copy = { ...prev };
      delete copy[productId];
      return copy;
    });
  };

  const subtotal = cartItems.reduce((sum, item) => {
    const quantity = quantities[item.productId] ?? item.quantity;
    return sum + quantity * item.pricePerKg;
  }, 0);

  const total = subtotal + deliveryFee;

  const handlePlaceOrder = () => {
    if (!address || !phone) {
      alert("Please enter your address and phone number.");
      return;
    }

    setPopupTotal(total);
setPopupPaymentMethod(paymentMethod);
setShowPopup(true);


setTimeout(() => {
  clearCart();
  setPaymentMethod("Cash on Delivery");
  setAddress("");
  setPhone("");
}, 3000); 

  };

  useEffect(() => {
    if (showPopup) {
      const timer = setTimeout(() => setShowPopup(false), 3000);
      return () => clearTimeout(timer);
    }
  }, [showPopup]);

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "20px", padding: "20px", color: "#0e0e0e", position: "relative" }}>
      {/* Popup */}
      {showPopup && (
        <div style={{
          position: "fixed",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "450px",
          maxWidth: "90%",
          height: "180px",
          backgroundColor: "#eee",
          color: "black",
          padding: "30px",
          border:"1px solid black",
          borderRadius: "6px",
          textAlign: "center",
          zIndex: 1000,
          boxShadow: "0 10px 25px rgba(0,0,0,0.2)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "15px",
        }}>        
          <div style={{ fontSize: "24px", fontWeight: "bold" }}>ORDER PLACED!</div>
          <div style={{ fontSize: "18px" }}>Total: QR {popupTotal?.toFixed(2)}</div>
          <div style={{ fontSize: "18px" }}>Payment Method: {popupPaymentMethod}</div>
        </div>
      )}

      {/* Cart Items */}
      <div style={{ background: "white", border: "1px solid #ccc", color: "black", padding: "8px", borderRadius: "10px" }}>
        <h2>CHECKOUT</h2>
        {cartItems.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <ul style={{ listStyleType: "none", padding: 0 }}>
            {cartItems.map((item, index) => (
              <li key={index} style={{ marginBottom: "15px" }}>
                <strong>{item.name}</strong> – {item.addon}
                <br />
                <div style={{ display: "flex", alignItems: "center", gap: "8px", marginTop: "5px" }}>
                  <button
                    onClick={() => decrementQuantity(item.productId)}
                    style={{ background: "#eee", border: "1px solid #ccc", borderRadius: "3px", padding: "2px 8px", cursor: "pointer", color: "black" }}
                  >−</button>
                  <input
                    type="text"
                    value={(quantities[item.productId] ?? item.quantity).toFixed(1)}
                    readOnly
                    style={{ width: "40px", textAlign: "center", border: "1px solid #ccc", borderRadius: "3px", backgroundColor: "#eee", color: "black" }}
                  />
                  <button
                    onClick={() => incrementQuantity(item.productId)}
                    style={{ background: "#eee", border: "1px solid #ccc", borderRadius: "3px", padding: "2px 8px", cursor: "pointer", color: "black" }}
                  >+</button>
                  <span style={{ marginLeft: "auto", fontWeight: "bold" }}>
                    QR {(item.pricePerKg * (quantities[item.productId] ?? item.quantity)).toFixed(2)}
                  </span>
                  <button
                    onClick={() => removeItem(item.productId)}
                    style={{ background: "#eee", color: "black", padding: "4px 10px", border: "none", borderRadius: "5px", marginLeft: "10px" }}
                  >
                    Remove
                  </button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Order Summary */}
      <div style={{ padding: "20px", background: "white", border: "1px solid #ccc", borderRadius: "10px", color: "black" }}>
        <h2>Order Summary</h2>
        <div style={{ marginTop: "10px", marginBottom: "20px" }}>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <span>Subtotal:</span>
            <span>QR {subtotal.toFixed(2)}</span>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <span>Delivery Fee:</span>
            <span>QR {deliveryFee.toFixed(2)}</span>
          </div>
          <hr />
          <div style={{ display: "flex", justifyContent: "space-between", fontWeight: "bold" }}>
            <span>Total:</span>
            <span>QR {total.toFixed(2)}</span>
          </div>
        </div>

        {/* Checkout Form */}
        <label>Payment Options:</label>
        <select value={paymentMethod} onChange={(e) => setPaymentMethod(e.target.value)} style={{ width: "100%", marginBottom: "10px", backgroundColor:"#eee",border:"0.6px solid black", }}>
          <option>Cash on Delivery</option>
          <option>UPI</option>
          <option>Credit/Debit Card</option>
        </select>

        <label>Delivery Address:</label>
        <textarea
          rows={3}
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          placeholder="Enter your delivery address"
          style={{ width: "100%", marginBottom: "10px" , backgroundColor:"#eee", borderRadius:"4px", color:"black"}}
        />

        <label>Phone Number:</label>
        <input
          type="tel"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="Enter phone number"
          style={{ width: "100%", marginBottom: "20px" , backgroundColor:"#eee", border:"1px solid black", borderRadius:"4px",color:"black"}}
        />

        <button
          onClick={handlePlaceOrder}
          style={{
            backgroundColor: "#212121",
            color: "#fff",
            padding: "10px",
            width: "100%",
            borderRadius: "5px",
            border: "none",
            fontWeight: "bold",
            cursor: "pointer"
          }}
        >
          PLACE ORDER
        </button>
      </div>

      <style>{`
        @keyframes fadeInOut {
          0% { opacity: 0; transform: translate(-50%, -60%); }
          10%, 90% { opacity: 1; transform: translate(-50%, -50%); }
          100% { opacity: 0; transform: translate(-50%, -60%); }
        }
      `}</style>
    </div>
  );
};

export default CheckoutPage;
