import React, { useState, useEffect } from "react";
import { FaArrowRightLong } from "react-icons/fa6";
function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const onMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    document.addEventListener("mousemove", onMouseMove);
    window.addEventListener("resize", handleResize);

    handleResize();

    return () => {
      document.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    !isMobile && (
      <div
        className="custom-cursor flex justify-center items-center text-white"
        style={{ left: `${position.x}px`, top: `${position.y}px` }}
      >
        <FaArrowRightLong />
      </div>
    )
  );
}

export default CustomCursor;
