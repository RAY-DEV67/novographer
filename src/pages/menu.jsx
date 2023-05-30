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

  const Kizz = ["https://res.cloudinary.com/dvl38skbc/image/upload/v1685456491/bpixels/336319668_135139356167757_8196445554761051665_n_ot7kwi.jpg", "https://res.cloudinary.com/dvl38skbc/image/upload/v1685456491/bpixels/336456129_155990337362790_5030943150130409092_n_uhhbkp.jpg", "https://res.cloudinary.com/dvl38skbc/image/upload/v1685456491/bpixels/336242138_733356548258624_3429364173850873781_n_yuvnee.jpg", "https://res.cloudinary.com/dvl38skbc/image/upload/v1685456491/bpixels/336502374_1248707882400863_2981309374199983637_n_zsjc9q.jpg", "https://res.cloudinary.com/dvl38skbc/image/upload/v1685456491/bpixels/336823647_155857407350731_2492797926403310027_n_od4dzo.jpg" ]
  const [kizzindex, setkizzindex] = useState(0);

  useEffect(() => {
      const timer = setInterval(() => {
          setkizzindex((kizzindex + 1) % Kizz.length)
      }, 1500)

      return () => clearInterval(timer)
  }, [kizzindex, Kizz.length]);

  const Buju = [ "https://res.cloudinary.com/dvl38skbc/image/upload/v1685461581/bpixels/337918308_971875267078389_718067738750409045_n_hryhxg.jpg", "https://res.cloudinary.com/dvl38skbc/image/upload/v1685461581/bpixels/337551927_673502598116515_6477222553543742622_n_qofbxb.jpg", "https://res.cloudinary.com/dvl38skbc/image/upload/v1685461580/bpixels/337318877_691415626090977_7353413793250174543_n_rtle2a.jpg", "https://res.cloudinary.com/dvl38skbc/image/upload/v1685461561/bpixels/328718353_203957048936829_5692470506216473991_n_udcv9r.jpg"  ]
  const [bujuindex, setbujuindex] = useState(0);

  useEffect(() => {
      const timer = setInterval(() => {
          setbujuindex((bujuindex + 1) % Buju.length)
      }, 1500)

      return () => clearInterval(timer)
  }, [bujuindex, Buju.length]);

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

          <div className="flex flex-wrap gap-3 mt-[1rem] items-center justify-center">
          <div className="bg-[#d9d9d9] w-[45vw] lg:w-[30vw]">
            <img
              src="https://res.cloudinary.com/dvl38skbc/image/upload/v1685457554/bpixels/343479149_1274353486787199_6999195403433169077_n_mrowfl.jpg"
              alt="Ayra Starr"
              className="funke lg:h-[80vh] w-[45vw]"
            />
          </div>
          <div className="bg-[#d9d9d9] w-[45vw] lg:w-[30vw]">
            <img
              src="https://res.cloudinary.com/dvl38skbc/image/upload/v1685457554/bpixels/343443000_243926848129319_8844274637824518471_n_qprblv.jpg"
              alt="Ayra Starr"
              className="funke lg:h-[80vh] w-[45vw]"
            />
          </div>
          <div className="bg-[#d9d9d9] w-[45vw] lg:w-[30vw]">
            <img
              src="https://res.cloudinary.com/dvl38skbc/image/upload/v1685457554/bpixels/343396658_993958828238970_6830617019277645194_n_zuxm1d.jpg"
              alt="Ayra Starr"
              className="funke lg:h-[80vh] w-[45vw]"
            />
          </div>
          <div className="bg-[#d9d9d9] w-[45vw] lg:w-[30vw]">
            <img
              src="https://res.cloudinary.com/dvl38skbc/image/upload/v1685457554/bpixels/343314589_934309894473345_4564835122049550676_n_dtxyym.jpg"
              alt="Ayra Starr"
              className="funke lg:h-[80vh] w-[45vw]"
            />
          </div>
          <div className="bg-[#d9d9d9] w-[45vw] lg:w-[30vw]">
            <img
              src="https://res.cloudinary.com/dvl38skbc/image/upload/v1685457554/bpixels/343421752_238412808857565_6270933940844832449_n_ue4q5b.jpg"
              alt="Ayra Starr"
              className="funke lg:h-[80vh] w-[45vw]"
            />
          </div>
          <div className="bg-[#d9d9d9] w-[45vw] lg:w-[30vw]">
            <img
              src="https://res.cloudinary.com/dvl38skbc/image/upload/v1685457554/bpixels/343401917_1639873036418041_8643326780972841140_n_guk0hq.jpg"
              alt="Ayra Starr"
              className="funke lg:h-[80vh] w-[45vw]"
            />
          </div>
        </div>


          <div className="flex justify-center relative mt-[1rem] mx-[1rem] lg:-z-10">
            <img
              alt="img2"
              src={Kizz[kizzindex]}
              className="object-contain topcard "
            />
          </div>

          
          <div className="flex flex-wrap gap-3 mt-[1rem] items-center justify-center">
          <div className="bg-[#d9d9d9] w-[45vw] lg:w-[30vw]">
            <img
              src="https://res.cloudinary.com/dvl38skbc/image/upload/v1685461127/bpixels/347469169_559244779692013_3206524537190063407_n_qolcxj.jpg"
              alt="Mr Eazi"
              className="funke lg:h-[80vh] w-[45vw]"
            />
          </div>
          <div className="bg-[#d9d9d9] w-[45vw] lg:w-[30vw]">
            <img
              src="https://res.cloudinary.com/dvl38skbc/image/upload/v1685461127/bpixels/347415509_571165658458410_8946340089475497132_n_wknn1j.jpg"
              alt="Mr Eazi"
              className="funke lg:h-[80vh] w-[45vw]"
            />
          </div>
          <div className="bg-[#d9d9d9] w-[45vw] lg:w-[30vw]">
            <img
              src="https://res.cloudinary.com/dvl38skbc/image/upload/v1685461127/bpixels/347621034_565181628845130_7429284840259219760_n_hobczp.jpg"
              alt="Mr Eazi"
              className="funke lg:h-[80vh] w-[45vw]"
            />
          </div>
          <div className="bg-[#d9d9d9] w-[45vw] lg:w-[30vw]">
            <img
              src="https://res.cloudinary.com/dvl38skbc/image/upload/v1685461127/bpixels/347443739_943632000020411_5388123890306173617_n_y5b5tf.jpg"
              alt="Mr Eazi"
              className="funke lg:h-[80vh] w-[45vw]"
            />
          </div>
          <div className="bg-[#d9d9d9] w-[45vw] lg:w-[30vw]">
            <img
              src="https://res.cloudinary.com/dvl38skbc/image/upload/v1685461127/bpixels/347539929_255331413824430_3842689884869222068_n_hgosra.jpg"
              alt="Mr Eazi"
              className="funke lg:h-[80vh] w-[45vw]"
            />
          </div>
          <div className="bg-[#d9d9d9] w-[45vw] lg:w-[30vw]">
            <img
              src="https://res.cloudinary.com/dvl38skbc/image/upload/v1685461127/bpixels/347484305_153731900864182_3642040083213123312_n_w1hugb.jpg"
              alt="Mr Eazi"
              className="funke lg:h-[80vh] w-[45vw]"
            />
          </div>
        </div>

        <div className="flex justify-center relative my-[1rem] mx-[1rem] lg:-z-10">
            <img
              alt="img2"
              src={Buju[bujuindex]}
              className="object-contain topcard "
            />
          </div>

    </div>
  );
}
