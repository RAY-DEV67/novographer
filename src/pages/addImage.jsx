// import { Profile } from "./profile";
import { auth } from "../config/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { useState } from "react";
import db from "../config/firebase";
import { storage } from "../config/firebase";
import { updateDoc, addDoc, collection } from "firebase/firestore";

export function AddImage() {
  const [isfile, setfile1] = useState("");
  const [loading, setloading] = useState(false);


  const [errors, seterrors] = useState({});

 

  const validateForm = () => {
    let tempErrors = {};
    if (!isfile) {
      tempErrors.file1 = "Please select a title Picture";
    }
    seterrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

 

  const upload = async () => {
    setloading(true)
    const docRef = await addDoc(collection(db, "Products"), {
    
    });

    if (isfile == null) return;
    storage
      .ref("/images/" + isfile.name)
      .put(isfile)
      .on("state_changed", alert("Product Successfully uploaded"), alert, () => {
        storage
          .ref("images")
          .child(isfile.name)
          .getDownloadURL()
          .then((imgUrl) => {
            console.log(imgUrl)
            updateDoc(docRef, {
              images: imgUrl,
            });
          });
      });

      setloading(false)
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (validateForm()) {
      upload();

      console.log("form is valid");
      // console.log(isfile.name);
    } else {
      console.log("form is invalid");
      setloading(false)
    }
  };

  return (
    <div>
      <div className="pt-[120px] flex flex-col items-center w-[100vw] h-[100vh] bg-[#E9f2ea]">
          <div className="flex flex-col items-center">
            <form
              onSubmit={handleSubmit}
              className="w-[90%] bg-black text-white mb-[2rem] rounded-[10px] max-w-3xl flex flex-col px-[1rem] pb-[2.5rem]"
            >
         
              <div className="mt-[2rem]">
                <h2>Add photo</h2>
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
                    {errors.file1 && <p className="error">{errors.file1}</p>}
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
                type="submit"
                value={loading ? "Sending Image..." : "Post Image"}
                className="text-center bg-white text-black font-bold mt-[2rem] border py-[0.5rem] rounded-[10px] items-center"
              />
            </form>
          </div>
        </div>
    </div>
  );
}