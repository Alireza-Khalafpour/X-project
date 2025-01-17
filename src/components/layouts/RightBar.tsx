import PopularTags from "../modules/PopularTags";
import Recommendations from "../modules/Recommendations";
import Search from "../modules/Search";

const RightBar = () => {
    return (
        <div className="pt-4 flex flex-col gap-4 sticky top-0 h-max" >
            <Search/>
            <PopularTags/>
            <Recommendations/>
            <div>
                <span className="text-lime-400" > 2025 @ Copy Rights <span className="px-1 font-bold text-lg text-lime-400 underline" >Alireza</span> </span>
            </div>
        </div>
    );
}

export default RightBar;