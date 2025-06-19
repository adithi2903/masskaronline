import React, { useState, useEffect } from "react";

interface CartItem {
  productId: number;
  name: string;
  quantity: number;
  addon: string;
  totalAmount: number;
}

interface CheckoutPageProps {
  cartItems: CartItem[];
  clearCart: () => void;
}

const CheckoutPage: React.FC<CheckoutPageProps> = ({ cartItems, clearCart }) => {
  const deliveryFee = 5;
  const subtotal = cartItems.reduce((sum, item) => sum + item.totalAmount, 0);
  const total = subtotal + deliveryFee;

  const [paymentMethod, setPaymentMethod] = useState("Cash on Delivery");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [showPopup, setShowPopup] = useState(false);
  const [popupTotal, setPopupTotal] = useState<number | null>(null);
const [popupPaymentMethod, setPopupPaymentMethod] = useState<string>("");


  const handlePlaceOrder = () => {
    if (!address || !phone) {
      alert("Please enter your address and phone number.");
      return;
    }

    // Show animated popup instead of alert
    setPopupTotal(total);
    setPopupPaymentMethod(paymentMethod);
    setShowPopup(true);

    setPaymentMethod("Cash on Delivery");
    setAddress("");
    setPhone("");
    clearCart();
  };

  // Hide popup automatically after 3 seconds
  useEffect(() => {
    if (showPopup) {
      const timer = setTimeout(() => setShowPopup(false), 3000);
      return () => clearTimeout(timer);
    }
  }, [showPopup]);

  return (
    <div style={{ display: "flex", gap: "40px", padding: "20px", color: "#0e0e0e", position: "relative" }}>
      {/* New Centered Popup */}
      {showPopup && (
        <div
          style={{
            position: "fixed",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "450px",
            maxWidth: "90%",
            height:"180px",
            backgroundColor: "#0e0e0e",
            color: "white",
            padding: "30px",
            borderRadius: "2px",
            boxShadow: "0 10px 25px rgba(0,0,0,0.2)",
            textAlign: "center",
            zIndex: 1000,
            animation: "fadeInOut 3s forwards",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "15px"
          }}
        >
          <div style={{ fontSize: "24px", fontWeight: "bold" }}>
            ORDER PLACED!
          </div>
          <div style={{ fontSize: "18px" }}>
            Total: QR {popupTotal?.toFixed(2)}
          </div>
          <div style={{ fontSize: "18px" }}>
            Payment Method: {popupPaymentMethod}
          </div>
          <div style={{ 
            width: "50px",
            height: "30px",
            borderRadius: "50%",
            backgroundColor: "white",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            margin: "10px 0"
          }}>
            {/* <span style={{ color: "#4BB543", fontSize: "24px" }}>✓</span> */}
          </div>
        </div>
      )}

      {/* Left: Order Summary */}
      <div style={{ flex: 2 }}>
        <h2>CHECKOUT </h2>
        {cartItems.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <ul>
            {cartItems.map((item, index) => (
              <li key={index}>
                <strong>{item.name}</strong> - {item.quantity}kg - {item.addon} - QR {item.totalAmount}
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Right: Checkout Sidebar */}
      <div style={{ flex: 1, padding: "20px", background: "#f9f9f9", borderRadius: "10px" }}>
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

        <div>
          <label>Payment Options:</label>
          <select
            className="white-input"
            value={paymentMethod}
            onChange={(e) => setPaymentMethod(e.target.value)}
            style={{ width: "100%", marginBottom: "10px" }}
          >
            <option>Cash on Delivery</option>
            <option>UPI</option>
            <option>Credit/Debit Card</option>
          </select>

          <label>Delivery Address:</label>
          <textarea
            className="white-input"
            rows={3}
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            placeholder="Enter your delivery address"
            style={{ width: "100%", marginBottom: "10px" }}
          />

          <label>Phone Number:</label>
          <input
            className="white-input"
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="Enter phone number"
            style={{ width: "100%", marginBottom: "20px" }}
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
              cursor: "pointer",
            }}
          >
            PLACE ORDER
          </button>
        </div>
      </div>

      {/* CSS animation for popup */}
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
