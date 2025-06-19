import { Link } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.min.css"; // Import Font Awesome

export const TopHeader = () => {
  return (
    <div
      className="logo_products"
      style={{
        height: "70px",   // <-- Added fixed height here
        width: "100%",
        backgroundColor: "#EEEEEE",
        padding: "0.5em 0",
        boxSizing: "border-box",
        margin: 0,
        position: "relative", // ← Required for z-index to work
    zIndex: 100,
      }}
    >
      <div
        style={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          margin: 0,
          padding: "0 1em",
          boxSizing: "border-box",
        }}
      >
        {/* Logo */}
        <Link to="/" style={{ display: "flex", alignItems: "center" }}>
          <div className="w3ls_logo_products_left" style={{ marginRight: "0.9em" }}>
            <h1 style={{ margin: 0, padding:0 }}>
              <img
                src="/qfreshstyles/images/mAsskar_online1.png"
                alt="Logo"
                style={{ height: "50px", width: "120%" }}
              />
            </h1>
          </div>
        </Link>

        {/* Right side */}
        <div
          className="w3ls_logo_products_left1"
          style={{
            display: "flex",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "15px",
          }}
        >
          {/* Nav Links */}
          <ul
            className="special_items"
            style={{
              display: "flex",
              listStyle: "none",
              margin: 0,
              padding: 0,
              gap: "20px",
              alignItems: "center",
            }}
          >
            <li>
              <Link to="/" style={{ color: "black", textDecoration: "none" }}>
                HOME
              </Link>
            </li>
            <li>
              <Link to="/about" style={{ color: "black", textDecoration: "none" }}>
                ABOUT
              </Link>
            </li>
            <li>
              <Link to="/locations" style={{ color: "black", textDecoration: "none" }}>
                DELIVERY LOCATIONS
              </Link>
            </li>
          </ul>

          {/* Phone - icon black, number green */}
          <a
            href="tel:50343443"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              marginLeft: "20px",
              textDecoration: "none",
            }}
          >
            <i className="fa fa-phone" style={{ color: "black", fontSize: 16 }} />
            <b style={{ color: "black", fontSize: 14 }}>50343443</b>
          </a>

          {/* Email - icon and clickable */}
          <a
            href="mailto:info@masskaronline.com"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              marginLeft: "20px",
              textDecoration: "none",
              color: "black",
              fontSize: 14,
            }}
          >
            <i className="fa fa-envelope" style={{ fontSize: 16 }} />
            info@masskaronline.com
          </a>

          {/* Play Store */}
          {/* <a
            href="https://play.google.com/store/apps/details?id=in.etuwa.qfresh&hl=en"
            style={{ marginLeft: "20px" }}
          >
            <img
              src="/qfreshstyles/images/playstore.png"
              style={{ height: 30 }}
              alt="Android App"
            />
          </a> */}

          {/* iOS App Store */}
          {/* <a
            href="https://itunes.apple.com/us/app/qfresh/id1321361293"
            style={{ marginLeft: "20px" }}
          >
            <img
              src="/qfreshstyles/images/iosstore.png"
              style={{ height: 30 }}
              alt="iOS App"
            />
          </a> */}
        </div>
      </div>
    </div>
  );
};
