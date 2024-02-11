import { IntroCard } from "./components";
import classes from "./home.module.scss";

export default function Home() {
  return (
    <section className={`container ${classes["home-page-wrapper"]}`}>
      <div className={classes["home-rows-1"]}>
        <IntroCard />
      </div>
    </section>
  );
}
