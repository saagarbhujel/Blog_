//DYNAMIC ROUTE HANDLER

import * as fs from "fs"; //this is import for accessing local json files
import { NextResponse } from "next/server";

export async function GET( request:Request){
  const {searchParams} = new URL(request.url)  //acccess the url and store in the const
  const slug = searchParams.get('slug'); //get slug from url and store in the const
try{
  const data = fs.readFileSync(`blog-data/${slug}.json`, "utf8");  //accessing json file individually eg blog1.json, blog2.json
    const parsedData = JSON.parse(data);  //convert to object
    

    // console.log(request.query.slug);
    // console.log(slug);   
    return NextResponse.json(parsedData);  //send response 
  } catch (error) {
    return NextResponse.json({ message: "error", success: false });
  }
}