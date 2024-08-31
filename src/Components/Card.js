import { IMG_URL } from "../Utils/constants";

const Card = (props) => {
  const { resData } = props;
  const { name, sla, cuisines, avgRating, areaName } = resData?.info;

  

 

  
  return (
    <div className="w-[300px] lg:w-[220px] md:w-[220px] group hover: rounded-xl hover:scale-95 transition-transform ease-in cursor-pointer relative border lg:shadow-md">
      <div className="relative">
        <img
          className="w-full h-[210px] lg:h-[140px] md:h-[140px]  rounded-xl"
          src={IMG_URL + resData.info.cloudinaryImageId}
          alt={name}
        />
        
      </div>
      <div className=" bg-gray-50 rounded-md">
      <p className="p-3 py-1 text-lg font-bold leading-6 tracking-[-0.3px] text-[#000711bf]">
        {name.length > 20 ? `${name.substr(0, 20)}...` : name}
      </p>
         
      <div className="px-3 py-1 flex items-center gap-1 text-[#02060CBF] font-bold">
        
    <i className="ri-star-line"></i>
      <span>{avgRating}</span>
      <div className="w-1 h-1 bg-black rounded-full"></div>
        <span>{sla.deliveryTime} min</span>
      </div>
      <p className="px-3 py-1 text-[#02060C99] text-base leading-4 tracking-[-0.3px] line-clamp-1">
        {cuisines.length > 3
          ? `${cuisines.slice(0, 2).join(", ")}...`
          : cuisines.join(", ")}
      </p>
      <p className="px-3 pb-2 text-[#00040999] text-base leading-4 tracking-[-0.3px]">
        {areaName}
      </p>
    </div>
    </div>
  );
};

export default Card;
