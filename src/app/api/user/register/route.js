import { connect } from '@/dbconfig/Connect.js';
import User from '@/modals/usermodal';
import { NextResponse } from 'next/server';
import bcrypt from 'bcrypt';

export async function POST(request) {
  await connect();

  try {
    // Parse request body
    const body = await request.json();
    const { name, username, bio, password } = body;

    // Check if user already exists
    const user = await User.findOne({ username });
    if (user) {
      return NextResponse.json({ error: 'User already exists' }, { status: 400 });
    }

    // Hash the password
    const hashpassword = await bcrypt.hash(password, 10);

    // Create a new user
    const createdUser = new User({
      name,
      username,
      bio,
      password: hashpassword,
    });

    // Save the user to the database
    const savedUser = await createdUser.save();

    // Return success response
    return NextResponse.json(
      { message: 'User created successfully', user: savedUser },
      { status: 201 }
    );
  } catch (error) {
    console.error('User not created', error);
    return NextResponse.json({ error: 'User not created' }, { status: 500 });
  }
}
