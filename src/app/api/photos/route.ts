import type { Photo } from "@/app/api/photos/photo";

export async function GET(request: Request) {

  const { searchParams } = new URL(request.url);
  const delay = searchParams.get('delay');
  if (delay) {
    await new Promise((resolve) => setTimeout(resolve, Number(delay)));
  }

  const photos = fetch("https://jsonplaceholder.typicode.com/photos",
                  { cache: 'no-store' }
                )
  const data = (await photos.then((res) => {if(res.ok){ return res.clone().json()}})) as Photo[]

  const albumId = searchParams.get('albumId');
  const filteredphotos = albumId
    ? data.filter((photo) => photo.albumId == Number(albumId))
    : data;

  return new Response(JSON.stringify(filteredphotos), {
    status: 200,
    headers: {
      'content-type': 'application/json',
    },
  });
}