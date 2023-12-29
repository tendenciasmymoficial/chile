import { Button, Image, Select, SelectItem } from "@nextui-org/react";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { products } from "../ProductsApi/products";
import { Footer } from "../components/Footer";
import { WhatsappSVG } from "../components/WhatsappSVG";
import { ProductosRecomendados } from "../components/products/ProductosRecomendados";
import { SkeletonImage } from "../components/ui/skeleton/SkeletonImage";

export const ProductoDetalles = () => {
  const { id } = useParams();
  const [tallaSelected, setTallaSelected] = useState("");
  const [validTallaSelected, setValidTallaSelected] = useState(false);
  const navigate = useNavigate();

  const [isImageLoaded, setIsImageLoaded] = useState(true);

  // Convierte el id a número ya que los parámetros de la URL son strings
  const productId = parseInt(id, 10);

  // Busca el producto correspondiente al id en el array products
  const product = products.find((p) => p.id === productId);
  const [mensajeWhatsapp, setMensajeWhatsapp] = useState(
    "Hola como estas me interesa este producto"
  );

  const handleImageLoad = () => {
    setIsImageLoaded(false);
  };

  useEffect(() => {
    // Verifica si el producto no existe y realiza la navegación a la página 404
    if (!product) {
      navigate("/404");
    } else {
      setValidTallaSelected(false);
    }
    window.scrollTo(0, 0);
  }, [productId, product, navigate]);

  const handleSelectionTallaChange = (e) => {
    setValidTallaSelected(false);
    setTallaSelected(e.target.value);

    // Usa el estado para actualizar mensajeWhatsapp
    setMensajeWhatsapp(`${mensajeWhatsapp} en la talla ${e.target.value}`);
  };

  const handleConsultaWhatsappClick = () => {
    if (product.con_tallas === 1) {
      if (!tallaSelected) {
        setValidTallaSelected(true);
      } else {
        // Si se ha seleccionado una talla, abre el enlace de WhatsApp
        const currentUrl = window.location.href;

        // Concatena la URL al mensaje de WhatsApp con un salto de línea
        const mensajeConUrl = `${mensajeWhatsapp}\n. Producto: ${currentUrl}`;

        // Abre el enlace de WhatsApp
        const whatsappLink = `https://api.whatsapp.com/send?phone=+56958826024&text=${encodeURIComponent(
          mensajeConUrl
        )}`;

        window.open(whatsappLink, "_blank");
      }
    } else {
      console.log("entra");
      // Si se ha seleccionado una talla, abre el enlace de WhatsApp
      const currentUrl = window.location.href;

      // Concatena la URL al mensaje de WhatsApp con un salto de línea
      const mensajeConUrl = `${mensajeWhatsapp}\n. Producto: ${currentUrl}`;

      // Abre el enlace de WhatsApp
      const whatsappLink = `https://api.whatsapp.com/send?phone=+56958826024&text=${encodeURIComponent(
        mensajeConUrl
      )}`;

      window.open(whatsappLink, "_blank");
    }
  };

  return (
    <>
      {!product ? ( // Verifica si product está definido
        <></>
      ) : (
        <div className="flex flex-col justify-between min-h-screen">
          <div className="grid grid-cols-1 px-6 sm:grid-cols-2 gap-6 max-w-6xl mx-auto my-14">
            <div>
              {isImageLoaded ? <SkeletonImage /> : null }
              <Image
                isZoomed={true}
                src={product.image}
                alt={product.name}
                onLoad={handleImageLoad}
                className={`${isImageLoaded ? "hidden" : null}`}
              />
            </div>
            <div>
              {product.name !== "" ? (
                <h1 className=" text-4xl font-semibold uppercase mb-8">
                  {product.name}
                </h1>
              ) : null}
              <p className="uppercase text-xl">
                ${product.price.toLocaleString("es-CL")}
              </p>
              <div className="flex flex-wrap gap-2 items-center my-14">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 0 0-3.213-9.193 2.056 2.056 0 0 0-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 0 0-10.026 0 1.106 1.106 0 0 0-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12"
                  />
                </svg>
                <p className="text-sm max-w-sm">
                  Realizamos envíos a todo Chile a través de Starken, Correos de
                  chile y Chilexpress
                </p>
              </div>
              {/*Tallas*/}

              {product.con_tallas == 1 ? (
                <div className=" mt-20">
                  <Select
                    label="Tallas:"
                    labelPlacement="outside"
                    placeholder="Selecciona talla"
                    disabledKeys={["1"]}
                    className="max-w-xs"
                    color={validTallaSelected ? "danger" : null}
                    onChange={handleSelectionTallaChange}
                  >
                    {product.tallas.map((talla) => (
                      <SelectItem
                        key={talla.toString()}
                        value={talla.toString()}
                      >
                        {talla.toString()}
                      </SelectItem>
                    ))}
                  </Select>
                </div>
              ) : null}
              {/*BUTTON WSP */}
              <Button
                onClick={handleConsultaWhatsappClick}
                color="success"
                className="text-white w-full mt-8 mb-2"
                startContent={<WhatsappSVG />}
              >
                Consultar por Whatsapp
              </Button>
              {validTallaSelected ? (
                <p className="text-sm text-[#f31260] text-center">
                  Selecciona alguna talla
                </p>
              ) : null}
            </div>
          </div>

          <ProductosRecomendados id={id} />

          <Footer />
        </div>
      )}
    </>
  );
};
