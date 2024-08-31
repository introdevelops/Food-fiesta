import loading from "../Images/bikeLoading.gif";

const LoadingScreen = () => {
  return (
    <div className="w-12/12 mx-auto  flex justify-center flex-col items-center h-screen">
      <img className="lg:w-52 md:w-40 w-36 mx-auto" src={loading}></img>
      <span className="lg:text-lg pt-2 text-gray-600 font-semibold text-base  md:text-lg">
        Loading...
      </span>
    </div>
  );
};
export default LoadingScreen;
