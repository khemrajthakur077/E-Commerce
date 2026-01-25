import { useRef } from 'react'

const useHorizontalScroll = (scrollAmount) => {
    const ref = useRef(null);

    const scrollLeft = () => {
        ref.current?.scrollBy({
            left : -scrollAmount,
            behavior: "smooth",
        });
    };
    const scrollRight = () => {
        ref.current?.scrollBy({
            left : scrollAmount,
            behavior : "smooth",
        });
    };

  return { ref , scrollLeft , scrollRight }
}

export default useHorizontalScroll
