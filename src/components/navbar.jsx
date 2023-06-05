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
    <div className={`fixed w-[100%] py-[0.5rem] navbar z-10 ${scrolled ? "bg-[#ffffff]" : "bg-transparent"}`}>
      <div className="flex justify-between mx-[1rem] py-[0.rem] items-center">
        <Link to="/">
          <p className="font-bold">Novographer</p>
        </Link>
        <Link to="/Latest Projects">
            <button className="border-[2px] px-[1rem] rounded-[20px] border-[#000000] text-[0.8rem] bg-[#000000] text-[#ffffff] py-[0.5rem]">
             Latest Projects
            </button>
          </Link>
              </div>
    </div>
  );
}
