import Link from "next/Link";
import { volumes } from "../../lib/data";
import { useRouter } from "next/router";

export default function Volumes() {
  const router = useRouter();
  return (
    <>
      <ul>
        {volumes.map(({ slug, title, index }) => (
          <li key={index}>
            <Link href={`/volumes/${slug}`}>{title}</Link>
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
    </>
  );
}
