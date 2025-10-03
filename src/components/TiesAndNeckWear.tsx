
import Ties from "../assets/Ties.webp"
const TiesAndNeckWear = () => {

  return (
    <section className=" bg-black">
      <div className="relative w-full overflow-hidden">
        <img
            src={Ties}
            className="w-full h-[800px] object-cover transition-transform duration-500 group-hover:scale-105"
        />
        
      </div>
    </section>
  );
};

export default TiesAndNeckWear;