import Link from "next/link";
import { introduction } from "../lib/data";
import { volumes } from "../lib/data";
import { useRouter } from "next/router";

export default function HomePage() {
  const router = useRouter();
  return (
    <div>
      <h1>Lord Of The Ring</h1>
      <p>{introduction}</p>
      <ul>
        {volumes.map((volume) => (
          <li key={volume.index}>
            <Link href={`/volumes/${volume.slug}`}>{volume.title}</Link>
          </li>
        ))}
      </ul>
      <button
        onClick={() => {
          router.push(
            `/volumes/${
              volumes[Math.floor(Math.random() * volumes.length)].slug
            }`
          );
        }}
      >
        Random volume
      </button>
    </div>
  );
}
