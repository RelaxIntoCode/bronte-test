import { dbConnect } from "@/lib/dbConnect";

export async function GET() {
  try {
    await dbConnect();

    const users = [{ id: 1, name: "Test User" }];
    return new Response(JSON.stringify(users));
  } catch (error) {
    return new Response(JSON.stringify({ message: error.message }));
  }
}
