import React, { useState } from "react";
import AuthForm from "./AuthForm"; // Ensure this accepts onLoginSuccess prop
import { useNavigate } from "react-router-dom";

type StickyHeaderProps = {
  onLoginClick: () => void;
  onExportClick: () => void;
  cartCount: number;
};

export const StickyHeader: React.FC<StickyHeaderProps> = ({
  cartCount,
}) => {
  const [isAuthFormOpen, setAuthFormOpen] = useState(false);
  const [isLoggedIn, setLoggedIn] = useState(false);

  const handleLoginClick = () => setAuthFormOpen(true);
  const handleLoginSuccess = () => {
    setAuthFormOpen(false);
    setLoggedIn(true);
  };

  const navItems = [
    { path: "/", label: "FISH" },
    { path: "/user/freshmutton", label: "MEAT" },
    { path: "/user/fresh", label: "FRESH" },
    { path: "/user/freshbeefmeat", label: "VEG" },
    { path: "/user/fruits", label: "FRUITS" },
    { path: "/user/freshchickenmeat", label: "FOOD" },
    { path: "/user/bakery", label: "BAKERY" },
    { path: "/user/roastery", label: "ROASTERY" },
    { path: "/user/nonfood", label: "NON FOOD" },
    { path: "/user/healthandbeauty", label: "HEALTH & BEAUTY" },
    { path: "/user/chilled", label: "CHILLED" },
    { path: "/user/household", label: "HOUSE HOLD" },
    { path: "/user/electronics", label: "ELECTRONICS & APPLIANCES" },
    { path: "/user/toyssports", label: "TOYS & SPORTS" },
    { path: "/user/stationery", label: "STATIONERY" },
    { path: "/user/luggage", label: "LUGGAGE" },
    { path: "/user/homefurnishing", label: "HOME FURNISHING" },
  ];
  const navigate = useNavigate();

  return (
    <>
      <div
        className="sticky-header"
        style={{
          position: "sticky",
          top: 0,
          zIndex: 999,
          backgroundColor: "black",
          padding: "10px",
          width: "100%",
          boxSizing: "border-box",
          color: "#f9f9f9",
        }}
      >
        {/* Top Nav */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "12px",
            marginBottom: "5px",
            justifyContent: "center",
          }}
        >
          {navItems.map((item, index) => (
            <a
              key={index}
              href={item.path}
              style={{
                color: "white",
                fontSize: "13px",
                fontFamily: "'Open Sans', sans-serif",
                textDecoration: "none",
                whiteSpace: "nowrap",
              }}
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Second row */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "10px",
          }}
        >
          <div
            style={{
              backgroundColor: "#3A3A3A",
              color: "#ffffff",
              fontSize: "12px",
              fontStyle: "italic",
              padding: "6px 12px",
              borderRadius: "8px",
              whiteSpace: "nowrap",
              display: "inline-block",
              fontWeight: 900,
            }}
          >
            All you need is just one click away...
          </div>

          {/* Search */}
          <form
            action="https://masskaronline.com/user/searchresult"
            method="get"
            style={{ flex: "1 1 40%", display: "flex", justifyContent: "center" }}
          >
            <input
              type="text"
              name="search"
              placeholder="Search a product..."
              required
              style={{
                padding: "6px",
                borderRadius: "3px 0 0 3px",
                backgroundColor: "#fff",
                color: "#000",
                border: "1px solid #ccc",
                fontSize: "13px",
                width: "70%",
              }}
            />
            <button
              type="submit"
              style={{
                padding: "6px 10px",
                backgroundColor: "#3A3A3A",
                border: "none",
                borderRadius: "0 6px 6px 0",
                cursor: "pointer",
              }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" viewBox="0 0 24 24">
                <path d="M21.53 20.47l-4.76-4.77A7.93 7.93 0 0017 10a8 8 0 10-8 8 7.93 7.93 0 005.7-2.23l4.77 4.76a.75.75 0 101.06-1.06zM10 16a6 6 0 116-6 6.006 6.006 0 01-6 6z" />
              </svg>
            </button>
          </form>

          {/* Buttons */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-end",
              gap: "10px",
              flex: "1 1 30%",
            }}
          >
            {!isLoggedIn ? (
              <button
                style={{
                  backgroundColor: "#212121",
                  border: "1px solid white",
                  display: "flex",
                  alignItems: "center",
                  padding: "6px 10px",
                  cursor: "pointer",
                }}
                onClick={handleLoginClick}
              >
                {/* <img
                  src="/qfreshstyles/images/ar-logo.png"
                  style={{ height: 20 }}
                  alt="Arabic"
                /> */}
                <span style={{ color: "white", marginLeft: 1 }}>LOGIN/SIGNUP</span>
              </button>
            ) : (
              <div style={{ color: "white", display: "flex", alignItems: "center", gap: "8px" }}>
                <img
                  src="https://cdn-icons-png.flaticon.com/512/1144/1144760.png"
                  alt="User Icon"
                  style={{ width: 35, height: 35, filter: 'brightness(0) invert(1)' }}
                />
                <span style={{ fontWeight: 'bold', color: 'white', fontSize: '1rem' }}>Adithi</span>
              </div>
            )}

<button
  onClick={() => navigate("/checkout")}
  style={{
    backgroundColor: "#3A3A3A",
    padding: "6px 12px",
    border: "none",
    color: "white",
    fontWeight: "bold",
    cursor: "pointer",
  }}
>
  Checkout {cartCount}
  {/* <img
    src="/qfreshstyles/images/Cartnew.png"
    style={{ height: 24, width: 24, marginLeft: 6 }}
    alt="Cart"
  /> */}
</button>

          </div>
        </div>
      </div>

      {/* Modal Popup for Auth */}
      {isAuthFormOpen && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(0,0,0,0.6)",
            zIndex: 1000,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          onClick={() => setAuthFormOpen(false)}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              backgroundColor: "white",
              padding: 30,
              borderRadius: 10,
              width: "300px",
            }}
          >
            <AuthForm onLoginSuccess={handleLoginSuccess} />
          </div>
        </div>
      )}
    </>
  );
};
