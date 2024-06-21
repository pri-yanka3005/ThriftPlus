import React from "react";
import Layout from "./../components/Layout/Layout";

const About = () => {
  return (
    <Layout title={"About us - Thript Plus"}>
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
            we are iiitdmj students and we are avialible for you to donate or
            sell second hand product which are not in use if you like it then
            purchase it its cheap and affordable for college students because
            some things we cant use whole year we dont want any particular thing
            after some months or year so its wasteful thats why we made a thrift
            website for you here you can purchase and sell in cheap and
            affordable prices
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default About;
