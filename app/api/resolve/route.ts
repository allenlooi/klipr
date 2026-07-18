import { NextRequest, NextResponse } from "next/server";

/**
 * Production integration point.
 *
 * Replace this stub with your extractor service. The service should:
 * 1. Validate and normalise the submitted public URL.
 * 2. Detect the source platform.
 * 3. Resolve public media metadata and available downloadable assets.
 * 4. Return a standardised media manifest.
 *
 * Keep platform-specific extraction outside the UI layer so individual
 * extractors can be replaced without changing the frontend.
 */
export async function POST(request: NextRequest) {
  const body = await request.json().catch(() => null);
  const url = body?.url;

  if (!url || typeof url !== "string") {
    return NextResponse.json({ error: "A valid URL is required." }, { status: 400 });
  }

  return NextResponse.json(
    {
      status: "not_connected",
      message: "Frontend is ready. Connect this route to the media extraction backend.",
      url,
    },
    { status: 501 }
  );
}
