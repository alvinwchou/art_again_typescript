"use client"

import { useState } from "react";
import GalleryWall from "./galleryWall/page";

export default function Home() {
  // declare a state variable to track the visibility of the GalleryWall component
  const [showGallery, setShowGallery] = useState<boolean>(false);

  // define the "click" event callback function
  const handleClick = () => {
    // update the showGallery state to be the opposite of what it currently is
    setShowGallery(!showGallery);
  };

  return (
    <main>
      <h1>Art Attack!</h1>
      <button onClick={handleClick}>
        {showGallery === true ? "Hide this art" : "Show me some art!"}
      </button>

      {/* if showGallery is true, show the component */}
      {/* if showGallery is false, hide the component */}
      {showGallery && <GalleryWall />}
    </main>
  );
}
