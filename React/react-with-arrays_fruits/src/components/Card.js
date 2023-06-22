import "./Card.css";

export default function Card({ name, id, color }) {
  return (
    <p className="card" style={{ backgroundColor: { color } }} id={id}>
      {name}
    </p>
  );
}
