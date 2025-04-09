import {data} from '../data/Risloo-Center-Sample'

export async function GET() {

    
    return new Response(JSON.stringify(data), {
        headers: {
            "content-type" : "application/json"
        }
    })
}