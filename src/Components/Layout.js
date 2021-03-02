import React from "react";
import Logo from "../API/Images/logos.PNG";
import "./Styles/Layout.css";

function Layout(props) {
  return (
    <section className="layout">
      <div className="logo">
       <img src={Logo} alt="My logo"/>
      </div>
      {props.children}
    </section>
  )
}

export default Layout;