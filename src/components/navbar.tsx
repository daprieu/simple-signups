export default function Navbar() {
  return (
    <nav>
      <ul className="flex space-x-4 p-4">
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/dashboard">Dashboard</a>
        </li>
        <li>
          <a href="/login">Log In</a>
        </li>
        <li>
          <a href="/signup">Sign Up</a>
        </li>
      </ul>
    </nav>
  );
}
