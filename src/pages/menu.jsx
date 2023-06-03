import { useNavigate } from "react-router-dom";
import { useState, useEffect, useRef } from "react";

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

  const Tiwa = [ "https://res.cloudinary.com/dvl38skbc/image/upload/v1685734004/bpixels/275868544_691450531995268_2497826486572051990_n_jvofcc.jpg", "https://res.cloudinary.com/dvl38skbc/image/upload/v1685734005/bpixels/276003672_123602643581946_8802118422008466848_n_bsbcwt.jpg", "https://res.cloudinary.com/dvl38skbc/image/upload/v1685734004/bpixels/275916151_1134309724061624_906473185975115775_n_vm8sjp.jpg", "https://res.cloudinary.com/dvl38skbc/image/upload/v1685734005/bpixels/275980392_684263629392138_829900645164399234_n_hmd25c.jpg", "https://res.cloudinary.com/dvl38skbc/image/upload/v1685734004/bpixels/275907746_131239482804297_55378308740764359_n_wgfavs.jpg", "https://res.cloudinary.com/dvl38skbc/image/upload/v1685734004/bpixels/275853626_349112410313422_4436536087068310773_n_ft0oog.jpg" ]
  const [tiwaindex, settiwaindex] = useState(0);

  useEffect(() => {
      const timer = setInterval(() => {
          settiwaindex((tiwaindex + 1) % Tiwa.length)
      }, 1500)

      return () => clearInterval(timer)
  }, [tiwaindex, Tiwa.length]);

  const Buju = [ "https://res.cloudinary.com/dvl38skbc/image/upload/v1685461581/bpixels/337918308_971875267078389_718067738750409045_n_hryhxg.jpg", "https://res.cloudinary.com/dvl38skbc/image/upload/v1685461581/bpixels/337551927_673502598116515_6477222553543742622_n_qofbxb.jpg", "https://res.cloudinary.com/dvl38skbc/image/upload/v1685461580/bpixels/337318877_691415626090977_7353413793250174543_n_rtle2a.jpg", "https://res.cloudinary.com/dvl38skbc/image/upload/v1685461561/bpixels/328718353_203957048936829_5692470506216473991_n_udcv9r.jpg"  ]
  const [bujuindex, setbujuindex] = useState(0);

  useEffect(() => {
      const timer = setInterval(() => {
          setbujuindex((bujuindex + 1) % Buju.length)
      }, 1500)

      return () => clearInterval(timer)
  }, [bujuindex, Buju.length]);

  const Wande = ["https://res.cloudinary.com/dvl38skbc/image/upload/v1685466014/bpixels/331164400_888117472243299_8978055733544550280_n_jiu9g8.jpg", "https://res.cloudinary.com/dvl38skbc/image/upload/v1685466014/bpixels/331480426_743784240463341_7333090042747830487_n_s0igma.jpg", "https://res.cloudinary.com/dvl38skbc/image/upload/v1685466013/bpixels/331167571_168657642301265_1756523348212823497_n_smdp57.jpg", "https://res.cloudinary.com/dvl38skbc/image/upload/v1685466014/bpixels/331161061_751271059957068_5235602721479073115_n_sdxrsy.jpg", "https://res.cloudinary.com/dvl38skbc/image/upload/v1685466013/bpixels/331044001_615657257039478_9154629205500083347_n_tjqaow.jpg" ]
  const [wandeindex, setwandeindex] = useState(0);

  useEffect(() => {
      const timer = setInterval(() => {
          setwandeindex((wandeindex + 1) % Wande.length)
      }, 1500)

      return () => clearInterval(timer)
  }, [wandeindex, Wande.length]);

  const Davido = ["https://res.cloudinary.com/dvl38skbc/image/upload/v1685732638/bpixels/300507535_437721678130324_4406915255307677659_n_y2c0bk.jpg", "https://res.cloudinary.com/dvl38skbc/image/upload/v1685732638/bpixels/299814483_7835147283225696_4370092039020030602_n_iwb3u3.jpg", "https://res.cloudinary.com/dvl38skbc/image/upload/v1685732637/bpixels/299931431_5682598285092990_1282045020831327954_n_w3dgbo.jpg", "https://res.cloudinary.com/dvl38skbc/image/upload/v1685732637/bpixels/300164027_184399997303813_8133657608491877780_n_ml6ocl.jpg", "https://res.cloudinary.com/dvl38skbc/image/upload/v1685732637/bpixels/300388371_527942552497513_7420016714797600817_n_vc2ess.jpg", "https://res.cloudinary.com/dvl38skbc/image/upload/v1685732637/bpixels/299831022_1083876055581175_7132683698007015447_n_vk1pln.jpg" ]
  const [davidoindex, setdavidoindex] = useState(0);

  useEffect(() => {
      const timer = setInterval(() => {
          setdavidoindex((davidoindex + 1) % Davido.length)
      }, 1500)

      return () => clearInterval(timer)
  }, [davidoindex, Davido.length]);

  
  const AG = ["https://res.cloudinary.com/dvl38skbc/image/upload/v1685733416/bpixels/278931536_685704526014949_1911345965799427350_n_lxj6kz.jpg", "https://res.cloudinary.com/dvl38skbc/image/upload/v1685733416/bpixels/278781870_3093813637503478_7859967685087288154_n_nz0yi0.jpg", "https://res.cloudinary.com/dvl38skbc/image/upload/v1685733416/bpixels/278860878_682726133001935_5432548848261898077_n_kqivh5.jpg", "https://res.cloudinary.com/dvl38skbc/image/upload/v1685733416/bpixels/278833854_721195105715244_656538482517354451_n_wqz0fw.jpg", "https://res.cloudinary.com/dvl38skbc/image/upload/v1685733416/bpixels/278863302_561388428550426_6861540001604623604_n_nn2gdd.jpg" ]
  const [agindex, setagindex] = useState(0);

  useEffect(() => {
      const timer = setInterval(() => {
          setagindex((agindex + 1) % AG.length)
      }, 1500)

      return () => clearInterval(timer)
  }, [agindex, AG.length]);

  
  const Wizkid = ["https://res.cloudinary.com/dvl38skbc/image/upload/v1685734373/bpixels/293945948_1895528330636386_2515850057578404975_n_vdwcld.jpg", "https://res.cloudinary.com/dvl38skbc/image/upload/v1685734373/bpixels/293804569_788772185624329_2263576064282095554_n_mjia0p.jpg", "https://res.cloudinary.com/dvl38skbc/image/upload/v1685734373/bpixels/293638065_1479079652531310_1668746118747038057_n_xegwow.jpg", "https://res.cloudinary.com/dvl38skbc/image/upload/v1685734373/bpixels/293604603_361888366127554_4765292184815734781_n_rzpomp.jpg", "https://res.cloudinary.com/dvl38skbc/image/upload/v1685734373/bpixels/293641043_435605724958519_7262207464844734887_n_yklykw.jpg", "https://res.cloudinary.com/dvl38skbc/image/upload/v1685734373/bpixels/293625947_1989758461219480_3097801478813631841_n_mibdss.jpg"  ]
  const [wizkidindex, setwizkidindex] = useState(0);

  useEffect(() => {
      const timer = setInterval(() => {
          setwizkidindex((wizkidindex + 1) % Wizkid.length)
      }, 1500)

      return () => clearInterval(timer)
  }, [wizkidindex, Wizkid.length]);

  const Vector = ["https://res.cloudinary.com/dvl38skbc/image/upload/v1685734976/bpixels/316471018_702176644584869_3695064501387525572_n_oyky4m.jpg", "https://res.cloudinary.com/dvl38skbc/image/upload/v1685734975/bpixels/316359828_663932658560840_2467159631069436155_n_xrej0u.jpg", "https://res.cloudinary.com/dvl38skbc/image/upload/v1685734974/bpixels/315995649_819705009264926_619910869986545879_n_ehklfz.jpg", "https://res.cloudinary.com/dvl38skbc/image/upload/v1685734974/bpixels/315919101_803355750765702_1812824762236834971_n_v6olta.jpg" ]
  const [vectorindex, setvectorindex] = useState(0);

  useEffect(() => {
      const timer = setInterval(() => {
          setvectorindex((vectorindex + 1) % Vector.length)
      }, 1500)

      return () => clearInterval(timer)
  }, [vectorindex, Vector.length]);

  return (
    <div className="relative text-[#ffd700] bg-[#E9f2ea]">
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
              src={Ayra[index]}
              className="object-contain topcard lg:w-[50vw]"
            />
          </div>
          </AnimatedDiv>

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
              src="https://res.cloudinary.com/dvl38skbc/image/upload/v1685733032/bpixels/299923855_903208494403674_3162584244454081934_n_gokgbv.jpg"
              alt="Asake"
              className="funke lg:h-[80vh] w-[45vw]"
            />
          </div>
          <div className="bg-[#d9d9d9] w-[45vw] lg:w-[30vw]">
            <img
              src="https://res.cloudinary.com/dvl38skbc/image/upload/v1685733051/bpixels/300001014_1129203131338355_7128955304680157867_n_ck2uhy.jpg"
              alt="Asake"
              className="funke lg:h-[80vh] w-[45vw]"
            />
          </div>
          <div className="bg-[#d9d9d9] w-[45vw] lg:w-[30vw]">
            <img
              src="https://res.cloudinary.com/dvl38skbc/image/upload/v1685733052/bpixels/300140587_174901281693647_243187456026375814_n_f5jxyq.jpg"
              alt="Asake"
              className="funke lg:h-[80vh] w-[45vw]"
            />
          </div>
          <div className="bg-[#d9d9d9] w-[45vw] lg:w-[30vw]">
            <img
              src="https://res.cloudinary.com/dvl38skbc/image/upload/v1685733066/bpixels/300364915_442040551304111_5844114726639962599_n_iq6dnh.jpg"
              alt="Asake"
              className="funke lg:h-[80vh] w-[45vw]"
            />
          </div>
          <div className="bg-[#d9d9d9] w-[45vw] lg:w-[30vw]">
            <img
              src="https://res.cloudinary.com/dvl38skbc/image/upload/v1685733066/bpixels/300255948_5890416210992641_6789399045030331321_n_xcbqgu.jpg"
              alt="Asake"
              className="funke lg:h-[80vh] w-[45vw]"
            />
          </div>
          <div className="bg-[#d9d9d9] w-[45vw] lg:w-[30vw]">
            <img
              src="https://res.cloudinary.com/dvl38skbc/image/upload/v1685733084/bpixels/300455470_1202126267187673_4720444831912689280_n_slqv3l.jpg"
              alt="Asake"
              className="funke lg:h-[80vh] w-[45vw]"
            />
          </div>
        </div>

        
        <AnimatedDiv>
          <div className="flex justify-center relative mt-[1rem] mx-[1rem] lg:-z-10">
            <img
              alt="img2"
              src={Wizkid[wizkidindex]}
              className="object-contain topcard lg:w-[50vw]"
            />
          </div>
          </AnimatedDiv>

          <div className="flex flex-wrap gap-3 mt-[1rem] items-center justify-center">
          <div className="bg-[#d9d9d9] w-[45vw] lg:w-[30vw]">
            <img
              src="https://res.cloudinary.com/dvl38skbc/image/upload/v1685466401/bpixels/343300422_759316322258677_1577498328778256282_n_ijfvlp.jpg"
              alt="Oxlade"
              className="funke lg:h-[80vh] w-[45vw]"
            />
          </div>
          <div className="bg-[#d9d9d9] w-[45vw] lg:w-[30vw]">
            <img
              src="https://res.cloudinary.com/dvl38skbc/image/upload/v1685466415/bpixels/343399209_6004577592973793_7652284917310101043_n_nunpej.jpg"
              alt="Oxlade"
              className="funke lg:h-[80vh] w-[45vw]"
            />
          </div>
          <div className="bg-[#d9d9d9] w-[45vw] lg:w-[30vw]">
            <img
              src="https://res.cloudinary.com/dvl38skbc/image/upload/v1685466443/bpixels/343426294_1920628098271364_1337469300527147268_n_mlmqt3.jpg"
              alt="Oxlade"
              className="funke lg:h-[80vh] w-[45vw]"
            />
          </div>
          <div className="bg-[#d9d9d9] w-[45vw] lg:w-[30vw]">
            <img
              src="https://res.cloudinary.com/dvl38skbc/image/upload/v1685466466/bpixels/343601425_976259906722758_9026207621062601130_n_hkpvfe.jpg"
              alt="Oxlade"
              className="funke lg:h-[80vh] w-[45vw]"
            />
          </div>
          <div className="bg-[#d9d9d9] w-[45vw] lg:w-[30vw]">
            <img
              src="https://res.cloudinary.com/dvl38skbc/image/upload/v1685466467/bpixels/344158922_238846762134003_4502929101089046488_n_zceyrm.jpg"
              alt="Oxlade"
              className="funke lg:h-[80vh] w-[45vw]"
            />
          </div>
          <div className="bg-[#d9d9d9] w-[45vw] lg:w-[30vw]">
            <img
              src="https://res.cloudinary.com/dvl38skbc/image/upload/v1685466468/bpixels/344162261_895654944845245_2027235695224013529_n_vbphws.jpg"
              alt="Oxlade"
              className="funke lg:h-[80vh] w-[45vw]"
            />
          </div>
        </div>



          <AnimatedDiv>
          <div className="flex justify-center relative mt-[1rem] mx-[1rem] lg:-z-10">
            <img
              alt="img2"
              src={Kizz[kizzindex]}
              className="object-contain topcard lg:w-[50vw]"
            />
          </div>
          </AnimatedDiv>

          
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
        </div>

        
        <AnimatedDiv>
          <div className="flex justify-center relative mt-[1rem] mx-[1rem] lg:-z-10">
            <img
              alt="img2"
              src={Vector[vectorindex]}
              className="object-contain topcard lg:w-[50vw]"
            />
          </div>
          </AnimatedDiv>

          <div className="flex flex-wrap gap-3 mt-[1rem] items-center justify-center">
          <div className="bg-[#d9d9d9] w-[45vw] lg:w-[30vw]">
            <img
              src="https://res.cloudinary.com/dvl38skbc/image/upload/v1685735332/bpixels/202068865_242436657234069_8180276636041495496_n_c0zacl.jpg"
              alt="LAX"
              className="funke lg:h-[80vh] w-[45vw]"
            />
          </div>
          <div className="bg-[#d9d9d9] w-[45vw] lg:w-[30vw]">
            <img
              src="https://res.cloudinary.com/dvl38skbc/image/upload/v1685735333/bpixels/202625132_346792470407760_1202106470024097790_n_e6q8m1.jpg"
              alt="LAX"
              className="funke lg:h-[80vh] w-[45vw]"
            />
          </div>
          <div className="bg-[#d9d9d9] w-[45vw] lg:w-[30vw]">
            <img
              src="https://res.cloudinary.com/dvl38skbc/image/upload/v1685735333/bpixels/203574265_326439559132064_2794394380176729123_n_vsi8ii.jpg"
              alt="LAX"
              className="funke lg:h-[80vh] w-[45vw]"
            />
          </div>
          <div className="bg-[#d9d9d9] w-[45vw] lg:w-[30vw]">
            <img
              src="https://res.cloudinary.com/dvl38skbc/image/upload/v1685735332/bpixels/202170926_339552057694586_1772370969774687228_n_onrhe8.jpg"
              alt="LAX"
              className="funke lg:h-[80vh] w-[45vw]"
            />
          </div>
          <div className="bg-[#d9d9d9] w-[45vw] lg:w-[30vw]">
            <img
              src="https://res.cloudinary.com/dvl38skbc/image/upload/v1685735332/bpixels/201944332_217062960262421_1200791422014587055_n_twb1ej.jpg"
              alt="LAX"
              className="funke lg:h-[80vh] w-[45vw]"
            />
          </div>
          <div className="bg-[#d9d9d9] w-[45vw] lg:w-[30vw]">
            <img
              src="https://res.cloudinary.com/dvl38skbc/image/upload/v1685735333/bpixels/202607484_2846302149019524_5796316732061861208_n_huvxsn.jpg"
              alt="LAX"
              className="funke lg:h-[80vh] w-[45vw]"
            />
          </div>
        </div>


        
        <AnimatedDiv>
          <div className="flex justify-center relative mt-[1rem] mx-[1rem] lg:-z-10">
            <img
              alt="img2"
              src={AG[agindex]}
              className="object-contain topcard lg:w-[50vw]"
            />
          </div>
          </AnimatedDiv>

          
          
          <div className="flex flex-wrap gap-3 mt-[1rem] items-center justify-center">
          <div className="bg-[#d9d9d9] w-[45vw] lg:w-[30vw]">
            <img
              src="https://res.cloudinary.com/dvl38skbc/image/upload/v1685733742/bpixels/272032211_459243985876933_1501892010532603475_n_czrf3f.jpg"
              alt="Banton"
              className="funke lg:h-[80vh] w-[45vw]"
            />
          </div>
          <div className="bg-[#d9d9d9] w-[45vw] lg:w-[30vw]">
            <img
              src="https://res.cloudinary.com/dvl38skbc/image/upload/v1685733742/bpixels/272009762_661347771667907_8536121236229966257_n_ijscpc.jpg"
              alt="Banton"
              className="funke lg:h-[80vh] w-[45vw]"
            />
          </div>
          <div className="bg-[#d9d9d9] w-[45vw] lg:w-[30vw]">
            <img
              src="https://res.cloudinary.com/dvl38skbc/image/upload/v1685733742/bpixels/272200555_444671487005908_7354222465238871103_n_cztwzc.jpg"
              alt="Banton"
              className="funke lg:h-[80vh] w-[45vw]"
            />
          </div>
          <div className="bg-[#d9d9d9] w-[45vw] lg:w-[30vw]">
            <img
              src="https://res.cloudinary.com/dvl38skbc/image/upload/v1685733742/bpixels/272217141_144918727904870_8140277218703876832_n_ygyjyz.jpg"
              alt="Banton"
              className="funke lg:h-[80vh] w-[45vw]"
            />
          </div>
        </div>

       <AnimatedDiv>
       <div className="flex justify-center relative mt-[1rem] mx-[1rem] lg:-z-10">
            <img
              alt="img2"
              src={Buju[bujuindex]}
              className="object-contain topcard lg:w-[50vw]"
            />
          </div>
       </AnimatedDiv>

          
          
          <div className="flex flex-wrap gap-3 mt-[1rem] items-center justify-center">
          <div className="bg-[#d9d9d9] w-[45vw] lg:w-[30vw]">
            <img
              src="https://res.cloudinary.com/dvl38skbc/image/upload/v1685465594/bpixels/346287509_505978428286929_3149987116542764281_n_cbebcx.jpg"
              alt="Don Jazzy"
              className="funke lg:h-[80vh] w-[45vw]"
            />
          </div>
          <div className="bg-[#d9d9d9] w-[45vw] lg:w-[30vw]">
            <img
              src="https://res.cloudinary.com/dvl38skbc/image/upload/v1685465594/bpixels/346237716_564921712456033_8493191047298654648_n_xouoip.jpg"
              alt="Don Jazzy"
              className="funke lg:h-[80vh] w-[45vw]"
            />
          </div>
          <div className="bg-[#d9d9d9] w-[45vw] lg:w-[30vw]">
            <img
              src="https://res.cloudinary.com/dvl38skbc/image/upload/v1685465595/bpixels/346311331_1662203207566519_4334805424621391663_n_p6zp8w.jpg"
              alt="Don Jazzy"
              className="funke lg:h-[80vh] w-[45vw]"
            />
          </div>
          <div className="bg-[#d9d9d9] w-[45vw] lg:w-[30vw]">
            <img
              src="https://res.cloudinary.com/dvl38skbc/image/upload/v1685465595/bpixels/346378628_961937531604925_1612883111618443095_n_nmvtgw.jpg"
              alt="Don Jazzy"
              className="funke lg:h-[80vh] w-[45vw]"
            />
          </div>
          <div className="bg-[#d9d9d9] w-[45vw] lg:w-[30vw]">
            <img
              src="https://res.cloudinary.com/dvl38skbc/image/upload/v1685465595/bpixels/346405500_255557590335078_7488394895358993054_n_chkrrx.jpg"
              alt="Don Jazzy"
              className="funke lg:h-[80vh] w-[45vw]"
            />
          </div>
          <div className="bg-[#d9d9d9] w-[45vw] lg:w-[30vw]">
            <img
              src="https://res.cloudinary.com/dvl38skbc/image/upload/v1685465595/bpixels/346287512_1314238589438845_4855898673281852778_n_qjusyv.jpg"
              alt="Don Jazzy"
              className="funke lg:h-[80vh] w-[45vw]"
            />
          </div>
        </div>

        
       <AnimatedDiv>
       <div className="flex justify-center relative mt-[1rem] mx-[1rem] lg:-z-10">
            <img
              alt="img2"
              src={Wande[wandeindex]}
              className="object-contain topcard lg:w-[50vw]"
            />
          </div>
       </AnimatedDiv>

                    
          <div className="flex flex-wrap gap-3 mt-[1rem] items-center justify-center">
          <div className="bg-[#d9d9d9] w-[45vw] lg:w-[30vw]">
            <img
              src="https://res.cloudinary.com/dvl38skbc/image/upload/v1685734728/bpixels/271940328_658586891932292_8141321156583690956_n_cmz0sd.jpg"
              alt="Ugo"
              className="funke lg:h-[80vh] w-[45vw]"
            />
          </div>
          <div className="bg-[#d9d9d9] w-[45vw] lg:w-[30vw]">
            <img
              src="https://res.cloudinary.com/dvl38skbc/image/upload/v1685734728/bpixels/271996887_3015108708705837_6697444286818050077_n_v00ebq.jpg"
              alt="Ugo"
              className="funke lg:h-[80vh] w-[45vw]"
            />
          </div>
          <div className="bg-[#d9d9d9] w-[45vw] lg:w-[30vw]">
            <img
              src="https://res.cloudinary.com/dvl38skbc/image/upload/v1685734728/bpixels/272004996_4650113761733209_7816539623113807528_n_co1af6.jpg"
              alt="Ugo"
              className="funke lg:h-[80vh] w-[45vw]"
            />
          </div>
          <div className="bg-[#d9d9d9] w-[45vw] lg:w-[30vw]">
            <img
              src="https://res.cloudinary.com/dvl38skbc/image/upload/v1685734738/bpixels/272012604_645292166915058_7349075016151783510_n_giabrf.jpg"
              alt="Udo"
              className="funke lg:h-[80vh] w-[45vw]"
            />
          </div>
        </div>

        
<AnimatedDiv>
<div className="flex justify-center relative mt-[1rem] mx-[1rem] lg:-z-10">
            <img
              alt="img2"
              src={Tiwa[tiwaindex]}
              className="object-contain topcard lg:w-[50vw]"
            />
          </div>
</AnimatedDiv>

          <div className="flex flex-wrap gap-3 mt-[1rem] items-center justify-center">
          <div className="bg-[#d9d9d9] w-[45vw] lg:w-[30vw]">
            <img
              src="https://res.cloudinary.com/dvl38skbc/image/upload/v1685467507/bpixels/314140358_524610682523526_7747814914711508256_n_you2rw.jpg"
              alt="Image"
              className="funke lg:h-[80vh] w-[45vw]"
            />
          </div>
          <div className="bg-[#d9d9d9] w-[45vw] lg:w-[30vw]">
            <img
              src="https://res.cloudinary.com/dvl38skbc/image/upload/v1685467507/bpixels/314316476_1572222606566118_5758736504839528735_n_kblzre.jpg"
              alt="Image"
              className="funke lg:h-[80vh] w-[45vw]"
            />
          </div>
          <div className="bg-[#d9d9d9] w-[45vw] lg:w-[30vw]">
            <img
              src="https://res.cloudinary.com/dvl38skbc/image/upload/v1685467507/bpixels/314661036_660459289036386_618747971898749495_n_bek4ne.jpg"
              alt="Image"
              className="funke lg:h-[80vh] w-[45vw]"
            />
          </div>
          <div className="bg-[#d9d9d9] w-[45vw] lg:w-[30vw]">
            <img
              src="https://res.cloudinary.com/dvl38skbc/image/upload/v1685467507/bpixels/314120693_483154717247622_2565224650346239643_n_d4ayq1.jpg"
              alt="Image"
              className="funke lg:h-[80vh] w-[45vw]"
            />
          </div>
          <div className="bg-[#d9d9d9] w-[45vw] lg:w-[30vw]">
            <img
              src="https://res.cloudinary.com/dvl38skbc/image/upload/v1685467507/bpixels/314106651_127943683209781_5371838730631455313_n_jmvclo.jpg"
              alt="Image"
              className="funke lg:h-[80vh] w-[45vw]"
            />
          </div>
          <div className="bg-[#d9d9d9] w-[45vw] lg:w-[30vw]">
            <img
              src="https://res.cloudinary.com/dvl38skbc/image/upload/v1685467507/bpixels/314494406_518433139906876_3608737733850311385_n_fmnwqb.jpg"
              alt="Image"
              className="funke lg:h-[80vh] w-[45vw]"
            />
          </div>
        </div>

        <div className="h-[100vh] items-end flex flex-col mt-[1rem] text-[#000009] font-bold justify-start footer">
        <a href="https://www.instagram.com/bpixels.inc" target="_Blank" className="">
        <button className="mt-[5%] mr-[1rem] rounded-[20px] border-[2px] px-[1rem] border-[#000000] text-[1rem] bg-[#ffffff] text-[#000000] py-[0.5rem]">
             Book A Session
            </button>
        </a>
            <a href="https://www.instagram.com/bpixels.inc" target="_Blank" className="mr-[2rem] my-[1rem]">
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
            href="https://twitter.com/bpixels_inc"
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
