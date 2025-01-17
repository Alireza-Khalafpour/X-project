"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

const PostModal = () => {
  const router = useRouter();

  const closeModal = () => {
    router.back();
  };


  return (
    <div className="absolute w-screen overflow-hidden h-screen top-0 left-0 z-50 bg-[#293139a6] flex justify-center mt-1.5">
      <div className="py-4 px-8 rounded-xl bg-black w-[600px] h-max mt-12">
        {/* TOP */}
        <div className="flex items-center justify-between">
          <div
            className="cursor-pointer text-white hover:scale-125"
            onClick={closeModal}
          >
            X
          </div>
          <div className="text-iconBlue font-bold cursor-pointer hover:text-blue-600">
            Drafts
          </div>
        </div>
        {/* CENTER */}
        <div className="py-8 flex gap-4">
          <div className="relative w-10 h-10 rounded-full overflow-hidden">
            <Image
              src="/general/avatar.png"
              alt="Lama Dev"
              width={100}
              height={100}
            />
          </div>
          <input
            className="flex-1 bg-transparent outline-none text-lg"
            type="text"
            placeholder="What is happening?!"
          />
        </div>
        {/* BOTTOM */}
        <div className=" flex items-center justify-between gap-4 flex-wrap border-t border-borderGray pt-4">
          <div className="flex gap-4 flex-wrap">
            <Image
              src="/icons/image.svg"
              alt=""
              width={20}
              height={20}
              className="cursor-pointer"
            />
            <Image
              src="/icons/gif.svg"
              alt=""
              width={20}
              height={20}
              className="cursor-pointer"
            />
            <Image
              src="/icons/poll.svg"
              alt=""
              width={20}
              height={20}
              className="cursor-pointer"
            />
            <Image
              src="/icons/emoji.svg"
              alt=""
              width={20}
              height={20}
              className="cursor-pointer"
            />
            <Image
              src="/icons/schedule.svg"
              alt=""
              width={20}
              height={20}
              className="cursor-pointer"
            />
            <Image
              src="/icons/location.svg"
              alt=""
              width={20}
              height={20}
              className="cursor-pointer"
            />
          </div>
          <button
            className="py-2 px-5 text-black bg-white rounded-full font-bold"
          >
            Post
          </button>
        </div>
      </div>
    </div>
  );
};

export default PostModal;
