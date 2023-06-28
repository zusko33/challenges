// import Link from "next/link";
import { useRouter } from "next/router";
import { volumes } from "../../lib/data";
import Image from "next/image";

export default function Volumes() {
  const router = useRouter();
  const { slug } = router.query;
  const currentVolume = volumes.find((volume) => volume.slug === slug);

  if (!currentVolume) {
    return null;
  }

  const { title, description, books, index, cover } = currentVolume;
  console.log(currentVolume);
  return (
    <>
      <h1 key={index}>{title}</h1>
      <p>{description}</p>
      <ul>
        {books.map((book, index) => (
          <li key={index}>
            {book.ordinal} {book.title}
          </li>
        ))}
      </ul>
      <Image
        src={cover}
        height={230}
        width={140}
        alt={` picture of a cover of the book ${title}`}
      />
      {/* <nav> 
        <Link href="/volumes/the-fellowship-of-the-ring">Previous </Link>;
        <Link href="/volumes/the-two-towers">Next </Link>
      </nav>  */}
    </>
  );
}
