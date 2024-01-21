import { useState } from "react"

export const useInput = (initialVal) => {
  const [value, setValue] = useState(initialVal);

  function changeVal(e) {
    if (e.target) {
      setValue(e.target.value);
    } else {
      // Assume it's an object with a 'value' property
      setValue(e.value);
    }
  }

  return [value, changeVal]
}