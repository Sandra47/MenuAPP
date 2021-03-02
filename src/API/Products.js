import pizzaImg4 from "../API/Images/pizzachorizo.png";
import pizzaImg3 from "../API/Images/pizza-hawaiana.jpg";
import pizzaImg2 from "../API/Images/pizzajamonyqueso.jpeg";
import hamburgerImage from "../API/Images/Hamburger-pexels.jpg";
// import  from "../API/Images/beer-pexels.jpg";
import picadas3 from "../API/Images/patacon.jpeg";
import comboImage from "../API/Images/combo-pexels.jpg";

const PRODUCTS = {
  general: [
    {
      id: "gen1",
      name: "Pizza",
      category: "pizzas",
      styles: {
        backgroundImage: `url('${pizzaImg3}')`
      }
    },
    {
      id: "gen2",
      name: "Patacon",
      category: "patacon",
      styles: {
        backgroundImage: `url('${hamburgerImage}')`
      }
    },
    {
      id: "gen3",
      name: "Picadas",
      category: "picadas",
      styles: {
        backgroundImage: `url('${picadas3}')`
      }
    },
    {
      id: "gen4",
      name: "Combos",
      category: "combos",
      styles: {
        backgroundImage: `url('${comboImage}')`
      }
    }
  ],

  pizzas: [
    {
      id: "pizza1",
      name: "Pizzas",
      description: "Pizza con jamon y queso",
      cost: 30000,
      styles: {
        backgroundImage: `url('${pizzaImg2}')`
      }
    },
    {
      id: "pizza2",
      name: "Pizza Hawallana",
      description: "Pizza con jamon, queso y piña",
      cost: 30000,
      styles: {
        backgroundImage: `url('${pizzaImg3}')`
      }
    },
    {
      id: "pizza3",
      name: "Pizza Chorizo",
      description: "Pizza con jamon, queso y Chprizo ",
      cost: 30000,
      styles: {
        backgroundImage: `url('${pizzaImg4}')`
      }
    }

  ],

  patacon: [
    {
      id: "ham1",
      name: "Patacon Relleno",
      description: "Hamburguesa sencilla",
      cost: 5000,
      styles: {
        backgroundImage: `url('${ picadas3}')`
      }
    }
  ],

  picadas: [
    {
      id: "picadas1",
      name: "Picadas Camerino sencillo",
      description: "(Salchicha, pollo, chorizo, butifarra)",
      cost: 1000,
      styles: {
        backgroundImage: `url('${ picadas3}')`
      }
    },
    {
      id: "picadas2",
      name: "Poker",
      description: "cerveza 350ml",
      cost: 2200,
      styles: {
        backgroundImage: `url('${picadas3}')`
      }
    }
  ],

  combos: [
    {
      id: "comb1",
      name: "Hamburguesa + gaseosa",
      description: "Hamburguesa sencilla + gaseosa 350ml",
      cost: 6500,
      styles: {
        backgroundImage: `url('${comboImage}')`
      }
    }
  ]
}

export { PRODUCTS };