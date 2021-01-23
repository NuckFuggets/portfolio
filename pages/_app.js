import "../styles/globals.css";

import { AnimatePresence, motion } from "framer-motion";

function MyApp({ Component, pageProps, router }) {
  return (
    <AnimatePresence exitBeforeEnter>
      <motion.div
        key={router.route}
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -40 }}
      >
        <Component {...pageProps} router={router} />
      </motion.div>
    </AnimatePresence>
  );
}

export default MyApp;
