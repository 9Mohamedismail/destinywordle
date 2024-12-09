import React, { useState, useEffect, useRef } from "react";
import Button from "react-bootstrap/Button";
import FormControl from "react-bootstrap/FormControl";
import ListGroup from "react-bootstrap/ListGroup";
import gachaDestinyData from "../util/destiny_rising_characters.json";

function SearchBar({ setCurrentGuess, currentGuess, HandleButton }) {
  const [filteredSuggestions, setFilteredSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const wrapperRef = useRef(null);

  const handleInputChange = (event) => {
    const userInput = event.target.value;
    setCurrentGuess(userInput);

    const suggestions = gachaDestinyData
      .filter((item) =>
        item.name.toLowerCase().includes(userInput.toLowerCase())
      )
      .map((item) => item.name);

    setFilteredSuggestions(suggestions);
    setShowSuggestions(userInput.length > 0 || suggestions.length > 0);
  };

  const handleFocus = () => {
    const suggestions = gachaDestinyData
      .filter((item) =>
        item.name.toLowerCase().includes(currentGuess.toLowerCase())
      )
      .map((item) => item.name);

    setFilteredSuggestions(suggestions);
    setShowSuggestions(suggestions.length > 0);
  };

  const handleSuggestionClick = (suggestion) => {
    setCurrentGuess(suggestion);
    setShowSuggestions(false);
  };

  useEffect(() => {
    function handleClickOutside(event) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setShowSuggestions(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div ref={wrapperRef}>
      <FormControl
        value={currentGuess}
        onChange={handleInputChange}
        onFocus={handleFocus}
        placeholder="Search..."
      />

      {showSuggestions && (
        <ListGroup>
          {filteredSuggestions.map((suggestion, index) => (
            <ListGroup.Item
              key={index}
              action
              onClick={() => handleSuggestionClick(suggestion)}
            >
              {suggestion}
            </ListGroup.Item>
          ))}
        </ListGroup>
      )}

      <Button
        variant="primary"
        type="submit"
        onClick={HandleButton}
        style={{ marginTop: "10px" }}
      >
        Search
      </Button>
    </div>
  );
}

export default SearchBar;
