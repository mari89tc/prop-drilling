import styles from "./Footer.module.css";
function Footer(props) {
  return (
    <footer className={styles.footer}>
      <p className={styles.p}>
        Her er en meget standard footer hvor jeg gerne vil vise denne mail:
        {props.contact}
      </p>
    </footer>
  );
}

export default Footer;
