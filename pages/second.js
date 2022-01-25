import React from "react";
import Nav from "../components/Nav";
import posts from "../data/posts";
import Error from "next/error";
import { useRouter } from "next/router";
export default function Second() {
  const router = useRouter()
  const {id} = router.query
  return (posts[id]) ? (
    <div>
      <Nav />
      <hr />
      <h1>{posts[id].title}</h1>
    </div>
  ) : (
    <Error statusCode={404}/>
  )
}
