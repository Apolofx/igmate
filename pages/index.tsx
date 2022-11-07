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
  };

  const login = () => {
    window.FB.login(console.log);
  };

  const logout = () => {
    window.FB.logout(console.log);
  };

  useEffect(() => {
    addScript(facebookLoadCallback);
  }, []);
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1>IGMATE</h1>

        <button onClick={login}>Log In</button>
        <br />
        <button onClick={logout}>Log Out</button>
      </main>

      <footer className={styles.footer}></footer>
    </div>
  );
}
