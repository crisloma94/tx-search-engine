import { useEffect, Ref } from 'react';

export const useOnClickOutside = (
  ref: Ref<HTMLDivElement>,
  handler: (event: MouseEvent | TouchEvent) => void,
) => {
  useEffect(() => {
    const listener = (event: MouseEvent | TouchEvent) => {
      if (
        ref &&
        'current' in ref &&
        (!ref.current || ref.current.contains(event.target as Node))
      ) {
        return;
      }

      handler(event);
    };

    document.addEventListener('mousedown', listener);
    document.addEventListener('touchstart', listener);

    return () => {
      document.removeEventListener('mousedown', listener);
      document.removeEventListener('touchstart', listener);
    };
  }, [ref, handler]);
};
