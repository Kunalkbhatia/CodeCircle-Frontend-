import { useEffect, useState } from "react";
import Logo from "../../assets/LOGO1-Photoroom.png";
import Rotator from "../../assets/Designer.jpeg";
import { ButtonHeadings, Features } from "../../Content/content";
import FeatureButton from "./FeatureButton";
import Footer from "./Footer";
import FeaturesDetails from "./FeaturesDetails";

const Landing = () => {
  const [id, setId] = useState<number>(1);
  useEffect(() => {
    const timer: number = setTimeout(() => {
      setId((prev) => (prev === 6 ? 1 : prev + 1));
    }, 3000);

    return () => {
      clearTimeout(timer);
    };
  });

  return (
    <div id="wrapper" className="bg-landingPrimary-0">
      <nav className="flex justify-between md:p-5 md:mx-16 mx-2">
        {/* logo */}
        <div className="flex justify-between md:gap-2 hover:cursor-pointer">
          <img className="size-14" src={Logo} alt="logo not available" />
          <p className="font-Gilroy_Bold md:text-4xl text-2xl my-auto text-black flex-1">
            CodeCircle
          </p>
        </div>

        {/* login/signup  */}
        <div className="flex justify-center md:gap-8 gap-1">
          <button className="text-black md:text-2xl font-Gilroy_Medium md:px-5 px-3 border-black border-2 rounded-md bg-white hover:shadow-2xl">
            Login
          </button>
          <button className="text-white md:text-2xl font-Gilroy_Medium md:px-5 px-3 border-white border-2 rounded-md bg-slate-900 hover:shadow-2xl">
            Sign up free
          </button>
        </div>
      </nav>

      {/* intro section  */}
      <section className="grid md:grid-cols-2 gird-col-1 md:mx-16 md:p-5 md:my-16 mx-5 my-8 gap-x-20">
        <div className="container-intro col-span-1">
          <h1 className="md:text-6xl text-6xl font-Gilroy_Medium ">
            Your tech journey starts here:{" "}
            <span className="md:text-8xl text-8xl">
              Learn, Network, and Innovate
            </span>
          </h1>
        </div>
        <div className="container-img md:block hidden ">
          <img className="w-[70%] rounded-3xl mx-auto" src={Rotator} alt="" />
        </div>
        <div className="md:col-span-2 col-span-1 flex justify-center md:py-6 py-2">
          <a
            href="#features-section"
            className="md:text-4xl text-2xl font-Gilroy_Medium text-slate-900 md:p-4 p-2 border-2 border-gray-300 rounded-lg hover:bg-slate-900 hover:text-white transition-all"
          >
            Explore Feature
          </a>
        </div>
      </section>

      {/* feature sections  */}

      <section
        id="features-section"
        className="flex flex-col justify-center content-center bg-featureBg-0 h-screen"
      >
        <h2 className="text-center md:text-6xl text-4xl font-Gilroy_Medium md:mt-32 md:mb-5 mt-10">
          For people <span className="font-Gilroy_Bold">making Impact</span>
        </h2>
        <div className="flex justify-center flex-wrap gap-5 md:my-20 my-10">
          {ButtonHeadings.map((heading, index) => (
            <FeatureButton
              key={index}
              id={id}
              setId={setId}
              index={index + 1}
              heading={heading}
            />
          ))}
        </div>
        <p className="text-center font-Gilroy_Medium text-5xl min-h-32 text-">{Features[id-1]}</p>
    
      </section>

      {/* Features Details */}
        <FeaturesDetails/>
      {/* footer section  */}
      <Footer/>
    </div>
  );
};

export default Landing;

