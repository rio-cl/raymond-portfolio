
import { Link } from "react-router-dom";
import "./App.css";

function ProjectDetails() {
  return (
    <div className="project-details-page">
      <header className="details-header">
        <Link to="/" className="details-logo">
          Okolo Raymond<span>.</span>
        </Link>

        <Link to="/" className="back-link">
          ← Back to Portfolio
        </Link>
      </header>

      <main className="details-container">
        <section className="details-hero">
          <p className="eyebrow">FEATURED PROJECT / 01</p>

          <h1>
            Tip Calculator <span>App.</span>
          </h1>

          <p className="details-intro">
            An interactive web application that makes
            calculating tips and splitting restaurant bills
            between multiple people simple and convenient.
          </p>

          <div className="details-tech">
            <span>React</span>
            <span>JavaScript</span>
            <span>Tailwind CSS</span>
            <span>Create React App</span>
          </div>

          <div className="details-actions">
            <a
              href="https://github.com/rio-cl/rio0/tree/main/tip-calculator-app"
              target="_blank"
              rel="noopener noreferrer"
              className="details-button"
            >
              View Source Code ↗
            </a>
          </div>
        </section>

        <section className="details-preview">
          <img
            src="/projects/tip-calculator.png"
            alt="Screenshot of the Tip Calculator application"
          />
        </section>

        <section className="details-content">
          <div className="details-section">
            <p className="eyebrow">01 / INTRODUCTION</p>
            <h2>Project Overview</h2>

            <p>
              The Tip Calculator App is an interactive web
              application I developed using React. It helps
              users calculate tips and split restaurant bills
              between multiple people.
            </p>

            <p>
              Users can select a preset tip percentage or
              enter a custom percentage. The application
              calculates and displays the tip amount and
              total payment for each person.
            </p>
          </div>

          <div className="details-section">
            <p className="eyebrow">02 / THE CHALLENGE</p>
            <h2>The Problem</h2>

            <p>
              Splitting restaurant bills can sometimes be
              inconvenient, especially when several people
              need to calculate a tip and determine how
              much each person should contribute.
            </p>

            <p>
              I built this application to simplify that
              process by providing a clear interface for
              calculating tips and dividing the total bill
              equally.
            </p>
          </div>

          <div className="details-section">
            <p className="eyebrow">03 / FUNCTIONALITY</p>
            <h2>Key Features</h2>

            <div className="details-features">
              <div className="feature-item">
                <span>01</span>
                <div>
                  <h3>Bill Amount Input</h3>
                  <p>
                    Users can enter the total amount of
                    their restaurant bill.
                  </p>
                </div>
              </div>

              <div className="feature-item">
                <span>02</span>
                <div>
                  <h3>Preset Tip Percentages</h3>
                  <p>
                    Choose from 5%, 10%, 15%, 25%, or 50%
                    tip options.
                  </p>
                </div>
              </div>

              <div className="feature-item">
                <span>03</span>
                <div>
                  <h3>Custom Tip Percentage</h3>
                  <p>
                    Enter a preferred tip percentage
                    instead of using a preset option.
                  </p>
                </div>
              </div>

              <div className="feature-item">
                <span>04</span>
                <div>
                  <h3>Bill Splitting</h3>
                  <p>
                    Specify the number of people sharing
                    the bill to calculate individual payments.
                  </p>
                </div>
              </div>

              <div className="feature-item">
                <span>05</span>
                <div>
                  <h3>Per-Person Results</h3>
                  <p>
                    Displays the calculated tip amount
                    and total payment per person, rounded
                    to two decimal places.
                  </p>
                </div>
              </div>

              <div className="feature-item">
                <span>06</span>
                <div>
                  <h3>Reset Functionality</h3>
                  <p>
                    Clear the current calculation and
                    start again.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="details-section">
            <p className="eyebrow">04 / TECH STACK</p>
            <h2>Technologies Used</h2>

            <p>
              The application was developed with React
              and JavaScript, using Tailwind CSS for styling.
              Create React App was used to set up and
              build the project.
            </p>

            <div className="details-tech">
              <span>React 19</span>
              <span>JavaScript</span>
              <span>Tailwind CSS</span>
              <span>Create React App</span>
            </div>
          </div>

          <div className="details-section">
            <p className="eyebrow">05 / REFLECTION</p>
            <h2>What I Learned</h2>

            <p>
              Building this project helped me develop
              my understanding of React components,
              state management, and handling user input.
            </p>

            <p>
              I gained practical experience using the
              useState hook to store values and update
              the interface when users interact with
              the calculator.
            </p>

            <p>
              I also practiced performing calculations
              with JavaScript, formatting numerical
              results, and using Tailwind CSS to build
              a clean and interactive interface.
            </p>
          </div>
        </section>

        <section className="details-footer">
          <p className="eyebrow">END OF PROJECT</p>

          <h2>
            Explore more <span>projects.</span>
          </h2>

          <Link to="/" className="details-button">
            ← Back to Portfolio
          </Link>
        </section>
      </main>
    </div>
  );
}

export default ProjectDetails;
