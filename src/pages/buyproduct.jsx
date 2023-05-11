import {
  getDoc,
  getDocs,
  collection,
  doc,
  addDoc,
  where,
  query,
  deleteDoc,
} from "firebase/firestore";
// import ImageSlider, { Slide } from "react-auto-image-slider";
import db from "../config/firebase";
import { useState, useEffect, useContext } from "react";
// import { Topnav } from "../components/topnav";
// import { Footer } from "../components/footer";
// import InfiniteScroll from "react-infinite-scroll-component";
import { useParams, useNavigate } from "react-router-dom";
import { auth } from "../config/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { ProductsCard } from "../components/productCard";
import { SetLoadCart, LoadCart } from "../App";
import { TopCard } from "../components/topcard";
// import { ProductsCard } from "../components/productsCard";

export function BuyProduct() {
  const [user] = useAuthState(auth);
  const { id } = useParams();
  const { collections } = useParams();
  const { product } = useParams();
  const navigate = useNavigate();
  const setLoadcart = useContext(SetLoadCart);
  const Loadcart = useContext(LoadCart);

  //   const setcart = useContext(SetAddCart);
  //   const cart = useContext(AddCart);

  const [buyProduct, setbuyProduct] = useState(null);
  const [clothsList, setclothsList] = useState([]);
  const [loadingCart, setloadingCart] = useState(false);
  const [saves, setsaves] = useState([]);
  const [error, seterror] = useState();

  console.log(error);

  useEffect(() => {
    const topRef = doc(db, collections, id);
    getDoc(topRef).then((doc) => {
      setbuyProduct(doc.data());
    });
  }, [id, collections]);

  useEffect(() => {
    try {
      db.collection("Products")
        .where("category", "==", product)
        .limit(10)
        .get()
        .then((collections) => {
          const cloths = collections.docs.map((cloths) => {
            return { ...cloths.data(), id: cloths.id };
          });
          // const lastDoc = collections.docs[collections.docs.length - 1];
          setclothsList(cloths);
        });
    } catch (err) {
      seterror(err);
      console.log(err);
    }
  }, [product]);

  const docRef = collection(db, "Cart");

  useEffect(() => {
    db.collection("Cart")
      .where("postId", "==", id)
      .limit(10)
      .get()
      .then((collections) => {
        const cloths = collections.docs.map((cloths) => {
          return { userId: cloths.data().userId, saveId: cloths.id };
        });
        setsaves(cloths);
      });
  }, [id]);

  const hasProductBeenSaved = saves.find((save) => save.userId === user?.uid);

  const addCart = async () => {
    setloadingCart(true);
    try {
      const newDoc = await addDoc(docRef, {
        userId: user?.uid,
        postId: id,
        images: buyProduct.images,
        title: buyProduct.title,
        price: buyProduct.price,
        category: buyProduct.category,
        description: buyProduct.description,
      });
      console.log("DocumentAdded");
      setLoadcart(!Loadcart);
      setloadingCart(false);
      if (user) {
        setsaves((prev) =>
          prev
            ? [...prev, { userId: user?.uid, likeId: newDoc.id }]
            : [{ userId: user?.uid, likeId: newDoc.id }]
        );
        console.log(saves);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const removeCart = async () => {
    setloadingCart(true);
    try {
      const CartToDeleteQuery = query(
        docRef,
        where("postId", "==", id),
        where("userId", "==", user?.uid)
      );

      const CartToDeleteData = await getDocs(CartToDeleteQuery);
      const CartToDelete = doc(db, "Cart", CartToDeleteData?.docs[0].id);
      await deleteDoc(CartToDelete);
      console.log("DocumentDeleted");
      setLoadcart(!Loadcart);
      setloadingCart(false);
      if (user) {
        setsaves((prev) =>
          prev.filter((like) => like.saveId === CartToDeleteData?.docs[0].id)
        );
        console.log(saves);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const formatCur = function (value, locale, currency) {
    return new Intl.NumberFormat(locale, {
      style: "currency",
      currency: currency,
    }).format(value);
  };

  const images = [buyProduct?.images, buyProduct?.images2, buyProduct?.images3];
  const [index, setindex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setindex((index + 1) % images.length);
    }, 3000);

    return () => clearInterval(timer);
  }, [index, images.length]);

  return (
    <div className="lg:mt-[7rem] productfont text-[#d9d9d9]">
      <div className="pt-[4rem]"></div>
      <div className="overlay w-[100vw] fixed top-0 h-[100vh]"></div>
      {/* <Topnav /> */}
      <div className="relative pizzanova">
        <div className="flex justify-center relative mt-[2rem] mx-[0.5rem] lg:-z-10">
          <img
            alt="img2"
            src={buyProduct?.images}
            className="object-contain topcard rounded-[1rem]"
          />
        </div>

        <div className="buyProductBorder mb-[1rem] mt-[1rem] mx-[1rem] pb-[1rem] text-left">
          <p className="text-2xl font-bold mb-[0.5rem]">{buyProduct?.title}</p>
          <div className="flex justify-left">
            <p className="ml-[0.2rem] text-xl">
              {formatCur(buyProduct?.price, "en-NG", "NGN")}
            </p>
          </div>
        </div>

        <div className="mx-[1rem] flex justify-center">
          <div
            className="py-[0.5rem] px-[1rem] rounded-[20px] mt-[1rem] mb-[0.5rem] bg-[#FF6400]"
            onClick={() => {
              !user
                ? navigate("/Profile")
                : hasProductBeenSaved
                ? removeCart()
                : addCart();
            }}
          >
            {loadingCart ? (
              <div className="spinner-container px-[0.1rem] pt-[0.5rem] flex justify-center items-center">
                <div className="Cartloading-spinner"></div>
              </div>
            ) : (
              <p className="text-white text-sm w-[100%]">
                {hasProductBeenSaved ? "Added To Cart!!" : "Add To Cart "}
              </p>
            )}
          </div>
        </div>

        <h2 className="mt-[2rem] mb-[0.5rem] text-2xl hrp ml-[1rem]">
          Similar Products
        </h2>

        <div className="mb-[5rem]">
          <div className="pb-[5rem] flex flex-wrap gap-3 justify-center">
            {clothsList.map((post, index) => {
              return (
                <div key={index} className="max-w-4xl">
                  <TopCard post={post} />
                </div>
              );
            })}
          </div>
        </div>
        {/* <Footer /> */}
      </div>{" "}
    </div>
  );
}
