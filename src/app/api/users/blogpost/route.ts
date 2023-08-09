import * as fs from "fs";//this is import for accessing local json files
import { NextResponse } from "next/server";

export async function GET(response: NextResponse) {

    const data =  fs.readdirSync("blog-data"); //accessing json file 
  //  console.log(data);
   const allBlogData = []

   for (let index = 0; index < data.length; index++) {
    const item = data[index];
    // console.log(item);
    const fetch = fs.readFileSync(("blog-data/" + item), "utf8");
    // console.log(fetch)
    allBlogData.push(JSON.parse(fetch));
    
    
   }
   return NextResponse.json({allBlogData, success: true});


 
}
