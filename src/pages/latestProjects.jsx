import { useState } from "react";
import db from "../config/firebase";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { TopCard } from "../components/topcard";


export function LatestProjects() {
//   const { product } = useParams();
  const navigate = useNavigate();

  const [clothsList, setclothsList] = useState([]);
  const [lastDocuments, setlastDocuments] = useState(null);
  const [isEmpty, setisEmpty] = useState(false);
  const [hasmore, sethasmore] = useState(true);
  const [loading, setloading] = useState(false);
  const [empty, setempty] = useState(false);


  useEffect(() => {
    setloading(true);
    setempty(false);
    db.collection("Products")
      .get()
      .then((collections) => {
        const cloths = collections.docs.map((cloths) => {
          return { ...cloths.data(), id: cloths.id };
        });
        const lastDoc = collections.docs[collections.docs.length - 1];
        setclothsList(cloths);
        setlastDocuments(lastDoc);
        setloading(false);
        if (cloths.length === 0) {
          setempty(true);
        }
      });
  }, []);

  const fetchmore = () => {
    setempty(false);
    db.collection("Products")
      .where("category", "==", "Mobile Phones & Laptops")
      .startAfter(lastDocuments)
      .limit(10)
      .get()
      .then((collections) => {
        const isCollectionEmpty = collections.size === 0;
        if (!isCollectionEmpty) {
          const newcloths = collections.docs.map((cloths) => {
            return { ...cloths.data(), id: cloths.id };
          });
          const lastDoc = collections.docs[collections.docs.length - 1];
          setclothsList((clothsList) => [...clothsList, ...newcloths]);
          setlastDocuments(lastDoc);
          // if(newcloths.length === 0){
          //   setempty(true)
          // }
        } else {
          setisEmpty(true);
          sethasmore(false);
        }
        // console.log(clothsList)
      });
  };

  console.log(clothsList.length)
 
  return (
    <div>
      <div className="flex flex-col items-center lg:top-[13%] pt-[70px] lg:z-[-1]">
        <p className="font-bold text-2xl text-center border-y border-[#010101] py-[1rem]">Latest Projects</p>
        <div className="mb-[5rem] flex flex-wrap gap-3 w-[90vw] items-center justify-center mt-[1rem]">
        {clothsList.map((post, index) => {
            return (
              <div
              key={index}
              className="max-w-4xl"
            >
                <TopCard post={post} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
