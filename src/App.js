import logo from "./logo.svg";
import "./App.css";
import Router from "./route/Router";

function App() {
  return (
    <>
      <div
        className="toast-container position-absolute p-3 start-50 bottom-0 translate-middle-x"
        style={{ zIndex: 2000 }}
      >
        <div
          className="toast align-items-center text-white bg-danger border-0"
          
        >
          <div className="d-flex">
            <div className="toast-body">z</div>
            <button
              type="button"
              className="btn-close btn-close-white me-2 m-auto"
              data-bs-dismiss="toast"
            ></button>
          </div>
        </div>
      </div>
          <Router />
      {/* <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div> */}
    </>
  );
}

export default App;
