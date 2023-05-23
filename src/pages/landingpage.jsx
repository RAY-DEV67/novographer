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
      <div className="absolute pizzanova text-left font-bold top-[20%] h-[90vh] w-[100vw] left-[5%] flex flex-col items-start justify-center py-[1rem] lg:w-[100vw]">
        <p className="text-[#ffd700] text-2xl w-[100%]">Welcome to</p>
        <p className=" w-[100%] hrh text-[#ffd700]">The Lost Culture</p>
        <Link to="/Menu">
            <button className="mt-[2rem] rounded-[10px] text-[#ffd700] bg-[#1b2b3a] shopButton px-[1rem] py-[0.5rem]">
              Shop Men
            </button>
          </Link>
          <Link to="/Menu">
            <button className="mt-[1rem] rounded-[10px] text-[#ffd700] bg-[#1b2b3a] shopButton px-[1rem] py-[0.5rem]">
              Shop Women
            </button>
          </Link>
      </div>
    </div>
  );
}
