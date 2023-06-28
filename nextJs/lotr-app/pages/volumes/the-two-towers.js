import { volumes } from "../../lib/data";
import Image from "next/image";
import Link from "next/link";

export default function FirstVolume() {
  return (
    <>
      <h1>{volumes.find(({ slug }) => slug === "the-two-towers").title}</h1>
      <p>{volumes.find(({ slug }) => slug === "the-two-towers").description}</p>
      <ul>
        {volumes
          .find(({ slug }) => slug === "the-two-towers")
          .books.map((book, index) => (
            <li key={index}>
              {book.ordinal} {book.title}
            </li>
          ))}
      </ul>
      <Image
        src="/images/the-two-towers.png"
        height={230}
        width={140}
        alt="A picture of a cover of the book the two towers"
      />
      <nav>
        <Link href="/volumes/the-fellowship-of-the-ring">Previous </Link>;
        <Link href="/volumes/the-return-of-the-king">Next </Link>;
      </nav>
    </>
  );
}
