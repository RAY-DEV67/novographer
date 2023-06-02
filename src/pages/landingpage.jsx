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
      
<div className="absolute top-[10%] lg:top-[20%] flex flex-col items-center w-[100vw]">
<p className=" w-[80%] hrh text-[#000000] text-[8vw] lg:text-[3vw]"><span className="text-[15vw]">C</span>apturing The <span className="lg:text-[15vw]">B</span>eauty Of <span className="lg:text-[15vw]">H</span>umans</p>
</div>
    <div className="absolute text-left font-bold top-[80%] left-[50%] flex flex-col items-start justify-center py-[1rem] portfolioButton">
        <Link to="/Menu">
            <button className="border-[2px] px-[1rem] border-[#000000] text-[1rem] bg-[#000000] text-[#ffffff] py-[0.5rem]">
             View Portfolio
            </button>
          </Link>
      </div>
    </div>
  );
}
