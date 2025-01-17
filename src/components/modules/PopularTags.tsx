import Image from "next/image";
import Link from "next/link";

const PopularTags = () => {
  return (
    <div className="p-4 rounded-2xl border-[1px] border-borderGray flex flex-col gap-4">
      <h1 className="text-xl font-bold text-textGrayLite">Whats happening!?</h1>
      {/* Trends */}
      <div className="flex gap-4">
        <div className="relative w-20 h-20 rounded-xl overflow-hidden">
          <Image
            src="/general/post.jpeg"
            alt="event"
            width={120}
            height={120}
          />
        </div>
        <div className="flex-1">
          <h2 className="font-bold text-textGrayLite">Any event text sample</h2>
          <span className="text-textGray">Last Night</span>
        </div>
      </div>
      {/* Topics */}
      <div>
        <div className="flex items-center justify-between">
          <span className="text-textGray text-sm ">Technology . Trending</span>
          <Image src="/icons/infoMore.svg" alt="info" width={16} height={16} />
        </div>

        <h2 className="font-bold text-textGrayLite ">OpenAI</h2>
        <span className="text-textGray text-sm">20k posts</span>
      </div>
      {/* Topics */}
      <div>
        <div className="flex items-center justify-between">
          <span className="text-textGray text-sm ">Technology . Trending</span>
          <Image src="/icons/infoMore.svg" alt="info" width={16} height={16} />
        </div>

        <h2 className="font-bold text-textGrayLite ">OpenAI</h2>
        <span className="text-textGray text-sm">20k posts</span>
      </div>{" "}
      {/* Topics */}
      <div>
        <div className="flex items-center justify-between">
          <span className="text-textGray text-sm ">Technology . Trending</span>
          <Image src="/icons/infoMore.svg" alt="info" width={16} height={16} />
        </div>

        <h2 className="font-bold text-textGrayLite ">OpenAI</h2>
        <span className="text-textGray text-sm">20k posts</span>
      </div>{" "}

      <Link href="/" className="text-iconBlue" >Show more</Link>
    </div>
  );
};

export default PopularTags;
