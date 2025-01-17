"use client";

import { IKImage } from "imagekitio-next";

type ImageTypes = {
  path: string;
  w?: number;
  h?: number;
  alt: string;
  className?: string;
  tr?: boolean;
};

const ImageComponent = ({ path, w, h, className, alt, tr }: ImageTypes) => {
  const urlEndpoint = process.env.NEXT_PUBLIC_URL_ENDPOINT;

  return (
    <div>
      <IKImage
        className={className}
        urlEndpoint={urlEndpoint}
        path={path}
        {...(tr
          ? { transformation: [{ width: `${w}`, height: `${h}` }] }
          : { width: `${w}`, height: `${h}` }
        )
        }
        width={w}
        height={h}
        alt={alt}
      />
    </div>
  );
};

export default ImageComponent;
