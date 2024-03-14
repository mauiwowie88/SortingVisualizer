import { useState } from "react";

const useSpeed = (initialSpeed = 500) => {
  const [speed, setSpeed] = useState(initialSpeed);

  // Additional logic can be implemented here if necessary

  return [speed, setSpeed];
};

export default useSpeed;
