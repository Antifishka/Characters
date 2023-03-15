import { lazy } from "react";
import { Routes, Route } from "react-router-dom";
import { GlobalStyle } from "./GlobalStyles";
import { Layout } from "./Layout/Layout";

const Home = lazy(() => import('../pages/Home/Home'));
const CharacterDetails = lazy(() => import('pages/Details/Details'));

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
    </>  
  );
};