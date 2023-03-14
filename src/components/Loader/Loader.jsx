import { ColorRing } from 'react-loader-spinner';
import { Container } from './Loader.styled';

export const Loader = () => (
  <Container>
    <ColorRing
        visible={true}
        height="80"
        width="80"
        ariaLabel="blocks-loading"
        wrapperStyle={{}}
        wrapperClass="blocks-wrapper"
        colors={['#c9fa0d', '#09b294', '#097763', '#09b294', '#c9fa0d']}
    />
  </Container>
);