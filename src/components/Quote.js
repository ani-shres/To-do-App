import React, { useEffect, useState } from "react";
import "./Quote.css";

function Quote() {
  const [quote, setQuote] = useState("");

  useEffect(() => {
    const fetchQuote = async () => {
      await fetch("https://type.fit/api/quotes")
        .then((res) => res.json())
        .then((data) =>
          setQuote(data[Math.floor(Math.random() * (data.length - 1))])
        );
    };

    fetchQuote();
  }, []);

  return (
    <div className="quote">
      <p>{` "${quote.text}"`}</p>
      <p>{`- ${quote.author}`}</p>
    </div>
  );
}

export default Quote;
