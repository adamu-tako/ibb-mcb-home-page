import NewsCarousel from "../components/NewsCarousel";
import Overview from "../components/Overview";
import ResearchInterest from "../components/ReseaerchInterests";

const Homepage = () => {
  return (
    <div>
      <NewsCarousel />
      <div className="mt-10 w-[full]">
        <Overview />
        <ResearchInterest />
      </div>
    </div>
  );
};

export default Homepage;
