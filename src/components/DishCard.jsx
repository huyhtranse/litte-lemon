import React from "react";

const DishCard = ({ image, name, price, desc, orderButton }) => {
  return (
    <article className="w-full md:w-[220px] lg:w-[265px] flex flex-row-reverse md:block mb-5 md:mb-0 border-t-2 border-grey md:border-0 pt-4 md:pt-0">
      <div className="w-3/12 md:h-36 md:w-full">
        <img src={image} alt={name} className="md:rounded-t-lg object-cover w-full h-full border-white border-8 md:border-0" />
      </div>
      <div className="bg-white md:bg-grey p-6 w-9/12 md:w-auto">
        <div className="flex justify-between">
          <p className="font-semibold">{name}</p>
          <p className="font-semibold text-orange hidden md:block">{`$${price}`}</p>
        </div>
        <p className="text-green py-3 h-20 md:h-40 text-sm lg:text-base">
          {desc}
        </p>
        <p className="font-semibold md:hidden">{`$${price}`}</p>
        <div className="hidden md:block">
          <a href="" className="font-semibold">
            Order a delivery
          </a>
        </div>
      </div>
    </article>
  );
};

export default DishCard;
