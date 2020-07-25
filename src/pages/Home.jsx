import React from "react";
import { useQuery, gql } from "@apollo/client";
import Layout from "../components/Layout";
import "./Home.css";

const GET_PINS = gql`
  query {
    pins {
      id
      title
      description
      image
      link
    }
  }
`;

const Home = () => {
  const { loading, data, error } = useQuery(GET_PINS);

  if (loading) {
    return <p>Loading...</p>;
  }
  if (error) {
    return <p>{error}</p>;
  }

  const { pins } = data;

  return (
    <Layout>
      <section className="pin-grid">
        {pins.map((pin) => {
          return (
            <article key={pin.id} className="pin">
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
