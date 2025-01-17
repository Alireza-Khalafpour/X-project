import Image from "next/image";

const Search = () => {
    return (
        <div className="bg-inputGray py-1 px-3 flex items-center gap-3 rounded-full" >
            <Image src="/icons/explore.svg" alt="search" height={16} width={16} />
            <input type="text" placeholder="Search" className="bg-transparent outline-none p-1 placeholder:text-textGray" />
        </div>
    );
}

export default Search;