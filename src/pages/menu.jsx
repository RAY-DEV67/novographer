import pizza from "../assets/pizza.webp";
import toppings from "../assets/toppings.png";
import drinks from "../assets/drinks.png";
import nova from "../assets/novalogo.png";
import burger from "../assets/burger.jpg";
import platter from "../assets/platter.webp";
import wraps from "../assets/wraps.webp";
import cocktails from "../assets/cocktails.webp";
import { useNavigate } from "react-router-dom";


export function Menu() {

    const navigate = useNavigate();

  return (
    <div className="bg-[#FF6400] pt-[4rem]">
      <p className="text-2xl my-[2rem] hrh text-[#d9d9d9]">Menu</p>
      <div className="flex flex-col items-center">
        <div  onClick={() => {
                navigate("/Shop/Pizza");
              }} className="flex items-center border-y rounded-[20px] p-[0.5rem] w-[80vw] my-[1rem]">
          <img src={pizza} alt="Pizza" className="w-[20vw] h-[100px] rounded-[20px]" />
          <p className="ml-[2rem] text-2xl font-bold text-[#d9d9d9]">Pizza</p>
        </div>
      </div>
      <div className="flex flex-col items-center">
        <div  onClick={() => {
                navigate("/Shop/Toppings");
              }}  className="flex items-center border-y rounded-[20px] p-[0.5rem] w-[80vw] my-[1rem]">
          <img src={toppings} alt="Pizza" className="w-[20vw] h-[100px] rounded-[20px]"  />
          <p className="ml-[2rem] text-2xl font-bold text-[#d9d9d9]">Toppings</p>
        </div>
      </div>
      <div className="flex flex-col items-center">
        <div  onClick={() => {
                navigate("/Shop/Burger");
              }}  className="flex items-center border-y rounded-[20px] p-[0.5rem] w-[80vw] my-[1rem]">
          <img src={burger} alt="Pizza" className="w-[20vw] h-[100px] rounded-[20px]" />
          <p className="ml-[2rem] text-2xl font-bold text-[#d9d9d9]">Burger</p>
        </div>
      </div>
      <div className="flex flex-col items-center">
        <div  onClick={() => {
                navigate("/Shop/Platter");
              }}  className="flex items-center border-y rounded-[20px] p-[0.5rem] w-[80vw] my-[1rem]">
          <img src={platter} alt="Pizza" className="w-[20vw] h-[100px] rounded-[20px]" />
          <p className="ml-[2rem] text-2xl font-bold text-[#d9d9d9]">Platters</p>
        </div>
      </div>
      <div className="flex flex-col items-center">
        <div  onClick={() => {
                navigate("/Shop/Wraps");
              }}  className="flex items-center border-y rounded-[20px] p-[0.5rem] w-[80vw] my-[1rem]">
          <img src={wraps} alt="Pizza" className="w-[20vw] h-[100px] rounded-[20px]" />
          <p className="ml-[2rem] text-2xl font-bold text-[#d9d9d9]">Wraps</p>
        </div>
      </div>
      <div className="flex flex-col items-center">
        <div  onClick={() => {
                navigate("/Shop/CockTails");
              }}  className="flex items-center border-y rounded-[20px] p-[0.5rem] w-[80vw] my-[1rem]">
          <img src={cocktails} alt="Pizza" className="w-[20vw] h-[100px] rounded-[20px]" />
          <p className="ml-[2rem] text-2xl font-bold text-[#d9d9d9]">CockTails</p>
        </div>
      </div>
      <div className="flex flex-col items-center">
        <div  onClick={() => {
                navigate("/Shop/Drinks");
              }}  className="flex items-center border-y rounded-[20px] p-[0.5rem] w-[80vw] my-[1rem]">
          <img src={drinks} alt="Pizza" className="w-[20vw] h-[100px] rounded-[20px]" />
          <p className="ml-[2rem] text-2xl font-bold text-[#d9d9d9]">Drinks</p>
        </div>
      </div>
      <div className="flex flex-col items-center">
        <div  onClick={() => {
                navigate("/Shop/Extras");
              }}  className="flex items-center border-y rounded-[20px] p-[0.5rem] w-[80vw] my-[1rem]">
          <img src={nova} alt="Pizza" className="w-[20vw] h-[100px] rounded-[20px]" />
          <p className="ml-[2rem] text-2xl font-bold text-[#d9d9d9]">Extras</p>
        </div>
      </div>
      <div className="flex flex-col items-center">
        <div  onClick={() => {
                navigate("/Shop/Pizza Novar Special");
              }}  className="flex items-center border-y rounded-[20px] p-[0.5rem] w-[80vw] my-[1rem]">
          <img src={nova} alt="Pizza" className="w-[20vw] h-[100px]" />
          <p className="ml-[2rem] text-2xl font-bold text-[#d9d9d9]">Pizza Novar Special</p>
        </div>
      </div>

    </div>
  );
}
