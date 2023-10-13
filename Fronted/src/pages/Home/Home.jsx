import { useLoaderData } from "react-router-dom";
import Banner from "../../components/Header/Banner/Banner";
import Products from "../../components/Products/Products";
import CoffeeQuality from "../../components/CoffeeQuality/CoffeeQuality";
import FollowUs from "../../components/FollowUs/FollowUs";

const Home = () => {
  const coffeData = useLoaderData();
  return (
    <div className="">
      <Banner />
      <CoffeeQuality />
      <Products coffeData={coffeData} />
      <FollowUs />
    </div>
  );
};

export default Home;
