import Comments from "@/components/templates/Comments";
import Post from "@/components/templates/Post";
import Image from "next/image";
import Link from "next/link";

const StatusPage = () => {
  return (
    <div>
      <div className="flex items-center gap-8 sticky top-0 backdrop-blur-sm p-4 z-10 bg-[#00000088]">
        <Link href="/">
          <Image src="/icons/back.svg" alt="backward" width={24} height={24} />
        </Link>
        <h1 className="font-bold text-lg">Post</h1>
      </div>
      <Post/>
      <Comments/>
    </div>
  );
};

export default StatusPage;
