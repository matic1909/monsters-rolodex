import "./App.css";
import { useState, useEffect } from "react";
import { CardList } from "./components/card-list/CardList";
import { SearchBox } from "./components/search-box/SearchBox";
import { GlobalStyle } from "./styles/GlobalStyles";

function App() {
  const [monsters, setMonsters] = useState([]);
  const [searchField, setSearchField] = useState("");

  const filteredMonsters = monsters.filter((monster) =>
    monster.name.toLowerCase().includes(searchField.toLocaleLowerCase())
  );

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((users) => setMonsters(users));
  }, []);

  return (
    <div className="App">
      <GlobalStyle />
      <h1>Monsters Rolodex</h1>
      <SearchBox
        handleChange={(e) => setSearchField(e.target.value)}
        placeholder="Search monsters..."
      />
      <CardList monsters={filteredMonsters} />
    </div>
  );
}

export default App;
