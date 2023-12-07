import { useState } from "react";
import Alert from "./components/Alert";

interface HeaderProps {
  isAlertActive: boolean;
  onAlertStatusChanged: () => void;
}

function Header({ isAlertActive, onAlertStatusChanged }: HeaderProps) {
  const [isHamburgerNavActive, setHamburgerNavActive] = useState(-1);
  return (
    <>
      <header>
        <h1>
          Family Haven Hub
          <span>A "family" company</span>
        </h1>
        <nav>
          <div className="hamburger">
            <a
              onClick={() => {
                isHamburgerNavActive == 1
                  ? setHamburgerNavActive(-1)
                  : setHamburgerNavActive(1);
              }}
              className="fa-solid fa-bars"
            ></a>
          </div>
          <ul
            className={
              isHamburgerNavActive >= 1 ? "" : "mobile-nav-deactivated"
            }
          >
            <li>
              <a>Home</a>
            </li>
            <li>
              <a>About</a>
            </li>
            <li>
              <a>Pricing</a>
            </li>
            <li
              onClick={() => {
                isHamburgerNavActive == 2
                  ? setHamburgerNavActive(1)
                  : setHamburgerNavActive(2);
              }}
            >
              <a>Services</a>
              <ul
                className={
                  isHamburgerNavActive == 2 ? "" : "mobile-nav-deactivated"
                }
              >
                <li>
                  <a>Web Design</a>
                </li>
                <li>
                  <a>Graphic Design</a>
                </li>
                <li>
                  <a>SEO</a>
                </li>
              </ul>
            </li>
            <li
              onClick={() => {
                isHamburgerNavActive == 3
                  ? setHamburgerNavActive(1)
                  : setHamburgerNavActive(3);
              }}
            >
              <a>Portfolio</a>
              <ul
                className={
                  isHamburgerNavActive == 3 ? "" : "mobile-nav-deactivated"
                }
              >
                <li>
                  <a>Project 1</a>
                </li>
                <li>
                  <a>Project 2</a>
                </li>
                <li>
                  <a>Project 3</a>
                </li>
              </ul>
            </li>
            <li>
              <a>Contact</a>
            </li>
          </ul>
        </nav>
        {isAlertActive && (
          //We pass in a isAlertActive boolean to the header from App.tsx, this controls the visibility of the alert, we then send a change event to the header through onAlertStatusChanged
          <Alert onClose={onAlertStatusChanged}>
            <b>
              <i>The quick brown fox jumps over a lazy dog</i>
            </b>
          </Alert>
        )}
      </header>
    </>
  );
}

export default Header;
