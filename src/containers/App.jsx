import "./App.css";
import CardList from "../components/CardList.jsx";
import { useEffect, useState } from "react";
import SearchBox from "../components/SearchBox.jsx";
import Scroll from "../components/Scroll.jsx";

function App() {
  const [robots, setRobots] = useState([]);
  const [searchField, setSearchField] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      const responseJson = await response.json();
      console.log(responseJson);
      setRobots(responseJson);
    };
    fetchData();
  }, []);

  const filteredRobots = robots.filter((robot) => {
    return robot.name.toLowerCase().includes(searchField.toLowerCase());
  });

  const onSearchChange = (event) => {
    console.log(event.target.value);
    setSearchField(event.target.value);
  };

  return !robots.length ? (
    <h1>Loading</h1>
  ) : (
    <div className="tc">
      <h1 className="f1">RoboFriends</h1>
      <SearchBox onSearchChange={onSearchChange} />
      <Scroll>
        <CardList robots={filteredRobots} />
      </Scroll>
    </div>
  );
}

export default App;
