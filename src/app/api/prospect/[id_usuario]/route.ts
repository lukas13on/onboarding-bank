import { Prospect } from "@/models/prospect/ProspectModel";
import prospectService from "@/services/prospect/ProspectService";

export async function GET(
  r: Request,
  { params }: { params: { id_usuario: number } }
) {
  try {
    return new Response(
      JSON.stringify(await prospectService.getById(params.id_usuario)),
      {
        status: 200,
        headers: {
          "content-type": "application/json",
        },
      }
    );
  } catch (error: any) {
    return new Response(
      JSON.stringify({
        message: `Internal Server Error ${error?.message}`,
        success: false,
      }),
      {
        status: 500,
        headers: {
          "content-type": "application/json",
        },
      }
    );
  }
}

export async function PUT(
  req: Request,
  { params }: { params: { id_usuario: number } }
) {
  try {
    const body: Prospect = await req.json();
    return new Response(
      JSON.stringify(await prospectService.update(params.id_usuario, body)),
      {
        status: 200,
        headers: {
          "content-type": "application/json",
        },
      }
    );
  } catch (error: any) {
    return new Response(
      JSON.stringify({
        message: `Internal Server Error ${error?.message}`,
        success: false,
      }),
      {
        status: 500,
        headers: {
          "content-type": "application/json",
        },
      }
    );
  }
}

export async function DELETE(
  r: Request,
  { params }: { params: { id_usuario: number } }
) {
  try {
    return new Response(
      JSON.stringify(await prospectService.delete(params.id_usuario)),
      {
        status: 200,
        headers: {
          "content-type": "application/json",
        },
      }
    );
  } catch (error: any) {
    return new Response(
      JSON.stringify({
        message: `Internal Server Error ${error?.message}`,
        success: false,
      }),
      {
        status: 500,
        headers: {
          "content-type": "application/json",
        },
      }
    );
  }
}
