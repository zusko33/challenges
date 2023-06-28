import { volumes } from "../../lib/data";
import Image from "next/image";
import Link from "next/link";

export default function SecondVolume() {
  return (
    <>
      <h1>
        {volumes.find(({ slug }) => slug === "the-return-of-the-king").title}
      </h1>
      <p>
        {
          volumes.find(({ slug }) => slug === "the-return-of-the-king")
            .description
        }
      </p>
      <ul>
        {volumes
          .find(({ slug }) => slug === "the-return-of-the-king")
          .books.map((book, index) => (
            <li key={index}>
              {book.ordinal} {book.title}
            </li>
          ))}
      </ul>
      <Image
        src="/images/the-return-of-the-king.png"
        height={230}
        width={140}
        alt="A picture of a cover of the book the return of the king"
      />
      <nav>
        <Link href="/volumes/the-two-towers">Previous </Link>;
        <Link href="/volumes/the-return-of-the-king">Next </Link>
      </nav>
    </>
  );
}
