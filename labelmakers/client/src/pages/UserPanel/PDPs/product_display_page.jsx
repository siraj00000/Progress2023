import React, { useEffect, useMemo, useState } from "react";
import "./features.css";
import { Container } from "react-bootstrap";

// icons
import StarIcon from "@mui/icons-material/Star";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import ReportGmailerrorredIcon from "@mui/icons-material/ReportGmailerrorred";

import { useLocation, useNavigate, useParams } from "react-router-dom";
import { token } from "../../../utils/actions";
import { updateLabelHandler, verifyDSN } from "../../../utils/userActions";
import Splash from "../../../components/splash";
import { CONNECTS } from "../../../utils/data";
import { merge } from "../../../utils/merging";
import ProductServices from "../../../components/services";
import ProductCrousel from "../../../components/Swiper";
import ServiceMobile from "../../../components/services_mobile";
import Cookies from "universal-cookie";

const ProductPage = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const cookies = new Cookies();

  const { type, dsN } = useParams();
  let userAuthToken = localStorage.getItem("endutoken");
  // States
  const [productDetail, setProductDetail] = useState({ data: [], error: "" });

  /*
    triggered if the owner phone number won't find
    and on ds2 label's type 
  */
  const updateLabelOwner = async (label) => {
    if (!label.owner_mobile) {
      let owner_mobile = cookies.get("user").phone;
      let data = { owner_mobile };
      await updateLabelHandler(`/api/update-label/${label?._id}`, data);
    }
  };

  useEffect(() => {
    if (type === "ds1" || type === "ds2") {
      if (!userAuthToken && type === "ds2") {
        navigate("/user/login", { state: pathname });
        return;
      }
      const fetchProductDetail = () => {
        verifyDSN(token, `/api/product-details/${dsN}`)
          .then((res) => {
            setProductDetail({ data: res.data.data, error: "" });
            if (type === "ds2") updateLabelOwner(res.data.data?.label);
          })
          .catch((error) => {
            setProductDetail({ data: [], error });
          });
      };
      fetchProductDetail();
    } else navigate("/", { replace: true });
  }, []);

  let productData = productDetail.data;
  let hasOwnedBy = productData?.length !== 0 && productData?.owner.msg; // Hidden if not owned
  let PRODUCT_IMAGES = productData?.productDetail?.image_list;
  let PRODUCT_HEADINGS = productData?.productDetail?.carousel_headings;
  let PRODUCT_DESCRIPTION = productData?.productDetail?.product_description;
  let PRODUCT_TEXTS = productData?.productDetail?.carousel_text;
  let FEATURES_LIST = productData?.productDetail?.feature;
  let error = productDetail.error;
  let requestWarranty =
    productData?.owner?.number && productData.brand.request_help;

  let isActiveWarranty = productData?.warranty?.warranty_activated;
  let shouldRequestHelpEnable = requestWarranty && isActiveWarranty;

  const content = useMemo(
    () => merge(PRODUCT_IMAGES, PRODUCT_HEADINGS, PRODUCT_TEXTS),
    [PRODUCT_IMAGES, PRODUCT_HEADINGS, PRODUCT_TEXTS]
  );

  const handleErrorReporting = () => {
    let reportAttributes = {
      brand_name: productData?.brand?.brand,
      product_name: productData?.productDetail.product_name,
      product_image: PRODUCT_IMAGES[0] || "",
    };
    navigate("report-error", { state: reportAttributes });
  };

  const callActionForProduct = () => {
    if (!userAuthToken) {
      navigate("/user/login", { state: pathname });
      return;
    } else if (shouldRequestHelpEnable) {
      navigate("request-help");
    } else if (!shouldRequestHelpEnable) {
      navigate("edit-warranty", { state: `${type}/${dsN}` });
    }
    navigate("register-warranty", { state: `${type}/${dsN}` });
  };

  const servicesToShow = () => {
    let brand = productData?.brand;
    if (brand === undefined) return;
    let services = [];

    for (let index = 0; index < CONNECTS.length; index++) {
      const service = brand[CONNECTS[index].enableKey];

      if (service) {
        let info = brand[CONNECTS[index].info];
        let name = CONNECTS[index].Service;
        let Icon = CONNECTS[index].Icon;
        let asset = CONNECTS[index].asset;

        services.push({ name, info, Icon, asset });
      }
    }

    return services;
  };

  let services = useMemo(() => servicesToShow(), [productData]);

  if (error)
    return (
      <section className="no-lable-container">
        <ReportGmailerrorredIcon sx={{ color: "#0c0c1c", fontSize: 40 }} />
        <p className="no-lable-error">{error}</p>
      </section>
    );

  if (productData?.length === 0) return <Splash token={true} />;

  return (
    <Container className="_container">
      <section className="section1-mobile">
        <ArrowLeftIcon />
        <h1>Scan Result</h1>
      </section>

      <section className="features-section1">
        <div>
          <h1>Product Scan Result</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore
            magni laborum at saepe, ad praesentium.
          </p>
        </div>

        <div className="section1-container2">
          <img
            src={require("../../../assets/Product/congrats_man_image.jpg")}
            alt="congrats man"
          />
          <p>
            Congrats! Your label is fine. Make sure you scan the hidden code
            after you buy this product. <br />
            {"\n\n" + hasOwnedBy}
          </p>
        </div>
      </section>

      <section className="features-section2">
        <div>
          <h1>{productData?.brand?.brand}</h1>
          <h2>{productData?.productDetail.product_name}</h2>
          {requestWarranty ? (
            <button onClick={callActionForProduct}>
              {shouldRequestHelpEnable
                ? "Request help on label"
                : !isActiveWarranty
                ? "Register my product"
                : "View warranty details"}
            </button>
          ) : null}
        </div>
        <img src={PRODUCT_IMAGES[0].url || ""} alt={"brand"} />
      </section>

      <section className="mobile-section">
        {services?.map((item, index) => (
          <ServiceMobile {...item} key={index} />
        ))}
      </section>

      <section className="features-section3">
        <h1>Description</h1>
        <p>{PRODUCT_DESCRIPTION}</p>
        <div>
          <div className="feature_listing">
            <p>
              {Object.entries(FEATURES_LIST).map(([key, value]) => (
                <React.Fragment key={key + value}>
                  <StarIcon
                    sx={{
                      color: "#2987C2FF",
                      fontSize: "2rem",
                      marginRight: "25px",
                    }}
                  />
                  {value}
                </React.Fragment>
              ))}
            </p>
          </div>
        </div>
        <button onClick={handleErrorReporting}>Report Error</button>
      </section>

      {/* Product Crousel */}
      <ProductCrousel content={content} />

      <section className="features-section5">
        {services?.map((item, index) => (
          <ProductServices key={index} index={index} content={item} />
        ))}
      </section>
    </Container>
  );
};

export default ProductPage;
