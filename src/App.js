import React from "react";
import Profile from "./components/Profile";
import Article from "./components/Article";
import Footer from "./components/Footer";
import Navbar from "./components/Navbr";
import ButtonPrimary from "./components/utils/ButtonPrimary";

export default function App() {
  /**
   * ***********************************
   * We can throw value to props such as:
   * @Variable
   * @Function
   * @Object
   * @Array
   * @ArrayObject
   *
   **************************************/

  /**@Variable */
  const title = "Check out";

  /**@Function */
  const handleClick = () => {
    console.log("Button Clicked");
  };

  /**@Array */
  const fruits = ["Apple", "Banana", "Orange"];

  /**@ArrayObject */
  const users = {
    username: "vuthin",
    age: 30
  }
  return (
    <div>
      <Navbar />
      <Article />
      <Footer />
      <ButtonPrimary handleClick={handleClick} title={title} />
      <Profile />
    </div>
  );
}
