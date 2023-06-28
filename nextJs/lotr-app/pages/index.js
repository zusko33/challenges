// import Link from "next/link";
import { introduction } from "../lib/data";

export default function HomePage() {
  return (
    <div>
      <h1>Lord Of The Ring</h1>
      <p>{introduction}</p>
    </div>
  );
}
