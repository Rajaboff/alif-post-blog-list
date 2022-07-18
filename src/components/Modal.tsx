import React, { useContext } from "react";
import ThemeContext from "../theme-context";

type Props = {
  title: string;
  image: string;
  close: Function;
};

function Modal({ title, image, close }: Props) {
  const theme = useContext(ThemeContext);
  return (
    <div className="fixed top-0 left-0 z-10 w-full h-full flex justify-center items-center">
      <div
        className="modal m-[25px] w-full z-20 max-w-[650px] p-[20px] rounded-[20px]"
        style={{ background: theme.item }}
      >
        <div
          className="image-mask w-full h-[350px] bg-cover bg-center rounded-[15px]"
          style={{ backgroundImage: `url(${image})` }}
        ></div>
        <h1 className="font-bold text-[20px] mt-[22px] mb-[10px]">{title}</h1>
        <p className="text-[14px]">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi
          accusantium hic ad laborum molestias odit, in enim. Repellat quam sit
          nam nostrum ipsum hic aliquid reiciendis. Ipsa ipsam maxime vitae.
        </p>
      </div>

      <div
        onClick={() => close(false)}
        className="cursor-pointer fixed top-0 left-0 bg w-full h-full z-10 bg-black opacity-50"
      ></div>
    </div>
  );
}

export default Modal;
