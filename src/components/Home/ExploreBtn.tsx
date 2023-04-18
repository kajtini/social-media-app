import { Link } from "react-router-dom";

const ExploreBtn = () => {
  return (
    <Link
      to="/feed"
      className="py-3 px-12 bg-gradient-to-b from-accent to-accent-dark rounded-xl active:scale-95 transition-all hover:scale-105"
    >
      Explore!
    </Link>
  );
};

export default ExploreBtn;
