import React, { useEffect } from "react";

export default function useOutside(
    ref: React.RefObject<HTMLInputElement>,
    callback: () => void,
) {
    useEffect(() => {
        function handleClickOutside(event: MouseEvent | TouchEvent) {
            if (ref.current && !ref.current.contains(event.target as Node)) {
                callback();
            }
        }

        document.addEventListener("mousedown", handleClickOutside);
        document.addEventListener("touchstart", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
            document.addEventListener("touchstart", handleClickOutside);
        };
    }, [ref]);
}
