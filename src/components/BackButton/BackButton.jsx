import { useLocation } from "react-router-dom";
import { MdArrowBack} from "react-icons/md";
import { StyledLink } from "./BackButton.styled";

export const BackButton = ({ children }) => {
    const location = useLocation();
    const backLinkHref = location.state?.from ?? "/";
    console.log(backLinkHref);

    return <StyledLink to={backLinkHref}>
        <MdArrowBack size={26} />
        {children}
    </StyledLink>
};