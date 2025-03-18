import { RxHamburgerMenu } from "react-icons/rx";
import styles from "./Navbar.module.css";
function Navbar() {
  return (
    <nav className={styles.nav}>
      <div className={styles.hamburger}>
        <RxHamburgerMenu />
      </div>
      <div className={styles.menuTitle}>
        <h4>Bronte's Small Paws</h4>
      </div>
    </nav>
  );
}

export default Navbar;
