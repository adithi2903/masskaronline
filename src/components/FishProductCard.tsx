import React, { useState } from "react";

interface FishModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const FishModal: React.FC<FishModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="modal fade show" role="dialog" style={{ display: "block", backgroundColor: "rgba(0,0,0,0.5)" }}>
      <div className="modal-dialog modal-lg">
        <center>
          <div className="modal-content" style={{ width: "50%" }}>
            <div className="modal-header" style={{ backgroundColor: "#3A3A3A" }}>
              <button type="button" className="close" onClick={onClose}>&times;</button>
              <h4 className="modal-title" style={{ color: "white" }}>Hamour (M)</h4>
            </div>
            <div className="modal-body">
              <img
                src="uploads/images/items/Hamour%20%20M.jpg"
                alt="Hamour Fish"
                style={{ width: "100%" }}
              />
              <p
                style={{
                  float: "left",
                  textAlign: "justify",
                  border: "1px solid #3A3A3A",
                  marginTop: 10,
                  marginLeft: 5,
                }}
              >
                The name 'Hamour' is used to describe a number of fish, including the Brown spotted reef cod. Yet it is also the name given to a variety of closely related fish species in the Persian Gulf. Scientific name: Epinepheline. It is a reef-dwelling fish and This species can be found in the Persian Gulf, in the Indian Ocean and in western Pacific Ocean. Order your fresh Fish from Masskar Online
              </p>
            </div>
            <div className="modal-footer" style={{ borderTop: 0 }}>
              <button
                type="button"
                className="btn btn-success confirmCart"
                style={{ marginTop: 10 }}
              >
                39.00 QR/kg
              </button>
              <button
                type="button"
                className="btn btn-default"
                style={{ marginTop: 10 }}
                onClick={onClose}
              >
                Close
              </button>
            </div>
          </div>
        </center>
      </div>
    </div>
  );
};

interface ProductCardProps {
  id: number;
  nameArabic: string;
  nameEnglish: string;
  imageSrc: string;
  price: number;
  minWeight: string;
  addonOptions: { value: string; label: string }[];
}

export const ProductCard: React.FC<ProductCardProps> = ({
  id,
  nameArabic,
  nameEnglish,
  imageSrc,
  price,
  minWeight,
  addonOptions,
}) => {
  const [quantity, setQuantity] = useState(0);
  const [selectedAddon, setSelectedAddon] = useState("");

  const increment = () => setQuantity((q) => q + 1);
  const decrement = () => setQuantity((q) => (q > 0 ? q - 1 : 0));
  const handleAddonChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedAddon(e.target.value);
  };

  return (
    <div className="col-md-3 top_brand_left">
      <div className="hover14 column">
        <div className="agile_top_brand_left_grid">
          <input type="hidden" id={`prod_${id}`} value={`${id}`} data-id={`${id}`} />
          <input type="hidden" id={`itemtype_${id}`} value="1" data-id={`${id}`} />
          <input type="hidden" id={`isAddonExist_${id}`} value="1" data-id={`${id}`} />

          <div className="agile_top_brand_left_grid1">
            <figure>
              <div className="snipcart-item block">
                <a href={`https://masskaronline.com/${id}`}>
                  <i className="fa fa-info-circle"></i>
                </a>

                <div className="snipcart-thumb">
                  <a href="#!" data-toggle="modal" data-target={`#description${id}`}>
                    <img
                      src={imageSrc}
                      alt={nameEnglish}
                      className="img-responsive"
                      style={{ height: 145 }}
                    />
                  </a>

                  <b>{nameArabic}</b>

                  <p
                    style={{
                      font: "700 12px/1.35 Source Sans Pro, sans-serif",
                    }}
                  >
                    {nameEnglish}
                    <span style={{ color: "#212121", float: "right" }}>
                      {price.toFixed(2)} QR/kg
                      <h4>
                        <span
                          style={{
                            fontSize: 10,
                            float: "left",
                            paddingRight: 70,
                          }}
                        >
                          Min Weight: {minWeight}
                        </span>
                        <br />
                        <span style={{ color: "white" }}>qfresh</span>
                      </h4>
                    </span>
                  </p>
                </div>

                <div className="snipcart-details top_brand_home_details">
                  {/* Addon select */}
                  <form className="form-horizontal">
                    <select
                      className="type"
                      style={{ width: 120, backgroundColor: "white", color: "black", display: "none" }}
                      data-id={`${id}`}
                      name={`ItemPrice[${id}][type]`}
                      id={`ItemPrice_${id}_type`}
                    >
                      <option value="1">Only Fish</option>
                    </select>
                  </form>

                  <form className="form-horizontal">
                    <select
                      className="addon"
                      style={{
                        fontSize: 15,
                        border: "2px solid #e1e1e1",
                        width: "100%",
                        marginBottom: 5,
                        backgroundColor: "white",
                        color: "black",
                        fontWeight: 600,
                      }}
                      data-id={`${id}`}
                      name={`Addons[${id}][name]`}
                      id={`Addons_${id}_name`}
                      value={selectedAddon}
                      onChange={handleAddonChange}
                    >
                      <option value="">Select Cleaning</option>
                      {addonOptions.map(({ value, label }) => (
                        <option key={value} value={value}>
                          {label}
                        </option>
                      ))}
                    </select>
                  </form>

                  <div style={{ border: 0 }}>
                    <input type="hidden" id={`hidden_amt_${id}`} value="" />

                    <div style={{ float: "left" }}>
                      <button
                        className="button-minus"
                        style={{
                          border: "1px solid #3A3A3A",
                          backgroundColor: "white",
                          padding: "2px 0px",
                          width: 27,
                          fontWeight: 800,
                        }}
                        data-id={`${id}`}
                        onClick={decrement}
                      >
                        -
                      </button>
                    </div>

                    <div style={{ float: "left" }}>
                      <input
                        type="text"
                        id={`quantity_${id}`}
                        style={{
                          border: "1px solid #3A3A3A",
                          backgroundColor: "white",
                          padding: "2px 0px",
                          width: 27,
                          textAlign: "center",
                          color: "#38825f",
                        }}
                        data-id={`${id}`}
                        value={quantity}
                        disabled
                      />
                    </div>

                    <div style={{ float: "left" }}>
                      <button
                        className="button-plus"
                        style={{
                          border: "1px solid #3A3A3A",
                          backgroundColor: "white",
                          padding: "2px 0px",
                          width: 27,
                          fontWeight: 800,
                        }}
                        data-id={`${id}`}
                        onClick={increment}
                      >
                        +
                      </button>
                    </div>

                    <button
                      style={{
                        backgroundColor: "#3A3A3A",
                        padding: "8px 3px",
                        marginBottom: 0,
                        float: "right",
                        fontSize: 7,
                        fontWeight: "bold",
                      }}
                      className="btn btn-primary addCart"
                      type="button"
                      data-toggle="modal"
                      data-target=".message-modal"
                      data-id={`${id}`}
                      onClick={() => alert(`Added ${quantity} items with addon ${selectedAddon} to cart!`)}
                      disabled={quantity === 0}
                    >
                      <i className="fa fa-shopping-cart"></i>&nbsp;ADD TO CART&nbsp;
                    </button>
                  </div>
                </div>
              </div>
            </figure>
          </div>
        </div>
      </div>
    </div>
  );
};
