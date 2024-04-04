"use client";
import React from "react";
import { BsChevronDown } from "react-icons/bs";

type Props = {
  question: string;
  ans: string;
};

const Collapse: React.FC<Props> = (props) => {
  return (
    <div className=" relative w-full md:w-[64rem] bg-white">
      <input
        type="checkbox"
        className="peer w-full h-16 cursor-pointer absolute z-10 top-0 inset-x-0 opacity-0"
      />
      <div className="flex justify-start h-16 w-full pl-5 items-center text-black bg-amber-400">
        <h2>{props.question}</h2>
      </div>
      <div className=" absolute right-3 top-6 rotate-0 transition-transform duration-500 peer-checked:rotate-180">
        <BsChevronDown />
      </div>
      <div className="bg-stone-800 overflow-hidden transition-all duration-500 max-h-0 peer-checked:max-h-40">
        <div className="p-4 text-white">
          <p>{props.ans}</p>
        </div>
      </div>
    </div>
  );
};

export default Collapse;
