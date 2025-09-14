import Image from "next/image";
import styles from "./page.module.scss";
// import Navbar from "@/components/ui/Navbar/Navbar";
// import Navbar from "../../components/ui/Navbar/Navbar";
import Navbar from "@/src/components/ui/Navbar/Navbar"

export default function Home() {
  return (
    <div >
      <main className={styles.bgr}> 
        <Navbar />
        <div className={styles.description}>
          <h1>Meet our Travel Advisors
            and find your perfect match!</h1>
          <h3>Ready to actually enjoy your next family vacation?</h3>
        </div>

      </main>
      <footer>
      </footer>
    </div>
  )
}
