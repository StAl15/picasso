import {useEffect, useRef, useState} from "react";

export const useObserver = (options: IntersectionObserverInit) => {
    const containerRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    const callbackFunction = (entries: any) => {
        const [entry] = entries;
        setIsVisible(entry.isIntersecting);
    }

    useEffect(() => {
        const observer = new IntersectionObserver(callbackFunction, options);
        const curr = containerRef.current
        if (curr) {
            observer.observe(curr);
        }
        return () => {
            if (curr) {
                observer.unobserve(curr);
            }
        };
    }, [containerRef, options]);

    return [containerRef, isVisible];
}
