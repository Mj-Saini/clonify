import React, { useEffect, useState } from "react";
import Header from "./Header";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  //scroll-to-top classes: fixed, bottom:0, right:0
  return (
    <>
      <div className="">
        <Header />
      </div>
      <div className="scroll-to-top position-fixed bottom-0 end-0 mb-2">
        {isVisible && (
          <div id="myBtn" onClick={scrollToTop}>
            <a className="text_red bg_green  px-3 py-2 rounded-5" href="#">
              Top
            </a>
          </div>
        )}
      </div>
    </>
  );
}
