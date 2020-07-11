import React, { useState, useEffect } from "react";
import Layout from "../components/Layout";
import "./Home.css";

const Home = () => {
  const [pins, setPins] = useState([]);

  useEffect(() => {
    const getPins = async () => {
      try {
        const response = await fetch("http://44f42e61558f.ngrok.io/pins");
        const { data } = await response.json();
        setPins(data);
      } catch (error) {
        console.error(error);
      }
    };

    getPins();
  }, []); // => componentDidMount

  return (
    <Layout>
      <section className="pin-grid">
        {pins.map((pin) => {
          return (
            <article key={pin._id} className="pin">
              <div className="pin-image">
                <img src={pin.image} alt={pin.title} />
                <div className="pin-metadata">
                  <p>
                    <a
                      href={pin.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {pin.link}
                    </a>
                  </p>
                </div>
              </div>
              <div className="pin-title">
                <h3>{pin.title}</h3>
              </div>
            </article>
          );
        })}
      </section>
    </Layout>
  );
};

export default Home;
