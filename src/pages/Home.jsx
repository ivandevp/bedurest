import React, { useState, useEffect } from "react";
import Layout from "../components/Layout";

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
      {pins.map((pin) => {
        return (
          <div key={pin._id}>
            <img src={pin.image} alt={pin.title} />
            <h3>{pin.title}</h3>
            <p>{pin.description}</p>

            <div>
              <img src={pin.author.image} />
              <strong>{pin.author.name}</strong>
            </div>

            <strong>{pin.category}</strong>
          </div>
        );
      })}
    </Layout>
  );
};

export default Home;
