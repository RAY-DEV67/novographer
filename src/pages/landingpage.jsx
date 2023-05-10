import { Link } from "react-router-dom";


export function LandingPage() {
  // const images = [logo1, logo2, logo3, logo4, logo5]
  // const [index, setindex] = useState(0);

  // useEffect(() => {
  //     const timer = setInterval(() => {
  //         setindex((index + 1) % images.length)
  //     }, 5000)

  //     return () => clearInterval(timer)
  // }, [index]);

  return (
    <div className="relative h-[100vh] w-[100vw] landingPage">
      <div className="landing h-[100vh]"></div>
      <div className="overlay w-[100vw] absolute top-0 h-[100vh]"></div>
      <div className="absolute pizzanova text-left font-bold top-[20%] h-[90vh] w-[100vw] left-[10%] flex flex-col items-center justify-center py-[1rem] lg:w-[100vw]">
      <p className="text-[#d9d9d9] text-[180%] w-[100%]">
            Welcome to
          </p>
          <p className=" w-[100%] hrh text-[#ffd700]">
            Pizza Novar
          </p>
        <div className="flex flex-col items-start">
          <p className=" text-[#d9d9d9] text-xl text-left w-[70%]">
            The ultimate destination for pizza lovers!
            Our restaurant is known for its authentic pizzas that are made with
            the freshest ingredients and baked to perfection.
          </p>
          <Link to="/Menu">
            <button className="mt-[2rem] rounded-[10px] text-white bg-[#FF6400] shopButton px-[1rem] py-[0.5rem]">
              Menu
            </button>
          </Link>
        </div>

        
      </div>
      {/* <div className="absolute top-[40%]">
        <p className="text-white text-left mx-[1rem] text-[180%] w-[60%] hrh">
          Welcome to
        </p>
        <p className=" text-left mx-[1rem] text-[180%] w-[90%] hrh text-[#ffd700]">
          Pizza Novar
        </p>

        <p className="text-[#282828] font-bold text-left mx-[1rem] text-md w-[90%] BodyFont">
          Welcome to Pizza Novar, the ultimate destination for pizza lovers! Our
          restaurant is known for its authentic pizzas that are
          made with the freshest ingredients and baked to perfection.
        </p>
        <div className="flex">
          <Link to="/Shop">
            <button className="mx-[1rem] mt-[2rem] rounded-[10px] text-white bg-[#b76e79] shopButton px-[1rem] py-[0.5rem]">
              Menu
            </button>
          </Link>
        </div>
      </div> */}
    </div>
  );
}
