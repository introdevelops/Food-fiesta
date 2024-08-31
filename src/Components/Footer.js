import { Link } from "react-router-dom";
import logo from "../Images/Logo.png";


const Footer = () => {
  const LinksCss =
    "font-normal lg:text-base md:text-base text-xs lg:pt-3 md:pt-3 pt-2 text-gray-600 lg:tracking-wide tracking-wider md:tracking-wide  cursor-pointer";
  const titleCss =
    "font-extrabold lg:text-lg md:text-lg text-base text-gray-70 tracking-wide lg:pb-4 md:pb-4 pb-2";

  return (
    <div>
      <div className="flex justify-center items-start lg:px-12  md:px-12 px-4 lg:flex-row md:flex-row flex-row bg-zinc-300 lg:gap-10 md:gap-10 gap-16 lg:w-12/12 md:w-12/12 w-12/12 lg:py-16 md:py-16 py-10 pb-20 flex-wrap" >
        <div className=" lg:w-3/12 w-4/12 md:w-3/12 ">
          <div className="flex justify-center items-center flex-col gap-2 rounded-full">
            <img className="lg:w-32 w-16 rounded-full md:w-28" src={logo}></img>
            <span className="font-extrabold ;lg:text-lg md:text-lg text-base text-gray-600 tracking-wide">
             
            </span>
            <div className="flex justify-evenly md:gap-4 gap-3 lg:gap-5 items-center flex-row">
              <Link
                target="_self"
                to={""}
              >
                <span className="text-white lg:text-2xl text-xl md:text-2xl">
                  <i className="ri-instagram-line bg-gray-500 rounded-md"></i>
                </span>
              </Link>
             
              <Link
                target="_self"
                to={""}
              >
                <span className="text-white lg:text-2xl text-xl md:text-2xl">
                  <i className="ri-facebook-box-fill bg-gray-500 rounded-md"></i>
                </span>
              </Link>
              <Link target="_self" to={""}>
                <span className="text-white lg:text-2xl text-xl md:text-2xl">
                  <i className="ri-twitter-x-fill bg-gray-500 rounded-md"></i>
                </span>
              </Link>
            </div>
          </div>
        </div>

        <div className="lg:w-2/12 w-4/12 md:w-2/12">
          <span className={titleCss}>Company</span>
          <ul>
            <li className={LinksCss}>About</li>
            <li className={LinksCss}>Careers</li>
            <li className={LinksCss}>Team</li>
            <li className={LinksCss}>Foody Instamart</li>
            <li className={LinksCss}>Foody One</li>
          </ul>
        </div>
        <div className="lg:w-2/12 w-4/12 md:w-2/12">
          <span className={titleCss}>Help Us</span>
          <ul>
            <li className={LinksCss}>Help & Support</li>
            <li className={LinksCss}>Partner with us</li>
            <li className={LinksCss}>Ride with us</li>
            <li className={LinksCss}>Privacy Policy</li>
            <li className={LinksCss}>Cookies</li>
          </ul>
        </div>
        <div className="lg:w-2/12 w-4/12 md:w-2/12 ">
          <span className={titleCss}>Available in</span>
          <ul>
            <li className={LinksCss}>Bangalore</li>
            <li className={LinksCss}>Agra</li>
            <li className={LinksCss}>Pune</li>
            <li className={LinksCss}>Gurgaon</li>
            <li className={LinksCss}>Hyderabad</li>
            <li className={LinksCss}>Delhi</li>
            <li className={LinksCss}>Mumbai</li>
          </ul>
        </div>
      </div>
      <div className="bg-[rgba(127,132,129,0.92)] text-white text-center py-1">
        <span className="tracking-wide font-thin">
          © All Rights Reserved 
        </span>
      </div>
    </div>
  );
};
export default Footer;
