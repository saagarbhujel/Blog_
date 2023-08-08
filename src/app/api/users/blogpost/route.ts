import * as fs from 'fs';
import { NextResponse } from "next/server";


export  function GET( response:NextResponse){
   try {
    const data = fs.readFileSync('blogdata/blog1.json', 'utf8');
    const parsedData = JSON.parse(data);
   return NextResponse.json(parsedData)
   } catch (error) {
    return NextResponse.json({message:"error", success: false})
   }
 
   
}









