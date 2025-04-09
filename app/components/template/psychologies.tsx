"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import CardPsychology from "../molecule/cardPsychology";
import { ServerInsertedMetadataContext } from "next/dist/shared/lib/server-inserted-metadata.shared-runtime";
import Item from "@/app/types";
import Loading from "@/app/loading";

export default function Psychologies() {
  const [currentPage, setCurrentPage] = useState(1);
  const [doctorsData, setDoctorsData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    fetch(`http://localhost:3000/api?page=${currentPage}`)
      .then((res) => res.json())
      .then((data) => {
        setDoctorsData((prev): any => [...prev, ...data]);
        setIsLoading(false);
      })
      .catch((err) => {
        setIsLoading(false);
        setIsError(true);
      });
  }, [currentPage]);

  const handlescroll = () => {
    const d = document.querySelector(".scrollViewElem");

    if (
      window.innerHeight + document.documentElement.scrollTop + 1 >=
        document.documentElement.scrollHeight &&
      !isError
    ) {
      setIsLoading(true);
      setCurrentPage((prev) => prev + 1);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handlescroll);

    return () => window.removeEventListener("scroll", handlescroll);
  });

  return (
    <section className="flex flex-col items-center gap-3 min-h-[100vh] py-8">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
        {doctorsData.length > 0 &&
          doctorsData.map((item: Item) => {
            return <CardPsychology key={item.id} item={item} />;
          })}
      </div>
      {isLoading && <Loading />}
    </section>
  );
}
