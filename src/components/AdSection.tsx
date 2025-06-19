import React from "react";

const AdSection: React.FC = () => {
  return (
    <div
      style={{
        margin: "0",
        backgroundColor: "rgba(245,245,245,1)",
        padding: "25px",
        borderRadius: "8px",
      }}
    >
      <div
        style={{
          display: "flex",
          gap: "20px",
          flexWrap: "nowrap",
        }}
      >
        {/* Left large ad (1/3 width) */}
        <div style={{ flex: "0 0 33.33%" }}>
          <img
            src="uploads/images/poster/Professional%20%20Team.jpg"
            alt="adv"
            style={{
              width: "100%",
              height: "400px",
              objectFit: "cover",
              borderRadius: "1px",
            }}
          />
        </div>

        {/* Right side container (2/3 width) with 3 small ads */}
        <div
          style={{
            flex: "0 0 66.66%",
            display: "flex",
            gap: "20px",
            flexWrap: "nowrap",
          }}
        >
          {/* First two normal images */}
          {["center%20bottom.jpg", "right1.jpg"].map((filename, idx) => (
            <div
              key={idx}
              style={{ flex: "1 1 0" }}
            >
              <img
                src={`uploads/images/poster/${filename}`}
                alt={`Ad ${idx + 1}`}
                style={{
                  width: "100%",
                  height: "400px",
                  objectFit: "cover",
                  borderRadius: "1px",
                }}
              />
            </div>
          ))}

          {/* Last image with fixed width and horizontal zoom */}
          <div style={{ flex: "0 0 auto", overflow: "hidden" }}>
            <img
              src="uploads/images/poster/right2.jpg"
              alt="Ad 3"
              style={{
                width: "90%",             
                height: "400px",
                objectFit: "cover",
                borderRadius: "1px",
                transform: "scaleX(1.1)", // horizontal zoom
                transformOrigin: "center center",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdSection;
