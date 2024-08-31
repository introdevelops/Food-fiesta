import logo from "../Images/Logo.png";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";



// Header component..

const Header = () => {
  const cartItems = useSelector((store) => store.cart.items);


 

  const spanCsss2 = "font-bold text-sm";
  const linkCss2 =
    "text-gray-600 flex  justify-center items-center flex-col  hover:text-red-600";


  const spanCsss = "pr-12 lg:pr-6 lg:text-sm xl:pr-12 xl:text-base font-bold";
  const linkCss = "text-gray-600 hover:text-red-600";

  

  return (
  
     <div className="h-16 sm:h-20 md:h-18 lg:h-18 xl:h-20 w-full flex justify-between items-center overflow-hidden px-4 sm:px-10 md:px-8 lg:px-10 xl:px-10 py-5 z-10 shadow-lg md:shadow-xl lg:shadow-xl fixed top-0 m-auto  bg-white">
        <div className="py-5 bg-transparent bg-contain rounded-xl">
          {/* logo */}
          <Link to="/">
            <img
              className="w-14 sm:w-14 md:w-22 lg:w-26  xl:w-28 duration-200 ease-in bg-gray-100 rounded-full"
              src={logo}
              alt="Logo"
            />
          </Link>
        </div>





  <div className="lg:hidden">
        <div className="w-[50vw] flex justify-evenly items-center absolute left-[24vw] top-0 z-10 flex-row lg:hidden py-4 px-2 pt-2 bg-white-300">
      <Link to={"/"}>
        <div className={linkCss2}>
          <i className="ri-home-4-line text-xl font-bold "></i>
          <span className={spanCsss2}>Home</span>
        </div>
      </Link>

      <Link to={"/offers"}>
        <div className={linkCss2}>
          <i className="ri-gift-line text-xl font-bold  "></i>
          <span className={spanCsss2}>Offers</span>
        </div>
      </Link>

      <Link to={"/help"}>
        <div className={linkCss2}>
          <i className="ri-customer-service-line text-xl font-bold "></i>
          <span className={spanCsss2}>Help</span>
        </div>
      </Link>

      <Link to={"/cart"}>
        <div className={linkCss2}>
          <i className="ri-shopping-cart-2-line text-xl  font-bold "></i>
          <span className={spanCsss2}>Cart</span>
        </div>
      </Link>

    </div>
  
  </div>

          
   <div className="flex items-center justify-center flex-row">
          <div className=" justify-center items-center  hidden  lg:flex ">
            <ul className="flex items-center justify-center flex-row">

              <Link to={"/"}>
                <div className={linkCss}>
                  <i className="ri-home-4-line text-lg lg:text-base lg:pr-1 lg:font-semibold pr-2 font-bold  "></i>
                
                  <span className={spanCsss}>Home</span>
                </div>
              </Link>

              <Link to={"/offers"}>
                <div className={linkCss}>
                  <i className="ri-gift-line text-lg lg:text-base lg:pr-1 lg:font-semibold pr-2 font-bold  "></i>
                  <span className={spanCsss}>Offers</span>
                </div>
              </Link>

              <Link to={"/help"}>
                <div className={linkCss}>
                  <i className="ri-customer-service-line lg:text-base lg:pr-1 lg:font-semibold text-lg pr-2 font-bold  "></i>
                  <span className={spanCsss}>Help</span>
                </div>
              </Link>

              <Link to={"/cart"}>
                <div className={linkCss}>
                  <i className="ri-shopping-cart-2-line lg:text-base lg:pr-1 lg:font-semibold text-lg pr-2 font-bold  "></i>
                  <span className={spanCsss}>Cart ({cartItems.length})</span>
                </div>
              </Link>
            
            </ul>
          </div>

         
        </div>
      </div>


      
     


  );
};

export default Header;
