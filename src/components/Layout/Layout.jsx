import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { Loader } from "components/Loader/Loader";
import { Container, Header } from "./Layout.styled";

export const Layout = () => {
  return (
    <Container>
      <Header>
        
      </Header>
      
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense> 
    </Container>
  );
};