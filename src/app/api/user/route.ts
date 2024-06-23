import userService from "@/services/user/userService";

export function GET() {
  return new Response(JSON.stringify(userService.getAll()), {
    status: 200,
    headers: {
      "content-type": "application/json",
    },
  });
}
