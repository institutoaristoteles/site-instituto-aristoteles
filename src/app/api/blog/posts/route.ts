import { NextResponse } from "next/server"
import { getPosts } from "@/integration/notion"

export async function GET(request: Request) {
  const url = new URL(request.url)

  return NextResponse.json(
    await getPosts({
      pageSize: Number(url.searchParams.get("pageSize")),
      startCursor: url.searchParams.get("startCursor") ?? undefined,
    }),
  )
}
