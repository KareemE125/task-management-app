import { useEffect } from "react";
import { RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import appRouter from "@/routes/AppRouter";
import store from "@/store/store";
import { STORAGE_THEME_DARK_VALUE, STORAGE_THEME_KEY } from "./global/constants";


function App() { 
  useEffect(() => {
    const theme = localStorage.getItem(STORAGE_THEME_KEY);
    if (!theme) {
      localStorage.setItem(STORAGE_THEME_KEY, STORAGE_THEME_DARK_VALUE);
      document.documentElement.classList.add(STORAGE_THEME_DARK_VALUE);
    }else if (theme === STORAGE_THEME_DARK_VALUE) {
      document.documentElement.classList.add(STORAGE_THEME_DARK_VALUE);
    } else {
      document.documentElement.classList.remove(STORAGE_THEME_DARK_VALUE);
    }
  }, []);

  return (
    <Provider store={store}>
      <RouterProvider router={appRouter} />
    </Provider>
  )
}

export default App;
