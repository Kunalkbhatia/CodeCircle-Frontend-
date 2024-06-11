import { useEffect, useState } from "react"
import Logo from "../../assets/LOGO1-Photoroom.png"
import Rotator from "../../assets/Logo4.png"
import { ButtonHeadings, Description } from "./content"
import FeatureButton from "./FeatureButton"
import { SocialIcon } from "react-social-icons"

const Landing = () => {

    const [id,setId] = useState<number>(1);
    useEffect(()=> {
        const timer:number = setTimeout(()=> {
            setId(prev => (prev === 6 ? 1 : prev+1));
        },3000);

        return ()=> {
            clearTimeout(timer);
        }
    })

  return (
    <div id="wrapper" className="bg-landingPrimary-0">
      <nav className="flex justify-between md:p-5 md:mx-16 mx-2">
        {/* logo */}
        <div className="flex justify-between md:gap-2 hover:cursor-pointer">
            <img className="size-14" src={Logo} alt="logo not available" />
            <p className="font-Gilroy_Bold md:text-4xl text-2xl my-auto text-black flex-1">CodeCircle</p>
        </div>

        {/* login/signup  */}
        <div className="flex justify-center md:gap-8 gap-1">
            <button className="text-black md:text-2xl font-Gilroy_Medium md:px-5 px-3 border-black border-2 rounded-md bg-white hover:shadow-2xl">Login</button>
            <button className="text-white md:text-2xl font-Gilroy_Medium md:px-5 px-3 border-white border-2 rounded-md bg-slate-900 hover:shadow-2xl">Sign up free</button>
        </div>
      </nav>

        {/* intro section  */}
      <div className= "grid md:grid-cols-2 gird-col-1 md:mx-16 md:p-5 md:my-16 mx-5 my-8">
        <div className="container-intro col-span-1">
            <h1 className="md:text-6xl text-6xl font-Gilroy_Medium ">Your tech journey starts here: <span className="md:text-8xl text-8xl">Learn, Network, and Innovate</span></h1>
        </div>
        <div className="container_img md:block">
            <img className="w-[70%]" src={Rotator} alt="" />
        </div>
        <div className="md:col-span-2 col-span-1 flex justify-center md:py-6 py-2">
            <a href="#features-section" className="md:text-4xl text-2xl font-Gilroy_Medium text-slate-900 md:p-4 p-2 border-2 border-gray-300 rounded-lg hover:bg-slate-900 hover:text-white transition-all">Explore Feature</a>
        </div>
      </div>

      {/* feature sections  */}

      <div id="features-section" className="flex flex-col justify-center content-center bg-featureBg-0">
                <h2 className="text-center md:text-6xl text-4xl font-Gilroy_Medium md:mt-32 md:mb-5 mt-10">For people <span className="font-Gilroy_Bold">making Impact</span></h2>
                <div className="flex justify-center flex-wrap gap-5 md:my-20 my-10">
                    {
                        ButtonHeadings.map((heading,index)=> (<FeatureButton key={index} id={id} setId={setId} index={index+1} heading={heading} />))
                    }
                </div>
                <p className="md:text-2xl md:mx-72 mx-10 md:h-72 mb-16 h-80 md:px-10 px-12 py-12 md:pt-16 rounded-3xl font-DM_Serif_Text bg-white text-justify text-slate-900 ">{Description[id-1]}</p>
        </div>

        {/* footer section  */}
        <footer className="grid md:grid-cols-2 md:p-36 p-5 md:gap-96 gap-10 bg-buttonClicked-0">
            <div className="grid md:gap-16 md:order-1 order-2 gap-5">
                <div className="flex gap-2 hover:cursor-pointer">
                    <img className="md:size-24 size-10" src={Logo} alt="logo not available" />
                    <p className="font-Gilroy_Bold md:text-8xl text-5xl my-auto text-white flex-1">CodeCircle</p>
                </div>
                <p className="text-white">Developed By Kunal Bhatia 🚀</p>
                <p className="text-white">©2024 CodeCircle</p>
            </div>
            <div className="grid md:gap-8 gap-5 md:order-2 order-1">
                <div className="grid grid-cols-2 gap-5">
                    <a className="text-white" href="">About</a>
                    <a className="text-white" href="">Pricing</a>
                    <a className="text-white" href="">Contact Us</a>
                    <a className="text-white" href="">Blog</a>
                    <a className="text-white" href="">Terms Of Service</a>
                    <a className="text-white" href="">Click Me</a>

                </div>
                <div className="flex gap-5">
                    <SocialIcon bgColor="#141414" url="https://x.com" />
                    <SocialIcon bgColor="#141414" url="https://github.com" />
                    <SocialIcon bgColor="#141414" url="https://instagram.com" />

                </div>
            </div>
        </footer>
    </div>
  )
}

export default Landing
