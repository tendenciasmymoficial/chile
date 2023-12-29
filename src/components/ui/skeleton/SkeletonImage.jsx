import React from "react";

export const SkeletonImage = () => {
  return (
    <div
      className="space-y-8 animate-pulse rounded-[14px]  md:space-y-0 md:space-x-8 rtl:space-x
    -reverse md:flex md:items-center"
    >
      <img
        src="https://cdn.discordapp.com/attachments/826881546107486218/1189672396442054696/SkeletonImage.png?ex=659f03c2&is=658c8ec2&hm=7dac0b0d5a379ea96987df5885908d8c5111b686848104f4c859dfb3acc03d15&"
        alt="skeleton-image"
        className="w-full rounded-[14px]"
      />
    </div>
  );
};
