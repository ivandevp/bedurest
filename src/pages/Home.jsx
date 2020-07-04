import React from "react";

// props: { name: "Ivan" }
export default class Home extends React.Component {
  // Inicializar estados, bindear eventos, declarar atributos globales
  constructor(props) {
    super(props);

    this.state = {
      counter: 0,
    };

    console.log("==CONSTRUCTOR==");
  }

  // Requests iniciales, iniciar sockets, hacer cálculos para modificar el DOM
  componentDidMount() {
    this.setState({
      counter: 1,
    });

    console.log("==COMPONENT DID MOUNT==");
  }

  // Para optimizar el performance
  shouldComponentUpdate() {
    console.log("==SHOULD COMPONENT UPDATE?==");
    return true;
  }

  // Actualizar estados basados en condiciones
  componentDidUpdate() {
    console.log("==COMPONENT DID UPDATE==");
  }

  // Eliminar conexiones abiertas y evitar memory leaks
  componentWillUnmount() {
    console.log("==COMPONENT WILL UNMOUNT==");
  }

  // Lleva toda la interfaz que se ejecuta una o múltiples veces
  render() {
    // const name = this.props.name;
    console.log("==RENDER==");

    return <h1>Home {this.props.name}</h1>;
  }
}
