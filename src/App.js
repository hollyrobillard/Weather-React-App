import React from "react";
import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="Card">
        <Weather />
        <footer>
          <div className="subtext">
            <a
              href="https://fascinating-empanada-30afeb.netlify.app/"
              className="footerLink"
              target="_blank"
            >
              <span>Site </span>
            </a>
            <span>Created and Maintained by </span>
            <a
              href="https://www.linkedin.com/in/hollyrobillard/"
              className="footerLink"
              target="_blank"
            >
              <span>Holly Robillard</span>
            </a>
            <br />
            <span>Open Source Code on </span>
            <a
              href="https://github.com/hollyrobillard/Weather-React-App"
              className="footerLink"
              target="_blank"
            >
              <span>Github</span>
            </a>
          </div>
        </footer>
      </div>
    </div>
  );
}