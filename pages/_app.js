import "../styles/globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LoadingPage from "@/components/LoadingPage";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

function MyApp({ Component, pageProps }) {
  const [loading, setLoading] = useState(true);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [customCursor, setCustomCursor] = useState("default");

  setTimeout(() => {
    setLoading(false);
  }, 3800);

  useEffect(() => {
    const mouseMove = (e) => setMousePosition({ x: e.clientX, y: e.clientY });

    window.addEventListener("mousemove", mouseMove);
    return () => window.removeEventListener("mousemove", mouseMove);
  }, []);

  const cursorVariants = {
    default: { x: mousePosition.x - 22, y: mousePosition.y - 22 },
    inverse: {
      x: mousePosition.x - 22,
      y: mousePosition.y - 22,
      mixBlendMode: "difference",
    },
  };
  const cursorIn = () => setCustomCursor("inverse");
  const cursorOut = () => setCustomCursor("default");

  return (
    <>
      {loading ? (
        <LoadingPage />
      ) : (
        <>
          <div onMouseEnter={cursorIn} onMouseLeave={cursorOut}>
            <Header />
            <Component {...pageProps} />
            <Footer />
          </div>

          <motion.div
            className="pointer-events-none fixed left-0 top-0 z-50 h-11 w-11 rounded-full bg-primary-light"
            variants={cursorVariants}
            animate={customCursor}
          />
        </>
      )}
    </>
  );
}

export default MyApp;
