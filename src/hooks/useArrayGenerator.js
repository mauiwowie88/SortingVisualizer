import { useState, useCallback } from "react";

const useArrayGenerator = (defaultSize) => {
  const [size, setSize] = useState(defaultSize);
  const [array, setArray] = useState(
    Array.from({ length: size }, () => Math.random())
  );

  const generateArray = useCallback(() => {
    setArray(Array.from({ length: size }, () => Math.random()));
  }, [size]);

  const updateSize = (newSize) => {
    setSize(newSize);
    setArray((currentArray) => {
      if (newSize > currentArray.length) {
        return [
          ...currentArray,
          ...Array.from({ length: newSize - currentArray.length }, () =>
            Math.random()
          ),
        ];
      } else {
        return currentArray.slice(0, newSize);
      }
    });
  };

  return { array, size, generateArray, updateSize };
};

export default useArrayGenerator;
