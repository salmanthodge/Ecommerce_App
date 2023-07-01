import React from "react";
import Layout from "./../components/Layout/Layout";

const About = () => {
  return (
    <Layout title={"About us-Ecommerce app"}>
      <div className="row contactus">
        <div className="col-md-6">
          <img src="/images/about.jpeg" alt="About" style={{ width: "100%" }} />
        </div>

        <div className="col-md-4">
          <h1 className="bg-dark p-2 text-white text-center">ABOUT US</h1>
          <p className="text-justify mt-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, amet
            qui esse beatae mollitia officiis animi molestias maxime praesentium
            non repellendus aperiam vero maiores? Qui, ullam nisi, deserunt
            labore pariatur cum dolore fugiat obcaecati delectus, a asperiores
            odit. In voluptas vero facilis quia porro inventore modi maiores
            possimus iusto cupiditate.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default About;
