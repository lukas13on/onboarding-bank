import { ProspectWithoutId } from "@/models/prospect/ProspectModel";
import prospectService from "@/services/prospect/ProspectService";

export async function GET() {
  try {
    return new Response(JSON.stringify(await prospectService.getAll()), {
      status: 200,
      headers: {
        "content-type": "application/json",
      },
    });
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

export async function POST(request: Request) {
  const body: ProspectWithoutId = await request.json();
  try {
    return new Response(JSON.stringify(await prospectService.create(body)), {
      status: 200,
      headers: {
        "content-type": "application/json",
      },
    });
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