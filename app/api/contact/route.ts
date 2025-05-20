import { NextResponse } from 'next/server'
import { createClient } from '@/lib/supabase/server'

export async function POST(request: Request) {
  try {
    // Get form data from request
    const { name, email, subject, message } = await request.json()

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Name, email, and message are required fields' }, { status: 400 })
    }

    // Initialize Supabase client
    const supabase = await createClient()

    // Insert contact data into Supabase
    const { data, error } = await supabase.from('contacts').insert([{ name, email, subject, message }]).select()

    if (error) {
      console.error('Error saving contact:', error)
      return NextResponse.json({ error: 'Failed to save contact information' }, { status: 500 })
    }

    // Return success response
    return NextResponse.json({ success: true, data }, { status: 201 })
  } catch (error) {
    console.error('Error in contact API route:', error)
    return NextResponse.json({ error: 'An unexpected error occurred' }, { status: 500 })
  }
}
