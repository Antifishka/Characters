import { RxDoubleArrowUp } from "react-icons/rx";
import { scrollUp } from "helpers/scrollUp";
import { ScrollButton } from "./ScrollUpButton.styled";

export const ScrollUpButton = () => {
    return (
        <ScrollButton
            onClick={scrollUp}
            aria-label="scroll-up">
             <RxDoubleArrowUp size={21}/>
        </ScrollButton>
    );
};