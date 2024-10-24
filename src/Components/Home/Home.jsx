import Header from "./Header";
import "./Home.css";
import img1 from "./../../assets/1.jpg";
import img2 from "./../../assets/2.png";
import person1 from "./../../assets/1 (1).jpg";
import person2 from "./../../assets/2.jpg";
import { data } from "./data";
import Carousel from "react-bootstrap/Carousel";

export default function Home() {
  const exploreFood = data.map((item) => {
    return (
      <div className="col-md-4" key={item.title}>
        <div className="explore-content">
          <div className="shadow-sm pb-3">
            <img src={item.img} className="w-100 rounded-2" alt="food" />
            <h3 className="px-3 ">{item.title}</h3>
            <h4 className="px-3 mb-4">{item.time}</h4>
            <h4 className="px-3">
              <span className="beforeDis">{item.BeforeDis}</span>
              <span className="afterDis ms-2 text-decoration-line-through">
                {" "}
                {item.afterDis}
              </span>
            </h4>
          </div>
          <div className="px-3">
            <button>order now</button>
          </div>
        </div>
      </div>
    );
  });

  return (
    <>
      <Header />
      {/* rating */}
      <section className="ratings">
        <div className="container">
          <div className="row text-center">
            <div className="col-md-3">
              <h2>1287+</h2>
              <span>Savings</span>
            </div>
            <div className="col-md-3">
              <h2>5786+</h2>
              <span>Photos</span>
            </div>
            <div className="col-md-3">
              <h2>1440+</h2>
              <span>Rockets</span>
            </div>
            <div className="col-md-3">
              <h2>7110+</h2>
              <span>Globes</span>
            </div>
          </div>
        </div>
      </section>
      {/* about section*/}
      <section className="about" id="about"  data-aos="fade-down">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="inner">
                <img src={img1} className="w-100 rounded-3" alt="food" />
              </div>
            </div>
            <div className="col-md-6 d-flex align-items-center">
              <div className="inner">
                <h2>
                  We pride ourselves on making real food from the best
                  ingredients.
                </h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <p>Etiam et purus a odio finibus bibendum amet leo.</p>
                <p>Mauris feugiat erat tellus.</p>
                <button id="about-button" className="shadow">
                  <a href="#" className="text-decoration-none">
                    learn more{" "}
                  </a>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* about2 section*/}
      <section className="about2">
        <div className="container">
          <div className="row">
            <div className="col-md-6 d-flex align-items-center">
              <div className="inner">
                <h2>
                  We make everything by hand with the best possible ingredients.
                </h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                  et purus a odio finibus bibendum in sit amet leo. Mauris
                  feugiat erat tellus.Far far away, behind the word mountains,
                  far from the countries Vokalia and Consonantia, there live the
                  blind texts.
                </p>
                <ul className="list-unstyled">
                  <li>
                    <i className="fa-solid fa-check me-2"></i> Etiam sed dolor
                    ac diam volutpat.
                  </li>
                  <li className="my-2">
                    <i className="fa-solid fa-check me-2"></i> Erat volutpat
                    aliquet imperdiet.
                  </li>
                  <li>
                    <i className="fa-solid fa-check me-2"></i> purus a odio
                    finibus bibendum.
                  </li>
                </ul>
                <button id="about2-button" className="shadow">
                  <a href="#" className="text-decoration-none">
                    learn more{" "}
                  </a>
                </button>
              </div>
            </div>
            <div className="col-md-6">
              <div className="inner">
                <img src={img2} className="w-100" alt="food" />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* our-story section*/}
      <section className="our-story">
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="content">
                <h2>
                  When a man's stomach is full it makes no difference whether he
                  is rich or poor.
                </h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                  et purus a odio finibus bibendum in sit amet leo. Mauris
                  feugiat erat tellus.
                </p>
                <a href="#" className="text-decoration-none">
                  <i className="fa-solid fa-caret-right me-2"></i>Watch Our
                  Story
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* explore-food section*/}
      <section className="explore-food" id="explore" data-aos="fade-down">
        {/* heading */}
        <div className="explore-heading w-75 m-auto text-center">
          <h2>Explore Our Foods</h2>
          <p className="m-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et
            purus a odio finibus bibendum in sit amet leo. Mauris feugiat erat
            tellus. Far far away, behind the word mountains, far from the
            countries Vokalia and Consonantia, there live the blind texts.
            Separated they live in Bookmarksgrove.
          </p>
        </div>
        {/* content */}
        <div className="container">
          <div className="row mt-5">{exploreFood}</div>
        </div>
      </section>
      {/* slider section */}
      <section className="slider" id="reviews">
        <div className="slide-heading w-75 m-auto text-center text-white mb-5">
          <h2>Testimonials</h2>
        </div>
        <div className="container bg-white rounded-5">
          <Carousel>
            <Carousel.Item>
              <img src={person1} alt="person" />
              <Carousel.Caption>
                <h3>
                  Lorem ipsum dolor sit amet consectetur nobis necessitatibus
                  culpa voluptatum natus! Vitae.
                </h3>
                <span>Simab Dave - Web Designer</span>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
              <img src={person2} alt="person" />
              <Carousel.Caption>
                <h3>
                  Lorem ipsum dolor sit amet consectetur nobis necessitatibus
                  culpa voluptatum natus! Vitae.
                </h3>
                <span>John Dave - UX Designer</span>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
      </section>
      {/* faq section */}
      <section className="faq" id="faq">
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="heading text-center mb-5">
                <h2>Frequently Asked Questions</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <div className="inner">
                <h4>
                  <span className="text-danger fw-light fs-2">~</span> Is
                  Foodera Bread really baked fresh each day?
                </h4>
                <p>
                  Far far away, behind the word mountains, far from the
                  countries Vokalia and Consonantia, there live the blind texts.
                  Separated they live in Bookmarksgrove right at the coast of
                  the Semantics, a large language.
                </p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="inner">
                <h4>
                  <span className="text-danger fw-light fs-2">~</span> Is
                  Foodera Bread really baked fresh each day?
                </h4>
                <p>
                  Far far away, behind the word mountains, far from the
                  countries Vokalia and Consonantia, there live the blind texts.
                  Separated they live in Bookmarksgrove right at the coast of
                  the Semantics, a large language.
                </p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="inner">
                <h4>
                  <span className="text-danger fw-light fs-2">~</span> Is
                  Foodera Bread really baked fresh each day?
                </h4>
                <p>
                  Far far away, behind the word mountains, far from the
                  countries Vokalia and Consonantia, there live the blind texts.
                  Separated they live in Bookmarksgrove right at the coast of
                  the Semantics, a large language.
                </p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="inner">
                <h4>
                  <span className="text-danger fw-light fs-2">~</span> Is
                  Foodera Bread really baked fresh each day?
                </h4>
                <p>
                  Far far away, behind the word mountains, far from the
                  countries Vokalia and Consonantia, there live the blind texts.
                  Separated they live in Bookmarksgrove right at the coast of
                  the Semantics, a large language.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* passion section */}
      <section className="passion">
        <div className="container">
          <div className="row text-center d-flex align-items-center">
            <div className="col-md-6">
              <h2 className="text-white fw-bolder">
                Baked fresh daily by bakers with passion.
              </h2>
            </div>
            <div className="col-md-6">
              <button>learn more</button>
            </div>
          </div>
        </div>
      </section>
      {/* contact section*/}
      <section className="contact">
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="inner text-center">
                <h2>
                  Hurry up! Subscribe our newsletter <br /> and get 25% Off
                </h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <div className="inner text-center">
                <p>
                  Limited time offer for this month. No credit card required.
                </p>
              </div>
            </div>
            <div className="d-flex justify-content-center align-items-center gap-3">
              <input
                type="email"
                placeholder="Email Address Here"
                className="w-25"
              />
              <button>Subscribe</button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
