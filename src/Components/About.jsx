import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'

function About() {
  return (
    <div className="container my-5">
      <div className="row">
        <div className="col-12 text-center mb-4">
          <h1>About Us</h1>
          <p className="lead">Learn more about our company and what we do.</p>
        </div>
      </div>

      <div className="row mb-5">
        <div className="col-md-6 d-flex justify-content-center">
          <div className="card shadow-lg" style={{ width: '100%' }}>
            <div className="card-body">
              <h3>Our Story</h3>
              <p>
                Founded in 2024, MyShop has grown into a trusted brand in the e-commerce industry. Our mission is to offer the best products at affordable prices while delivering excellent customer service. With a wide range of products, we aim to make shopping a hassle-free experience for everyone.
              </p>
              <p>
                Whether you're looking for everyday essentials or something special, we strive to make your shopping experience enjoyable and easy. Our team is dedicated to ensuring you get the best deals and the best products available.
              </p>
            </div>
          </div>
        </div>

        <div className="col-md-6">
          <div className="card shadow-lg">
            <div className="card-body">
              <h3>Know about us</h3>
              <p>
                Our team is made up of passionate and talented individuals dedicated to providing the best shopping experience for our customers. We work together to offer quality products, fast shipping, and customer support that goes above and beyond.
              </p>
              <div className="row">
                <div className="col-sm-4">
                  <div className="card">
                    <div className="card-body">
                      <img className = "AboutImages" src='mission.png'></img>
                      <h5 className="card-title">Our Mission</h5>
                      <p className="card-text">At MyShop, we are committed to transforming the way people shop online by offering a seamless, customer-focused eCommerce experience. Our mission is to empower our customers with a diverse range of high-quality products, delivered swiftly and reliably, all while providing exceptional customer service at every step of their journey.</p>
                    </div>
                  </div>
                </div>
                <div className="col-sm-4">
                  <div className="card">
                    <div className="card-body">
                    <img className = "AboutImages" src='vision.png'></img>
                      <h5 className="card-title">Our Vision</h5>
                      <p className="card-text">Our vision is to be the leading eCommerce platform that redefines the online shopping experience. We want to create a marketplace where quality, convenience, and sustainability come together to help customers make more informed, responsible, and fulfilling purchasing decisions.</p>
                    </div>
                  </div>
                </div>
                <div className="col-sm-4">
                  <div className="card">
                    <div className="card-body">
                    <img className = "AboutImages" src='value.png'></img>
                      <h5 className="card-title">Our Values</h5>
                      <p className="card-text">At MyShop, our values guide every decision we make, from the products we offer to the service we provide. We believe that a business should contribute to both its customers and the world in meaningful ways. These values define who we are and how we do business:</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
