import styles from "./NavBack.module.scss";
import React from "react";
import Link from "next/link";

const NavBack = () => {
  return (
    <nav className={styles.nav}>
      <Link href="/">
        <p>back to home page</p>
      </Link>
    </nav>
  );
};

export default NavBack;
