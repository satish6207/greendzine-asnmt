import { useNavigate } from "react-router-dom";
import Header from "../default/Header";
import Navbar from "../default/Navbar";
import Content from "./Content";
import { useEffect } from "react";

export default function Home(props) {
  const navigate = useNavigate();

  useEffect(() => {
    if (!props.logged) navigate("/login");
  }, [props.logged]);

  return (
    props.logged && (
      <div className="home-section">
        <Header />
        <Content />
        <Navbar />
      </div>
    )
  );
}
