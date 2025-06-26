import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import "font-awesome/css/font-awesome.min.css";

import React, { useState, useEffect } from "react";
// import { Routes, Route } from "react-router-dom";

import GlobalAssets from "./components/GlobalAssets";
import { TopHeader } from "./components/TopHeader";
import { StickyHeader } from "./components/StickyHeader";
import ExportModal from "./components/ExportModal";
import MessageModal from "./components/MessageModal";
import SliderBanner from "./components/BannerSlider";
import TopBrands from "./components/TopBrands";
import ProductGrid from "./components/ProductGrid";
import Footer from './components/Footer'; 
import AuthForm from "./components/AuthForm"; 
import CheckoutPage from "./components/CheckoutPage";

import type { CartItem } from "./components/types";

const App: React.FC = () => {
  const [loginOpen, setLoginOpen] = useState(false);
  const [exportOpen, setExportOpen] = useState(false);
  const [messageOpen, setMessageOpen] = useState(false);
  const [cartCount, setCartCount] = useState(0);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  useEffect(() => {
    console.log("✅ Cart in App:", cartItems);
  }, [cartItems]);

  const clearCart = () => {
    setCartItems([]);
    setCartCount(0);
  };

  return (
    <>
      <GlobalAssets />
      <TopHeader />

      <StickyHeader
        onLoginClick={() => setLoginOpen(true)}
        onExportClick={() => setExportOpen(true)}
        cartCount={cartCount}
      />

      {/* Banner full width */}
      <div style={{ width: "100%" }}>
        <SliderBanner />
        <TopBrands />
      </div>

      {/* Below banner: products and checkout side by side */}
      <div
        style={{
          display: "flex",
          height: "calc(100vh - 0px)",
          overflow: "hidden",
        }}
      >
        {/* Left side: products */}
        <div
          style={{
            flex: 3,
            overflowY: "auto",
            padding: "1rem",
          }}
        >
          <ProductGrid
            cartItems={cartItems}
            setCartItems={setCartItems}
            setCartCount={setCartCount}
          />
          <Footer />
        </div>

        {/* Right side: checkout */}
        <div
          style={{
            flex: 1,
            borderLeft: "1px solid #ddd",
            overflowY: "auto",
            padding: "1rem",
            background: "#f9f9f9",
          }}
        >
          <CheckoutPage
            key={cartItems.length}
            cartItems={cartItems}
            clearCart={clearCart}
            setCartItems={setCartItems}
          />
        </div>
      </div>

      {loginOpen && (
        <AuthForm
          onLoginSuccess={() => {
            setLoginOpen(false);
            alert("Logged in successfully!");
          }}
        />
      )}

      {exportOpen && (
        <ExportModal
          show={exportOpen}
          onClose={() => setExportOpen(false)}
          onExport={() => {
            alert("Export action triggered");
            setExportOpen(false);
          }}
        />
      )}

      {messageOpen && (
        <MessageModal show={messageOpen} onClose={() => setMessageOpen(false)} />
      )}
    </>
  );
};

export default App;
