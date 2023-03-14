import { Container, Img } from "components/Title/Title.styled";
import imgMob from "components/images/rick&morty_mob.png";
// import imgDes from "components/images/rick&morty_des.png";

export const Title = () => (
    <Container>
        <Img srcSet={imgMob}
            alt="rick&morty_logo"
            width="312px"
            height="104px"
            loading="lazy" />
    </Container>
);