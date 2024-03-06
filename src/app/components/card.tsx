import React, { HtmlHTMLAttributes } from "react";

type CardProps = {
  title: string;
  content: string;
};

const Card: React.FC<CardProps> = (props) => {
  return (
    <div className="shadow-2xl bg-white rounded-lg shrink h-96 w-[30rem] p-3">
      <div className="flex justify-start ml-12 mt-12">
        <h1 className="font-bold text-4xl">{props.title}</h1>
      </div>
      <div className="flex justify-start ml-5 mt-12">
        <h2 className="text-xl">{props.content}</h2>
      </div>
    </div>
  );
};

export default Card;
