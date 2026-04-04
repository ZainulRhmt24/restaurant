import { sql } from '@/lib/db'
import { NextResponse } from 'next/server'

export async function GET() {
  try {
    const result = await sql`SELECT id, name, description, price, category FROM menu_items ORDER BY category, name`
    const mappedResult = result.map(item => ({
      ...item,
      price: Number(item.price)
    }))
    return NextResponse.json(mappedResult)
  } catch (error) {
    console.error('Error fetching menu:', error)
    return NextResponse.json({ error: 'Failed to fetch menu', details: error instanceof Error ? error.message : String(error) }, { status: 500 })
  }
}
