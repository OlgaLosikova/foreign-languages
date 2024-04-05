import { useState } from "react";

export default function useInputChecking(ckeckDanger, initValue) {
  const [value, setValue] = useState(initValue);
const isDanger=ckeckDanger(value);
  const handleEdit = (e) => {
    setValue(e.target.value);
    console.log(value);
  };

  return {
    value: value,
    isDanger:isDanger,
    handleEdit: handleEdit,
  };
}
