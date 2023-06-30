import Link from "next/link";
import { useRouter } from "next/router";
import { volumes } from "../../lib/data";
import Image from "next/image";

export default function Volumes() {
  const router = useRouter();
  const { slug } = router.query;
  const volumeIndex = volumes.findIndex((volume) => volume.slug === slug);

  const volume = volumes[volumeIndex];
  const previousVolume = volumes[volumeIndex - 1];
  const nextVolume = volumes[volumeIndex + 1];

  if (!volume) {
    return null;
  }

  const { title, description, books, index, cover } = volume;
  console.log(volume);
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
      {previousVolume ? (
        <div>
          <Link href={`/volumes/${previousVolume.slug}`}>
            ← Previous Volume: {previousVolume.title}
          </Link>
        </div>
      ) : null}
      {nextVolume ? (
        <div>
          <Link href={`/volumes/${nextVolume.slug}`}>
            Next Volume: {nextVolume.title} →
          </Link>
        </div>
      ) : null}
    </>
  );
}
