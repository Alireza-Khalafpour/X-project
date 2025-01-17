import Feed from "@/components/templates/Feed";
import Share from "@/components/templates/Share";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <div className="flex justify-between text-textGray font-bold  pt-4 border-b-[1px] border-borderGray" >
        <Link href="/" className="pb-3 flex justify-center items-center border-b-4 border-iconBlue w-1/2 " >For You</Link>
        <Link href="/" className="pb-3 flex justify-center items-center w-1/2 " >Following</Link>
      </div>
      <Share/>
      <Feed/>
    </div>
  );
}
