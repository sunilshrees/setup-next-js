import { useCallback, useRef } from "react";

export function useDebouncedCallback<T extends (...args: any[]) => any>(
  callback: T,
  delay: number
): T {
  // Ref to store the timeout ID, ensuring it persists across renders.
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Memoized debounced function, recreated only if `callback` or `delay` changes.
  const debouncedCallback = useCallback(
    (...args: Parameters<T>) => {
      // If a timeout is already set, clear it to reset the debounce delay.
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }

      // Set a new timeout to execute the callback after the specified delay.
      timeoutRef.current = setTimeout(() => {
        callback(...args); // Invoke the callback with the provided arguments.
      }, delay);
    },
    [callback, delay] // Dependencies for the memoized function.
  ) as T;

  // Return the debounced version of the callback.
  return debouncedCallback;
}
