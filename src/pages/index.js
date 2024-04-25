import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { useRouter } from "next/router";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const router = useRouter();
  const pathHandler = (e) => {
    e.preventDefault();
    router.push(e.target.value);
  };
  return (
    <main>
      <h2 className={styles.title}>React Three demo.</h2>
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
        <div className={styles.card}>
          <h2>Instance Mesh</h2>
          <Link href={"/instanceMesh"}>Let go</Link>
        </div>
        <div className={styles.card}>
          <h2>Sensor</h2>
          <Link href={"/sensor"}>Let go</Link>
        </div>
        <div className={styles.card}>
          <h2>PostProcessing</h2>
          <select onChange={pathHandler}>
            <option value="#">--choose a filter</option>
            <option value="/processingStarting">Pixelation and Vignette</option>
            <option value="/brightnessContrast">brightness Contrast</option>
            <option value="/chromaticAberration">Chromatic Aberration</option>
            <option value="/scanline">Scanline</option>
            <option value="/grid">Grid</option>
            <option value="/dotScreen">DotScreen</option>
            <option value="/noise">Noise</option>
            <option value="/glitch">glitch</option>
            <option value="/godRays">godRays</option>
          </select>
        </div>
        <div className={styles.card}>
          <h2>Alien</h2>
          <Link href={"/alien"}>Let go</Link>
        </div>
        <div className={styles.card}>
          <h2>Monkey Eyes</h2>
          <Link href={"/monkey"}>Let go</Link>
        </div>
      </div>
    </main>
  );
}
