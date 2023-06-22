import Card from "./components/Card";

export default function App() {
  const fruits = [
    { id: 1, name: "🍌 banana", color: "lightgreen" },
    { id: 2, name: "🍎 apple", color: "lightcoral" },
    { id: 3, name: "🍋 lemon", color: "yellow" },
    { id: 4, name: "🍊 orange", color: "orange" },
  ];

  return (
    <div className="app">
      {fruits.map((fruit) => (
        <Card
          key={fruit.id}
          name={fruit.name}
          id={fruit.id}
          color={fruit.color}
        />
      ))}
    </div>
  );
}
