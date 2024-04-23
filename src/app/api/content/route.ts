import { NextResponse } from "next/server";

// Dummy data
const posts = [
  {
    title: "Lorem Ipsum",
    slug: "lorem-ipsum",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.",
  },
  {
    title: "Lorem Ipsum 2",
    slug: "lorem-ipsum-2",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.",
  },
  {
    title: "Lorem Ipsum 3",
    slug: "lorem-ipsum-3",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.",
  },
  {
    title: "Lorem Ipsum 4",
    slug: "lorem-ipsum-4",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.",
  },
];

export async function GET() {
  return NextResponse.json(posts);
}
