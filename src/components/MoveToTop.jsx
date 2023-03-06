import React, { useState, useEffect } from "react";

const MoveToTop = () => {
  const top = () => {
    document.documentElement.scrollTop = 0;
  };
  const [backToTop, setbackToTop] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (document.documentElement.scrollTop > 100) {
        setbackToTop(true);
      } else {
        setbackToTop(false);
      }
    });
  }, []);
  return (
    <div>
      {/* {backToTop && (
        <button
          id="btn"
          onClick={() => top()}
          className="btn btn-primary position-fixed end-0 bottom-0 mb-4 me-4"
        >
          top
        </button>
      )} */}
      <button
        id="btn"
        onClick={() => top()}
        style={{ zIndex: "99" }}
        className={
          backToTop
            ? "btn d-block bg-info position-fixed end-0 bottom-0 mb-2 me-4"
            : "btn d-none bg-info position-fixed end-0 bottom-0 mb-2 me-4"
        }
      >
        Top
      </button>
    </div>
  );
};

export default MoveToTop;
