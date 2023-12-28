import Card from "./components/Card";
import { Fragment } from "react";

export default function App() {
  const fruits = [
    { id: 1, name: "banana", color: "yellow" },
    { id: 2, name: "apple", color: "red" },
    { id: 3, name: "cucumber", color: "green" },
    { id: 4, name: "mango", color: "orange" },
    { id: 5, name: "plum", color: "purple" },
  ];

  return (
    <div className="app">
      {fruits.map(({ id, name, color }) => (
        <Fragment key={id}>
          <Card name={name} color={color} />
        </Fragment>
      ))}
    </div>
  );
}
