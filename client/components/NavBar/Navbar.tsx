import React from "react";
import "./NavBar.css";
import { Image, Button } from "react-native";

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <div className="navbar__logo-container">
        <Image
          className="navbar__logo-container_img"
          source={require("../../assets/images/Logo.jpg")}
          style={{
            width: 50,
            height: 50,
            borderRadius: 50,
          }}
          alt="Logo"
        />
      </div>
      <ul className="navbar__links">
        <li className="navbar__link">
          <a href="/">Home</a>
        </li>
        <li className="navbar__link">
          <a href="/about">About me</a>
        </li>
        <li className="navbar__link">
          <a href="/about">Services</a>
        </li>
        <li className="navbar__link">
          <a href="/contact">Contact Me</a>
        </li>
        <li className="navbar__link">
          <a href="/about">FAQ</a>
        </li>
      </ul>
      <div className="navbar__laguage">
        <select className="navbar__language-select">
          <option value="en">English</option>
          <option value="ro">Română</option>
          <option value="ru">Русский</option>
          <option value="pt">Português</option>
        </select>
      </div>
      <Button
        
        onPress={() => {
          console.log("Button pressed");
        }}
        title="Contact me"
        accessibilityLabel="Conact me by whatsapp"
      />
    </nav>
  );
};

export default Navbar;
