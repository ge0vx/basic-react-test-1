import "./App.css";
import itemsApi from "./promise";
import { useEffect, useState } from "react";

function App() {
  const [items, setItems] = useState({});

  useEffect(() => {
    itemsApi().then((response) => {
      const itemGroups = response.reduce((group, item) => {
        const { groupId } = item;
        group[groupId] = group[groupId] ?? [];
        group[groupId].push(item);
        return group;
      }, {});
      setItems(itemGroups);
    });
  }, []);

  return (
    <div className="App">
      {Object.entries(items).map((item) => {
        const title = item.shift();
        const content = item.shift();
        return (
          <div>
            <h4>{title}</h4>
            <ul>
              {content.map((itemContent, index) => (
                <li key={`item-${index}`}>{itemContent.name}</li>
              ))}
            </ul>
          </div>
        );
      })}
    </div>
  );
}

export default App;
