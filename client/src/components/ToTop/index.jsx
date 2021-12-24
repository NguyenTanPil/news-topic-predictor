import { useEffect, useRef } from 'react';
import { FaArrowUp } from 'react-icons/fa';
import { Button } from '../Common';
import { Container } from './ToTopStyles';

const ToTop = () => {
  const buttonEl = useRef(null);

  const handleVisibleButton = () => {
    const position = window.pageYOffset;

    if (position > 90) {
      buttonEl.current.style.display = 'block';
    } else {
      buttonEl.current.style.display = 'none';
    }
  };

  // This function will scroll the window to the top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // for smoothly scrolling
    });
  };

  // when scroll add handleVisibleButton function
  useEffect(() => {
    window.addEventListener('scroll', handleVisibleButton);
  });

  return (
    <Container>
      <Button ref={buttonEl} onClick={scrollToTop}>
        <FaArrowUp />
      </Button>
    </Container>
  );
};

export default ToTop;
