import { lazy } from "react";
import { Routes, Route } from "react-router-dom";
import { GlobalStyle } from "./GlobalStyles";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { Layout } from "./Layout/Layout";

const Home = lazy(() => import('../pages/Home/Home'));
const CharacterDetails = lazy(() => import('../pages/CharacterDetails/CharacterDetails'));

export const App = () => {
  return (  
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/:characterId" element={<CharacterDetails />} />
          <Route path="*" element={<Home />} />
        </Route>  
      </Routes>
      <GlobalStyle />
      <ToastContainer autoClose={2500} theme="colored"/>
    </>  
  );
};