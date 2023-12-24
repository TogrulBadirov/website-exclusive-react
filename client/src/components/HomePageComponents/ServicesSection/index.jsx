import "./index.scss";
import guarantee from "../../../assets/Services.png";
import customer from "../../../assets/Services (1).png";
import delivery from "../../../assets/Services (2).png";

const ServicesSection = () => {
  return (
    <section id="services">
      <div className="container">
        <div className="cards">
          <div className="card">
            <img src={delivery} alt="" />
            <h6>FREE AND FAST DELIVERY</h6>
            <p>Free delivery for all orders over $140</p>
          </div>
          <div className="card">
            <img src={customer} alt="" />
            <h6>24/7 CUSTOMER SERVICE</h6>
            <p>Friendly 24/7 customer support</p>
          </div>
          <div className="card">
            <img src={guarantee} alt="" />
            <h6>MONEY BACK GUARANTEE</h6>
            <p>We reurn money within 30 days</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
