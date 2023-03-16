import { Container, Button, Page } from "./Pagination.styled";
import { MdArrowBackIosNew, MdArrowForwardIos } from 'react-icons/md';
import PropTypes from 'prop-types';

export const Pagination = ({page, totalPages, onClickPrev, onClickNext}) => {

  return (
    <Container>
      <Button onClick={onClickPrev} disabled={page <= 1}>
        <MdArrowBackIosNew/>
      </Button>
      <Page>
        {page}
      </Page>
      <Button onClick={onClickNext} disabled={page >= totalPages}>
        <MdArrowForwardIos />
      </Button>
    </Container>
  );
};

Pagination.propTypes = {
  page: PropTypes.number.isRequired,
  totalPages: PropTypes.number.isRequired,
  onClickPrev: PropTypes.func.isRequired,
  onClickNext: PropTypes.func.isRequired,
};