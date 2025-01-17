import Image from "next/image";
import Link from "next/link";

const UserPage = () => {
  return (
    <div>
      {/* Profile Header */}
      <div className="flex items-center gap-8 sticky top-0 backdrop-blur-sm p-4 z-10 bg-[#00000088]">
        <Link href="/">
          <Image src="icons/back.svg" alt="backward" width={24} height={24} />
        </Link>
        <h1 className="font-bold text-lg">Alireza.Kh</h1>
      </div>
      {/* Info part */}
      <div className="relative w-full">
        {/* Cover & Avatar */}
        <div className="w-full aspect[3/1] relative ">
          <Image src="/general/cover.jpg" alt="" width={600} height={600} />
        </div>
        <div className="w-1/6 aspect-square rounded-full overflow-hidden border-4 border-black bg-gray-400 absolute translate-x-1/2 -translate-y-1/2  ">
          <Image src="/general/avatar.png" alt="" width={100} height={100} />
        </div>
        <div className="flex w-full justify-end items-center p-2 gap-2">
          <div className="w-9 h-9 flex items-center justify-center rounded-full border-[1px] border-gray-500 cursor-pointer">
            <Image src="icons/more.svg" alt="" width={20} height={20} />
          </div>
          <div className="w-9 h-9 flex items-center justify-center rounded-full border-[1px] border-gray-500 cursor-pointer">
            <Image src="icons/explore.svg" alt="" width={20} height={20} />
          </div>
          <div className="w-9 h-9 flex items-center justify-center rounded-full border-[1px] border-gray-500 cursor-pointer">
            <Image src="icons/message.svg" alt="" width={20} height={20} />
          </div>
          <button className="py-2 px-4 bg-white text-black rounded-full font-bold">
            Follow
          </button>
        </div>
        {/* User Info */}
        <div className="p-4 flex flex-col gap-2">
          <div>
            <h1 className="text-2xl font-bold">Alireza.Kh</h1>
            <span className="text-textGray text-sm">@a.khalafpour98</span>
          </div>
          <p>Alireza.Kh Linkedin Page</p>
          <div className="flex gap-4 text-textGray text-[15px]">
            <div className="flex items-center gap-2">
              <Image
                src="icons/userLocation.svg"
                alt=""
                width={20}
                height={20}
              />
              <span>IRAN</span>
            </div>
            <div className="flex items-center gap-2">
              <Image src="icons/date.svg" alt="" width={20} height={20} />
              <span>8 February 2000</span>
            </div>
          </div>
          {/* Following & Followers */}
          <div className="flex gap-4">
            <div className="flex items-center gap-2" >
              <span className="font-bold" >103</span>
              <span className="text-textGray text-[15px]" >Followers</span>
            </div>
            <div className="flex items-center gap-2" >
              <span className="font-bold" >215</span>
              <span className="text-textGray text-[15px]" >Followings</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserPage;
