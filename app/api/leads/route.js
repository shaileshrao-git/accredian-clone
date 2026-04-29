export async function POST(req) {
  const data = await req.json();

  console.log("New lead received:", data);

  return Response.json({
    success: true,
    message: "Lead captured successfully",
    data,
  });
}