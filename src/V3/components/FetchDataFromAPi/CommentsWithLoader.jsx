import React, { useEffect, useState } from "react";
import { Loader } from "./Loader/Loader";

export const CommentsWithLoader = () => {
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
    //   create an error state like loading and show error message if error occurs

  const fetchComments = async () => {
    setIsLoading(true);
    try {
      const resp = await fetch("https://jsonplacholder.typicode.com/comments");
      const commentsData = await resp.json();
      setComments(commentsData);
      setIsLoading(false);
    } catch (err) {
        setIsLoading(false);
        console.log(err);
    }
  };

  useEffect(() => {
    fetchComments();
  }, []);

  console.log("rendering CommentsWithLoader");
  console.log('comments', comments);

  return (
    <main>
      <h3>Comments</h3>
      {isLoading ? (
        <Loader/>
      ) : (
        comments.map(({ name, email, id }) => {
          return (
            <section
              key={id}
              style={{
                border: "1px solid #ddd",
                margin: "1rem",
                padding: "1rem",
              }}
            >
              <p>Name: {name}</p>
              <p>Email: {email}</p>
            </section>
          );
        })
      )}
    </main>

  );
};
