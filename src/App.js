import { Fragment } from "react";
import Header from "./Components/Layout/Header/Header";
import Meal from "./Components/Meals/Meal";

function App() {
  return (
    <Fragment>
      <Header />
      <main>
        <Meal />
      </main>
    </Fragment>
  );
}

export default App;
