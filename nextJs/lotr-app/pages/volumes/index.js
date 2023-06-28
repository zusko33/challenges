import Link from "next/Link";

export default function Volumes() {
  return (
    <ul>
      <li>
        <Link href="/volumes/the-fellowship-of-the-ring">
          The fellowship of the ring
        </Link>
      </li>
      <li>
        <Link href="/volumes/the-two-towers">The two towers</Link>
      </li>
      <li>
        <Link href="/volumes/the-return-of-the-king">
          The return of the king
        </Link>
      </li>
    </ul>
  );
}
