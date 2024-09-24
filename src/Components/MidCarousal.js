import React, { useState, useEffect } from "react";
import { CarousalCard } from "./CarousalCard";
import { RETAURANTS_LIST } from "../Utils/constants";
import ShimmerMidCarousal from "../Shimmers/ShimmerMidCarousal";

const MidCarousal = () => {
  const [carausalData,setCarousalData] = useState(null);
  const [midCarousalTitle, setMidCarousalTitle] = useState(null);

 
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(RETAURANTS_LIST);
    const json = await data.json();
    setCarousalData(
      json?.data?.cards[0]?.card?.card?.imageGridCards?.info ||
        json?.data?.cards[1]?.card?.card?.imageGridCards?.info
          );
    setMidCarousalTitle(
      json?.data?.cards[0]?.card?.card?.header?.title ||
        json?.data?.cards[1]?.card?.card?.header?.title
          );
  };

  if (carausalData === null) {
    return <ShimmerMidCarousal />;
  }
  if (carausalData === undefined) {
    return <ShimmerMidCarousal />;
  }

  return (
    carausalData && (
      <div className="mt-28">
      <div
        className="slider lg:px-16 lg:my-10 md:px-16 my-3 md:my-5 w-8/12 pt-3 bg-gray-200 rounded-md"  
      >
        <div className="w-10/12 lg:pb-2 md:pb-2 pb-2 pt-2">
          {carausalData && (
            <span
              className="w-full text-left lg:pb-6  md:pb-6  mt-4 font-extrabold lg:text-2xl md:text-2xl text-xl tracking-tight text-red-700"
              style={{ wordSpacing: 3 }}
            >
              What's on your mind?
            </span>
          )}
        </div>

        <div className="slider__content md:pt-3  pt-2 pl-3">
          {carausalData?.map((rest) => (
           
            <CarousalCard key={rest?.id} restData={rest} />
           
          ))}
        </div>
        <hr></hr>
        
      </div>
      </div>
    )
  );
};

export default MidCarousal;
