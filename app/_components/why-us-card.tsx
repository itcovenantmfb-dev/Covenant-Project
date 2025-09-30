import Image from "next/image";
import React from "react";

interface MainCardItem {
  image: string;
  title: string;
  text: string;
}

interface SubCardItem {
  icon: string;
  title: string;
  text: string;
}

interface WhyUsCardProps {
  mainCard: MainCardItem[];
  subCard: SubCardItem[];
}

const WhyUsCard = ({ mainCard, subCard }: WhyUsCardProps) => {
  return (
    <>
      <div data-aos="fade-up" className="bg-[#F1F5EB] rounded-[30px] max-w-[600px] min-h-[570px] h-full  flex items-center justify-center gap-3 flex-col px-12 py-7">
        <Image
          src={mainCard[0].image}
          alt={mainCard[0].title}
          width={380}
          height={350}
          className=""
        />
        <h3 className=" text-lg lg:text-2xl font-semibold text-[#020617]">
          {mainCard[0].title}
        </h3>
        <p className="text-base text-[#64748B]">{mainCard[0].text}</p>
      </div>
      <div className="flex flex-col gap-6 h-full">
        {subCard.map((item, index) => (
          <div
            key={index}
            className="bg-[#F8F8F8] rounded-3xl p-6 lg:p-12 max-w-[500px] h-full space-y-3.5"
          >
            <Image src={item.icon} alt={item.title} width={40} height={40} />
            <h4 className="text-lg lg:text-xl font-semibold text-[#020617]">
              {item.title}
            </h4>
            <p className="text-base text-[#5B5B5B]">{item.text}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default WhyUsCard;
