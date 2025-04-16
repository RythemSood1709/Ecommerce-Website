import React from "react";
import Layout from "./../components/Layout/Layout";

const Policy = () => {
  return (
    <Layout title={"Privacy Policy"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/contactus.jpeg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
        <p>This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website</p>
          <p>Please read this privacy policy carefully. If you do not agree with the terms of this policy, please do not access the site.</p>
          <p>We may collect information about you in a variety of ways.</p>
          <p>We use third-party payment processors (e.g., Stripe, PayPal) to handle transactions securely</p>
          <p>Information our servers automatically collect when you access the Site</p>
          <p>We may use cookies, web beacons, tracking pixels, and other tracking technologies on the Site to help customize the Site and improve your experience.</p>
        </div>
      </div>
    </Layout>
  );
};

export default Policy;
