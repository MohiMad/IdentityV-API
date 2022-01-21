import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import './index.css';
import App from './App';
import Changelog from './routes/Changelog';
import Help from './routes/Help';
import PortraitSeries from './routes/PortraitSeries';
import Query from './routes/Query';
import PageNotFound from './routes/PageNotFound';
import Examples from './routes/Examples';
import ExamplePage from './routes/ExamplePage';
import GettingStarted from './routes/GettingStarted';
import LandingPage from './routes/LandingPage/LandingPage';

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route index element={<LandingPage />} />
      <Route path="/" element={<App />}>
        <Route path="getting-started" element={<GettingStarted />} />
        <Route path="query" element={<Query />} />
        <Route path="portrait-series" element={<PortraitSeries />} />
        <Route path="examples">
          <Route index element={<Examples />} />
          <Route path=":examplePage" element={<ExamplePage />} />
        </Route>
        <Route path="changelog" element={<Changelog />} />
        <Route path="help" element={<Help />} />
        <Route
          path="*"
          element={<PageNotFound />}
        />
      </Route>
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);
