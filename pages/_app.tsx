import "../styles/globals.css";
import type { AppProps } from "next/app";

//context providers
import QuizContext from "../lib/contextAPI/createQuizContext";
import { UserContextProvider } from "../lib/contextAPI/userContext";

// font awesome
import "@fortawesome/fontawesome-svg-core/styles.css"; // import Font Awesome CSS
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;

export default function App({ Component, pageProps }: AppProps) {
  return (
    <QuizContext>
      <UserContextProvider>
        <Component {...pageProps} />
      </UserContextProvider>
    </QuizContext>
  );
}
