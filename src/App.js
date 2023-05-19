import { Provider } from "react-redux";
import { store } from "./redux/store";
import { BrowserRouter } from "react-router-dom";
import { Router } from "./routes/Router";

function App() {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <Router />
            </BrowserRouter>
        </Provider>
    );
}

export default App;
