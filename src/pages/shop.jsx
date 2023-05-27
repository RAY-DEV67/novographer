import { useState, useEffect } from "react";
// import { ProductsCard } from "../components/productCard";
import LoadingSpinner from "../components/spinner";
import db from "../config/firebase";
import { useNavigate, useParams } from "react-router-dom";
import { TopCard } from "../components/topcard";

export function Shop() {
  const [loading, setloading] = useState(false);
  const [empty, setempty] = useState(false);
  const [error, seterror] = useState("");
  const [hairs, sethairs] = useState([]);
  const [search, setsearch] = useState("");
  const navigate = useNavigate();
  const { product } = useParams();

  console.log(error);

  useEffect(() => {
    try {
      setloading(true);
      setempty(false);
      db.collection("Products")
        .where("category", "==", product)
        // .limit(10)
        .get()
        .then((collections) => {
          const cloths = collections.docs.map((cloths) => {
            return { ...cloths.data(), id: cloths.id };
          });
          sethairs(cloths);
          setTimeout(() => {
            setloading(false);
          }, 1000);
          if (cloths.length === 0) {
            setempty(true);
          }
        });
    } catch (err) {
      seterror(err);
      console.log(err);
    }
  }, []);

  return (
    <div className="bg-[#ffffff]">
      <div className="pt-[4rem]"></div>
      <div className="overlay w-[100vw] fixed top-0 h-[100vh]"></div>
      <div className="relative pizzanova">
        <p className="text-3xl my-[2rem] text-[#1b2b3a] hrp">Shop</p>
        <form
          className="relative"
          onSubmit={() => {
            navigate(`/Search/${search}`);
          }}
        >
          <input
            type="text"
            placeholder="Search for products, categories..."
            className="border border-[#1b2b3a] w-[90%] px-[1rem] py-[0.3rem] rounded-[20px] my-[0.5rem] bg-white"
            onChange={(e) => {
              setsearch(e.target.value);
            }}
          />
          <svg
            width="35px"
            className="border border-[#1b2b3a] p-[0.3rem] rounded-[20px] absolute top-[16%] right-[5%] bg-[#1b2b3a]"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              {" "}
              <path
                d="M15 15L21 21"
                stroke="#ffffff"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>{" "}
              <path
                d="M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z"
                stroke="#ffffff"
                stroke-width="2"
              ></path>{" "}
            </g>
          </svg>
        </form>
        <p className="w-[100%] flex flex-col items-center my-[1rem] loaderContainer">
          {loading && <LoadingSpinner />}
        </p>
        <p className="w-[100%] text-center">
          {empty && "Please Check Your Network Connection"}
        </p>

        <div className="mb-[5rem]">
          <div className="pb-[5rem] flex flex-wrap gap-3 justify-center">
            {hairs.map((post, index) => {
              return (
                <div key={index} className="max-w-4xl">
                  <TopCard post={post} />
                </div>
              );
            })}
          </div>
        </div>

        {/* {hairs.map((post, index) => { */}
        {/* return ( */}
        {/* <div */}
        {/* key={index} */}
        {/* onClick={() => { */}
        {/* navigate(`/Buy/Products/${post.category}/${post.id}`) */}
        {/* }} */}
        {/* className="pb-[2rem] bg-red-300 flex justify-center" */}
        {/* > */}
        {/* <div className="w-[1px]"> */}
        {/* <TopCard post={post}/> */}
        {/* </div> */}
        {/* </div> */}
        {/* ); */}
        {/* })} */}
        <p className="my-[2rem]">Footer</p>
      </div>
    </div>
  );
}
