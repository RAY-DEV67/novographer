import { Link } from "react-router-dom";
import { useEffect, useState} from "react";
import { auth } from "../config/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
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
    <div className={`absolute w-[100%] navbar z-10 ${scrolled ? "bg-[#ffffff]" : "bg-transparent"}`}>
      <div className="flex justify-start mx-[1rem] py-[0.5rem] items-center">
        <Link to="/">
          <img src="https://res.cloudinary.com/dvl38skbc/image/upload/v1685391427/bpixels/logo_2_gy3b3y.png" alt="Logo" className="w-[15vw] lg:w-[5vw] my-[-0.5rem]" />
        </Link>
              </div>
    </div>
  );
}
