"use client";

import * as React from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Captions from "yet-another-react-lightbox/plugins/captions";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/plugins/captions.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";

export interface ImageBoxProps {
  image_url : string;
}

  export default function Imagebox({ image_url }: ImageBoxProps) {
  
  const [open, setOpen] = React.useState(false);
  const maxZoomPixelRatio = 10;
  const zoomInMultiplier = 2;

  return (
    <>
      <button type="button" onClick={() => setOpen(true)}>
        <div className=' md:w-full lg:w-full 2xl:w-full h-full lg:h-auto 2xl:h-full' >
          <img alt='Sample Image' src={ image_url } />
        </div>
      </button>

      <Lightbox
        open={open}
        close={() => setOpen(false)}
        plugins={[Captions, Fullscreen, Zoom]}
        zoom={{
          maxZoomPixelRatio,
          zoomInMultiplier,
        }}
        slides={[
          {
            src: image_url,
            alt: "image",
            width: 3840,
            height: 2560,   
          },
          // ...
        ]}
      />
    </>
  );
}
