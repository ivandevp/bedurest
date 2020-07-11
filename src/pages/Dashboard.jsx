import React from "react";
import Layout from "../components/Layout";
import CreatePinForm from "../components/CreatePinForm";

class Dashboard extends React.Component {
  render() {
    return (
      <Layout>
        <h2>Crear Pin</h2>
        <CreatePinForm />
      </Layout>
    );
  }
}

export default Dashboard;
