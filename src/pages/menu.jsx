import tlcnew from "../assets/tlcnew.jpg";
import tlcgtshirt from "../assets/tlcgtshirt.webp";
import tlcshirt from "../assets/tlcshirt.webp";
import tlcaw from "../assets/tlcaw.webp";
import tlcuw from "../assets/tlcuw.webp";
import tlcvest from "../assets/tlcvest2.jpg";
import tlccoat from "../assets/tlccoat.jpg";
import tlcts from "../assets/tlcts1.jpg";
import tlcshoe from "../assets/tlcshoe.jpg";
import tlclc from "../assets/tlclc.jpg";
import tlcco from "../assets/tlcco.jpg";
import tlckw from "../assets/tlckw.jpg";
import tlctrouser from "../assets/tlctrouser.jpg";
import tlcjoggers from "../assets/tlcjoggers.jpg";
import tlcsuit from "../assets/tlcsuit.jpg";
import tlcdenim from "../assets/tlcdenim1.jpg";
import tlcshorts from "../assets/tlcshorts1.jpg";
import tlccargo from "../assets/tlccargo.webp";
import tlchoodie from "../assets/tlchoodie.jpg";
import tlcTshirt from "../assets/tlcTshirt.jpg";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";


export function Menu() {

    const navigate = useNavigate();

  return (
    <div className="relative text-[#ffd700]">
      <div className="flex flex-col items-center">
      <div className="absolute top-0 pizzanova">
<div className="relative">
<img src={tlcnew} alt="Tlc" className="" />
<Link to="/Shop/NEW IN" className="absolute top-[90%] left-[35%]">
            <button className="rounded-[10px] text-[#ffd700] bg-[#1b2b3a] shopButton px-[3rem] py-[0.5rem]">
              NEW IN
            </button>
          </Link>
</div>
<div className="flex flex-wrap gap-3 mt-[1rem] items-center justify-center">
          <div className="w-[45vw] flex flex-col items-center lg:w-[30vw]" onClick={() => {
                navigate("/Shop/T-Shirts");
              }}>
            <img
              src={tlcTshirt}
              alt="T-Shirt"
              className="funke lg:h-[80vh] w-[40vw]"
            />
            <p className="mt-[0.5rem] text-black font-semibold">T-Shirts</p>
          </div>
          <div className="flex flex-col items-center w-[45vw] lg:w-[30vw]" onClick={() => {
                navigate("/Shop/Vests");
              }}>
            <img
              src={tlcvest}
              alt="Vest"
              className="funke lg:h-[80vh] w-[40vw]"
            />
            <p className="mt-[0.5rem] text-black font-semibold">Vests</p>
          </div>
          <div className="flex flex-col items-center w-[45vw] lg:w-[30vw]" onClick={() => {
                navigate("/Shop/Graphic T-Shirts");
              }}>
            <img
              src={tlcgtshirt}
              alt="Graphic T-Shirts"
              className="funke lg:h-[80vh] w-[40vw]"
            />
            <p className="mt-[0.5rem] text-black font-semibold">Graphic T-Shirts</p>
          </div>
          <div className="flex flex-col items-center w-[45vw] lg:w-[30vw]" onClick={() => {
                navigate("/Shop/Hoodies & SweatShirts");
              }}>
            <img
              src={tlchoodie}
              alt="Hoodies & SweatShirts"
              className="funke lg:h-[80vh] w-[40vw]"
            />
            <p className="mt-[0.5rem] text-black font-semibold">Hoodies & SweatShirts</p>
          </div>
          <div className="flex flex-col items-center w-[45vw] lg:w-[30vw]" onClick={() => {
                navigate("/Shop/Cargos");
              }}>
            <img
              src={tlccargo}
              alt="Cargos"
              className="funke lg:h-[80vh] w-[40vw]"
            />
            <p className="mt-[0.5rem] text-black font-semibold">Cargos</p>
          </div>
          <div className="flex flex-col items-center w-[45vw] lg:w-[30vw]" onClick={() => {
                navigate("/Shop/Shorts");
              }}>
            <img
              src={tlcshorts}
              alt="Shorts"
              className="funke lg:h-[80vh] w-[40vw]"
            />
            <p className="mt-[0.5rem] text-black font-semibold">Shorts</p>
          </div>

        </div>
        <div className="relative mt-[1rem]">
<img src={tlcshirt} alt="Shirts" className="" />
<Link to="/Shop/Shirts" className="absolute top-[70%] left-[35%]">
            <button className="rounded-[10px] text-[#ffd700] bg-[#1b2b3a] shopButton px-[3rem] py-[0.5rem]">
              Shirts
            </button>
          </Link>
</div>
<div className="flex flex-wrap gap-3 mt-[1rem] items-center justify-center">
          <div className="w-[45vw] flex flex-col items-center lg:w-[30vw]" onClick={() => {
                navigate("/Shop/Tracksuits");
              }}>
            <img
              src={tlcts}
              alt="Tracksuits"
              className="funke lg:h-[80vh] w-[40vw]"
            />
            <p className="mt-[0.5rem] text-black font-semibold">Tracksuits</p>
          </div>
          <div className="flex flex-col items-center w-[45vw] lg:w-[30vw]" onClick={() => {
                navigate("/Shop/Denim");
              }}>
            <img
              src={tlcdenim}
              alt="Denim"
              className="funke lg:h-[80vh] h-[300px] w-[28vw]"
            />
            <p className="mt-[0.5rem] text-black font-semibold">Denim</p>
          </div>
          <div className="flex flex-col items-center w-[45vw] lg:w-[30vw]" onClick={() => {
                navigate("/Shop/Suits & Tailoring");
              }}>
            <img
              src={tlcsuit}
              alt="Suits & Tailoring"
              className="funke lg:h-[80vh] h-[300px] w-[40vw]"
            />
            <p className="mt-[0.5rem] text-black  font-semibold">Suits & Tailoring</p>
          </div>
          <div className="flex flex-col items-center w-[45vw] lg:w-[30vw]" onClick={() => {
                navigate("/Shop/Sets & Co-ords");
              }}>
            <img
              src={tlcco}
              alt="Sets & Co-ords"
              className="funke lg:h-[80vh] h-[300px] w-[40vw]"
            />
            <p className="mt-[0.5rem] text-black font-semibold">Sets & Co-ords</p>
          </div>
          <div className="flex flex-col items-center w-[45vw] lg:w-[30vw]" onClick={() => {
                navigate("/Shop/Joggers");
              }}>
            <img
              src={tlcjoggers}
              alt="Joggers"
              className="funke lg:h-[80vh] h-[300px] w-[40vw]"
            />
            <p className="mt-[0.5rem] text-black font-semibold">Joggers</p>
          </div>
          <div className="flex flex-col items-center w-[45vw] lg:w-[30vw]" onClick={() => {
                navigate("/Shop/Trousers");
              }}>
            <img
              src={tlctrouser}
              alt="Trousers"
              className="funke lg:h-[80vh] h-[300px] w-[40vw]"
            />
            <p className="mt-[0.5rem] text-black font-semibold">Trousers</p>
          </div>

        </div>
        <div className="relative mt-[1rem]">
<img src={tlccoat} alt="Coats & Jackets" className="" />
<Link to="/Shop/Coats & Jackets" className="absolute top-[70%] left-[30%]">
            <button className="rounded-[10px] text-[#ffd700] bg-[#1b2b3a] shopButton px-[3rem] py-[0.5rem]">
              Coats & Jackets
            </button>
          </Link>
</div>
<div className="flex flex-wrap gap-3 mt-[1rem] items-center justify-center">
          <div className="w-[45vw] flex flex-col items-center lg:w-[30vw]" onClick={() => {
                navigate("/Shop/Knitwear");
              }}>
            <img
              src={tlckw}
              alt="Knitwear"
              className="funke lg:h-[80vh] w-[40vw]"
            />
            <p className="mt-[0.5rem] text-black font-semibold">Knitwear</p>
          </div>
          <div className="flex flex-col items-center w-[45vw] lg:w-[30vw]" onClick={() => {
                navigate("/Shop/Linen Clothing");
              }}>
            <img
              src={tlclc}
              alt="Linen Clothing"
              className="funke lg:h-[80vh] h-[300px] w-[40vw]"
            />
            <p className="mt-[0.5rem] text-black font-semibold">Linen Clothing</p>
          </div>
          <div className="flex flex-col items-center w-[45vw] lg:w-[30vw]" onClick={() => {
                navigate("/Shop/Activewear");
              }}>
            <img
              src={tlcaw}
              alt="Activewear"
              className="funke lg:h-[80vh] h-[300px] w-[40vw]"
            />
            <p className="mt-[0.5rem] text-black  font-semibold">Activewear</p>
          </div>
          <div className="flex flex-col items-center w-[45vw] lg:w-[30vw]" onClick={() => {
                navigate("/Shop/Underwear & Socks");
              }}>
            <img
              src={tlcuw}
              alt="Underwear & Socks"
              className="funke lg:h-[80vh] h-[300px] w-[40vw]"
            />
            <p className="mt-[0.5rem] text-black font-semibold">Underwear & Socks</p>
          </div>
       

        </div>
        <div className="relative mt-[1rem]">
<img src={tlcshoe} alt="Tlc" className="" />
<Link to="/Shop/Shoes & Accessories" className="absolute top-[80%] left-[25%]">
            <button className="rounded-[10px] text-[#ffd700] bg-[#1b2b3a] shopButton px-[3rem] py-[0.5rem]">
              Shoes & Accessories
            </button>
          </Link>
</div>
      </div>


      </div>
          </div>
  );
}
