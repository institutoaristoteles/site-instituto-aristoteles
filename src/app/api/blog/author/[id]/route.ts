import { NextResponse } from "next/server"
import { getAuthorById } from "@/integration/notion"

export async function GET(_: Request, { params }: { params: { id: string } }) {
  const author = await getAuthorById(params.id)
  return NextResponse.json(author)
}
