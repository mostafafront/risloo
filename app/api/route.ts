import { NextRequest } from 'next/server';
import {data} from '../data/Risloo-Center-Sample'

export async function GET(req: NextRequest) {

    const numPerReq: number = 10;
    const currentPage: number = Number(req.nextUrl.searchParams.get('page'));

    const start: number = ((currentPage * numPerReq) - numPerReq);
    const end: number = (currentPage * numPerReq) -1;

    const filteredData = data.filter((_item: {}, index: number) => (index >= start && index <= end))
    // console.log(filteredData)

    return new Response(JSON.stringify(filteredData), { 
        headers: {
            "content-type" : "application/json"
        }
    })
}