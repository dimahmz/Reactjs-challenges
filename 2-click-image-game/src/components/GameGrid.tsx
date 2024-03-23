import { useContext, useEffect, useState } from "react";
import { GameContext } from "../context/gameContext";
import "../styles/gameGrid.css";
import { image } from "./types/gameGrid.ts";

function GameGrid() {
  const count: number = 30;

  const { incrementScore } = useContext(GameContext);

  const [images, setImages] = useState<image[] | []>([]);

  function changeAnImageInGrid(index: number, valid: boolean) {
    const src: string = valid ? "images/react-logo.png" : "images/js-logo.png";
    setImages((updateImgs) => {
      updateImgs[index] = {
        src,
        valid,
      };
      return [...updateImgs];
    });
  }

  function startTheGame(): number {
    const intervalId = setInterval(() => {
      const index: number = Math.floor(Math.random() * count);
      changeAnImageInGrid(index, true);
      setTimeout(() => {
        changeAnImageInGrid(index, false);
      }, 850);
    }, 1030);
    return intervalId;
  }

  function fillUpTheImages() {
    const $images: image[] = new Array(count).fill({
      src: "images/js-logo.png",
      valid: false,
    });
    setImages([...$images]);
  }

  useEffect(() => {
    fillUpTheImages();
    const intervalId = startTheGame();
    // cleaner
    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
      <div className="grid-wrapper">
        {images.length == 0 ? (
          <p>loading ....</p>
        ) : (
          images.map((img: image, i: number) =>
            img.valid ? (
              <img
                key={i}
                onClick={incrementScore}
                className="img-item the-valid-img"
                src={img.src}
              />
            ) : (
              <img key={i} className="img-item" src={img.src} />
            )
          )
        )}
      </div>
    </>
  );
}

export default GameGrid;
