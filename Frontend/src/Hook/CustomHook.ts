import { useMemo } from "react";

export const useDebounce = <F extends (...args: any[]) => any>(
  func: F,
  delay: number
): F => {
  const debouncedFunction = useMemo(() => {
    let timeoutId: ReturnType<typeof setTimeout>;

    return (...args: Parameters<F>) => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        func(...args);
      }, delay);
    };
  }, [func, delay]);

  return debouncedFunction as F;
};


// Usage:
// const debouncedNormFileLogo = useDebounce(normFileLogo, 500);
