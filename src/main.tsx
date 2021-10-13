import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import App from "./App";
import store from "./store";
import { ChakraProvider } from "@chakra-ui/react";
import ChakraProviderTheme from "./theme/ChakraProviderTheme";
import { QueryClient, QueryClientProvider } from "react-query";
import "@fontsource/inter/700.css";

const queryClient = new QueryClient();

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ChakraProvider theme={ChakraProviderTheme}>
        <QueryClientProvider client={queryClient}>
          <App />
        </QueryClientProvider>
      </ChakraProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
