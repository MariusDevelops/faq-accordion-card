import "./dist/App.css";
import deskImageBox from "./images/illustration-box-desktop.svg";
import deskImage from "./images/illustration-woman-online-desktop.svg";
import deskImage2 from "./images/bg-pattern-desktop.svg";
import mobImage from "./images/illustration-woman-online-mobile.svg";
import mobImage2 from "./images/bg-pattern-mobile.svg";

function App() {
  return (
    <main>
      <div className="wrapper">
        <section className="section1">
          <IllustrationDesk />
        </section>
        <section className="flex-section2">
          <section className="section2">
            <section className="col">
              <IllustrationMob />
              <Title />
              <div className="tabs">
                <FirstTab />
                <SecondTab />
                <ThirdTab />
                <FourthTab />
                <FifthTab />
              </div>
            </section>
          </section>
        </section>
      </div>
      <Footer />
    </main>
  );
}

const IllustrationDesk = () => {
  return (
    <div className="deskIllustration">
      <div>
        <img
          className="deskImageBox"
          src={deskImageBox}
          alt="desktop illustration"
        />
      </div>
      <div className="overflow">
        <div>
          <img
            className="deskImage"
            src={deskImage}
            alt="desktop illustration"
          />
        </div>
        <div>
          <img
            className="deskImage2"
            src={deskImage2}
            alt="desktop illustration"
          />
        </div>
      </div>
    </div>
  );
};

const IllustrationMob = () => {
  return (
    <div className="mobIllustration">
      <div>
        <img className="mobImage" src={mobImage} alt="mobile illustration" />
      </div>
      <div>
        <img className="mobImage2" src={mobImage2} alt="mobile illustration" />
      </div>
    </div>
  );
};

const Title = () => <h1>FAQ</h1>;

const FirstTab = () => {
  return (
    <div className="tab">
      <input type="checkbox" id="chck1" />
      <label className="tab-label" htmlFor="chck1">
        How many team members can I invite?
      </label>
      <div className="tab-content">
        You can invite up to twenty team members.
      </div>
      <hr className="dividers"></hr>
    </div>
  );
};

const SecondTab = () => {
  return (
    <div className="tab">
      <input type="checkbox" id="chck2" />
      <label className="tab-label" htmlFor="chck2">
        What is the maximum file upload size?
      </label>
      <div className="tab-content">
        No more than 2GB. All files in your account must fit your allotted
        storage space.
      </div>
      <hr className="dividers"></hr>
    </div>
  );
};

const ThirdTab = () => {
  return (
    <div className="tab">
      <input type="checkbox" id="chck3" />
      <label className="tab-label" htmlFor="chck3">
        How do I reset my password?
      </label>
      <div className="tab-content">
        From the navigation menu icon, tap settings and privacy.
      </div>
      <hr className="dividers"></hr>
    </div>
  );
};

const FourthTab = () => {
  return (
    <div className="tab">
      <input type="checkbox" id="chck4" />
      <label className="tab-label" htmlFor="chck4">
        Can I cancel my subscription?
      </label>
      <div className="tab-content">
        Yes. At the top right, tap the profile icon. Select the subscription you
        want to cancel.
      </div>
      <hr className="dividers"></hr>
    </div>
  );
};

const FifthTab = () => {
  return (
    <div className="tab">
      <input type="checkbox" id="chck5" />
      <label className="tab-label" htmlFor="chck5">
        Do you provide additional support?
      </label>
      <div className="tab-content">
        Yes. Prepare and review an individual development plan.
      </div>
      <hr className="dividers"></hr>
    </div>
  );
};

const Footer = () => {
  return (
    <footer className="attribution">
      <p>
        Challenge by{" "}
        <a
          href="https://www.frontendmentor.io?ref=challenge"
          rel="noreferrer"
          target="_blank"
        >
          Frontend Mentor
        </a>
        . Coded by{" "}
        <a
          href="https://mariusdevelops.github.io/"
          rel="noreferrer"
          target="_blank"
        >
          Marius
        </a>
        .
      </p>
    </footer>
  );
};

export default App;
