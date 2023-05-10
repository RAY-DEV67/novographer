import { Link } from "react-router-dom";
import logo from "../assets/novalogo.png";
import { useEffect, useState} from "react";
// import db from "../config/firebase";
import { auth } from "../config/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
// import LoadingSpinner from "./spinner";
// import { EcommerceCard } from "./topcard";
// import { signInWithPopup} from "firebase/auth";
// import { ShowCart, SetShowCart, LoadCart } from "../App";
import { useNavigate } from "react-router-dom";


export function Navbar() {
 
  const navigate = useNavigate();

  const [user] = useAuthState(auth);
  const [scrolled, setscrolled] = useState(false);

useEffect(() => {
  const handleScroll = () => {
    if (window.scrollY > 0) {
        setscrolled(true)
    } else {
        setscrolled(false)
    }
  }

  window.addEventListener("scroll", handleScroll)

  return () => {
    window.removeEventListener("scroll", handleScroll)
  }
}, []);

  return (
    <div className={`fixed w-[100%] navbar z-10 ${scrolled ? "bg-[#FF6400]" : "bg-transparent"}`}>
      <div className="flex justify-between mx-[1rem] py-[0.5rem] items-center">
        <div className="flex">
          <svg
            width="40px"
            fill="#ffffff"
            viewBox="0 0 1024 1024"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              <title>Artboard</title>
              <path
                d="M768 306.2V383H256v-76.8h512zM256 536.6h512v-76.8H256v76.8zm0 153.6h512v-76.8H256v76.8z"
                fill-rule="evenodd"
              ></path>
            </g>
          </svg>
        </div>
        <Link to="/">
          <img src={logo} alt="Logo" className="w-[15vw] my-[-0.5rem]" />
        </Link>
        <div
              className="relative"
              onClick={() => {
                !user ? navigate(`/Profile`) : navigate(`/Cart/${user?.uid}`)
              }}
            >
          <svg
            viewBox="0 0 24 24"
            className="ml-[0.5rem]"
            width="30px"
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
                d="M4.78571 5H18.2251C19.5903 5 20.5542 6.33739 20.1225 7.63246L18.4558 12.6325C18.1836 13.4491 17.4193 14 16.5585 14H6.07142M4.78571 5L4.74531 4.71716C4.60455 3.73186 3.76071 3 2.76541 3H2M4.78571 5L6.07142 14M6.07142 14L6.25469 15.2828C6.39545 16.2681 7.23929 17 8.23459 17H17M17 17C15.8954 17 15 17.8954 15 19C15 20.1046 15.8954 21 17 21C18.1046 21 19 20.1046 19 19C19 17.8954 18.1046 17 17 17ZM11 19C11 20.1046 10.1046 21 9 21C7.89543 21 7 20.1046 7 19C7 17.8954 7.89543 17 9 17C10.1046 17 11 17.8954 11 19Z"
                stroke="#ffffff"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>{" "}
            </g>
          </svg>
          </div>
      </div>
    </div>
  );
}
