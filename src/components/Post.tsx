import React, { useContext } from "react";
import ThemeContext from "../theme-context";

type Props = {
  title: string;
  imageUrl: string;
  openModal: Function;
};

const Post = ({ title, imageUrl, openModal }: Props) => {
  const theme = useContext(ThemeContext);

  return (
    <div
      onClick={() => openModal(true, { title, image: imageUrl })}
      style={{ background: theme.item }}
      className="rounded-[20px] overflow-hidden cursor-pointer"
    >
      <div
        className="h-[200px] bg-cover bg-center w-full"
        style={{ backgroundImage: `url(${imageUrl})` }}
      ></div>
      <h1 className="font-bold text-[15px] uppercase m-[20px]">
        {title.length > 15 ? title.slice(0, 15) + "..." : title}
      </h1>
    </div>
  );
};

export default Post;
