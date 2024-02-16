import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import Footer from "./components/Footer/Footer.tsx";
import Header from "./components/Header/Header.tsx";

function Main() {
  const [middleContent, setMiddleContent] = useState("");

  useEffect(() => {
    console.log("Middle content updated:", middleContent);
  }, [middleContent]);

  const changeMiddle: any = (newContent: any) => {
    setMiddleContent(newContent);
  };

  return (
    <React.StrictMode>
      <Header changeMiddle={changeMiddle} />
      <div className="middle">{middleContent}</div>
      <Footer />
    </React.StrictMode>
  );
}

ReactDOM.createRoot(document.getElementById("root")!).render(<Main />);
