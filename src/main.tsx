import ReactDOM from "react-dom/client";

import App from "./App.tsx";
import "@assets/css/style.scss";

import { Provider } from "react-redux";
import { store } from "@stores/index";

ReactDOM.createRoot(document.getElementById("root")!).render(
    <Provider store={store}>
        <App />
    </Provider>,
);
