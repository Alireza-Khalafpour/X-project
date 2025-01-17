"use server";

import ImageKit from "imagekit";


export async function shareAction(formData: FormData) {
  const imagekit = new ImageKit({
    publicKey: process.env.NEXT_PUBLIC_PUBLIC_KEY!,
    privateKey: process.env.PRIVATE_KEY!,
    urlEndpoint: process.env.NEXT_PUBLIC_URL_ENDPOINT!,
  });

  const file = formData.get('file') as File
  // const desc = formData.get('desc') as string

  // transform file to buffer in order to upload to the ImageKit.io
  const bytes = await file.arrayBuffer();
  const buffer = Buffer.from(bytes);
  
  imagekit.upload(
    {
      file: buffer,
      fileName: file.name,
      folder: "/posts",
      transformation: {
        pre: "w-600",
      },
    },
    function (err, result) {
      if (err) {
        console.log(err);
      } else {
        console.log(result);
      }
    }
  );
}
