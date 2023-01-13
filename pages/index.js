import styles from "../styles/Home.module.css";
import Menu from "../components/Menu/Menu";
import Footer from "../components/Menu/Footer";
import Accueil from "../components/Home/Accueil";



export default function Home() {
  return (
      <main className={styles.main}>
          <Menu />
          <Accueil />
          <Footer />
      </main>
  );
}
