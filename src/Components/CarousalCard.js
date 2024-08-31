
import { IMG_URL } from "../Utils/constants";

export const CarousalCard = (props) => {
  const { restData } = props;
  return (

    <div className="slider__item2 rounded-3xl shadow-md h-40 bg-transparent" >
      <img 
        className=" h-40 tranform -translate-y-[1%] rounded-3xl"
        src={IMG_URL + restData.imageId}
        alt={restData.accessibility.altText}
      />
    </div>
  );
};

