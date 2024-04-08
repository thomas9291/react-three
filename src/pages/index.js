
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { useRouter } from "next/router";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const router = useRouter();
  const pathHandler = (e)=> {
   e.preventDefault();
    router.push(e.target.value)
  }
  return (
    <>
        <div className={styles.cardContainer}>
        <h2>hello</h2>

        <div className={styles.card}>
          <h2>Types</h2>
          <select onChange={pathHandler}>
            <option value="#">--choose a types</option>
            <option value="/dynamics">Dynamics</option>
          </select>
        </div>
        </div>
     
    </>
  );
}
