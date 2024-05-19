import { RefObject } from 'react';
import { gsap } from 'gsap';

const displayElementWhenPageLoads = (
  div: RefObject<HTMLDivElement | HTMLButtonElement | HTMLImageElement| HTMLSpanElement >,
  seconds: number,
  timeout: number
) => {
  let Div = div.current;
  let Sec = seconds;

  if (Div) {
    setTimeout(() => {
      gsap.to(Div, Sec, { opacity: 1, marginTop: 0, marginRight: 0, marginLeft: 0, ease: 'Power2.out' });
    }, timeout);
  }
};

export default displayElementWhenPageLoads;