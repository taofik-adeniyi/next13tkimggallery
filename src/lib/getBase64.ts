import type { ImagesResults, Photo } from "@/models/Images";
import { getPlaiceholder } from "plaiceholder";

async function getBase64(imageUrl:string){
 



//   const buffer = await fetch(src).then(async (res) =>
//     Buffer.from(await res.arrayBuffer())
//   );
 
//   const { base64 } = await getPlaiceholder(buffer);

try{
    const res = await fetch(imageUrl);
    if(!res.ok){
        throw new Error(`Failed to fetch image: ${res.status} ${res.statusText}`)
    }

    const buffer = await res.arrayBuffer();

    const { base64 } = await getPlaiceholder(Buffer.from(buffer));
    
    
    return base64
    }catch(e){
        if (e instanceof Error) console.log(e.stack);
    }
 
    
}
// // Logs
// // data:image/jpeg;base64,/9j/2wBDAAYEBQY…

export default async function addBlurredDataUrls(images:ImagesResults): Promise<Photo[]>{
    // fecthing in parallel make all request at once
    // instead of awaitng each one - avoiding a waterfall

    const base64Promises = images.photos.map(photo => getBase64(photo.src.large));

    // Resolve all request in order
    const base64Results = await Promise.all(base64Promises);

    const photosWithBlurr: Photo[] = images.photos.map((photo, i) => {
        photo.blurredDataUrl = base64Results[i]
        return photo
    })
    return photosWithBlurr
}