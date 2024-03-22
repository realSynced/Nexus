import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';

let email = "john@example.com"
// export function setEmail(emailp: any){
//     email = emailp;
// }
 
export async function GET(request: Request, ) {
  try {
    // const email = "john@example.com";
    if (!email) {
        return NextResponse.json({error: "Email parameter is meissing"}, {status: 500});
      }
    const result =
      await sql`SELECT * FROM users WHERE email = ${email}`;
    
    // const { rows } = await request.query(queryText, [email]);
    return NextResponse.json({ result }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}