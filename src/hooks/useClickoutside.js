import { useEffect } from "react";

const useClickOutside = (inside, callback) => {

    useEffect(()=>{

        const onClickHandler = (e) => {
            if(!inside.current || inside.current.contains(e.target)) {
                return;
            }
            if(callback) callback();
        }

        document.addEventListener("mousedown", onClickHandler);
        document.addEventListener("touchstart", onClickHandler);
        return () => {
          document.removeEventListener("mousedown", onClickHandler);
          document.removeEventListener("touchstart", onClickHandler);
        };

    }, [inside, callback])

}

export default useClickOutside;