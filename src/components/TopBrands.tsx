import React from "react";

const TopBrands: React.FC = () => {
  const buttonStyle = {
    border: "1px solid #3A3A3A",
    backgroundColor: "white",
    boxShadow: "3px 3px 1px 3A3A3A",
    color: "black",
    width: "130px",
    height: "45px",
    padding: "10px 0",
    fontSize: "16px",
    lineHeight: "24px",
    marginRight: "5px",
    display: "inline-flex",
    justifyContent: "center",
    alignItems: "center",
    textDecoration: "none",
    borderRadius: "5px",
  };

  const buttonStyleNoMargin = { ...buttonStyle, marginRight: 0 };

  return (
    <>
      <div className="clearfix"></div>

      <div
        className="top-brands"
        style={{ paddingRight: "26px", backgroundColor: "#0e0e0e", padding: "10px" }}
      >
        <center style={{ marginLeft: "25px", marginTop: "6px" }}>
        <a className="btn btn-primary confirmCart" style={buttonStyle} href="/?view=all">ALL</a>
<a className="btn btn-primary confirmCart" style={buttonStyle} href="/?view=offers">OFFERS</a>
<a className="btn btn-primary confirmCart" style={buttonStyleNoMargin} href="/?view=lowprice">LOW PRICE</a>

        </center>

        <div className="widget-box">
          <div style={{ paddingTop: 0 }}></div>
        </div>
      </div>
    </>
  );
};

export default TopBrands;

