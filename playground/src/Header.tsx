function Header() {
  return (
    <>
      <header>
        <h1>
          Family Haven Hub
          <span>A "family" company</span>
        </h1>
        <nav>
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
      </header>
    </>
  );
}

export default Header;
