import React, { useEffect, useState } from "react";

export const Posts = () => {
  // fetch the data on component load
  // render the posts in the UI

  //   let posts = []
  let [posts, setPosts] = useState([]);
  //   const [page, setPage] = useState(1);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts`)
      .then((res) => {
        // console.log("res", res);
        return res.json();
      })
      .then((data) => {
        setPosts(data);
        // console.log("posts", posts);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleScroll = () => {
    console.log("scrolling");
    if (
      document.documentElement.scrollTop >
      document.documentElement.scrollHeight * 0.9
    ) {
      console.log("reached bottom");
      // setPage((prev) => prev + 1);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);

  // input data
  // step 1 --> create an input
  // step 2 --> onChange handler and save the data in state

  // fetch call to get result based on input
  //
  // useEffect(() => {
  //     // fetch('https://apitogetdata')

  // }, [inputVal])

  // useEffect(() => {
  //     setValue()
  // infinite loop
  // })

  return (
    <main>
      <h3>Posts</h3>
      {posts.map(({ userId, title, body, id }) => {
        return (
          <section key={id}>
            <div>user Id: {userId}</div>
            <div>title: {title}</div>
            <div>desc: {body}</div>
            <br></br>
          </section>
        );
      })}
    </main>
  );
};
