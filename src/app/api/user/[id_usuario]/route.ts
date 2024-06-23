import userService from "@/services/user/userService";

export function GET(
  req: Request,
  { params }: { params: { id_usuario: number } }
) {
  return new Response(JSON.stringify(userService.getById(params.id_usuario)), {
    status: 200,
    headers: {
      "content-type": "application/json",
    },
  });
}

export async function PUT(
  req: Request,
  { params, body }: { params: { id_usuario: number }; body: any }
) {
  return new Response(
    JSON.stringify(userService.update(params.id_usuario, await req.json())),
    {
      status: 200,
      headers: {
        "content-type": "application/json",
      },
    }
  );
}

export async function DELETE(
  req: Request,
  { params }: { params: { id_usuario: number } }
) {
  return new Response(
    JSON.stringify(userService.delete(params.id_usuario)),
    {
      status: 200,
      headers: {
        "content-type": "application/json",
      },
    }
  );
}

export async function POST(
  req: Request,
  { body }: { body: any }
) {
  return new Response(
    JSON.stringify(userService.create(await req.json())),
    {
      status: 200,
      headers: {
        "content-type": "application/json",
      },
    }
  );
}