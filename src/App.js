import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import AddForm from "./components/AddForm";

import Header from "./components/Header";
import MainView from "./components/MainView";

import { categoriesUpdate, dataFetch } from "./store/actions";
import ThemeProvider from "./theme/ThemeProvider";

function App() {
  const dispatch = useDispatch();
  const [addActive, setAddActive] = useState(false);
  useEffect(() => {
    dispatch(dataFetch());
    dispatch(categoriesUpdate());
  }, []);
  return (
    <ThemeProvider>
      <Header setAddActive={setAddActive} />
      <MainView />
      {addActive && <AddForm setAddActive={setAddActive} />}
    </ThemeProvider>
  );
}

export default App;
