"use client";
import { categorys } from "@/constants/variables";
import Image from "next/image";
import Link from "next/link";
import { Fade } from "react-awesome-reveal";

function Cards() {
  return (
    <div className="flex flex-wrap items-center justify-between mt-2 w-full max-md:flex-col">
      <Fade direction="up" cascade triggerOnce>
        {categorys.map((i, index) => (
          <Link
            key={index}
            className="home-card hover:-translate-y-1 max-sm:w-full max-sm:hover:w-full"
            href={`/buy-residentials?category=${Object.keys(i)} `}
          >
            <Image
              src={`/images/${Object.keys(i)}.png`}
              width={250}
              height={100}
              alt="image.png"
              className="h-[160px]"
              priority
            />
            <p>{Object.values(i)}</p>
          </Link>
        ))}
      </Fade>
    </div>
  );
}

export default Cards;
