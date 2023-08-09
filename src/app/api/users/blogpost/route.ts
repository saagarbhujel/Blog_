import * as fs from "fs";//this is import for accessing local json files
import { NextResponse, NextRequest } from "next/server";

export function GET(response: NextResponse, request: NextRequest) {
  try {
    const data = fs.readdirSync("blog-data"); //accessing json file 
   console.log(data);
   return NextResponse.json({data, success: true});
  } catch (error) {
    return NextResponse.json({ message: "error", success: false });
  }
}
