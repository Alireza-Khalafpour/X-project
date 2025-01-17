'use client'

import Image from "next/image";
import Link from "next/link";

const LeftBar = () => {
  const menuList = [
    {
      id: 1,
      name: "Homepage",
      link: "/",
      icon: "home.svg",
    },
    {
      id: 2,
      name: "Explore",
      link: "/",
      icon: "explore.svg",
    },
    {
      id: 3,
      name: "Notification",
      link: "/",
      icon: "notification.svg",
    },
    {
      id: 4,
      name: "Messages",
      link: "/",
      icon: "message.svg",
    },
    {
      id: 5,
      name: "Bookmarks",
      link: "/",
      icon: "bookmark.svg",
    },
    {
      id: 6,
      name: "Jobs",
      link: "/",
      icon: "job.svg",
    },
    {
      id: 7,
      name: "Communities",
      link: "/",
      icon: "community.svg",
    },
    {
      id: 8,
      name: "Premium",
      link: "/",
      icon: "logo.svg",
    },
    {
      id: 9,
      name: "Profile",
      link: "/userProfile",
      icon: "profile.svg",
    },
    {
      id: 10,
      name: "More",
      link: "/",
      icon: "more.svg",
    },
  ];

  return (
    <div className=" h-screen sticky top-0 flex flex-col justify-between pt-2 pb-8 ">
      <div className="flex flex-col items-center text-base gap-4 xxl:items-start">
        <Link href="/" className="p-2 rounded-full hover:bg-[#181818]">
          <Image src="/icons/logo.svg" alt="logo" width={24} height={24} />
        </Link>
        <div className="flex flex-col gap-2">
          {menuList.map((i) => (
            <Link
              href={i.link}
              className="p-2 rounded-full hover:bg-[#181818] flex items-center gap-4"
              key={i.id}
            >
              <Image
                src={`/icons/${i.icon}`}
                alt={i.name}
                width={24}
                height={24}
              />
              <span className="hidden xxl:inline"> {i.name} </span>
            </Link>
          ))}
        </div>

        <Link
          href="/compose/post"
          className="bg-white text-black rounded-full font-bold w-13 h-12 flex items-center justify-center xxl:hidden "
        >
          <Image src="icons/post.svg" alt="new post" width={24} height={24} />
        </Link>
        <Link
          href="/compose/post"
          className="hidden xxl:block bg-white text-black rounded-full font-bold py-2 px-20"
        >
          Post
        </Link>
      </div>

      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 relative rounded-full overflow-hidden">
            <Image src='/general/avatar.png' alt="user avatar" width={100} height={100}/>
          </div>
          <div className="hidden xxl:flex flex-col">
            <span className="font-bold">Alireza.Kh</span>
            <span className="text-sm text-textGray">@a.khalafpour98</span>
          </div>
        </div>
        <div className="hidden xxl:block font-bold cursor-pointer">...</div>
      </div>
    </div>
  );
};

export default LeftBar;
