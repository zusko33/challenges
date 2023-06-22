import FavButton from "./FavButton";
export default function Entry() {
  return (
    <ul>
      <li>
        <h4>date of entry</h4>
        <h3>title of entry</h3>
        <FavButton />
        <p className="entry-text">
          bla bla bla bla bla bla bla bala bla bla bla bla
        </p>
      </li>
    </ul>
  );
}
