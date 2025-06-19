import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import "font-awesome/css/font-awesome.min.css";

import { Routes, Route } from "react-router-dom";
import React, { useState } from "react";

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

export interface CartItem {
  productId: number;
  name: string;
  quantity: number;
  addon: string;
  totalAmount: number;
}

const App: React.FC = () => {
  const [loginOpen, setLoginOpen] = useState(false);
  const [exportOpen, setExportOpen] = useState(false);
  const [messageOpen, setMessageOpen] = useState(false);
  const [cartCount, setCartCount] = useState(0);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const clearCart = () => setCartItems([]);

  return (
    <>
      <GlobalAssets />
      <TopHeader />

      <StickyHeader
        onLoginClick={() => setLoginOpen(true)}
        onExportClick={() => setExportOpen(true)}
        cartCount={cartCount}
      />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <SliderBanner />
              <TopBrands />
              <ProductGrid
                cartItems={cartItems}
                setCartItems={setCartItems}
                setCartCount={setCartCount}
              />
            </>
          }
        />
        <Route
          path="/checkout"
          element={<CheckoutPage cartItems={cartItems} clearCart={clearCart} />}
        />
      </Routes>

      <main className="flex flex-col items-center justify-start p-4 w-full bg-gray-50 min-h-screen">
        <Footer />
      </main>

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
