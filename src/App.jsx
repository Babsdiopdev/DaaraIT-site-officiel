import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import AppTemplate from "./layouts/AppTemplate";
import { navigationPaths } from "./routes/app.navigation";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppTemplate />}>
          {
            navigationPaths.map((navigation, index)=> (
              <Route key={index} path={navigation.path} element={navigation.element} />
            ))
          }
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
