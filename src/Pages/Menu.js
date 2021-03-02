import React, { useContext } from "react";

import { MenuCont } from "../Components/ShoppingCart";
import MenuStyle from "../Components/MenuStyle";

function Menu() {
  const { PRODUCTS, cart, increase, decrease } = useContext(MenuCont);

  const [categoriesOnScreen, setCategoriesOnScreen] = React.useState([0, 1, 2]);
  const [list, setList] = React.useState(PRODUCTS.pizzas);
  const [search, setSearch] = React.useState("");
  let filteredList = PRODUCTS.pizzas;

  React.useEffect(() => {
    const generals = document.querySelectorAll(".menu .container-general-articles .general-articles .articles figure");
    generals.forEach(general => {
      general.classList.remove("visible");
    });
    categoriesOnScreen.forEach(category => {
      generals[category].classList.add("visible");
    });

    const arrows = document.querySelectorAll(".menu .general-articles .arrow");
    if (categoriesOnScreen[0] === 0) {
      arrows[0].style.color = "var(--color-gray)";
      arrows[1].style.color = "var(--color-red)";
    } else if (categoriesOnScreen[2] === generals.length - 1) {
      arrows[1].style.color = "var(--color-gray)";
      arrows[0].style.color = "var(--color-red)";
    } else {
      arrows[0].style.color = "var(--color-red)";
      arrows[1].style.color = "var(--color-red)";
    }
  });

  function clickLeftArrow() {
    if (categoriesOnScreen[0] > 0) {
      setCategoriesOnScreen(categoriesOnScreen.map(e => e - 1));
    }
  }

  function clickRightArrow() {
    const generals = document.querySelectorAll(".menu .container-general-articles .general-articles .articles figure");
    if (categoriesOnScreen[2] < generals.length - 1) {
      setCategoriesOnScreen(categoriesOnScreen.map(e => e + 1));
    }
  }

  function clickCategories(e) {
    setList(PRODUCTS[e.target.dataset.category]);
  }

  function handleChange(e) {
    setList(PRODUCTS.pizzas
      .concat(PRODUCTS.patacon)
      .concat(PRODUCTS.picadas)
      .concat(PRODUCTS.combos)
    );
  
    setSearch(e.target.value);
  }

  search ?
    filteredList = list
      .filter(element => {
        return `${element.name} ${element.description}`
          .toLowerCase()
          .includes(search.toLowerCase());
      })
  : filteredList = list;

  const menuCont = Object.values(cart).reduce((accum, curr) => accum + curr);

  return(
    <MenuStyle
      handleChange={handleChange}
      clickRightArrow={clickRightArrow}
      clickLeftArrow={clickLeftArrow}
      categories={PRODUCTS.general}
      clickCategories={clickCategories}
      list={filteredList}
      increase={increase}
      decrease={decrease}
      amount={cart}
      totalAmount={menuCont}
    />
  )
}

export default Menu;