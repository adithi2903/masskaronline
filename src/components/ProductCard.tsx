import React from "react";

interface ProductCardProps {
  id: number;
  name: string;
  image: string;
  arabicName: string;
  englishName: string;
  price: string;
  minWeight: string;
  onClick: () => void;  
}

const ProductCard: React.FC<ProductCardProps> = ({
  id,
  name,
  image,
  arabicName,
  englishName,
  price,
  minWeight,
  onClick,
}) => {
  return (
    <div className="col-md-3 top_brand_left" id={`prod_div_${id}`}>
      <div className="hover14 column">
        <div className="agile_top_brand_left_grid">
          <div className="agile_top_brand_left_grid1">
            <figure>
              <div className="snipcart-item block">
                <a
                  href={`https://masskaronline.com/${id}`}
                  aria-label={`More info about ${name}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa fa-info-circle"></i>
                </a>
                <div className="snipcart-thumb">
                  {/* Use a button for accessibility, trigger the onClick */}
                  <button
                    type="button"
                    onClick={onClick}
                    style={{
                      background: "none",
                      border: "none",
                      padding: 0,
                      cursor: "pointer",
                    }}
                    aria-label={`Open details for ${name}`}
                  >
                    <img
                      src={image}
                      alt={name}
                      className="img-responsive"
                      style={{ height: 145 }}
                    />
                  </button>
                  <b>{arabicName}</b>
                  <p
                    style={{
                      font: "700 12px/1.35 Source Sans Pro, sans-serif",
                      marginBottom: 0,
                    }}
                  >
                    {englishName}
                    <span style={{ float: "right" }}>{price}</span>
                    <br />
                    <span
                      style={{
                        fontSize: 10,
                        float: "left",
                        paddingRight: 70,
                      }}
                    >
                      {minWeight}
                    </span>
                    <span style={{ color: "white" }}>qfresh</span>
                  </p>
                </div>
                <div>
                  <select
                    style={{
                      width: "100%",
                      marginBottom: 5,
                      fontWeight: 600,
                    }}
                    defaultValue=""
                    aria-label="Select Cleaning option"
                  >
                    <option value="">Select Cleaning</option>
                    <option value="13">Cleaning Only</option>
                    <option value="14">Clean, slice Cutting</option>
                    <option value="15">Fillet</option>
                    <option value="16">Skin Out & Slice Cutting</option>
                    <option value="18">Clean & Cube Cutting</option>
                    <option value="45">Skin out & cube cutting</option>
                    <option value="72">Fillet Cube</option>
                    <option value="21">No Cleaning</option>
                    <option value="17">Cleaning & Skin Out</option>
                    <option value="46">Cleaning And Remove Head</option>
                    <option value="39">Fillet With Skin</option>
                  </select>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      marginBottom: 5,
                    }}
                  >
                    <button
                      type="button"
                      className="button-minus"
                      aria-label="Decrease quantity"
                    >
                      -
                    </button>
                    <input
                      type="text"
                      disabled
                      value="0"
                      aria-label="Quantity"
                      style={{ width: 40, textAlign: "center", margin: "0 5px" }}
                    />
                    <button
                      type="button"
                      className="button-plus"
                      aria-label="Increase quantity"
                    >
                      +
                    </button>
                  </div>
                  <button
                    className="btn btn-primary addCart"
                    style={{
                      backgroundColor: "#3A3A3A",
                      padding: "8px 3px",
                      marginBottom: 0,
                      float: "right",
                      fontSize: 7,
                      fontWeight: "bold",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: 4,
                    }}
                  >
                    <i className="fa fa-shopping-cart" aria-hidden="true"></i>
                    <span>ADD TO CART</span>
                  </button>
                </div>
              </div>
            </figure>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
