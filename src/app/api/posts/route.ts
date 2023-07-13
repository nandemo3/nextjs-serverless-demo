import type { Post } from "@/app/api/posts/post";

export async function GET(request: Request) {

  const { searchParams } = new URL(request.url);
  const delay = searchParams.get('delay');
  if (delay) {
    await new Promise((resolve) => setTimeout(resolve, Number(delay)));
  }

  const posts = fetch("https://jsonplaceholder.typicode.com/posts",
                  { cache: 'no-store' }
                )
  const data = (await posts.then((res) => {if(res.ok){ return res.clone().json()}})) as Post[]

  const userId = searchParams.get('userId');
  const filteredPosts = userId
    ? data.filter((post) => post.userId == Number(userId))
    : data;

  return new Response(JSON.stringify(filteredPosts), {
    status: 200,
    headers: {
      'content-type': 'application/json',
    },
  });
}