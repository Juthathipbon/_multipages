import PropTypes from "prop-types";

import "./Navbar.css";
import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";

const initPage = "home";

function Navbar({ products, carts, setToken }) {
  const [tab, setTab] = useState("");

  useEffect(() => {
    setTab(initPage);
  }, []);

  const homeRef = useRef();
  const calculatorRef = useRef();
  const animationRef = useRef();
  const componentRef = useRef();
  const todoRef = useRef();
  const productRef = useRef();
  const cartsRef = useRef();

  useEffect(() => {
    if (tab === "calculator") {
      calculatorRef.current.click();
    } else if (tab === "animation") {
      animationRef.current.click();
    } else if (tab === "component") {
      componentRef.current.click();
    } else if (tab === "todo") {
      todoRef.current.click();
    } else if (tab === "product") {
      productRef.current.click();
    } else if (tab === "carts") {
      cartsRef.current.click();
    } else if (tab === "home") {
      homeRef.current.click();
    }
  }, [tab]);

  return (
    <div className="navbar-container">
      <Link to={"/home"}>
        <button
          className={
            "btn " + (tab === "home" ? " btn-primary" : " btn-outline-primary")
          }
          onClick={() => setTab("home")}
          ref={homeRef}
        >
          Home
        </button>
      </Link>

      <Link to={"/calculator"}>
        <button
          className={
            "btn" +
            (tab === "calculator" ? " btn-primary" : " btn-outline-primary")
          }
          onClick={() => setTab("calculator")}
          ref={calculatorRef}
        >
          Calculator
        </button>
      </Link>

      <Link to={"/animation"}>
        <button
          className={
            "btn" +
            (tab === "animation" ? " btn-primary" : " btn-outline-primary")
          }
          onClick={() => setTab("animation")}
          ref={animationRef}
        >
          Animation
        </button>
      </Link>

      <Link to={"/component"}>
        <button
          className={
            "btn" +
            (tab === "component" ? " btn-primary" : " btn-outline-primary")
          }
          onClick={() => setTab("component")}
          ref={componentRef}
        >
          Components
        </button>
      </Link>

      <Link to={"/todo"}>
        <button
          className={
            "btn" + (tab === "todo" ? " btn-primary" : " btn-outline-primary")
          }
          onClick={() => setTab("todo")}
          ref={todoRef}
        >
          Todos
        </button>
      </Link>

      <Link to={"/product"}>
        <button
          className={
            "btn" +
            (tab === "product" ? " btn-primary" : " btn-outline-primary")
          }
          onClick={() => setTab("product")}
          ref={productRef}
        >
          Products ({products.length})
        </button>
      </Link>

      <Link to={"/cart"}>
        <button
          className={
            "position-relative btn" +
            (tab === "cart" ? " btn-primary" : " btn-outline-primary")
          }
          onClick={() => setTab("cart")}
          ref={cartsRef}
        >
          Carts
          {carts.length > 0 && (
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
              {carts.length < 10 ? carts.length : "9+"}
              <span className="visually-hidden">unread messages</span>
            </span>
          )}
        </button>
      </Link>
      <button
        className="btn btn-outline-danger"
        style={{ marginLeft: "1rem" }}
        onClick={() => {
          setToken("");
        }}
      >
        Logout
      </button>
    </div>
  );
}

Navbar.propTypes = {
  tab: PropTypes.string,
  setTab: PropTypes.func,
  products: PropTypes.array,
  carts: PropTypes.array,
  setToken: PropTypes.func,
};

export default Navbar;
