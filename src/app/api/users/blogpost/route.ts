import * as fs from "fs";//this is import for accessing local json files
import { NextResponse, NextRequest } from "next/server";

export function GET(response: NextResponse, request: NextRequest) {
  try {
    const data = fs.readFileSync("blog-data/blog1.json", "utf8"); //accessing json file 
    const parsedData = JSON.parse(data);//convert to object

    // console.log(request.query.slug);

    return NextResponse.json(parsedData);  //send response 
  } catch (error) {
    return NextResponse.json({ message: "error", success: false });
  }
}
