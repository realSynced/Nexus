import { NextResponse } from 'next/server';
import { sql } from '@vercel/postgres';

export async function GET(request: Request, query: any) {
  try {
    // Extracting query parameters from the URL
    const url = new URL(request.url);
    const email = url.searchParams.get('email');
    
    // If email parameter is not provided, return an error response with a message
    if (!email) {
      return NextResponse.error();
    }

    // You can use the email parameter to fetch data from the database
    const response = await sql`SELECT * FROM users WHERE email = ${email}`;
    
    // Check if any rows were returned
    if (response.rows.length === 0) {
      return NextResponse.error();
    }

    // Extract user data from the first row
    const user = response.rows[0];

    return NextResponse.json({ user });
  } catch (error) {
    console.error(error);
    return NextResponse.error();
  }
}
