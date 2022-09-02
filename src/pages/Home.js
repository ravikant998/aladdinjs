import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import TopAdsBanner from "../components/TopAdsBanner";
import Banner from "../components/Banner";
import Trending from "../components/Trending";
import Ourcoreservices from "../components/Ourcoreservices";
import { gethompageAction } from "../store/actions";
import BottomAdsBanner from "../components/BottomAdsBanner";

const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    gethompageAction(dispatch);
  }, [dispatch]);
  return (
    <>
      <Banner />
      <Trending />
      <TopAdsBanner />
      <Ourcoreservices />
      <BottomAdsBanner />
    </>
  );
};

export default Home;
