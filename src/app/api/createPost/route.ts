import { NextResponse } from "next/server";
import Post from "@/models/Post";
import ConnectDB from "@/utils/ConnectDB";

export async function POST(req : Request) {
  try {
    await ConnectDB();
    
    const { desc, media } = await req.json();

    
    if (!desc || !media) {
      return NextResponse.json(
        { error: " اطلاعات نامعتبر " },
        { status: 422 }
      );
    }

    const newPost = await Post.create({
      desc: desc,
      media:media?.data
    });

    console.log(newPost);


    return NextResponse.json({
      status: "success",
      message: `پست با موفقیت آپلود شد`,
    });
  } catch (err) {
    console.log(err);
    return NextResponse.json(
      { error: " مشکلی در سرور رخ داده است " },
      { status: 500 }
    );
  }
}
