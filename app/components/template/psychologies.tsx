"use client";
import Image from "next/image";
import { useState, useEffect } from "react";


type Avatar = {
  id: string;
  file_name: string;
  slug: string;
  mode: string;
  url: string;
  type: string;
  mime: string;
  exec: string;
};

interface Manager {
  id: string;
  name: string;
  user_id: string;
  avatar: Avatar[];
}

interface Detail {
  title: string;
  description: string;
  address: string;
  avatar: Avatar[];
  phone_numbers: string[];
}

interface Item {
  id: string;
  manager: Manager;
  acceptation: null;
  status: string;
  type: string;
  detail: Detail;
  created_at: number;
}


export default function Psychologies() {
  const [doctorsData, setDoctorsData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/api?page=1")
      .then((res) => res.json())
      .then((data) => setDoctorsData(data));
  }, []);



  return (
    <div className="grid grid-cols-4">
      {
        doctorsData.length > 0 && doctorsData.map((item: Item) => {
          return (
            <div key={item.id} className="flex flex-col">
              <div className="w-max bg-gray-100 p-2">
              <Image width={50} height={50} alt="doctor" src={item.manager.avatar ? item.manager.avatar[0].url : "/images/doctor.png"}/>
              </div>
              <div className="flex flex-col gap-3">
                <span>{item.manager.name}</span>
                <p>{item.detail.title}</p>
              </div>
            </div>
          )
        })
      }
    </div>
  );
}
