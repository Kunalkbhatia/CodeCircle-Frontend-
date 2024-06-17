import { Description, bgColors } from "../../Content/content";
import { DescriptionImages } from "../../Content/content";

const FeaturesDetails = () => {
  return (
    <section>
      {Description.map((description, index) => (
        <div
          key={index}
          className={`grid grid-cols-2 p-16 h-screen`}
          style={{ backgroundColor: bgColors[index] }}
        >
          <div className={`${index % 2 === 0 ? "order-1" : "order-2"}`}>
            <p className="text-5xl font-Gilroy_Bold leading-normal text-white">{description}</p>
          </div>
          <div className="order-1">
            <img className="w-[70%] rounded-3xl mx-auto" src={DescriptionImages[index]} alt="" />
          </div>
        </div>
      ))}
    </section>
  );
};

export default FeaturesDetails;
