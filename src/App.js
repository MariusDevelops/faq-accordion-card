import "./dist/App.css";

function App() {
  return (
    <main className="row">
      <section className="illustration"></section>
      <section className="container" className="col">
        <Title />
        <div class="tabs">
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

const Title = () => <h1>FAQ</h1>;

const FirstTab = () => {
  return (
    <div className="tab">
      <input type="checkbox" id="chck1" />
      <label class="tab-label" for="chck1">
        How many team members can I invite?
      </label>
      <div class="tab-content">
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
      <label class="tab-label" for="chck2">
        What is the maximum file upload size?
      </label>
      <div class="tab-content">
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
      <label class="tab-label" for="chck3">
        How do I reset my password?
      </label>
      <div class="tab-content">
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
      <label class="tab-label" for="chck4">
        Can I cancel my subscription?
      </label>
      <div class="tab-content">
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
      <label class="tab-label" for="chck5">
        What is the maximum file upload size?
      </label>
      <div class="tab-content">Do you provide additional support?</div>
    </div>
  );
};

export default App;

{
  /* notes:
https://codepen.io/raubaca/pen/PZzpVe */
}
