"use client";

import { FormEvent, useState } from "react";
import ImageComponent from "./ImageComponent";
import Image from "next/image";
import ImageEditor from "../modules/ImageEditor";
import axios from "axios";
import ToastAlert from "./ToastAlert";

const Share = () => {
  const [media, setMedia] = useState<File | null>(null);
  const [description, setDescription] = useState<string>("");
  const [buffer, setBuffer] = useState<Buffer<ArrayBufferLike> | null>(null);
  const [pending, setPending] = useState<boolean>(false);
  const [responseTxt, setResponseTxt] = useState<string | null>(null);
  const [isEditorOpen, setIsEditorOpen] = useState(false);
  const [settings, setSettings] = useState<{
    type: "original" | "wide" | "square";
    sensitive: boolean;
  }>({
    type: "original",
    sensitive: false,
  });

  const handleMediaChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const bytes = await e.target.files[0].arrayBuffer();
      setBuffer(Buffer.from(bytes));
      setMedia(e.target.files[0]);
    }
  };

  const previewUrl = media ? URL.createObjectURL(media) : null;

  const transformation = `w-600 ${settings.sensitive == true ? "blur-sm" : ""} ${
    settings.type == "square"
      ? "aspect-square object-cover"
      : settings.type == "wide"
      ? "aspect-video object-cover"
      : ""
  }`;

  const submitNewPost = async (e: FormEvent) => {
    e.preventDefault();
    setPending(true);
    await axios
      .post("/api/createPost", { desc: description, media: buffer })
      .then((res) => {
        setPending(false);
        if (res.data.status == "success") {
          setResponseTxt(res.data?.message);
          setMedia(null)
          setDescription("")
        }
      })
      .catch((err) => {
        console.log(err);
        setPending(false);
        setResponseTxt("مشکلی در سرور رخ داده است");
      });
    setTimeout(() => {
      setResponseTxt(null);
    }, 5000);
  };

  const removeMedia = () => {
    setMedia(null);
    setBuffer(null);
  };

  return (
    <>
      <form onSubmit={(e) => submitNewPost(e)} className="p-4 flex gap-4">
        {/* AVATAR */}
        <div className="relative w-10 h-10 rounded-full overflow-hidden">
          <Image
            src="/general/avatar.png"
            alt=""
            width={100}
            height={100}
          />
        </div>
        {/* OTHERS */}
        <div className="flex-1 flex flex-col gap-4">
          <input
            type="text"
            name="desc"
            value={description}
            placeholder="What is happening?!"
            className="bg-transparent outline-none placeholder:text-textGray text-xl"
            onChange={(e) => setDescription(e.target.value)}
          />
          {/* Preview Image */}
          {previewUrl && (
            <div className="relative rounded-xl overflow-hidden">
              <Image
                className={transformation}
                src={previewUrl}
                alt=""
                width={600}
                height={600}
              />
              <div
                onClick={() => setIsEditorOpen(true)}
                className="absolute top-2 left-2 bg-black bg-opacity-65 rounded-full font-bold text-sm cursor-pointer py-2 px-4"
              >
                Edit
              </div>
              <div
                onClick={removeMedia}
                className="absolute top-2 right-2 bg-black bg-opacity-95 rounded-full text-sm cursor-pointer w-7 h-7 flex items-center justify-center p-2"
              >
                X
              </div>
            </div>
          )}
          {/* Editor Modal */}
          {previewUrl && isEditorOpen && (
            <ImageEditor
              onClose={() => setIsEditorOpen(false)}
              previewUrl={previewUrl}
              settings={settings}
              setSettings={setSettings}
            />
          )}

          <div className="flex items-center justify-between gap-4 flex-wrap">
            <div className="flex gap-4 flex-wrap">
              <input
                type="file"
                name="file"
                onChange={handleMediaChange}
                className="hidden"
                id="file"
                accept="image/*,video/*"
              />
              <label htmlFor="file">
                <ImageComponent
                  path="icons/image.svg"
                  alt=""
                  w={20}
                  h={20}
                  className="cursor-pointer"
                />
              </label>
              <ImageComponent
                path="icons/gif.svg"
                alt=""
                w={20}
                h={20}
                className="cursor-pointer"
              />
              <ImageComponent
                path="icons/poll.svg"
                alt=""
                w={20}
                h={20}
                className="cursor-pointer"
              />
              <ImageComponent
                path="icons/emoji.svg"
                alt=""
                w={20}
                h={20}
                className="cursor-pointer"
              />
              <ImageComponent
                path="icons/schedule.svg"
                alt=""
                w={20}
                h={20}
                className="cursor-pointer"
              />
              <ImageComponent
                path="icons/location.svg"
                alt=""
                w={20}
                h={20}
                className="cursor-pointer"
              />
            </div>
            <button
              type="submit"
              disabled={pending}
              className="bg-white text-black font-bold rounded-full py-2 px-4"
            >
              {pending ? "Uploading..." : "Post"}
            </button>
          </div>
        </div>
      </form>
      {responseTxt != null && <ToastAlert message={responseTxt} msgType="" />}
    </>
  );
};

export default Share;
