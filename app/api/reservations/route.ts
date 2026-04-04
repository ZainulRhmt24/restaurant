import { sql } from '@/lib/db'
import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, phone, date, time, guests, specialRequests } = body

    const result = await sql`
      INSERT INTO reservations (name, email, phone, date, time, guest_count, special_requests)
      VALUES (${name}, ${email}, ${phone}, ${date}, ${time}, ${guests}, ${specialRequests || null})
      RETURNING id, name, date, time, guest_count
    `

    return NextResponse.json(result[0], { status: 201 })
  } catch (error) {
    console.error('Error creating reservation:', error)
    return NextResponse.json(
      { error: 'Failed to create reservation', details: error instanceof Error ? error.message : String(error) },
      { status: 500 }
    )
  }
}

export async function GET() {
  try {
    const result = await sql`
      SELECT id, name, email, phone, date, time, guest_count, special_requests, created_at
      FROM reservations
      ORDER BY date DESC, time DESC
      LIMIT 50
    `
    return NextResponse.json(result)
  } catch (error) {
    console.error('Error fetching reservations:', error)
    return NextResponse.json(
      { error: 'Failed to fetch reservations' },
      { status: 500 }
    )
  }
}
