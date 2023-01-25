import React, { useEffect, useRef } from 'react'

export const useFadeInOnScroll = (): React.RefObject<HTMLDivElement> => {
    const ref = useRef<HTMLDivElement>(null);


    useEffect(() => {
        const handleScroll = () => {
            if (!ref.current){
                return;
            }
        const position = ref.current.getBoundingClientRect();
        if (position.top < window.innerHeight){
            ref.current.style.opacity = `${1}`;
            ref.current.style.transition = "opacity 2s ease-in-out";
        }
        };
        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        }
    },[ref]);

    return ref;
}