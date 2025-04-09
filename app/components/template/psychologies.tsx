"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import CardPsychology from "../molecule/cardPsychology";
import { ServerInsertedMetadataContext } from "next/dist/shared/lib/server-inserted-metadata.shared-runtime";
import Item from "@/app/types";


export default function Psychologies() {
  const [currentPage, setCurrentPage] = useState(1);
  const [doctorsData, setDoctorsData] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:3000/api?page=${currentPage}`)
      .then((res) => res.json())
      .then((data) => setDoctorsData((prev): any => [...prev, ...data]));
  }, [currentPage]);



  const handlescroll = () => {
const d = document.querySelector(".scrollViewElem")
console.log(d)
    if(window.innerHeight + document.documentElement.scrollTop + 1 >= document.documentElement.scrollHeight) {
      setCurrentPage((prev) => prev + 1)
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", handlescroll)

    return () => window.removeEventListener("scroll", handlescroll)
  })

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
      {doctorsData.length > 0 &&
        doctorsData.map((item: Item) => {
          return (
            <CardPsychology key={item.id} item={item}/>
          );
        })}
    </div>
  );
}
