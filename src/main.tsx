import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./components/app/App.tsx";
import { Provider } from "react-redux";
import { store } from "./store/store.tsx";
import { ThemeProvider } from "./context/context.tsx";
import "./style/style.scss";

createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <ThemeProvider>
      <StrictMode>
        <App />
      </StrictMode>
    </ThemeProvider>
    ,
  </Provider>
);
