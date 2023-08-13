import React from "react";
import { useNavigate } from "react-router-dom";

const SearchOrder = () => {
  const [query, setQuery] = React.useState("");
  const navigate = useNavigate();

  const handleChange = event => {
    setQuery(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    if (!query) return;
    navigate(`/order/${query}`);
    setQuery("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={query}
        onChange={handleChange}
        placeholder="Search order #"
      />
    </form>
  );
};

export default SearchOrder;
