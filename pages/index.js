import Head from "next/head";
import { Toolbar } from "../components/toolbar";
// import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className="page-container container mx-auto">
      <Toolbar />

      <div className="h-screen flex justify-center items-center flex-col capitalize font-bold text-2xl">
        <h3 className="mb-10">A app to text out next js features</h3>
        <h1>By sonia uduma</h1>
      </div>
    </div>
  );
}
