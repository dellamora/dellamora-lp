import type { AppProps } from "next/app";
import "../common/styles/globals.css";
import { AppContextProvider } from "../common/context/appContext";
import BaseLayout from "../common/layouts/baseLayout";
import "animate.css";
const App = ({ Component, pageProps }: AppProps): JSX.Element => {
  return (
    <>
      <AppContextProvider>
        <BaseLayout>
          <Component {...pageProps} />
        </BaseLayout>
      </AppContextProvider>
    </>
  );
};

export default App;
