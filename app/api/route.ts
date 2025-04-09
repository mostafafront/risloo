import { NextRequest } from 'next/server';
import {data} from '../data/Risloo-Center-Sample'

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

export async function GET(req: NextRequest) {

    const numPerReq: number = 10;
    const currentPage: number = Number(req.nextUrl.searchParams.get('page'));

    const start: number = ((currentPage * numPerReq) - numPerReq);
    const end: number = (currentPage * numPerReq) -1;

    const filteredData: {}[] = data.filter((_item: {}, index: number) => (index >= start && index <= end))
    // console.log(filteredData)

    return new Response(JSON.stringify(filteredData), { 
        headers: {
            "content-type" : "application/json"
        }
    })
}