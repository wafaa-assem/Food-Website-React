import "./Header.css";
export default function Header() {
  return (
    <header className="vh-100 d-flex align-items-center" id="header">
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="inner">
              <h2>
                Good food choices <br /> are good <br />
                investments.
              </h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              <p>Etiam et purus a odio finibus bibendum amet leo.</p>
              <button id="first-button">
                order now <i className="ms-3 fa-solid fa-basket-shopping"></i>
              </button>
              <button id="second-button" className="shadow">
                learn more{" "}
                <i className="ms-3 text fa-solid fa-chevron-right"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
