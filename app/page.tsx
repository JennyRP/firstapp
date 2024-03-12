import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main>
      <div className={styles.container}>
        <nav className={styles.navbar}>
          <a href="#">Home</a>
          <a href="#">Acerca de</a>
        </nav>

        <div className="flex justify-center items-center h-screen">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">Rivera Paz Jenny TI03SM-22</h2>
            <Image
              src="https://albumizr.com/ia/e9cce529d1c5451ab5d556cb70bc2d7c.jpg"
              alt="Paisaje del videojuego The legend of Zelda: Breath of the wild "
              width={400}
              height={300} // Agrega la propiedad height aquí
            />
          </div>
        </div>
      </div>
    </main>
  );
}
