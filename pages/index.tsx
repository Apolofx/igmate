import { useEffect } from "react";
import { addScript } from "../utils";
import styles from "../styles/Home.module.css";

declare global {
  interface Window {
    FB: FB;
  }
}

export default function Home() {
  const facebookLoadCallback = () => {
    window.FB.init({
      appId: "694615628661651",
      cookie: true,
      xfbml: true,
      version: "v15.0",
    });
    window.FB.getLoginStatus((res: any) => {
      if (res?.status === "unknown") window.FB.login(console.log);
    });
  };

  useEffect(() => {
    addScript(facebookLoadCallback);
  }, []);
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1>IGMATE</h1>
      </main>

      <footer className={styles.footer}></footer>
    </div>
  );
}
