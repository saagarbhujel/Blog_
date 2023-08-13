import * as fs from "fs";
import { NextResponse, NextRequest } from "next/server";

export async function POST(response: NextResponse, request: NextRequest){
  const userData = await fs.readdirSync('contactData')
  const data = await response.text(); // Read the response body as text
  
    fs.writeFileSync(`contactData/${userData.length+1}.json`, data); // Write the data to a file
    return  NextResponse.json(data);
 
}

export async function GET(response: NextResponse,request: NextRequest){
  return NextResponse.json(["sfdjsd"])
}