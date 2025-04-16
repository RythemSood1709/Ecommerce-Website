import React from "react";
import Layout from "./../components/Layout/Layout";

const About = () => {
  return (
    <Layout title={"About us - Ecommerce app"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/about.jpeg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <p className="text-justify mt-2">
            We are passionate about offering a carefully
            curated collection of high-quality watches for every style and
            occasion. Whether you’re looking for a timeless classic, a modern
            statement piece, or a durable everyday companion, we’ve got you
            covered. Our mission is to provide our customers with the perfect
            blend of craftsmanship, elegance, and functionality, all at
            competitive prices. With a commitment to exceptional customer
            service and fast, reliable shipping, we aim to make your watch
            shopping experience effortless and enjoyable. Explore our selection
            and find the perfect timepiece that speaks to your unique style.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default About;
