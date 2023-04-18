import ExploreBtn from "./ExploreBtn";
import TitleMessage from "./TitleMessage";

const Home = () => {
  return (
    <section className="flex-grow w-full flex flex-col items-center justify-center max-w-xs sm:max-w-screen-sm gap-7">
      <TitleMessage />
      <ExploreBtn />
    </section>
  );
};

export default Home;
