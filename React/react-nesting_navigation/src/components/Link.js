export default function Link({ children, href }) {
  return (
    <a className="navigation_link" href={href}>
      {children}
    </a>
  );
}
