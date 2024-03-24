"use client";

import axios from "axios";
import { useEffect, useState } from "react";
import Gallery from "../gallery/page";

interface ArtObject {
    id: string;
    longTitle: string;
    webImage: {
      url: string;
    };
    title: string;
    principalOrFirstMaker: string;
  }

export default function GalleryWall() {
  const [artArray, setArtArray] = useState<ArtObject[]>([]);

  useEffect(() => {
    axios({
      url: `https://www.rijksmuseum.nl/api/en/collection`,
      params: {
        key: "3PhkUBOp",
        imgonly: "true",
        ps: 20,
      },
    }).then(function (artData) {
      console.log(artData.data.artObjects);

      // because the component has already rendered, in order to trigger a re-render which shows the data we now have from this asynchronous request, we have to save the data within state
      setArtArray(artData.data.artObjects);
    });
  }, []);

  return (
    <section>
      <h2>Here is your art!</h2>
      {artArray.map((individualArt) => {
        return (
          <Gallery
            key={individualArt.id}
            title={individualArt.longTitle}
            img={individualArt.webImage.url}
            alt={individualArt.title}
            artist={individualArt.principalOrFirstMaker}
          />
        );
      })}
    </section>
  );
}
