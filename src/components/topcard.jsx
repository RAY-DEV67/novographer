import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../config/firebase";
import {
  // getDoc,
  getDocs,
  collection,
  doc,
  addDoc,
  where,
  query,
  deleteDoc,
} from "firebase/firestore";
import { useState, useEffect, useContext } from "react";
import db from "../config/firebase";
import { useNavigate } from "react-router-dom";


export function TopCard(props) {
  const { post } = props;

  return (
    <div className="topcard w-[42vw] flex flex-col items-center rounded-[10px]">
    <div className="relative">
      <img
        src={post.images}
        alt="Product"
        className="lg:h-[80vh] h-[41vh]"
      />
    </div>

        </div>
  );
}
