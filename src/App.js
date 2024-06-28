import React from 'react';
import {Route, Routes} from "react-router-dom";
import {UiUsers, UiProjects} from './page'
import {getRouterUrl, URL_HOME, URL_USERS, URL_PROJECTS} from "./io/router/urls";

const App = ({}) => {
  return (
    <React.Suspense fallback="loading">
      <Routes>
        <Route path={getRouterUrl(URL_HOME)} element={<UiUsers/>}/>
        <Route path={getRouterUrl(URL_USERS)} element={<UiUsers/>}/>
        <Route path={getRouterUrl(URL_PROJECTS)} element={<UiProjects/>}/>
      </Routes>
    </React.Suspense>
  );
}
export default App;