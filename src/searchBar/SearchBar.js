import { useState } from "react";
import s from "./style.module.css";
import { Search as SearchIcon } from "react-bootstrap-icons";

const SearchBar = ({ onSubmit }) => {
  const [input, setInput] = useState("");
  const submit = (e) => {
    if (e.key === "Enter" && input.trim() !== "") {
      onSubmit(input);
      setInput("");
    }
  };
  return (
    <>
      <SearchIcon size={27} className={s.icon} />
      <input
        onKeyUp={submit}
        className={s.input}
        type="text"
        placeholder="Search a TV show"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
    </>
  );
};

export default SearchBar;
