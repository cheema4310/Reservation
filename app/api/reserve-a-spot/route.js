import connectDB from "@DB/connectDB";
import Booking from "@models/booking";

export const dynamic = "force-dynamic";

export async function POST(request) {
  try {
    const body = await request.json();
    await connectDB();

    await new Booking(body).save();
  } catch (error) {
    console.log(error);
  }

  // then add this to database through mongoose
  return Response.json({ data: {} });
}

export async function GET() {
  try {
    await connectDB();
    const res = await Booking.find();

    return Response.json({ Bookings: res });
  } catch (error) {
    console.log(error);
  }
}
