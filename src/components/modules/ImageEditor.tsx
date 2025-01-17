import Image from "next/image";
import { Dispatch, SetStateAction } from "react";

const ImageEditor = ({
  onClose,
  previewUrl,
  settings,
  setSettings,
}: {
  onClose: () => void;
  previewUrl: string;
  settings: {
    type: "original" | "wide" | "square";
    sensitive: boolean;
  };
  setSettings: Dispatch<
    SetStateAction<{
      type: "original" | "wide" | "square";
      sensitive: boolean;
    }>
  >;
}) => {
  const handleChangeSensitive = (sensitive: boolean) => {
    setSettings((prev) => ({ ...prev, sensitive }));
  };

  const handleChangeType = (type: "wide" | "original" | "square") => {
    setSettings((prev) => ({ ...prev, type }));
  };

  return (
    <div className="fixed w-screen h-screen left-0 top-0 bg-black bg-opacity-75 z-10 flex items-center justify-center">
      <div className="bg-black rounded-xl p-12 flex flex-col gap-4">
        {/* Top Section */}
        <div className="flex items-center justify-between">
          <div className="flex gap-8 ">
            <svg
              width={32}
              onClick={onClose}
              className="cursor-pointer hover:scale-105"
              viewBox="0 0 24 24"
            >
              <path
                fill="#e7e9ea"
                d="M7.414 13l5.043 5.04-1.414 1.42L3.586 12l7.457-7.46 1.414 1.42L7.414 11H21v2H7.414z"
              />
            </svg>
            <h1 className="font-bold text-xl">Media Settings</h1>
          </div>
          <button onClick={onClose} className="py-2 px-4 rounded-full bg-white text-black font-bold hover:scale-105">
            Save
          </button>
        </div>
        {/* Image Container */}
        <div className="w-[600px] h-[600px] flex items-center">
          <Image
            src={previewUrl}
            alt=""
            width={600}
            height={600}
            className={`w-full ${settings.sensitive == true ? "blur-sm" : ""} ${
              settings.type == "original"
                ? "h-full object-contain"
                : settings.type == "square"
                ? "aspect-square object-cover"
                : "aspect-video object-cover"
            }`}
          />
        </div>
        {/* Settings */}
        <div className="flex items-center justify-between text-sm">
          <div className="flex items-center gap-8">
            <div
              onClick={() => handleChangeType("original")}
              className="flex items-center gap-2 cursor-pointer"
            >
              <svg width={24} viewBox="0 0 24 24">
                <path
                  className={`${
                    settings.type == "original"
                      ? "fill-iconBlue"
                      : "fill-textGray"
                  }`}
                  d="M3 7.5C3 6.119 4.119 5 5.5 5h13C19.881 5 21 6.119 21 7.5v9c0 1.381-1.119 2.5-2.5 2.5h-13C4.119 19 3 17.881 3 16.5v-9zM5.5 7c-.276 0-.5.224-.5.5v9c0 .276.224.5.5.5h13c.276 0 .5-.224.5-.5v-9c0-.276-.224-.5-.5-.5h-13z"
                />
              </svg>
              original
            </div>
            <div
              onClick={() => handleChangeType("wide")}
              className="flex items-center gap-2 cursor-pointer"
            >
              <svg width={24} viewBox="0 0 24 24">
                <path
                  className={`${
                    settings.type == "wide" ? "fill-iconBlue" : "fill-textGray"
                  }`}
                  d="M3 7.5C3 6.119 4.119 5 5.5 5h13C19.881 5 21 6.119 21 7.5v9c0 1.381-1.119 2.5-2.5 2.5h-13C4.119 19 3 17.881 3 16.5v-9zM5.5 7c-.276 0-.5.224-.5.5v9c0 .276.224.5.5.5h13c.276 0 .5-.224.5-.5v-9c0-.276-.224-.5-.5-.5h-13z"
                />
              </svg>
              wide
            </div>{" "}
            <div
              onClick={() => handleChangeType("square")}
              className="flex items-center gap-2 cursor-pointer"
            >
              <svg width={24} viewBox="0 0 24 24">
                <path
                  className={`${
                    settings.type == "square"
                      ? "fill-iconBlue"
                      : "fill-textGray"
                  }`}
                  d="M3 7.5C3 6.119 4.119 5 5.5 5h13C19.881 5 21 6.119 21 7.5v9c0 1.381-1.119 2.5-2.5 2.5h-13C4.119 19 3 17.881 3 16.5v-9zM5.5 7c-.276 0-.5.224-.5.5v9c0 .276.224.5.5.5h13c.276 0 .5-.224.5-.5v-9c0-.276-.224-.5-.5-.5h-13z"
                />
              </svg>
              square
            </div>
          </div>
          <div
            onClick={() => handleChangeSensitive(!settings.sensitive)}
            className={`cursor-pointer py-1 px-4 rounded-full font-bold text-black ${
              settings.sensitive == true ? "bg-red-500 text-white" : "bg-white"
            } `}
          >
            Sensitive
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageEditor;
