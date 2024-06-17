import Logo from "../../assets/LOGO1-Photoroom.png";
import { SocialIcon } from "react-social-icons";

const Footer = () => {
  return (
    <footer className="grid md:grid-cols-2 md:p-36 p-5 md:gap-96 gap-10 bg-buttonClicked-0">
      <div className="grid md:gap-16 md:order-1 order-2 gap-5">
        <div className="flex gap-2 hover:cursor-pointer">
          <img
            className="md:size-24 size-10"
            src={Logo}
            alt="logo not available"
          />
          <p className="font-Gilroy_Bold md:text-8xl text-5xl my-auto text-white flex-1">
            CodeCircle
          </p>
        </div>
        <p className="text-white">Developed By Kunal Bhatia 🚀</p>
        <p className="text-white">©2024 CodeCircle</p>
      </div>
      <div className="grid md:gap-8 gap-5 md:order-2 order-1">
        <div className="grid grid-cols-2 gap-5">
          <a className="text-white" href="">
            About
          </a>
          <a className="text-white" href="">
            Pricing
          </a>
          <a className="text-white" href="">
            Contact Us
          </a>
          <a className="text-white" href="">
            Blog
          </a>
          <a className="text-white" href="">
            Terms Of Service
          </a>
          <a className="text-white" href="">
            Click Me
          </a>
        </div>
        <div className="flex gap-5">
          <SocialIcon bgColor="#141414" url="https://x.com" />
          <SocialIcon bgColor="#141414" url="https://github.com" />
          <SocialIcon bgColor="#141414" url="https://instagram.com" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
