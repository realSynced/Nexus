import { db } from "@vercel/postgres"
import { NextResponse } from 'next/server';
import { hash } from 'bcrypt';
import { sql } from '@vercel/postgres';




export default async function handler(request, response) {
  try {

  }catch(error) {
      response.status(500).json({error})
  }
  const userData = await client.sql `SELECT * FROM users WHERE email = ${request?.email}`;
}

