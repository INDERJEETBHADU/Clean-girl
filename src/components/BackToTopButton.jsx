import React, { useEffect, useState } from "react";

const BackToTopButton = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {showButton && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-4 right-4 bg-white border-2 border-[#FEACD7] text-[#FD0786] p-3 rounded-full shadow-lg transition-transform transform hover:scale-110"
        >
          ↑
        </button>
      )}
    </>
  );
};

export default BackToTopButton;
