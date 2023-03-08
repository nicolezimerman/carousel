import React, { useEffect, useState, useCallback } from "react";

function Carousel({ delay, list }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const moveToNextElement = useCallback(() => {
    setCurrentIndex((currentIndex) =>
      currentIndex === list.length - 1 ? 0 : currentIndex + 1
    );
  }, [list.length]);

  const moveToPreviousElement = () => {
    setCurrentIndex((currentIndex) =>
      currentIndex === 0 ? list.length - 1 : currentIndex - 1
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      moveToNextElement();
    }, delay);

    return () => clearInterval(interval);
  }, [delay, moveToNextElement]);

  return (
    <div className="carousel">
      <div className="element">{list[currentIndex]}</div>
      <div className="buttons">
        <button className="previous" onClick={moveToPreviousElement}>
          Previous
        </button>
        <button className="next" onClick={moveToNextElement}>
          Next
        </button>
      </div>
    </div>
  );
}

export default Carousel;
