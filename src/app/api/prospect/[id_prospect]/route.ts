import { Prospect } from "@/models/prospect/ProspectModel";
import prospectService from "@/services/prospect/ProspectService";

export async function GET(
  r: Request,
  { params }: { params: { id_prospect: string } }
) {
  try {
    const idProspect = Number(params.id_prospect);
    return new Response(
      JSON.stringify(await prospectService.getById(idProspect)),
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
        message: error?.message || "Internal Server Error",
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
  { params }: { params: { id_prospect: string } }
) {
  try {
    const body: Prospect = await req.json();
    const idProspect = Number(params.id_prospect);
    return new Response(
      JSON.stringify(await prospectService.update(idProspect, body)),
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
        message: error?.message || "Internal Server Error",
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
  { params }: { params: { id_prospect: string } }
) {
  try {
    const idProspect = Number(params.id_prospect);
    return new Response(
      JSON.stringify(await prospectService.delete(idProspect)),
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
        message: error?.message || "Internal Server Error",
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
