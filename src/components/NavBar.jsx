import { useState } from "react";
import styles from "./NavBar.module.css";
export default function NavBar() {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <button onClick={() => setOpen((oldState) => !oldState)}>åbn/luk</button>
      <nav className={open ? "open" : styles.hide}>
        <a href="/">Side1</a>
        <a href="/">Side2</a>
        <a href="/">Side3</a>
        <a href="/">Side4</a>
        <a href="/">Side5</a>
      </nav>
    </div>
  );
}
