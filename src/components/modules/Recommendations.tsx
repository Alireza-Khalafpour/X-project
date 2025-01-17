import Image from "next/image";
import Link from "next/link";

const Recommendations = () => {
  return (
    <div className="p-4 rounded-2xl border-[1px] border-borderGray flex flex-col gap-4">
      {/* user card */}
      <div className="flex items-center justify-between">
        {/* image and userInfo */}
        <div className="flex items-center gap-2">
          <div className="rounded-full relative overflow-hidden w-10 h-10">
            <Image src="/general/avatar.png" alt="" width={100} height={100} />
          </div>
          <div className="">
            <h1 className="text-md font-bold">ssss</h1>
            <span className="text-textGray text-sm">@testAt</span>
          </div>
        </div>
        {/* Follow Button */}
        <button className="py-1 px-4 font-semibold bg-white text-black rounded-full" >Follow</button>
      </div>
      <Link href="/" className="text-iconBlue">
        Show more
      </Link>
    </div>
  );
};

export default Recommendations;
