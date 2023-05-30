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
<div className="absolute top-[20%] flex flex-col items-center w-[100vw]">
<p className=" w-[100%] hrh text-[#000000]">Capturing The Beauty Of Humans</p>
<p className=" w-[100%] hrh text-[#000000]">The Eye Of God</p>
</div>
      <div className="absolute text-left font-bold top-[30%] h-[90vh] w-[100vw] left-[5%] flex flex-col items-start justify-center py-[1rem] lg:w-[100vw]">
        <Link to="/Menu">
            <button className="mt-[2rem] border-l-[2px] border-b-[2px] px-[1rem] border-[#000000] text-[1rem] text-[#000000] py-[0.5rem]">
             View Portfolio
            </button>
          </Link>
      </div>
    </div>
  );
}
