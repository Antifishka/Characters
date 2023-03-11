import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { Loader } from "components/Loader/Loader";
import { Container, Header } from "./Layout.styled";
import imgMob from "components/images/rick&morty_mob.png";
// import imgDes from "components/images/rick&morty_des.png";

export const Layout = () => {
  return (
    <Container>
      <Header>
        <div>
            <img srcSet={imgMob}
                alt="rick&morty_logo"
                width="312px"
                height="104px"
                loading="lazy" />
        </div>
      </Header>
      
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense> 
    </Container>
  );
};