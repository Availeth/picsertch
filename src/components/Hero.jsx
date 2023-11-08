import "../styles/hero.css";
import Footer from "./Footer.jsx";
import Navbar from "./Navbar.jsx";
import Spline from "./Spline.jsx";

const Hero = () => {
  return (
    <div className="h-[100vh] bg w-[100%]">
        <Navbar/>
      <div className=" flex justify-between pt-16 overflow-hidden hero">
        <div className="w-[50vw]">
          <h1 className="font-bold mt-[200px] text-8xl text-blue-950 mb-7">
            Need an Image fast?
          </h1>
          <p className="text-4xl mb-6">well then just</p>
          <a href="/search">
          <div className=" relative left-[11.5em] w-max px-2  py-2 text-2xl rounded text-white h-max bg-[#7D74F9] hover:bg-purple-950">
            Sertch Now!
          </div>
          </a>
        </div>

        <div className="h-[80vh] relative w-[50vw]">
          <Spline />
        </div>
      </div>
      <Footer className=""/>
    </div>
  );
};

export default Hero;
