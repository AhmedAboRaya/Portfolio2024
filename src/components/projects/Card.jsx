import React from "react";
import { CardBody, CardContainer, CardItem } from "../ui/3d-card";
import { Github } from 'lucide-react';

export default function ThreeDCardDemo({key, title, description, link, img}) {
  return (
    <CardContainer className="inter-var">
      <CardBody
        className=" relative group/card dark:hover:shadow-2xl dark:hover:shadow-black/[0.3] bg-[#10112fcf] dark:border-white/[0.2] border-black/[0.1] md:min-w-[480px] h-auto rounded-xl p-6 border"
      >
        <CardItem
          translateZ="50"
          className="text-xl font-bold text-white"
        >
          {title}
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-sm max-w-sm mt-2 text-white"
        >
          {description}
        </CardItem>
        <CardItem translateZ="100" className="w-full mt-4">
          <img
            src={img}
            height={1000}
            width={1000}
            className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>
        <div className="flex justify-between items-center mt-20">
          <CardItem
            translateZ={20}
            as="a"
            href={link}
            target="_blank" 
            className="px-4 py-2 rounded-xl text-xs font-normal text-white"
          >
            Try now →
          </CardItem>
          <CardItem
            translateZ={20}
            as="button"
            href={link}
            className=" rounded-2xl bg-white text-black text-xs font-bold"
          >
            <a target="_blank" href={link} className="w-full h-full px-4 py-2 flex justify-center items-center gap-1">
              Code <Github />
            </a>
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
  );
}
