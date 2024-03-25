import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  try {
    const queryParams = new URLSearchParams(request.url.split('?')[1]); // Extract query parameters from URL
    const email = queryParams.get('email'); // Get the value of the 'email' parameter from the query string

    if (!email) {
      return NextResponse.json({ error: "Email parameter is missing" }, { status: 500 });
    }

    const result = await sql`SELECT id, username, email FROM users WHERE email = ${email}`; // Select only necessary columns
    // const result = await sql`SELECT * FROM users WHERE email = ${email}`;

    return NextResponse.json({ result }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
