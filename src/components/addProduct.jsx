// import { Profile } from "./profile";
import { auth, provider } from "../config/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { useState } from "react";
import db from "../config/firebase";
import { storage } from "../config/firebase";
import { updateDoc, addDoc, collection } from "firebase/firestore";
import { signInWithPopup } from "firebase/auth";

export function AddProduct() {
  const [user] = useAuthState(auth);
  const signInWithGoogle = async () => {
    const result = await signInWithPopup(auth, provider);
    console.log(result);
  };

  const [categories, setcategories] = useState(false);
  const [isfile, setfile1] = useState("");
  const file2 = ""
  const file3 = ""
  const [prices, setprices] = useState(null);
  const [title, settitle] = useState("");
  const description = ""
  const [category, setcategory] = useState("Categories");
  const [loading, setloading] = useState(false);
  const color = "";
  const length = ""
  const lace = ""
  const texture = ""
  const weight = "";
  const quality = "";

  console.log(prices);

  const [errors, seterrors] = useState({});

  const validateForm = () => {
    let tempErrors = {};
    if (!isfile) {
      tempErrors.file1 = "Please select a title Picture";
    }
    if (!title) {
      tempErrors.title = "Please add a title";
    }
    if (!prices) {
      tempErrors.price = "Please input a price for the product";
    }
    if (isNaN(prices)) {
      tempErrors.price = "Please input a number";
    }

    if (category === "Categories") {
      tempErrors.category = "Please select category";
    }
    seterrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const upload = async () => {
    setloading(true);
    const docRef = await addDoc(collection(db, "Products"), {
      title: title,
      description: description,
      price: Number(prices),
      category: category,
      userId: user?.uid,
      color: color,
      length: length,
      lace: lace,
      texture: texture,
      weight: weight,
      quality: quality,
      searchKeywords: `${title.toLowerCase()} ${category?.toLowerCase()}`.split(
        " "
      ),
    });

    if (isfile == null) return;
    storage
      .ref("/images/" + isfile.name)
      .put(isfile)
      .on(
        "state_changed",
        alert("Product Successfully uploaded"),
        alert,
        () => {
          storage
            .ref("images")
            .child(isfile.name)
            .getDownloadURL()
            .then((imgUrl) => {
              updateDoc(docRef, {
                images: imgUrl,
                username: user?.displayName,
              });
            });
        }
      );

    if (file2 == null) return;
    storage
      .ref("/images/" + file2.name)
      .put(file2)
      .on("state_changed", () => {
        storage
          .ref("images")
          .child(file2.name)
          .getDownloadURL()
          .then((imgUrl) => {
            updateDoc(docRef, {
              images2: imgUrl,
            });
          });
      });

    if (file3 == null) return;
    storage
      .ref("/images/" + file3.name)
      .put(file3)
      .on("state_changed", () => {
        storage
          .ref("images")
          .child(file3.name)
          .getDownloadURL()
          .then((imgUrl) => {
            updateDoc(docRef, {
              images3: imgUrl,
            });
          });
      });
    setloading(false);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (validateForm()) {
      upload();

      console.log("form is valid");
      // console.log(isfile.name);
    } else {
      console.log("form is invalid");
      setloading(false);
    }
  };

  return (
    <div>
      {user ? (
        <div className="bg-[#1b2b3a] pt-[4rem]">
          <p className="text-[1rem] my-[2rem] hrp text-[#d9d9d9] ">Add A New Product</p>
          <div className="flex flex-col items-center">
            <form
              onSubmit={handleSubmit}
              className="w-[90%] bg-[#ffea00] mb-[2rem] rounded-[10px] flex flex-col px-[1rem] pb-[2.5rem]"
            >
              <div
                onClick={() => {
                  setcategories(!categories);
                }}
                className="flex mt-[2rem] px-[1rem] justify-between border py-[0.5rem] rounded-[10px] items-center bg-white"
              >
                <p>{category}</p>
                <p>&#8964;</p>
              </div>
              {errors.category && <p>{errors.category}</p>}

              {categories ? (
                <div className="flex flex-col items-center mt-[1rem] bg-blue-300 py-[1rem] rounded-[10px]">
                  <p
                    onClick={() => {
                      setcategories(false);
                      setcategory("NEW IN");
                    }}
                    className="w-[100%] text-center pb-[0.5rem]"
                  >
                    NEW IN
                  </p>
                  <p
                    onClick={() => {
                      setcategories(false);
                      setcategory("T-Shirts");
                    }}
                    className="border-b-[2px] border-t-[2px] w-[100%] text-center py-[0.5rem]"
                  >
 T-Shirts
                  </p>
                  <p
                    onClick={() => {
                      setcategories(false);
                      setcategory("Vests");
                    }}
                    className="border-b-[2px] border-t-[2px] w-[100%] text-center py-[0.5rem]"
                  >
                    Vests
                  </p>
                  <p
                    onClick={() => {
                      setcategories(false);
                      setcategory("Graphic T-Shirts");
                    }}
                    className="border-b-[2px] border-t-[2px] w-[100%] text-center py-[0.5rem]"
                  >
                    Graphic T-Shirts
                  </p>
                  <p
                    onClick={() => {
                      setcategories(false);
                      setcategory("Hoodies & SweatShirts");
                    }}
                    className="border-b-[2px] border-t-[2px] w-[100%] text-center py-[0.5rem]"
                  >
                    Hoodies & SweatShirts
                  </p>
                  <p
                    onClick={() => {
                      setcategories(false);
                      setcategory("Cargos");
                    }}
                    className="border-b-[2px] border-t-[2px] w-[100%] text-center py-[0.5rem]"
                  >
                    Cargos
                  </p>
                  <p
                    onClick={() => {
                      setcategories(false);
                      setcategory("Shorts");
                    }}
                    className="border-b-[2px] border-t-[2px] w-[100%] text-center py-[0.5rem]"
                  >
                    Shorts
                  </p>
                  <p
                    onClick={() => {
                      setcategories(false);
                      setcategory("Shirts");
                    }}
                    className="border-b-[2px] border-t-[2px] w-[100%] text-center py-[0.5rem]"
                  >
                    Shirts
                
                  </p>
                  <p
                    onClick={() => {
                      setcategories(false);
                      setcategory("Tracksuits");
                    }}
                    className="border-b-[2px] border-t-[2px] w-[100%] text-center py-[0.5rem]"
                  >
                  Tracksuits
                  </p>
                  <p
                    onClick={() => {
                      setcategories(false);
                      setcategory("Denim");
                    }}
                    className="border-b-[2px] border-t-[2px] w-[100%] text-center py-[0.5rem]"
                  >
                  Denim
                  </p>
                  <p
                    onClick={() => {
                      setcategories(false);
                      setcategory("Suits & Tailoring");
                    }}
                    className="border-b-[2px] border-t-[2px] w-[100%] text-center py-[0.5rem]"
                  >
                  Suits & Tailoring
                  </p>
                  <p
                    onClick={() => {
                      setcategories(false);
                      setcategory("Sets & Co-ords");
                    }}
                    className="border-b-[2px] border-t-[2px] w-[100%] text-center py-[0.5rem]"
                  >
                  Sets & Co-ords
                  </p>
                  <p
                    onClick={() => {
                      setcategories(false);
                      setcategory("Joggers");
                    }}
                    className="border-b-[2px] border-t-[2px] w-[100%] text-center py-[0.5rem]"
                  >
                  Joggers
                  </p>
                  <p
                    onClick={() => {
                      setcategories(false);
                      setcategory("Trousers");
                    }}
                    className="border-b-[2px] border-t-[2px] w-[100%] text-center py-[0.5rem]"
                  >
                  Trousers
                  </p>
                  <p
                    onClick={() => {
                      setcategories(false);
                      setcategory("Coats & Jackets");
                    }}
                    className="border-b-[2px] border-t-[2px] w-[100%] text-center py-[0.5rem]"
                  >
                  Coats & Jackets
                  </p>
                  <p
                    onClick={() => {
                      setcategories(false);
                      setcategory("Knitwear");
                    }}
                    className="border-b-[2px] border-t-[2px] w-[100%] text-center py-[0.5rem]"
                  >
                  Knitwear
                  </p>
                  <p
                    onClick={() => {
                      setcategories(false);
                      setcategory("Linen Clothing");
                    }}
                    className="border-b-[2px] border-t-[2px] w-[100%] text-center py-[0.5rem]"
                  >
                  Linen Clothing
                  </p>
                  <p
                    onClick={() => {
                      setcategories(false);
                      setcategory("Activewear");
                    }}
                    className="border-b-[2px] border-t-[2px] w-[100%] text-center py-[0.5rem]"
                  >
                  Activewear
                  </p>
                  <p
                    onClick={() => {
                      setcategories(false);
                      setcategory("Underwear & Socks");
                    }}
                    className="border-b-[2px] border-t-[2px] w-[100%] text-center py-[0.5rem]"
                  >
                  Underwear & Socks
                  </p>
                  <p
                    onClick={() => {
                      setcategories(false);
                      setcategory("Shoes & Accessories");
                    }}
                    className="border-b-[2px] border-t-[2px] w-[100%] text-center py-[0.5rem]"
                  >
                  Shoes & Accessories
                  </p>
                </div>
              ) : (
                ""
              )}

              <div className="mt-[2rem]">
                <h2>Add photo</h2>
                <p className="text-[12px] mt-[1rem]">
                  First picture is the title picture
                </p>
                <div className="flex flex-col">
                  <div>
                    <input
                      className="mt-[1rem]"
                      type="file"
                      name="photos"
                      onChange={(event) => {
                        setfile1(event.target.files[0]);
                      }}
                    />
                    {errors.file1 && <p>{errors.file1}</p>}
                  </div>
                </div>
                <p className="text-[12px] mt-[1rem]">
                  Each picture must not exceed 5MB
                </p>
                <p className="text-[12px]">
                  Supported formats are *.jpg and *jpeg
                </p>
              </div>

              <input
                className="mt-[1rem] py-[0.5rem] rounded-[10px] px-[1rem]"
                type="text"
                placeholder="TITLE*"
                name="title"
                onChange={(e) => {
                  settitle(e.target.value);
                }}
                // value={values.title}
                // {...register("title")}
              />
              {errors.title && <p>{errors.title}</p>}

              
              <div className="relative">
                <input
                  className="mt-[1rem] py-[0.5rem] rounded-[10px] px-[3rem] w-[100%]"
                  type="number"
                  placeholder="Price*"
                  name="price"
                  onChange={(e) => {
                    setprices(e.target.value);
                  }}
                  // value={Number(values.price)}
                  // {...register("price")}
                />
                <svg
                  fill="#000000"
                  width="20"
                  height="20"
                  version="1.1"
                  id="Capa_1"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 496.262 496.262"
                  className="absolute top-[48%] left-[2%]"
                >
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <g>
                      {" "}
                      <path d="M477.832,274.28h-67.743v-65.106h67.743c10.179,0,18.43-8.243,18.43-18.424c0-10.182-8.251-18.43-18.43-18.43h-67.743 V81.982c0-13.187-2.606-22.866-7.743-28.762c-4.882-5.609-11.301-8.219-20.19-8.219c-8.482,0-14.659,2.592-19.447,8.166 c-5.077,5.902-7.654,15.599-7.654,28.821v90.343H227.627l-54.181-81.988c-4.637-7.317-8.997-14.171-13.231-20.75 c-3.812-5.925-7.53-10.749-11.042-14.351c-3.109-3.189-6.652-5.657-10.796-7.554c-3.91-1.785-8.881-2.681-14.762-2.681 c-7.501,0-14.31,2.055-20.83,6.277c-6.452,4.176-10.912,9.339-13.636,15.785c-2.391,6.126-3.656,15.513-3.656,27.63v77.626h-67.07 C8.246,172.326,0,180.574,0,190.755c0,10.181,8.246,18.424,18.424,18.424h67.07v65.113h-67.07C8.246,274.292,0,282.538,0,292.722 C0,302.9,8.246,311.14,18.424,311.14h67.07v103.143c0,12.797,2.689,22.378,8.015,28.466c5.065,5.805,11.487,8.5,20.208,8.5 c8.414,0,14.786-2.707,20.07-8.523c5.411-5.958,8.148-15.533,8.148-28.442V311.14h115.308l62.399,95.683 c4.339,6.325,8.819,12.709,13.287,18.969c4.031,5.621,8.429,10.574,13.069,14.711c4.179,3.742,8.659,6.484,13.316,8.157 c4.794,1.726,10.397,2.601,16.615,2.601c16.875,0,34.158-5.166,34.158-43.479V311.14h67.743c10.179,0,18.43-8.252,18.43-18.43 C496.262,282.532,488.011,274.28,477.832,274.28z M355.054,209.173v65.106h-60.041l-43.021-65.106H355.054z M141.936,134.364 l24.76,37.956h-24.76V134.364z M141.936,274.28v-65.106h48.802l42.466,65.106H141.936z M355.054,365.153l-35.683-54.013h35.683 V365.153z"></path>{" "}
                    </g>{" "}
                  </g>
                </svg>
              </div>
              {errors.price && <p>{errors.price}</p>}

              <input
                type="submit"
                value={loading ? "Sending Product..." : "Post Ad"}
                className="text-center bg-[#3EB812] text-white mt-[2rem] border py-[0.5rem] rounded-[10px] items-center"
              />
            </form>
          </div>
        </div>
      ) : (
        <div className="overflow-hidden">
          <div className="flex flex-col items-center justify-center h-[100vh] bg-[#FF6400]">
            <div className="LoggedOutProfile border login-page w-[90%] pb-[1rem] rounded-[10px]">
              <div className="flex flex-col items-center justify-center py-[1rem] bg-[#d9d9d9]  text-[#282828] rounded-t-[10px]">
                {/* <img src={logo} alt="Logo" className="w-[25vw] "/> */}
                <p className="mt-[0.5rem]">More Than Just A Pizza</p>
              </div>
              <p className="mt-[2rem] text-[2rem] mb-[0.5rem] text-bolder">
                Login
              </p>
              <p>Get access to your favorites and orders</p>
              <div className="flex flex-col items-center">
                <div
                  onClick={signInWithGoogle}
                  className="SignInButton border bg-[#d9d9d9] text-[#282828] sign-in-google rounded-[20px] cursor-pointer w-[60%] py-[0.3rem] mt-[2rem] flex justify-center"
                >
                  <svg
                    viewBox="-0.5 0 48 48"
                    version="1.1"
                    height="25"
                    width="25"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="#000000"
                    className="mx-[0.5rem]"
                  >
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      {" "}
                      <title>Google-color</title>{" "}
                      <desc>Created with Sketch.</desc> <defs> </defs>{" "}
                      <g
                        id="Icons"
                        stroke="none"
                        stroke-width="1"
                        fill="none"
                        fill-rule="evenodd"
                      >
                        {" "}
                        <g
                          id="Color-"
                          transform="translate(-401.000000, -860.000000)"
                        >
                          {" "}
                          <g
                            id="Google"
                            transform="translate(401.000000, 860.000000)"
                          >
                            {" "}
                            <path
                              d="M9.82727273,24 C9.82727273,22.4757333 10.0804318,21.0144 10.5322727,19.6437333 L2.62345455,13.6042667 C1.08206818,16.7338667 0.213636364,20.2602667 0.213636364,24 C0.213636364,27.7365333 1.081,31.2608 2.62025,34.3882667 L10.5247955,28.3370667 C10.0772273,26.9728 9.82727273,25.5168 9.82727273,24"
                              id="Fill-1"
                              fill="#FBBC05"
                            >
                              {" "}
                            </path>{" "}
                            <path
                              d="M23.7136364,10.1333333 C27.025,10.1333333 30.0159091,11.3066667 32.3659091,13.2266667 L39.2022727,6.4 C35.0363636,2.77333333 29.6954545,0.533333333 23.7136364,0.533333333 C14.4268636,0.533333333 6.44540909,5.84426667 2.62345455,13.6042667 L10.5322727,19.6437333 C12.3545909,14.112 17.5491591,10.1333333 23.7136364,10.1333333"
                              id="Fill-2"
                              fill="#EB4335"
                            >
                              {" "}
                            </path>{" "}
                            <path
                              d="M23.7136364,37.8666667 C17.5491591,37.8666667 12.3545909,33.888 10.5322727,28.3562667 L2.62345455,34.3946667 C6.44540909,42.1557333 14.4268636,47.4666667 23.7136364,47.4666667 C29.4455,47.4666667 34.9177955,45.4314667 39.0249545,41.6181333 L31.5177727,35.8144 C29.3995682,37.1488 26.7323182,37.8666667 23.7136364,37.8666667"
                              id="Fill-3"
                              fill="#34A853"
                            >
                              {" "}
                            </path>{" "}
                            <path
                              d="M46.1454545,24 C46.1454545,22.6133333 45.9318182,21.12 45.6113636,19.7333333 L23.7136364,19.7333333 L23.7136364,28.8 L36.3181818,28.8 C35.6879545,31.8912 33.9724545,34.2677333 31.5177727,35.8144 L39.0249545,41.6181333 C43.3393409,37.6138667 46.1454545,31.6490667 46.1454545,24"
                              id="Fill-4"
                              fill="#4285F4"
                            >
                              {" "}
                            </path>{" "}
                          </g>{" "}
                        </g>{" "}
                      </g>{" "}
                    </g>
                  </svg>
                  <p>Sign in with Google</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
