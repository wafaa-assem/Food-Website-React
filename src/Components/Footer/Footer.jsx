import "./Footer.css";

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="inner">
              <ul className="list-unstyled d-flex gap-4 justify-content-center">
                <li>
                  <a href="#" className="text-white fw-semibold ">
                    Register
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white fw-semibold ">
                    Forum
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white fw-semibold ">
                    Affiliate
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white fw-semibold ">
                    FAQ
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="row my-3">
          <div className="col">
            <div className="inner">
              <ul className="list-unstyled d-flex gap-3 justify-content-center">
                <li>
                  <a href="#" className="text-white fw-semibold ">
                    <i className="fa-brands fa-facebook-f"></i>
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white fw-semibold ">
                    <i className="fa-brands fa-twitter"></i>
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white fw-semibold ">
                    <i className="fa-brands fa-youtube"></i>
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white fw-semibold ">
                    <i className="fa-brands fa-dribbble"></i>
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white fw-semibold ">
                    <i className="fa-brands fa-linkedin-in"></i>
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white fw-semibold ">
                    <i className="fa-brands fa-instagram"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <div className="inner">
              <span className="text-white text-center d-block">
                © 2021. Foodera. All rights reserved.
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
