import { NextResponse } from "next/server";
import { linkIds } from "@/lib/links";
import { getClicksCollection } from "@/lib/mongodb";

// 항상 최신 클릭 수를 돌려주도록 캐시하지 않는다.
export const dynamic = "force-dynamic";

// 모든 링크의 클릭 수를 { [id]: count } 형태로 한 번에 돌려준다.
export async function GET() {
  const clicks = await getClicksCollection();
  const docs = await clicks.find({ _id: { $in: Array.from(linkIds) } }).toArray();
  const counts = Object.fromEntries(docs.map((doc) => [doc._id, doc.count]));
  return NextResponse.json(counts);
}

// 본문의 id에 해당하는 링크의 클릭 수를 1 늘린다.
export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  const id = body?.id;

  if (typeof id !== "string" || !linkIds.has(id)) {
    return NextResponse.json({ error: "알 수 없는 링크입니다." }, { status: 400 });
  }

  const clicks = await getClicksCollection();
  const doc = await clicks.findOneAndUpdate(
    { _id: id },
    { $inc: { count: 1 } },
    { upsert: true, returnDocument: "after" },
  );
  return NextResponse.json({ id, count: doc?.count ?? 1 });
}
