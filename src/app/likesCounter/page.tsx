import { useState } from "react";

export default function LikesCounter() {
  const [likesCounter, setLikesCounter] = useState<number>(0);

  const handleClick: VoidFunction = () => {
    setLikesCounter(likesCounter + 1);
  };
  return (
    <div>
      <p>This are page has been liked {likesCounter} times</p>
      <button onClick={handleClick}>like this page</button>
    </div>
  );
}
