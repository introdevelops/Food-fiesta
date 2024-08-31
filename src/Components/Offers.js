import Card from "./Card";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../Utils/useOnlineStatus";
import { RETAURANTS_LIST } from "../Utils/constants";
import SomethingWrong from "../Utils/SomethingWrong";
import LoadingScreen from "../Utils/LoadingScreen";
import offerImageOne from "../Images/offerImageOne.jpg";
import offerImageTwo from "../Images/offerImageTwo.jpg";
import offerImageThree from "../Images/offerImageThree.jpg";




const Offers = () => {
  const [restaurantList, setRestaurantList] = useState(null);
  const [filteredRestaurantList, setFilteredRestaurantList] = useState(null);
  const [bestCuisines, setBestCuisines] = useState(null);
  const [bestRestaurants, setBestRestaurants] = useState(null);
  const [searchTxt, setSearchTxt] = useState("");
  const [filter, setFilter] = useState(false);

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
    return <h2>Your Offline</h2>;
  }

  if (restaurantList === null) {
    return <LoadingScreen />;
  }

  if (filteredRestaurantList === undefined) {
    return <SomethingWrong />;
  }

  const filterBtnCss =
   "bg-zinc-400 border-2 text-white shadow-md border-solid border-zinc-300 px-1.5 text-xs lg:text-base lg:px-3.5 py-1 lg:py-1.5 rounded-md lg:rounded-md mr-1 lg:mr-4";

  const linksCss =
    "lg:text-[10px] md:text-[10px] text-[8px] text-gray-400 font-bold pr-1";

  return (
    <div className="flex justify-between items-center  flex-col lg:px-16 lg:my-12 md:px-16 px-6 my-8 md:my-10 transform translate-y-[50px] ">
     
      <div className="flex lg:mt-3 mt-1 md:mt-3 justify-evenly lg:gap-4 gap-2 md:gap-3 items-center flex-row bg-gray-100 h-[70vh] w-[90%] rounded-xl">
        <img
          className="lg:w-56 md:w-40 sm:w-32 w-20 shadow-xl rounded-xl "
          src={offerImageOne}
        ></img>
        <img
          className="lg:w-56 md:w-40 sm:w-32 w-20 shadow-xl rounded-xl"
      src={offerImageTwo}
        ></img>
        <img
          className="lg:w-56 md:w-40 sm:w-32 w-20 shadow-xl rounded-xl"
          src={offerImageThree}
        ></img>
      </div>
      <div className="lg:w-full lg:px-12 md:w-full md:px-12 w-full  text-left mx-auto lg:pt-5 md:pt-4 pt-2">
        <Link to={"/"}>
          <span className={linksCss}>Home</span>
        </Link>
        <span className={linksCss}>/</span>
        <span className="lg:text-[10px] md:text-[10px] text-[8px] text-gray-700 font-bold pr-1">
          Offfers
        </span>
      </div>

      
      <span
        className="w-full text-left lg:pb-6 lg:px-12 md:pb-6 md:px-12 mt-4 font-black lg:text-2xl md:text-2xl text-xl tracking-tight  text-red-700"
        style={{ wordSpacing: 3.5 }}
      >
        Restaurants with online food delivery in Agra
      </span>
      <div className="w-full flex justify-between items-center lg:-ml-6 lg:px-16 md:px-16 lg:my-1 md:my-2 my-4">
        <div className="flex justify-between items-center">
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
             
              const highRating = restaurantList.filter(
                (rest) => rest.info.avgRating > 4.2
              );
              setFilteredRestaurantList(highRating);
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
            Faster Delivery
          </button>
        </div>

        <div className="hidden sm:flex">
         
        </div>
      </div>
      <div className="flex justify-center lg:justify-start items-center  flex-wrap gap-10 my-2 px-12 mt-12 ">
        {
          filteredRestaurantList?.map((resItem) => (
            <Link to={"/restaurant/" + resItem.info.id} key={resItem.info.id}>
              {<Card resData={resItem} />}
            </Link>
          )) 
        }
      </div>
      <br></br>
      <br></br>
    </div>
  );
};
export default Offers;
