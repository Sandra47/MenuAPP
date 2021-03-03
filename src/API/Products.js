import pizzaImg4 from "../API/Images/pizzachorizo.png";
import pizzaImg3 from "../API/Images/pizza-hawaiana.jpg";
import pizzaImg2 from "../API/Images/pizzasjamonyqueso.png";
import pizzaImg5 from "../API/Images/polloyvegetales.png";
import pizzaImg6 from "../API/Images/pizzanapolitana.png";
import patacon from "../API/Images/patacon.jpeg";
import dog from "../API/Images/perros1.png";
import dog2 from "../API/Images/choriperro.png";
import picadas3 from "../API/Images/patacon.jpeg";


const PRODUCTS = {
  general: [
    {
      id: "gen1",
      name: "Pizza",
      category: "pizzas",
      styles: {
        backgroundImage: `url('${pizzaImg4}')`
      }
    },
    {
      id: "gen2",
      name: "Patacon",
      category: "patacon",
      styles: {
        backgroundImage: `url('${patacon}')`
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
      name: "Perros",
      category: "dog",
      styles: {
        backgroundImage: `url('${dog}')`
      }
    }
  ],

  pizzas: [
    {
      id: "pizza1",
      name: "Pizzas Tamaño XL",
      description: "Pizza con jamón y queso",
      cost: 30000,
      styles: {
        backgroundImage: `url('${pizzaImg2}')`
      }
    },
    {
      id: "pizza2",
      name: "Pizza Hawallana Tamaño Xl",
      description: "Pizza con jamón, queso y piña",
      cost: 30000,
      styles: {
        backgroundImage: `url('${pizzaImg3}')`
      }
    },
    {
      id: "pizza3",
      name: "Pizza Chorizo Tamño Xl",
      description: "Pizza con jamón, queso y Chorizo ",
      cost: 30000,
      styles: {
        backgroundImage: `url('${pizzaImg4}')`
      }
    },
    {
      id: "pizza4",
      name: "Pizza Pollo y Vegetales Tamño Xl",
      description: "Pizza de pollo con verduras",
      cost: 31000,
      styles: {
        backgroundImage: `url('${pizzaImg5}')`
      }
    },
    {
      id: "pizza5",
      name: "Pizza Napolitana Tamño Xl",
      description: "Pizza queso mozzarella, rodajas de tomates, hojas de albahaca",
      cost: 31000,
      styles: {
        backgroundImage: `url('${pizzaImg6}')`
      }
    },

  ],

  patacon: [
    {
      id: "pat1",
      name: "CAMERINO SENCILLA",
      description: "(Salchicha, Pollo, Chorizo, Butifarra)",
      cost: 10000,
      styles: {
        backgroundImage: `url('${patacon}')`
      }
    },
    {
      id: "pat2",
      name: "CALIDO",
      description: "Pollo, Chorizo, Butifarra, Salchicha",
      cost: 15000,
      styles: {
        backgroundImage: `url('${patacon}')`
      }
    },
    {
      id: "pat3",
      name: "RANCHERO",
      description: "(Pollo, Chorizo, Salchicha Ranchera, Butifara)",
      cost: 17000,
      styles: {
        backgroundImage: `url('${patacon}')`
      }
    }
  ],

  picadas: [
    {
      id: "picadas1",
      name: "CAMERINO SENCILLA",
      description: "(Salchicha, pollo, chorizo, butifarra)",
      cost: 10000,
      styles: {
        backgroundImage: `url('${picadas3}')`
      }
    },
    {
      id: "picadas2",
      name: "LA 10",
      description: "(Pollo, Chorizo, Butifarra, Salchichas)",
      cost: 15000,
      styles: {
        backgroundImage: `url('${picadas3}')`
      }
    },
    {
      id: "picadas3",
      name: "GOLEADORA",
      description: "( Pollo, Cerdo, Salchicha, chorizo, butifarra)",
      cost: 20000,
      styles: {
        backgroundImage: `url('${ picadas3}')`
      }
    },
    {
      id: "picadas4",
      name: "BOMBONERA",
      description: "Familiar",
      cost: 30000,
      styles: {
        backgroundImage: `url('${picadas3}')`
      }
    },
    {
      id: "picadas5",
      name: "LA MUNDIAL",
      description: "XL",
      cost: 40000,
      styles: {
        backgroundImage: `url('${picadas3}')`
      }
    },
  ],

  dog: [
    {
      id: "dog1",
      name: "PERRO",
      description: "Perro super",
      cost: 6000,
      styles: {
        backgroundImage: `url('${dog}')`
      }
    },
    {
      id: "dog2",
      name: "PERRO",
      description: "Choriperro",
      cost: 6000,
      styles: {
        backgroundImage: `url('${dog2}')`
      }
    },
  ]
}

export { PRODUCTS };