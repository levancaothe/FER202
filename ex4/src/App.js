import { people, array, companies, ages, person } from "./models/Data.js";
import "./App.css";

function App() {
  const isTeenager = (person) => {
    return person.age >= 10 && person.age <= 20;
  };

  const firstTeenager = people.find(isTeenager);
  const allTeenagers = people.filter(isTeenager);
  const everyTeenager = people.every(isTeenager);
  const anyTeenager = people.some(isTeenager);

  const sum = array.reduce((total, number) => total + number, 0);

  const product = array.reduce((total, number) => total * number, 1);

  const companyNames = [];

  companies.forEach((company) => {
    companyNames.push(company.name);
  });

  const companiesAfter1987 = companies.filter(
    (company) => company.start > 1987,
  );

  const retailCompanies = companies
    .filter((company) => company.category === "Retail")
    .map((company) => ({
      ...company,
      start: company.start + 1,
    }));

  const companiesByEnd = [...companies].sort((a, b) => a.end - b.end);

  const sortedAges = [...ages].sort((a, b) => b - a);

  const ageSum = ages.reduce((total, age) => total + age, 0);

  const company = {
    name: companies[0].name,
    category: companies[0].category,

    print() {
      return this.name;
    },
  };

  const sumNumbers = (...numbers) => {
    return numbers.reduce((total, number) => total + number, 0);
  };

  const addToArray = (...items) => {
    const result = [];

    items.forEach((item) => {
      if (Array.isArray(item)) {
        result.push(...item);
      } else {
        result.push(item);
      }
    });

    return result;
  };

  const {
    address: { street },
  } = person;

  const createCounter = () => {
    let count = -1;

    return () => {
      count++;
      return count;
    };
  };

  const counter = createCounter();

  const counterResults = [
    counter(),
    counter(),
    counter(),
    counter(),
    counter(),
  ];

  const getQueryParams = (url) => {
    const queryString = url.split("?")[1];

    const result = {};

    if (!queryString) {
      return result;
    }

    queryString.split("&").forEach((item) => {
      const [key, value] = item.split("=");

      result[key] = value;
    });

    return result;
  };

  const queryResult = getQueryParams(
    "https://example.com?name=John&age=20&city=Hanoi",
  );

  class Shape {
    constructor(color) {
      this.color = color;
    }

    getArea() {
      return 0;
    }

    toString() {
      return `Shape color: ${this.color}`;
    }
  }

  class Rectangle extends Shape {
    constructor(color, length, width) {
      super(color);
      this.length = length;
      this.width = width;
    }

    getArea() {
      return this.length * this.width;
    }

    toString() {
      return `Rectangle - Color: ${this.color}, Area: ${this.getArea()}`;
    }
  }

  class Triangle extends Shape {
    constructor(color, base, height) {
      super(color);
      this.base = base;
      this.height = height;
    }

    getArea() {
      return (this.base * this.height) / 2;
    }

    toString() {
      return `Triangle - Color: ${this.color}, Area: ${this.getArea()}`;
    }
  }

  const rectangle = new Rectangle("Red", 10, 5);

  const triangle = new Triangle("Blue", 8, 6);

  const randomNumber = Math.floor(Math.random() * 10) + 1;

  let promiseResult;

  if (randomNumber > 5) {
    promiseResult = `Random number: ${randomNumber}`;
  } else {
    promiseResult = "Error";
  }

  return (
    <div className="App">
      <h3>1.</h3>
      <h1>
        Hello <span>React</span>
      </h1>
      <hr />
      <br />

      <h3>2.</h3>
      <section>
        <img alt="" src="logo192.png" />
        <div
          style={{
            backgroundColor: "blue",
            width: 200,
            height: 2,
          }}
        ></div>
        <p
          style={{
            color: "blue",
            fontFamily: "emoji",
          }}
        >
          This is the React logo!
        </p>
        <p
          style={{
            color: "gray",
            fontFamily: "emoji",
          }}
        >
          (I dont't know why it is here either)
        </p>
        <p>The library for web and native user interfaces</p>
      </section>
      <hr />
      <br />

      <h3>3.</h3>
      <nav>
        <a className="active">Home</a>
        <a>Search</a>
        <a>Contact</a>
        <a className="login">Login</a>
      </nav>
      <hr />
      <br />

      <h3>4.</h3>
      <section>
        <h1
          style={{
            color: "blue",
            fontWeight: "bold",
          }}
        >
          This is JSX
        </h1>
      </section>
      <hr />
      <br />

      <h3>5.</h3>
      <section>
        <h2>Course names</h2>
        <ul>
          <li>React</li>
          <li>ReactNative</li>
          <li>NodeJs</li>
        </ul>
      </section>
      <hr />
      <br />

      <h2>Using ES6 and JSX</h2>
      <h3>1.</h3>
      <section>
        <h2>People - Teenager</h2>
        <p>
          First teenager:
          <b>
            {firstTeenager.name} - {firstTeenager.age}
          </b>
        </p>

        <h3>All teenagers</h3>

        <ul>
          {allTeenagers.map((person) => (
            <li key={person.name}>
              {person.name} - {person.age}
            </li>
          ))}
        </ul>

        <p>
          Every person is teenager:
          <b>{everyTeenager ? " true" : " false"}</b>
        </p>

        <p>
          Any person is teenager:
          <b>{anyTeenager ? " true" : " false"}</b>
        </p>
      </section>
      <hr />
      <br />

      <h3>2.</h3>
      <section>
        <h2>Array Reduce</h2>

        <p>Array: {array.join(", ")}</p>

        <p>Sum: {sum}</p>

        <p>Product: {product}</p>
      </section>
      <hr />
      <br />

      <h3>3.</h3>
      <section>
        <h2>Companies</h2>

        <h3>Company names</h3>

        <ul>
          {companyNames.map((name) => (
            <li key={name}>{name}</li>
          ))}
        </ul>

        <h3>Started after 1987</h3>

        <ul>
          {companiesAfter1987.map((company) => (
            <li key={company.name}>
              {company.name} - {company.start}
            </li>
          ))}
        </ul>

        <h3>Retail companies</h3>

        <div className="retail-container">
          {retailCompanies.map((company) => (
            <div className="company-card" key={company.name}>
              <p>
                <b>{company.name}</b>
              </p>
              <p>Category: {company.category}</p>
              <p>Start: {company.start}</p>
              <p>End: {company.end}</p>
            </div>
          ))}
        </div>

        <h3>Sorted by end date</h3>

        <div>
          {companiesByEnd.map((company) => (
            <div className="company-row" key={company.name}>
              <b>{company.name}</b>
              <b>{company.start}</b>
              <b>{company.end}</b>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2>Ages</h2>

        <p>
          Descending:
          {sortedAges.join(", ")}
        </p>

        <p>
          Sum of ages: <b>{ageSum}</b>
        </p>
      </section>

      <section>
        <h2>Object</h2>

        <p>Name: {company.name}</p>

        <p>Category: {company.category}</p>

        <p>Print: {company.print()}</p>

        <p>Street: {street}</p>
      </section>

      <section>
        <h2>Functions</h2>

        <p>
          Sum numbers:
          {sumNumbers(1, 2, 3, 4, 5)}
        </p>

        <p>
          Add to array:
          {addToArray(1, 2, [3, 4], "Hello").join(", ")}
        </p>

        <p>
          Counter:
          {counterResults.join(", ")}
        </p>

        <p>
          Query parameters:
          {JSON.stringify(queryResult)}
        </p>
      </section>
      <hr />
      <br />

      <h3>4.</h3>
      <section>
        <h2>Classes</h2>

        <div className="shape-card">
          <h3>Shape</h3>
          <p>Color: {rectangle.color}</p>
        </div>

        <div className="shape-card">
          <h3>Rectangle</h3>
          <p>Length: {rectangle.length}</p>
          <p>Width: {rectangle.width}</p>
          <p>Area: {rectangle.getArea()}</p>
          <p>{rectangle.toString()}</p>
        </div>

        <div className="shape-card">
          <h3>Triangle</h3>
          <p>Base: {triangle.base}</p>
          <p>Height: {triangle.height}</p>
          <p>Area: {triangle.getArea()}</p>
          <p>{triangle.toString()}</p>
        </div>
      </section>
      <hr />
      <br />

      <h3>5.</h3>
      <section>
        <h2>Promise</h2>
        <p>
          Random number:
          <b> {randomNumber}</b>
        </p>

        <p>
          Result:
          <b> {promiseResult}</b>
        </p>
      </section>
    </div>
  );
}

export default App;
