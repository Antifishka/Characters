import { Container, Img } from "components/Title/Title.styled";
import { useBreakpoints } from "hooks/useMediaQuery";
import imgMob from "components/images/rick&morty_mob.png";
import imgDes from "components/images/rick&morty_des.png";

export const Title = () => {
    const { isDesktop } = useBreakpoints();

    return (
        <Container>
            <Img srcSet={isDesktop ? imgDes : imgMob }
                alt="rick&morty_logo"
                width={isDesktop ? "600px" : "312px"}
                loading="lazy" />
        </Container>
    );
};