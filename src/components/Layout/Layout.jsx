import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { Container } from "./Layout.styled";

export const Layout = () => {
  return (
    <Container>
      <header>
      </header> 

      <Suspense fallback={null}>
        <Outlet />
      </Suspense> 
    </Container>
  );
};