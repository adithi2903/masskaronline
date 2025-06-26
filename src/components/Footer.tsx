import React from "react";

const Footer: React.FC = () => {
    return (
        <footer style={{ backgroundColor: "white", marginBottom: "0px" }}>
          {/* Top bar: Masskar + Connect with us */}
          <div
            style={{
              backgroundColor: "white",
              width:"100%",
              margin: "0",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "15px 20px",
              paddingLeft: "130px",
              flexWrap: "wrap",
            //   borderBottom: "1px solid #ddd",
              color: "black",
            }}
          >
            <div>
              <h2
                style={{
                  color: "black",
                  fontSize: "32px",
                  fontFamily:"monospace",
                  margin: "0",
                  fontStretch:"semi-condensed"
                }}
              >
                MASSKAR
              </h2>
            </div>
    
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "8px",
                paddingRight:"130px",
                flexShrink: 0,
              }}
            >
              <h5 style={{ margin: 0, color: "#fff" }}>CONNECT WITH US</h5>
              <ul
  style={{
    listStyle: "none",
    display: "flex",
    margin: 0,
    padding: 0,
    gap: "10px",
  }}
>
{[
  { name: "facebook", href: "#", hoverColor: "#1877F2" }, 
  { name: "twitter", href: "#", hoverColor: "#1DA1F2" },  
  { name: "google-plus", href: "#", hoverColor: "#EA4335" },
  { name: "instagram", href: "#", hoverColor: "#833AB4" }, 
  { name: "dribbble", href: "#", hoverColor: "#FF5A8D" }, 
].map(({ name, href, hoverColor }) => (
  <li key={name}>
    <a
      href={href}
      style={{
        color: "#fff",
        fontSize: "20px",
        display: "inline-flex",
        justifyContent: "center",
        alignItems: "center",
        width: "36px",
        height: "36px",
        borderRadius: "50%",
        backgroundColor: "black",
        transition: "color 0.3s, background-color 0.3s",
        textDecoration: "none",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.color = hoverColor;
        e.currentTarget.style.backgroundColor = `${hoverColor}33`; 
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.color = "#fff";
        e.currentTarget.style.backgroundColor = "black";
      }}
    >
      <i className={`fa fa-${name}`} aria-hidden="true"></i>
    </a>
  </li>
))}

</ul>

            </div>
          </div>

      {/* Middle: Categories and info */}
      <div
  style={{
    width: "100%",
    backgroundColor: "white",
    color:"black",
    borderBottom: "1px solid #3e3e3e",
    padding: "40px 80px",
    display: "flex",
    flexWrap: "wrap",
    gap: "40px",
    justifyContent: "center",
    boxSizing: "border-box",
  }}
>
  {/* Footer grid sections */}
  {[
    {
      title: "CATEGORY",
      links: [
        { name: "Fish", href: "index.html" },
        { name: "Meat", href: "user/freshmutton.html" },
        { name: "Fresh", href: "user/fresh.html" },
        { name: "Veg", href: "user/freshbeefmeat.html" },
        { name: "Fruits", href: "user/fruits.html" },
      ],
    },
    {
      title: "CATEGORY",
      links: [
        { name: "Food", href: "user/freshchickenmeat.html" },
        { name: "Bakery", href: "user/bakery.html" },
        { name: "Roastery", href: "user/roastery.html" },
        { name: "Non Food", href: "user/nonfood.html" },
      ],
    },
    {
      title: "POLICY INFO",
      links: [
        { name: "FAQ", href: "user/faq.html" },
        { name: "Cancellation", href: "user/cancellation.html" },
        { name: "Returns & Refund", href: "user/refund.html" },
        { name: "Payments & Privacy", href: "user/privacy.html" },
      ],
    },
    {
      title: "MASSKAR",
      links: [
        { name: "About us", href: "user/about.html" },
        { name: "Feedback", href: "index.html#" },
        { name: "Delivery Locations", href: "customer/locations.html" },
      ],
    },
  ].map((section, index) => (
    <div key={index} style={{ flex: "1 1 160px", minWidth: "150px" }}>
      <h3 style={{ color: "black", marginBottom: "10px" }}>{section.title}</h3>
      <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
        {section.links.map((link, idx) => (
          <li key={idx} style={{ marginBottom: "8px" }}>
            <a
              href={link.href}
              style={{
                color: "black",
                textDecoration: "none",
                fontSize: "14px",
              }}
            >
              {link.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  ))}

  {/* Contact column */}
  <div style={{ flex: "1 1 180px", minWidth: "160px", paddingTop: "5px" }}>
  <h3 style={{ color: "black", marginBottom: "12px", fontSize: "16px" }}>CONTACT</h3>
  <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
    <li style={{ marginBottom: "10px" }}>
      <a
        href="#"
        style={{
          display: "inline-flex",
          alignItems: "center",
          color: "black",
          textDecoration: "none",
          fontSize: "14px",
        }}
      >
        <i className="fa fa-phone" style={{ marginRight: "10px" }}></i>
        50343443
      </a>
    </li>
    <li>
      <a
        href="#"
        style={{
          display: "inline-flex",
          alignItems: "center",
          color: "black",
          textDecoration: "none",
          fontSize: "14px",
        }}
      >
        <i className="fa fa-envelope-o" style={{ marginRight: "10px" }}></i>
        info@masskaronline.com
      </a>
    </li>
  </ul>
</div>

</div>


      {/* Bottom copyright */}
      <div
        style={{
          marginTop: "0em",
          height:"30px",
          padding: "0",
          textAlign: "center",
          backgroundColor:"white",
          fontSize: "14px",
          color: "black",
        }}
      >
        <p style={{ margin: 0, padding: 0, color:"black" }}>
          © 2021 Masskar. All rights reserved | Developed by{" "}
          <a
            href="https://etuwa.in/"
            style={{ textDecoration: "none", color: "black" }}
          >
            Team{" "}
            <img
              src="qfreshstyles/images/etuwalogobluenew.png"
              alt="etuwa logo"
              style={{ height: 10, width: 10, verticalAlign: "middle", color:"black" }}
            />
            etuwa
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
