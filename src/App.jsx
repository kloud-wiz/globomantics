import Banner from "./components/Banner"
import "./App.css"
import HouseList from "./components/HouseList";

function App() {

  return (
    <>
      <Banner 
        headerText="Providing houses all over the world"
      />
      <HouseList />
    </>
  );
}

export default App
