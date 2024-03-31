import React from "react";
import ExampleComponent from "./ExampleComponent"; // Import ExampleComponent
import TestComponent from "./TestComponent"; // Import TestComponent without curly braces

function App() {
  return (
    <div className="App">
      <h1>Now</h1> {/* Changed the content of the h1 element */}
      <p className="App-intro">
        In React apps, we write JSX - it looks like HTML, and uses a lot of HTML
        syntax. JSX lets us include JavaScript functions right along with the
        HTML, and also allows us to add in components, which are separate,
        self-contained chunks of JSX.
      </p>
      <ExampleComponent />
      <TestComponent /> {/* Added TestComponent */}
    </div>
  );
}

export default App;
