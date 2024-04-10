
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { useRouter } from "next/router";
import Link from "next/link"

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const router = useRouter();
  const pathHandler = (e)=> {
   e.preventDefault();
    router.push(e.target.value)
  }
  return (
    <main >
        <h2 className={styles.title}>hello</h2>
        <div className={styles.cardContainer}>

        <div className={styles.card}>
          <h2>Types</h2>
          <select onChange={pathHandler}>
            <option value="#">--choose a types</option>
            <option value="/dynamics">Dynamics</option>
          </select>
        </div>
        <div className={styles.card}>
          <h2>Room 3d model</h2>
         <Link href={"/habitacionModel"}>room 3d model</Link>
        </div>
        </div>
     
    </main>
  );
}
