import Head from "next/head";
import { Toolbar } from "../components/toolbar";
import styles from "../styles/Home.module.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchPost } from "../store/actions/postAction";
import { useEffect } from "react";

export default function Home() {
  const dispatch = useDispatch();
  const getPost = useSelector((state) => state.postReducer);

  console.log(getPost);

  useEffect(() => {
    dispatch(fetchPost());
  }, []);

  return (
    <div className="page-container">
      <Toolbar />

      <div className={styles.main}>
        <h1>Sonia News App</h1>

        <h3>checkout your latest news</h3>
      </div>
    </div>
  );
}
