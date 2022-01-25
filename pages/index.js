import Head from "next/head";
import Link from "next/link";
import react from "react";
import Nav from "../components/Nav";
import posts from "../data/posts";
import {
  HorizontalGridLines,
  LineSeries,
  XAxis,
  XYPlot,
  YAxis,
} from "react-vis";
import "react-vis/dist/style.css";
export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav />
      <hr />
      <ul>
        {posts.map((post, index) => (
          <li key={index}>
            <Link href={{ pathname: "/second", query: { id: index } }}>
              <a>{post.title}</a>
            </Link>
          </li>
        ))}
      </ul>
      <XYPlot width={300} height={300}>
        <HorizontalGridLines />
        <LineSeries
          data={[
            { x: 1, y: 10 },
            { x: 2, y: 5 },
            { x: 3, y: 15 },
          ]}
        />
        <XAxis />
        <YAxis />
      </XYPlot>
    </div>
  );
}
