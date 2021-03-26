import classes from "./navbar.module.css";

function Navbar() {
  return (
    <nav className={classes.App}>
      <h2>Navigation</h2>

      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
}

export default Navbar;
