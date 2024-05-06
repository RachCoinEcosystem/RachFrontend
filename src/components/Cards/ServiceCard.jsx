import React from "react";
import Title from "../Title";

const ServiceCard = ({ title, subtitle, image }) => {
  return (
    <div className="relative h-full p-4 rounded-2xl overflow-hidden border border-transparent">
      <div
        className="absolute inset-0 rounded-2xl border border-transparent"
        style={{
          background:
            "linear-gradient(120deg, #5f5f61, transparent); -webkit-mask: linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0); -webkit-mask-composite: xor; mask-composite: exclude;",
        }}
      ></div>
      <div className="flex flex-col h-full space-y-1">
        <Title size={{ xs: "text-lg", sm: "text-xl" }}>{title}</Title>
        <p className="text-secondary">{subtitle}</p>
        <img
          src={image}
          className="h-52 w-full object-contain"
          alt={title}
        />
          Learn more
      </div>
    </div>
  );
};

export default ServiceCard;
