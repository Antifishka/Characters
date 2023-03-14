import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { Toaster } from 'react-hot-toast';
import { Container, Header } from "./Layout.styled";

export const Layout = () => {
  return (
    <Container>
      <Header>
        
      </Header>
      
      <Suspense fallback={null}>
        <Outlet />
      </Suspense> 

      <Toaster position="top-right" reverseOrder={false} />
    </Container>
  );
};