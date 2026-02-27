import who from "../assets/images/who.png";
import mission from "../assets/images/mission.png";
import team from "../assets/images/team.png";
import Header from "../components/Header";
import heroBg from "../assets/images/hero.png";

export default function Home() {
  return (
    <div>
      <Header />

      <main>
        {/* MODERN HERO */}
  <section
  className="hero hero--modern"
  id="home"
  style={{
    backgroundImage: `
      linear-gradient(
        180deg,
        rgba(0,0,0,0.85) 0%,
        rgba(0,0,0,0.65) 40%,
        rgba(0,0,0,0.45) 70%,
        rgba(0,0,0,0.25) 100%
      ),
      url(${heroBg})
    `,
    backgroundSize: "cover",
    backgroundPosition: "center",
  }}
>
          <div className="container hero__grid">
            {/* LEFT SIDE */}
            <div className="hero__left">
              <h1>
                Smart Parking <br />
                <span className="accent">Powered by AI</span>
              </h1>

              <p className="hero__subtitle">
                Monitor parking spaces in real time. <br />
                Know exactly where free spots are before you arrive.
              </p>

              <div className="hero__buttons">
                <a href="/register" className="btn btn--primary btn--pill">
                  Get Started
                </a>

                <a href="/profile" className="btn btn--dark btn--pill">
                  Login
                </a>
              </div>
            </div>

            {/* RIGHT SIDE – LIVE PREVIEW */}
            <div className="hero__preview">
              <div className="preview-card">
                <div className="preview-title">Live Parking Status</div>

                <div className="preview-item">
                  <span>VUB Campus</span>
                  <span className="preview-free">12 free</span>
                </div>

                <div className="preview-item">
                  <span>City Center</span>
                  <span className="preview-free warning">3 free</span>
                </div>

                <div className="preview-item">
                  <span>Airport P1</span>
                  <span className="preview-free">40 free</span>
                </div>

                <div className="preview-note">
                  updates automatically • demo preview
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ABOUT CARD */}
        <section className="section section--blue" id="about">
          <div className="container">
            <div className="big-card reveal is-visible">
              <h2>About InteLL Park</h2>
              <p>Smart parking management through AI and secure access.</p>
              <a className="btn btn--dark" href="#aboutUs">
                Learn more
              </a>
            </div>
          </div>
        </section>

        {/* ABOUT US */}
        <section className="section section--blue" id="aboutUs">
          <div className="container">
            <h2 className="section__title reveal is-visible">About Us</h2>

            <div className="cards3">
              <article className="info-card reveal is-visible">
                <img className="info-card__icon" src={who} alt="Who we are" />
                <h3>Who We Are</h3>
                <p>
                  InteLL Park is an AI-powered parking management system designed
                  for different parking areas. It helps monitor occupancy and
                  improve efficiency using real-time data.
                </p>
              </article>

              <article className="info-card reveal is-visible">
                <img
                  className="info-card__icon"
                  src={mission}
                  alt="Our mission"
                />
                <h3>Our Mission</h3>
                <p>
                  Make parking smarter, faster, and safer. Reduce traffic, save
                  time, and provide accurate availability information.
                </p>
              </article>

              <article className="info-card reveal is-visible">
                <img className="info-card__icon" src={team} alt="Our team" />
                <h3>Our Team</h3>
                <p>
                  Built as a diploma project with an engineering approach,
                  combining innovation with real-world problem solving.
                </p>
              </article>
            </div>
          </div>
        </section>

        {/* STATUS */}
        {/* SYSTEM OVERVIEW */}
<section className="section section--blue" id="overview">
  <div className="container">
    <h2 className="section__title reveal is-visible">System Overview</h2>

    <div className="status-grid">
      <div className="status-card reveal is-visible">
        <div className="status-card__top">
          <div className="status-card__label">Total Free Spots</div>
        </div>
        <div className="status-card__num">128</div>
        <div className="status-card__meta">across all parkings</div>
      </div>

      <div className="status-card reveal is-visible">
        <div className="status-card__top">
          <div className="status-card__label">Occupied</div>
        </div>
        <div className="status-card__num">542</div>
        <div className="status-card__meta">current load</div>
      </div>

      <div className="status-card reveal is-visible">
        <div className="status-card__top">
          <div className="status-card__label">Last Update</div>
        </div>
        <div className="status-card__num" style={{ fontSize: 34 }}>2s</div>
        <div className="status-card__meta">ago (demo)</div>
      </div>
    </div>

    <div className="status-note reveal is-visible">
      This is a demo overview. Later, we will connect it to the backend API for real-time data.
    </div>

    <div className="overview-cta reveal is-visible">
      <a className="btn btn--dark btn--pill" href="/profile">Login to see your parkings</a>
      <a className="btn btn--primary btn--pill" href="/register" style={{ marginLeft: 10 }}>
        Create account
      </a>
    </div>
  </div>
</section>
      </main>

      <footer className="footer" id="login">
        <div className="container footer__inner">
          <span>© {new Date().getFullYear()} AI Parking</span>
          <span className="muted">Diploma project UI</span>
        </div>
      </footer>
    </div>
  );
}