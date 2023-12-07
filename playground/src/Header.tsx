import Alert from "./components/Alert";

interface HeaderProps {
  isAlertActive: boolean;
  onAlertStatusChanged: () => void;
}

function Header({ isAlertActive, onAlertStatusChanged }: HeaderProps) {
  return (
    <>
      <header>
        <h1>
          Family Haven Hub
          <span>A "family" company</span>
        </h1>
        <nav>
          <div className="hamburger">
            <a onClick={() => {}} className="fa-solid fa-bars"></a>
          </div>
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Pricing</a>
            </li>
            <li>
              <a href="#">Services</a>
              <ul>
                <li>
                  <a href="#">Web Design</a>
                </li>
                <li>
                  <a href="#">Graphic Design</a>
                </li>
                <li>
                  <a href="#">SEO</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="#">Portfolio</a>
              <ul>
                <li>
                  <a href="#">Project 1</a>
                </li>
                <li>
                  <a href="#">Project 2</a>
                </li>
                <li>
                  <a href="#">Project 3</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="#">Contact</a>
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
