import { Image } from "@nextui-org/react";
import React, { useState } from "react";
import { SkeletonImage } from "../ui/skeleton/SkeletonImage";
import { Link } from "react-router-dom";
import { GOTOPRODUCTO } from "../../routes/Paths";

export const CardProduct = ({
  id,
  image,
  title,
  precio,
  oferta,
  precioOferta,
}) => {
  const [isImageLoaded, setIsImageLoaded] = useState(true);

  const handleImageLoad = () => {
    setIsImageLoaded(false);
  };

  return (
    <Link to={GOTOPRODUCTO + id}>
      <article className="product-container flex justify-center group cursor-pointer">
        <figure>
          <div className="mb-4">
            {isImageLoaded ? <SkeletonImage /> : null}
            <Image
              isZoomed={true}
              loading="lazy"
              alt="Pharrell Williams Sneakers - Limited Edition"
              src={image}
              onLoad={handleImageLoad}
              className={`max-w-[345px] w-full ${
                isImageLoaded ? "hidden" : null
              }`}
            />
          </div>
          <figcaption>
            <h3 className="uppercase text-sm group-hover:underline">{title}</h3>
            <div className="flex gap-3 flex-wrap ">
              {oferta == 1 ? (
                <>
                  <p className="uppercase text-sm text-red-600">
                    ${precioOferta.toLocaleString("es-CL")}
                  </p>
                  <p className="uppercase text-sm line-through text-[#71717A]">
                    ${precio.toLocaleString("es-CL")}
                  </p>
                </>
              ) : (
                <p className="uppercase text-sm">
                  ${precio.toLocaleString("es-CL")}
                </p>
              )}
            </div>
          </figcaption>
        </figure>
      </article>
    </Link>
  );
};
