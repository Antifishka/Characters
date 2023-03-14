import { useMediaQuery } from 'react-responsive';
import { breakpoints } from 'constants/theme';

export const useBreakpoints = () => {
  const onlyMobile = useMediaQuery({ query: `(max-width: ${+breakpoints[1] - 0.02}px)` });
  const isDesktop = useMediaQuery({ query: `(min-width: ${breakpoints[1]}px)` });

    return {
        onlyMobile,
        isDesktop,
    };
};