import Image from "next/image";
import styles from "@/styles/index.module.css"

export default function Home() {
  return (
    <main>
      <div className={styles.container}>
        <nav className={styles.navbar}>
          <a href="#">Home</a>
          <a href="#">Acerca</a>
        </nav>
      </div>
    </main>
  );
}