import { connect } from "@/config/database";
import User from "@/models/User";
import { NextResponse } from "next/server";
import bcryptjs from "bcryptjs";

connect(); // establishing a connection with the database

export async function POST(request) {
  try {
    const reqBody = await request.json();
    const { name, email, password } = reqBody;
    //extracting name, email and password from request

    const user = await User.findOne({ email });
    //checking if auser with the provided email already exists

    //if user exists, return a 400 response
    if (user) {
      return NextResponse.json(
        { error: "User already exists" },
        { status: 400 }
      );
    }

    //hashing password using bcryptjs
    const salt = await bcryptjs.genSalt(10);
    const hashedPassword = await bcryptjs.hash(password, salt);

    const newUser = new User({
      email,
      name,
      password: hashedPassword,
    });

    //saving the new user to the database

    const savedUser = await newUser.save();

    return NextResponse.json({
      message: "User created successfully",
      success: true,
      savedUser,
    });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
