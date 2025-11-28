import { useState } from "react";

const LikesAndDislikes = () => {
  const [quotes, setQuotes] = useState([
    { text: "a", likes: 0, dislikes: 0 },
    { text: "b", likes: 0, dislikes: 0 },
    { text: "c", likes: 0, dislikes: 0 },
    { text: "d", likes: 0, dislikes: 0 },
    { text: "e", likes: 0, dislikes: 0 },
    { text: "f", likes: 0, dislikes: 0 },
    { text: "g", likes: 0, dislikes: 0 },
    { text: "h", likes: 0, dislikes: 0 },
    { text: "i", likes: 0, dislikes: 0 },
    { text: "j", likes: 0, dislikes: 0 },
  ]);
  const likes = (quote) => {
    setQuotes(
      quotes.map((q) =>
        q.text === quote.text ? { ...q, likes: q.likes + 1 } : q
      )
    );
  };
  const dislikes = (quote) => {
    setQuotes(
      quotes.map((q) =>
        q.text === quote.text ? { ...q, dislikes: q.dislikes + 1 } : q
      )
    );
  };
  return (
    <div>
      {quotes.map((quote) => (
        <div key={quote.text}>
          <h2>{quote.text}</h2>
          <div>
            <p>Likes: {quote.likes}</p>
            <p>Dislikes: {quote.dislikes}</p>
          </div>
          <div>
            <button
              onClick={() => {
                likes(quote);
              }}
            >
              Like
            </button>
            <button
              onClick={() => {
                dislikes(quote);
              }}
            >
              Dislike
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};
export default LikesAndDislikes;
