import { expertise } from "@/data/expertise";
import styles from "./page.module.css"; 

export default function Home() {
  return (
    <main>
      <section className="hero">
        <h1>WHO WE ARE</h1>
        <p>
          Designed in Belgium, SUPRATEL® is a global telecommunications leader
          specializing in comprehensive fiber optic infrastructure solutions.
        </p>
      </section>

      <section className="expertise">
        <h2>3. OUR EXPERTISE</h2>
        <div className="grid">
          {expertise.map((item) => (
            <div className="card" key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}