import React from "react";
import Input from "./Input";
import useRequestResponseContext from "../store/requestRespnse";

function SentBtn({ className, ...props }) {

  const [inputVal, setInputVal] = React.useState("");
  const { addData, updateData } = useRequestResponseContext();

  const handleKeyPress = async (e) => {
    if (e.key === "Enter") {
      const input = inputVal;
      const id = Date.now();
      setInputVal("");
      try {
        addData({
          id,
          question: input,
          answer: "",
        });

        const response = await fetch(
          "https://api.dictionaryapi.dev/api/v2/entries/en/" + input
        );
        const data = await response.json();

        updateData(id, data[0].meanings[0].definitions[0].definition);
      } catch (error) {
        console.error(error);
        updateData(id, "No definition found");
      } 
    }
  };
  return (
      <Input
      inputVal={inputVal}
      setInputVal={setInputVal}
      handleKeyPress = {handleKeyPress}
        className={`w-full mt-3 rounded py-3 ${className}`}
        placeholder="Enter your response"
        {...props}
      />
  );
}

export default SentBtn;
