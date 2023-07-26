import React, { useEffect, useState } from "react";

export const Posts = () => {
  // fetch the data on component load
  // render the posts in the UI

  //   let posts = []
  let [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => {
        console.log("res", res);
        return res.json();
      })
      .then((data) => {
        setPosts(data);
        console.log("posts", posts);
      })
      .catch((err) => {
        console.log(err);
      });
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
