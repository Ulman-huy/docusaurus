import { useState, useEffect, useRef } from "react";

function useOutsideClick() {
  const [click, setClick] = useState<boolean>(false);
  const ref = useRef<any>();

  useEffect(() => {
    const handleClick = (e: any) => {
      if (ref?.current && !ref.current.contains(e.target)) {
        setClick(false);
      } else {
        setClick(true);
      }
    };
    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, [ref]);

  return { ref, click, setClick };
}

export default useOutsideClick;
