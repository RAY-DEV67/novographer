import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";


export function Menu() {
  const navigate = useNavigate();
  const Ayra = ["https://res.cloudinary.com/dvl38skbc/image/upload/v1685395781/bpixels/309281556_615556533374069_6739667663257672081_n_vbgtb8.jpg", "https://res.cloudinary.com/dvl38skbc/image/upload/v1685395781/bpixels/309315336_1684367148601821_2072025229390826698_n_lbqgh3.jpg", "https://res.cloudinary.com/dvl38skbc/image/upload/v1685395781/bpixels/309281556_615556533374069_6739667663257672081_n_vbgtb8.jpg", "https://res.cloudinary.com/dvl38skbc/image/upload/v1685395781/bpixels/309436471_474965167884418_8381810387612599076_n_nrrak9.jpg", "https://res.cloudinary.com/dvl38skbc/image/upload/v1685395780/bpixels/309281485_814193176302097_2581601450784635901_n_wb7qgq.jpg", "https://res.cloudinary.com/dvl38skbc/image/upload/v1685395780/bpixels/309266938_180703934471454_6138209042665735379_n_qadysl.jpg", "https://res.cloudinary.com/dvl38skbc/image/upload/v1685395780/bpixels/309259799_2955583761254414_3158414140282819153_n_z05ew1.jpg", "https://res.cloudinary.com/dvl38skbc/image/upload/v1685395735/bpixels/309005613_496589362002102_4504406298828203082_n_outof4.jpg", "https://res.cloudinary.com/dvl38skbc/image/upload/v1685395735/bpixels/309120154_448965390400568_1296777036132011782_n_zl5yjx.jpg" ]
  const [index, setindex] = useState(0);

  useEffect(() => {
      const timer = setInterval(() => {
          setindex((index + 1) % Ayra.length)
      }, 1500)

      return () => clearInterval(timer)
  }, [index, Ayra.length]);

  return (
    <div className="relative text-[#ffd700]">
      <div className="landing2 h-[100vh]"></div>
      <div className="absolute top-[50%] flex flex-col items-center w-[100vw]">
        <p className=" w-[100%] hrh text-[#ffffff]">The Eye Of God</p>
      </div>
      <div className="my-[1rem]">
        <div className="dara-main">
          <div className="dara-slidetrack">
            {/* SLIDES///// */}

            <div className=" dara-slide softtools">
              <h5 className="text-[4vw]">Portfolio</h5>
            </div>

            <div className=" dara-slide softtools">
              <h5 className="text-[4vw]">Portfolio</h5>
            </div>

            <div className=" dara-slide softtools">
              <h5 className="text-[4vw]">Portfolio</h5>
            </div>

            <div className=" dara-slide softtools">
              <h5 className="text-[4vw]">Portfolio</h5>
            </div>

            <div className=" dara-slide softtools">
              <h5 className="text-[4vw]">Portfolio</h5>
            </div>

            <div className="dara-slide softtools">
              <h5 className="text-[4vw]">Portfolio</h5>
            </div>

            <div className="dara-slide softtools">
              <h5 className="text-[4vw]">Portfolio</h5>
            </div>

            <div className=" dara-slide softtools">
              <h5 className="text-[4vw]">Portfolio</h5>
            </div>

            <div className=" dara-slide softtools">
              <h5 className="text-[4vw]">Portfolio</h5>
            </div>

            <div className=" dara-slide softtools">
              <h5 className="text-[4vw]">Portfolio</h5>
            </div>

            {/* SAME SLIDES (DOUBLED)//////// */}

            <div className=" dara-slide softtools">
              <h5 className="text-[4vw]">Portfolio</h5>
            </div>

            <div className=" dara-slide softtools">
              <h5 className="text-[4vw]">Portfolio</h5>
            </div>

            <div className=" dara-slide softtools">
              <h5 className="text-[4vw]">Portfolio</h5>
            </div>

            <div className=" dara-slide softtools">
              <h5 className="text-[4vw]">Portfolio</h5>
            </div>

            <div className=" dara-slide softtools">
              <h5 className="text-[4vw]">Portfolio</h5>
            </div>

            <div className=" dara-slide softtools">
              <h5 className="text-[4vw]">Portfolio</h5>
            </div>

            <div className=" dara-slide softtools">
              <h5 className="text-[4vw]">Portfolio</h5>
            </div>

            <div className="dara-slide softtools">
              <h5 className="text-[4vw]">Portfolio</h5>
            </div>

            <div className="dara-slide softtools">
              <h5 className="text-[4vw]">Portfolio</h5>
            </div>

            <div className="dara-slide softtools">
              <h5 className="text-[4vw]">Portfolio</h5>
            </div>
          </div>
        </div>
      </div>

      
          <div className="flex justify-center relative mt-[1rem] mx-[1rem] lg:-z-10">
            <img
              alt="img2"
              src={Ayra[index]}
              className="object-contain topcard "
            />
          </div>
    </div>
  );
}
