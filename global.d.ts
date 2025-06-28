declare module "react-slick" {
  import React from "react";

  export interface Settings {
    dots?: boolean;
    infinite?: boolean;
    speed?: number;
    slidesToShow?: number;
    slidesToScroll?: number;
    arrows?: boolean;
    autoplay?: boolean;
    autoplaySpeed?: number;
    pauseOnHover?: boolean;
    swipe?: boolean;
    swipeToSlide?: boolean;
    responsive?: Array<{
      breakpoint: number;
      settings: Partial<Settings>;
    }>;
  }
  
  interface SliderProps extends Settings {
    children?: React.ReactNode;
    ref?: React.Ref<Slider>;
  }

  export default class Slider extends React.Component<SliderProps> {
    slickPrev(): void;
    slickNext(): void;
  }
}