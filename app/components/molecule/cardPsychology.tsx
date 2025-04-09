import Item from "@/app/types";
import Image from "next/image";
import React from "react";

export default function CardPsychology({ item }: { item: Item}) {
  return (
    <div
      className="flex flex-col bg-white rounded-xl p-3 justify-between gap-4"
    >
      <div className="flex gap-2 items-center">
        <Image
          width={50}
          height={50}
          alt="doctor"
          className={`rounded-full ${
            !item.manager.avatar && "bg-gray-100 p-2"
          }`}
          src={
            item.manager.avatar
              ? item.manager.avatar[0].url
              : "/images/doctor.png"
          }
        />
        <div className="flex flex-col gap-1">
          <span className="text-sm font-bold line-clamp-1">{item.manager.name}</span>
          <p className="text-xs text-gray-600 line-clamp-1">
            {item.detail.title}
          </p>
        </div>
      </div>
      <div className="text-xs flex gap-1">
        <span>آدرس:</span>
        <p className="text-gray-600 line-clamp-1">{item.detail.address}</p>
      </div>
    </div>
  );
}
