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
      <video
        autoPlay
        muted
        playsInline
        loop
        className="w-[100vw] top-0"
      >
        <source
          src="https://res.cloudinary.com/dvl38skbc/video/upload/v1685895389/novographer/334604305_742309427292969_858897730815302783_n_btasqn.mp4"
          type="video/mp4"
          className=""
        />
      </video>
      <Link to="/Menu" className="portfolioButton">
            <button className="absolute portfolioButton bg-[#000000] top-[50%] rounded-[20px] left-[50%] font text-[#ededed] border border-[#14310c] explore px-[2rem] py-[0.5rem]">
             <p>View Portfolio</p>
            </button>
          </Link>
    </div>
  );
}
