import "./dist/App.css";
import mobImage from "./images/illustration-woman-online-mobile.svg";
import mobImage2 from "./images/bg-pattern-mobile.svg";

function App() {
  return (
    <main className="row">
      <section className={("container", "col")}>
        <Illustration />
        <Title />
        <div className="tabs">
          <FirstTab />
          <SecondTab />
          <ThirdTab />
          <FourthTab />
          <FifthTab />
        </div>
      </section>
    </main>
  );
}

const Illustration = () => {
  return (
    <div className="mobIllustration">
      <img className="mobImage" src={mobImage} alt="mobile illustration" />;
      <img className="mobImage2" src={mobImage2} alt="mobile illustration" />;
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
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum,
        reiciendis!
      </div>
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
        No more that 2GB. All files in your account must fit your allotted
        storage space.
      </div>
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
        No more that 2GB. All files in your account must fit your allotted
        storage space.
      </div>
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
        No more that 2GB. All files in your account must fit your allotted
        storage space.
      </div>
    </div>
  );
};

const FifthTab = () => {
  return (
    <div className="tab">
      <input type="checkbox" id="chck5" />
      <label className="tab-label" htmlFor="chck5">
        What is the maximum file upload size?
      </label>
      <div className="tab-content">Do you provide additional support?</div>
    </div>
  );
};

export default App;
