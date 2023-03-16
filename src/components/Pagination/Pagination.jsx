import { Container, Button, Page } from "./Pagination.styled";
import { MdArrowBackIosNew, MdArrowForwardIos } from 'react-icons/md';
import { theme } from "constants/theme";

export const Pagination = ({page, pages, onClickPrev, onClickNext}) => {

  return (
    <Container>
      <Button onClick={onClickPrev} disabled={page <= 1}>
        <MdArrowBackIosNew/>
      </Button>
      <Page>
        {page}
      </Page>
      <Button onClick={onClickNext} disabled={page >= pages}>
        <MdArrowForwardIos />
      </Button>
    </Container>
  );
};