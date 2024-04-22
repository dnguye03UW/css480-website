"use client";
import Image from "next/image";

type ButtonProperty = {
    title : string;
    image?: string;
}

export const Button = ({title, image}:ButtonProperty) => {
  return (
    <button className="flexCenter gap-3 rounded-full bg-amber-400 px-8 py-4 text-white transition-all hover:bg-amber-500">
        {image && <Image src={image} alt={title} height={24} width={24} />}

        <label className="bold-16 whitespace-nowrap">{title}</label>

    </button>
  )
}
