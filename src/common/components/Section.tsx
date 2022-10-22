/* import { Container } from "./styles"; */
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

type Props = {
  id: string;
  children: JSX.Element | JSX.Element[];
  bgColor?: `bg-${string}`;
  setIsInView?: (isInView: boolean) => void;
};

export const Section = ({
  id,
  children,
  bgColor,
  setIsInView,
}: Props): JSX.Element => {
  const { ref, inView } = useInView({
    threshold: 0.5,
  });
  useEffect(() => {
    if (setIsInView) {
      setIsInView(inView);
    }
  }, [inView]);

  return (
    <section className={`relative  p-[65px] h-[90vh] ${bgColor}`} ref={ref}>
      <div id={id} className="absolute -top-[100px]"></div>
      {children}
    </section>
  );
};
