import { useNavigate } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
const AnimatedDiv = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);
  const animatedRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(animatedRef.current);
        }
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.5, // Change this to change when the animation fires
      }
    );

    if (animatedRef.current) {
      observer.observe(animatedRef.current);
    }

    return () => {
      if (animatedRef.current) {
        observer.unobserve(animatedRef.current);
      }
    };
  }, []);

  return (
    <div className={`${isVisible ? "showhead" : "head"}`} ref={animatedRef}>
      {children}
    </div>
  );
};



export function Menu() {
  const navigate = useNavigate();

  const Peruzzi = ["https://res.cloudinary.com/dvl38skbc/image/upload/v1685897999/novographer/269901382_294538732631392_6367906911561896238_n_tm4i2h.jpg", "https://res.cloudinary.com/dvl38skbc/image/upload/v1685897998/novographer/269888354_491113492430259_9147217967558202973_n_ihg1nd.jpg"]
  const [peruzziindex, setperuzziindex] = useState(0);

  useEffect(() => {
      const timer = setInterval(() => {
          setperuzziindex((peruzziindex + 1) % Peruzzi.length)
      }, 1500)

      return () => clearInterval(timer)
  }, [peruzziindex, Peruzzi.length]);


  const Davido = ["https://res.cloudinary.com/dvl38skbc/image/upload/v1685896548/novographer/342722054_604352071402575_8142628739035596172_n_ho6ydb.jpg", "https://res.cloudinary.com/dvl38skbc/image/upload/v1685896548/novographer/343043309_3481487485429306_6395998377153214287_n_uasebn.jpg", "https://res.cloudinary.com/dvl38skbc/image/upload/v1685896548/novographer/342737543_902316040845959_7039118664153719782_n_ofr4gu.jpg", "https://res.cloudinary.com/dvl38skbc/image/upload/v1685896549/novographer/343011152_638080594805626_2046074316346775623_n_gijtz0.jpg", "https://res.cloudinary.com/dvl38skbc/image/upload/v1685896548/novographer/342726473_184318861136579_358475709727559285_n_kywu0z.jpg", "https://res.cloudinary.com/dvl38skbc/image/upload/v1685896548/novographer/336039493_595720975821423_2296565185798996197_n_slkyf6.jpg"  ]
  const [davidoindex, setdavidoindex] = useState(0);

  useEffect(() => {
      const timer = setInterval(() => {
          setdavidoindex((davidoindex + 1) % Davido.length)
      }, 1500)

      return () => clearInterval(timer)
  }, [davidoindex, Davido.length]);

  
  const Mayorkun = ["https://res.cloudinary.com/dvl38skbc/image/upload/v1685897332/novographer/244593801_1967626063414063_8824311499653168664_n_gtvgnn.jpg", "https://res.cloudinary.com/dvl38skbc/image/upload/v1685897332/novographer/244581991_258029736328754_7136980720844708728_n_jpxtj3.jpg", "https://res.cloudinary.com/dvl38skbc/image/upload/v1685897332/novographer/244499080_288187579580488_8428704688387940604_n_ijvxwv.jpg", "https://res.cloudinary.com/dvl38skbc/image/upload/v1685897332/novographer/244636457_372512877908878_8815227677411088548_n_oqhy9x.jpg", "https://res.cloudinary.com/dvl38skbc/image/upload/v1685897332/novographer/244517130_1389814328102301_2839803171093535662_n_d1lzh7.jpg", "https://res.cloudinary.com/dvl38skbc/image/upload/v1685897332/novographer/244466004_552486622698507_1689275189636460373_n_rfnarc.jpg"   ]
  const [mayorkunindex, setmayorkunindex] = useState(0);

  useEffect(() => {
      const timer = setInterval(() => {
          setmayorkunindex((mayorkunindex + 1) % Mayorkun.length)
      }, 1500)

      return () => clearInterval(timer)
  }, [mayorkunindex, Mayorkun.length]);

  const Clone = ["https://res.cloudinary.com/dvl38skbc/image/upload/v1685898651/novographer/227368145_344802527195534_3299636848851727434_n_f2lrps.jpg", "https://res.cloudinary.com/dvl38skbc/image/upload/v1685898650/novographer/226474340_993867431377955_925717637057044769_n_kwmv7s.jpg", "https://res.cloudinary.com/dvl38skbc/image/upload/v1685898649/novographer/226736017_906211410021652_1664816821996225759_n_id37j4.jpg", "https://res.cloudinary.com/dvl38skbc/image/upload/v1685898650/novographer/229281191_801481327183658_5505450538170736997_n_hqdiw3.jpg", "https://res.cloudinary.com/dvl38skbc/image/upload/v1685898649/novographer/225760409_122687773412849_5250315818306691082_n_zvgyxx.jpg", "https://res.cloudinary.com/dvl38skbc/image/upload/v1685898649/novographer/225769432_868492384103213_5095377533605553749_n_u1tvye.jpg" ]
  const [cloneindex, setcloneindex] = useState(0);

  useEffect(() => {
      const timer = setInterval(() => {
          setcloneindex((cloneindex + 1) % Clone.length)
      }, 1500)

      return () => clearInterval(timer)
  }, [cloneindex, Clone.length]);

  return (
    <div className="relative text-[#ffd700] ">
      <div className="landing2 h-[100vh]"></div>
      <div className="my-[1rem]">
        <div className="dara-main">
          <div className="dara-slidetrack">
            {/* SLIDES///// */}

            <div className=" dara-slide softtools">
              <h5 className="text-[4vw] lg:text-[2vw]">Portfolio</h5>
            </div>

            <div className=" dara-slide softtools">
              <h5 className="text-[4vw] lg:text-[2vw]">Portfolio</h5>
            </div>

            <div className=" dara-slide softtools">
              <h5 className="text-[4vw] lg:text-[2vw]">Portfolio</h5>
            </div>

            <div className=" dara-slide softtools">
              <h5 className="text-[4vw] lg:text-[2vw]">Portfolio</h5>
            </div>

            <div className=" dara-slide softtools">
              <h5 className="text-[4vw] lg:text-[2vw]">Portfolio</h5>
            </div>

            <div className="dara-slide softtools">
              <h5 className="text-[4vw] lg:text-[2vw]">Portfolio</h5>
            </div>

            <div className="dara-slide softtools">
              <h5 className="text-[4vw] lg:text-[2vw]">Portfolio</h5>
            </div>

            <div className=" dara-slide softtools">
              <h5 className="text-[4vw] lg:text-[2vw]">Portfolio</h5>
            </div>

            <div className=" dara-slide softtools">
              <h5 className="text-[4vw] lg:text-[2vw]">Portfolio</h5>
            </div>

            <div className=" dara-slide softtools">
              <h5 className="text-[4vw] lg:text-[2vw]">Portfolio</h5>
            </div>

            {/* SAME SLIDES (DOUBLED)//////// */}

            <div className=" dara-slide softtools">
              <h5 className="text-[4vw] lg:text-[2vw]">Portfolio</h5>
            </div>

            <div className=" dara-slide softtools">
              <h5 className="text-[4vw] lg:text-[2vw]">Portfolio</h5>
            </div>

            <div className=" dara-slide softtools">
              <h5 className="text-[4vw] lg:text-[2vw]">Portfolio</h5>
            </div>

            <div className=" dara-slide softtools">
              <h5 className="text-[4vw] lg:text-[2vw]">Portfolio</h5>
            </div>

            <div className=" dara-slide softtools">
              <h5 className="text-[4vw] lg:text-[2vw]">Portfolio</h5>
            </div>

            <div className=" dara-slide softtools">
              <h5 className="text-[4vw] lg:text-[2vw]">Portfolio</h5>
            </div>

            <div className=" dara-slide softtools">
              <h5 className="text-[4vw] lg:text-[2vw]">Portfolio</h5>
            </div>

            <div className="dara-slide softtools">
              <h5 className="text-[4vw] lg:text-[2vw]">Portfolio</h5>
            </div>

            <div className="dara-slide softtools">
              <h5 className="text-[4vw] lg:text-[2vw]">Portfolio</h5>
            </div>

            <div className="dara-slide softtools">
              <h5 className="text-[4vw] lg:text-[2vw]">Portfolio</h5>
            </div>
          </div>
        </div>
      </div>

          
        
        <AnimatedDiv>
          <div className="flex justify-center relative mt-[1rem] mx-[1rem] lg:-z-10">
            <img
              alt="img2"
              src={Davido[davidoindex]}
              className="object-contain topcard lg:w-[50vw]"
            />
          </div>
          </AnimatedDiv>

          
          <div className="flex flex-wrap gap-3 mt-[1rem] items-center justify-center">
          <div className="bg-[#d9d9d9] w-[45vw] lg:w-[30vw]">
            <img
              src="https://res.cloudinary.com/dvl38skbc/image/upload/v1685896982/novographer/289823039_706596790404441_8796779560910366301_n_fixala.jpg"
              alt="Da Baby"
              className="funke lg:h-[80vh] w-[45vw]"
            />
          </div>
          <div className="bg-[#d9d9d9] w-[45vw] lg:w-[30vw]">
            <img
              src="https://res.cloudinary.com/dvl38skbc/image/upload/v1685896982/novographer/290483442_705670777184437_2122774255645149428_n_vzpvlx.jpg"
              alt="Da Baby"
              className="funke lg:h-[80vh] w-[45vw]"
            />
          </div>
          <div className="bg-[#d9d9d9] w-[45vw] lg:w-[30vw]">
            <img
              src="https://res.cloudinary.com/dvl38skbc/image/upload/v1685896982/novographer/290099601_5119869454800704_5651453736779859555_n_vvdopz.jpg"
              alt="Da Baby"
              className="funke lg:h-[80vh] w-[45vw]"
            />
          </div>
          <div className="bg-[#d9d9d9] w-[45vw] lg:w-[30vw]">
            <img
              src="https://res.cloudinary.com/dvl38skbc/image/upload/v1685896982/novographer/289998349_132318975883485_9166421659159872780_n_hilbve.jpg"
              alt="Da Baby"
              className="funke lg:h-[80vh] w-[45vw]"
            />
          </div>
          <div className="bg-[#d9d9d9] w-[45vw] lg:w-[30vw]">
            <img
              src="https://res.cloudinary.com/dvl38skbc/image/upload/v1685896982/novographer/289815288_1266208340579454_6079508278748946371_n_edvg4j.jpg"
              alt="Da Baby"
              className="funke lg:h-[80vh] w-[45vw]"
            />
          </div>
          <div className="bg-[#d9d9d9] w-[45vw] lg:w-[30vw]">
            <img
              src="https://res.cloudinary.com/dvl38skbc/image/upload/v1685896982/novographer/289700637_3218164325099231_7905843984036054892_n_twgwvr.jpg"
              alt="Da Baby"
              className="funke lg:h-[80vh] w-[45vw]"
            />
          </div>
        </div>

        
        <AnimatedDiv>
          <div className="flex justify-center relative mt-[1rem] mx-[1rem] lg:-z-10">
            <img
              alt="img2"
              src={Mayorkun[mayorkunindex]}
              className="object-contain topcard lg:w-[50vw]"
            />
          </div>
          </AnimatedDiv>

          <div className="flex flex-wrap gap-3 mt-[1rem] items-center justify-center">
          <div className="bg-[#d9d9d9] w-[45vw] lg:w-[30vw]">
            <img
              src="https://res.cloudinary.com/dvl38skbc/image/upload/v1685897715/novographer/323180803_650763200133069_6553713138681120267_n_i6vnkv.jpg"
              alt="Birthday"
              className="funke lg:h-[80vh] w-[45vw]"
            />
          </div>
          <div className="bg-[#d9d9d9] w-[45vw] lg:w-[30vw]">
            <img
              src="https://res.cloudinary.com/dvl38skbc/image/upload/v1685897715/novographer/323376419_1952447731753431_90654978156445906_n_lfgf9r.jpg"
              alt="Birthday"
              className="funke lg:h-[80vh] w-[45vw]"
            />
          </div>
          <div className="bg-[#d9d9d9] w-[45vw] lg:w-[30vw]">
            <img
              src="https://res.cloudinary.com/dvl38skbc/image/upload/v1685897715/novographer/323199471_1099439894060745_3787397749142308292_n_jenthj.jpg"
              alt="Birthday"
              className="funke lg:h-[80vh] w-[45vw]"
            />
          </div>
          <div className="bg-[#d9d9d9] w-[45vw] lg:w-[30vw]">
            <img
              src="https://res.cloudinary.com/dvl38skbc/image/upload/v1685897715/novographer/323503302_689039179343890_5783537194113862915_n_iwntk7.jpg"
              alt="Birthday"
              className="funke lg:h-[80vh] w-[45vw]"
            />
          </div>
        </div>



          <AnimatedDiv>
          <div className="flex justify-center relative mt-[1rem] mx-[1rem] lg:-z-10">
            <img
              alt="img2"
              src={Peruzzi[peruzziindex]}
              className="object-contain topcard lg:w-[50vw]"
            />
          </div>
          </AnimatedDiv>

          
          <div className="flex flex-wrap gap-3 mt-[1rem] items-center justify-center">
          <div className="bg-[#d9d9d9] w-[45vw] lg:w-[30vw]">
            <img
              src="https://res.cloudinary.com/dvl38skbc/image/upload/v1685898275/novographer/269817638_959040801663995_8912736820166109159_n_kxyjhc.jpg"
              alt="Chike"
              className="funke lg:h-[80vh] w-[45vw]"
            />
          </div>
          <div className="bg-[#d9d9d9] w-[45vw] lg:w-[30vw]">
            <img
              src="https://res.cloudinary.com/dvl38skbc/image/upload/v1685898275/novographer/269790187_1069890363775107_4270390352338505712_n_wxmo4i.jpg"
              alt="Chike"
              className="funke lg:h-[80vh] w-[45vw]"
            />
          </div>
          <div className="bg-[#d9d9d9] w-[45vw] lg:w-[30vw]">
            <img
              src="https://res.cloudinary.com/dvl38skbc/image/upload/v1685898274/novographer/269797577_134702628968829_3498258823181972510_n_limgyj.jpg"
              alt="Chike"
              className="funke lg:h-[80vh] w-[45vw]"
            />
          </div>
          <div className="bg-[#d9d9d9] w-[45vw] lg:w-[30vw]">
            <img
              src="https://res.cloudinary.com/dvl38skbc/image/upload/v1685898274/novographer/269772673_3003820686499321_8448219850821961616_n_f0y4tn.jpg"
              alt="Chike"
              className="funke lg:h-[80vh] w-[45vw]"
            />
          </div>
          <div className="bg-[#d9d9d9] w-[45vw] lg:w-[30vw]">
            <img
              src="https://res.cloudinary.com/dvl38skbc/image/upload/v1685898273/novographer/269746502_135692235539627_1742947225256984287_n_hfhk0q.jpg"
              alt="Chike"
              className="funke lg:h-[80vh] w-[45vw]"
            />
          </div>
          <div className="bg-[#d9d9d9] w-[45vw] lg:w-[30vw]">
            <img
              src="https://res.cloudinary.com/dvl38skbc/image/upload/v1685898273/novographer/269745555_954439541862832_1803537385118576957_n_hmd10r.jpg"
              alt="Chike"
              className="funke lg:h-[80vh] w-[45vw]"
            />
          </div>
        </div>

        
        <AnimatedDiv>
          <div className="flex justify-center relative mt-[1rem] mx-[1rem] lg:-z-10">
            <img
              alt="img2"
              src={Clone[cloneindex]}
              className="object-contain topcard lg:w-[50vw]"
            />
          </div>
          </AnimatedDiv>

          <div className="flex flex-wrap gap-3 mt-[1rem] items-center justify-center">
          <div className="bg-[#d9d9d9] w-[45vw] lg:w-[30vw]">
            <img
              src="https://res.cloudinary.com/dvl38skbc/image/upload/v1685899057/novographer/133621006_427095708730237_663247682484647537_n_ldc7tj.jpg"
              alt="Ladies"
              className="funke lg:h-[80vh] w-[45vw]"
            />
          </div>
          <div className="bg-[#d9d9d9] w-[45vw] lg:w-[30vw]">
            <img
              src="https://res.cloudinary.com/dvl38skbc/image/upload/v1685899056/novographer/133660712_1132078013891163_3081304259569604181_n_ercvsw.jpg"
              alt="Ladies"
              className="funke lg:h-[80vh] w-[45vw]"
            />
          </div>
          <div className="bg-[#d9d9d9] w-[45vw] lg:w-[30vw]">
            <img
              src="https://res.cloudinary.com/dvl38skbc/image/upload/v1685899057/novographer/133595911_1055348731630986_7186945271035173166_n_q5unua.jpg"
              alt="Ladies"
              className="funke lg:h-[80vh] w-[45vw]"
            />
          </div>
          <div className="bg-[#d9d9d9] w-[45vw] lg:w-[30vw]">
            <img
              src="https://res.cloudinary.com/dvl38skbc/image/upload/v1685899056/novographer/133517272_4738229089584489_6344152323580281818_n_f4bq5j.jpg"
              alt="Ladies"
              className="funke lg:h-[80vh] w-[45vw]"
            />
          </div>
          <div className="bg-[#d9d9d9] w-[45vw] lg:w-[30vw]">
            <img
              src="https://res.cloudinary.com/dvl38skbc/image/upload/v1685899056/novographer/133753703_240450674107479_2539204290281686679_n_jumvt4.jpg"
              alt="Ladies"
              className="funke lg:h-[80vh] w-[45vw]"
            />
          </div>
          <div className="bg-[#d9d9d9] w-[45vw] lg:w-[30vw]">
            <img
              src="https://res.cloudinary.com/dvl38skbc/image/upload/v1685899056/novographer/133986150_145976543987807_2739076308844898326_n_tkcgba.jpg"
              alt="Ladies"
              className="funke lg:h-[80vh] w-[45vw]"
            />
          </div>
        </div>


        
        
        <div className="h-[100vh] items-end flex flex-col mt-[1rem] text-[#000009] font-bold justify-start footer">
        <a href="https://www.instagram.com/novographer" target="_Blank" className="">
        <button className="mt-[50%] mr-[1rem] rounded-[20px] px-[1rem] text-[1rem] bg-[#ffffff] text-[#000000] py-[0.5rem]">
             Book A Session
            </button>
        </a>
            <a href="https://www.instagram.com/novographer" target="_Blank" className="mr-[2rem] my-[1rem]">
            <svg
              width="20px"
              viewBox="0 0 20 20"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              fill="#ffffff"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <title>instagram [#167]</title>{" "}
                <desc>Created with Sketch.</desc> <defs> </defs>{" "}
                <g
                  id="Page-1"
                  stroke="none"
                  stroke-width="1"
                  fill="none"
                  fill-rule="evenodd"
                >
                  {" "}
                  <g
                    id="Dribbble-Light-Preview"
                    transform="translate(-340.000000, -7439.000000)"
                    fill="#ffffff"
                  >
                    {" "}
                    <g id="icons" transform="translate(56.000000, 160.000000)">
                      {" "}
                      <path
                        d="M289.869652,7279.12273 C288.241769,7279.19618 286.830805,7279.5942 285.691486,7280.72871 C284.548187,7281.86918 284.155147,7283.28558 284.081514,7284.89653 C284.035742,7285.90201 283.768077,7293.49818 284.544207,7295.49028 C285.067597,7296.83422 286.098457,7297.86749 287.454694,7298.39256 C288.087538,7298.63872 288.809936,7298.80547 289.869652,7298.85411 C298.730467,7299.25511 302.015089,7299.03674 303.400182,7295.49028 C303.645956,7294.859 303.815113,7294.1374 303.86188,7293.08031 C304.26686,7284.19677 303.796207,7282.27117 302.251908,7280.72871 C301.027016,7279.50685 299.5862,7278.67508 289.869652,7279.12273 M289.951245,7297.06748 C288.981083,7297.0238 288.454707,7296.86201 288.103459,7296.72603 C287.219865,7296.3826 286.556174,7295.72155 286.214876,7294.84312 C285.623823,7293.32944 285.819846,7286.14023 285.872583,7284.97693 C285.924325,7283.83745 286.155174,7282.79624 286.959165,7281.99226 C287.954203,7280.99968 289.239792,7280.51332 297.993144,7280.90837 C299.135448,7280.95998 300.179243,7281.19026 300.985224,7281.99226 C301.980262,7282.98483 302.473801,7284.28014 302.071806,7292.99991 C302.028024,7293.96767 301.865833,7294.49274 301.729513,7294.84312 C300.829003,7297.15085 298.757333,7297.47145 289.951245,7297.06748 M298.089663,7283.68956 C298.089663,7284.34665 298.623998,7284.88065 299.283709,7284.88065 C299.943419,7284.88065 300.47875,7284.34665 300.47875,7283.68956 C300.47875,7283.03248 299.943419,7282.49847 299.283709,7282.49847 C298.623998,7282.49847 298.089663,7283.03248 298.089663,7283.68956 M288.862673,7288.98792 C288.862673,7291.80286 291.150266,7294.08479 293.972194,7294.08479 C296.794123,7294.08479 299.081716,7291.80286 299.081716,7288.98792 C299.081716,7286.17298 296.794123,7283.89205 293.972194,7283.89205 C291.150266,7283.89205 288.862673,7286.17298 288.862673,7288.98792 M290.655732,7288.98792 C290.655732,7287.16159 292.140329,7285.67967 293.972194,7285.67967 C295.80406,7285.67967 297.288657,7287.16159 297.288657,7288.98792 C297.288657,7290.81525 295.80406,7292.29716 293.972194,7292.29716 C292.140329,7292.29716 290.655732,7290.81525 290.655732,7288.98792"
                        id="instagram-[#167]"
                      >
                        {" "}
                      </path>{" "}
                    </g>{" "}
                  </g>{" "}
                </g>{" "}
              </g>
            </svg>
          </a>
          <a
            href="https://twitter.com/novographer"
            target="_Blank"
            className="mr-[2rem]"
          >
            <svg
              width="20px"
              viewBox="0 -2 20 20"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              fill="#ffffff"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <title>twitter [#154]</title> <desc>Created with Sketch.</desc>{" "}
                <defs> </defs>{" "}
                <g
                  id="Page-1"
                  stroke="none"
                  stroke-width="1"
                  fill="none"
                  fill-rule="evenodd"
                >
                  {" "}
                  <g
                    id="Dribbble-Light-Preview"
                    transform="translate(-60.000000, -7521.000000)"
                    fill="#ffffff"
                  >
                    {" "}
                    <g id="icons" transform="translate(56.000000, 160.000000)">
                      {" "}
                      <path
                        d="M10.29,7377 C17.837,7377 21.965,7370.84365 21.965,7365.50546 C21.965,7365.33021 21.965,7365.15595 21.953,7364.98267 C22.756,7364.41163 23.449,7363.70276 24,7362.8915 C23.252,7363.21837 22.457,7363.433 21.644,7363.52751 C22.5,7363.02244 23.141,7362.2289 23.448,7361.2926 C22.642,7361.76321 21.761,7362.095 20.842,7362.27321 C19.288,7360.64674 16.689,7360.56798 15.036,7362.09796 C13.971,7363.08447 13.518,7364.55538 13.849,7365.95835 C10.55,7365.79492 7.476,7364.261 5.392,7361.73762 C4.303,7363.58363 4.86,7365.94457 6.663,7367.12996 C6.01,7367.11125 5.371,7366.93797 4.8,7366.62489 L4.8,7366.67608 C4.801,7368.5989 6.178,7370.2549 8.092,7370.63591 C7.488,7370.79836 6.854,7370.82199 6.24,7370.70483 C6.777,7372.35099 8.318,7373.47829 10.073,7373.51078 C8.62,7374.63513 6.825,7375.24554 4.977,7375.24358 C4.651,7375.24259 4.325,7375.22388 4,7375.18549 C5.877,7376.37088 8.06,7377 10.29,7376.99705"
                        id="twitter-[#154]"
                      >
                        {" "}
                      </path>{" "}
                    </g>{" "}
                  </g>{" "}
                </g>{" "}
              </g>
            </svg>
          </a>
                </div>
    </div>
  );
}
