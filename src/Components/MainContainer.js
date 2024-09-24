import Card from "./Card";
import { useEffect, useState } from "react";
import ShimmerUI from "../Shimmers/ShimmerUI";
import { Link } from "react-router-dom";
import useOnlineStatus from "../Utils/useOnlineStatus";
import { RETAURANTS_LIST } from "../Utils/constants";
import CuisinesCards from "./CuisinesCards";
import SomethingWrong from "../Utils/SomethingWrong";


const MainContainer = () => {
  const [restaurantList, setRestaurantList] = useState(null);
  const [filteredRestList, setFilteredRestaurantList] = useState(null);
  const [bestCuisines, setBestCuisines] = useState(null);
  const [bestRestaurants, setBestRestaurants] = useState(null);
  const [searchTxt, setSearchTxt] = useState("");
  const [filter, setFilter] = useState(false);

  //custom hook
  const OnlineStatus = useOnlineStatus();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(RETAURANTS_LIST);
    const json = await data.json();

    setRestaurantList(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants ||
        json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
    );

    setFilteredRestaurantList(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants ||
        json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
    );

    setBestCuisines(json?.data?.cards[7]?.card?.card);
    setBestRestaurants(json?.data?.cards[6]?.card?.card);
  };

  
  const filterToggle = () => {
    setFilter(!filter);
  };

  if (OnlineStatus === false) {
    return <h1>Not Connected to Internet!!!</h1>;
  }

  if (restaurantList === null) {
    return <ShimmerUI />;
  }

  if (filteredRestList === undefined) {
    return <SomethingWrong />;
  }

  const filterBtnCss =
    "bg-zinc-400 border-2  text-white shadow-md border-solid border-zinc-300 px-1.5 text-xs lg:text-base lg:px-3.5 py-1 lg:py-1.5 rounded-md lg:rounded-md mr-1 lg:mr-4";

  return (
    <div className="flex justify-between items-center  flex-col lg:px-16 lg:my-10 md:px-16 px-6 my-2 md:my-5 w-full ">
    
     <span
        className="w-full text-left lg:pb-6 lg:px-12 md:pb-6 md:px-12 mt-4 text-red-700 font-black lg:text-2xl md:text-2xl text-xl tracking-tight "
        style={{ wordSpacing: 3.5 }}
      >
        Restaurants with online food delivery in Delhi
      </span>

      <div className="w-full flex justify-between items-center lg:px-16 md:px-16 lg:my-1 md:my-2 my-4 transform lg:-translate-x-4">
        <div className=" flex justify-between items-center">
          <button
            className="bg-zinc-400 border-2 shadow-sm border-solid border-zinc-200 px-2 text-xs lg:text-base lg:px-3.5 py-1 lg:py-1.5 rounded-md lg:rounded-md mr-2 lg:mr-4 text-white"
            onClick={filterToggle}
          >
            {filter ? (
            <i class="ri-arrow-left-line"></i>
            ) : (
              <i className="ri-search-line"></i>
            )}
          </button>
          {!filter && (
            <div>
              <button
                className={filterBtnCss}
                onClick={() => {
                  setFilteredRestaurantList(restaurantList);
                }}
              >
                All
              </button>
              <button
                className={filterBtnCss}
                onClick={() => {
                  const HighRated = restaurantList.filter(
                    (rest) => rest.info.avgRating > 4.2
                  );
                  setFilteredRestaurantList(HighRated);
                }}
              >
                High Rating
              </button>
              <button
                className={filterBtnCss}
                onClick={() => {
                  const isVeg = restaurantList.filter(
                    (rest) => rest.info.veg === true
                  );
                  setFilteredRestaurantList(isVeg);
                }}
              >
                Vegetarian
              </button>
              <button
                className={filterBtnCss}
                onClick={() => {
                  const deliveryTimeList = restaurantList.filter(
                    (rest) => rest.info.sla.deliveryTime < 25
                  );
                  setFilteredRestaurantList(deliveryTimeList);
                }}
              >
                Delivery Time
              </button>
            </div>
          )}
        </div>

        {filter && (
          <div className="lg:transform -translate-x-96">
            <input
              type="text"
              placeholder="Search Your Food"
              className="lg:py-3 lg:pr-24 md:pr-10 lg:pl-5 rounded-xl lg:text-sm py-1 pr-16 pl-2 text-xs border-2 border-gray-300  "
              value={searchTxt}
              onChange={(e) => {
                setSearchTxt(e.target.value);
              }}
            ></input>
            <button
              className="lg:py-3 lg:px-6 py-1 px-2 border-none rounded-xl lg:text-base text-sm font-bold text-white cursor-pointer bg-red-600 lg:ml-8"
              onClick={() => {
                let filterSearch = restaurantList.filter((rest) =>
                  rest.info.name.toLowerCase().includes(searchTxt.toLowerCase())
                );
                setFilteredRestaurantList(filterSearch);
              }}
            >
              Search
            </button>
          </div>
        )}
      </div>

      <div className="flex justify-center lg:justify-start items-center  flex-wrap gap-10 my-2 px-12 mt-12 ">
        {
          filteredRestList?.map((resItem) => (
            <Link to={"/restaurant/" + resItem.info.id} key={resItem.info.id}>
              {<Card resData={resItem} />}
            </Link>
          )) 
        }
      </div>

      <div className=" justify-between items-start flex-col my-5 px-12 w-12/12 border-t-2 pt-8 hidden lg:flex">
        <span
          className="w-full text-left  pb-8 font-black text-2xl tracking-tight"
          style={{ wordSpacing: 3.5 }}
        >
        <span className="text-red-700">  {bestCuisines.title}</span>
        </span>
        <div className="mt-3 flex justify-start items-start gap-4 flex-wrap flex-row">
          {" "}
          <CuisinesCards data={bestCuisines} />
        </div>
      </div>

      <div className=" justify-between items-start flex-col my-5 px-12 w-12/12 border-t-2 pt-8 hidden lg:flex">
        <span
          className="w-full text-left  pb-8 font-black text-2xl tracking-tight"
          style={{ wordSpacing: 3.5 }}
        >
        <span className="text-red-700">{bestRestaurants.title}</span>  
        </span>
        <div className="mt-3 flex justify-start items-start gap-4 flex-wrap flex-row">
          {" "}
          <CuisinesCards data={bestRestaurants} />
        </div>
      </div>
    </div>
  );
};
export default MainContainer;
