import { Button } from "@nextui-org/react";
import React, { useRef, useState } from "react";
import { Footer } from "../components/Footer";
import { PreguntasFrecuentes } from "../components/PreguntasFrecuentes";
import Product from "./Products";

export const Home = () => {
  const [isLoadignButton, setIsLoadingButton] = useState(false);
  const [visibleButton, setVisibleButton] = useState(true);
  const childRef = useRef(null);

  const deshabilitarVerMas = () => {
    setIsLoadingButton(true);
  };
  const habilitarVerMas = () => {
    setIsLoadingButton(false);
  };

  const ocultarButton = () => {
    setVisibleButton(false);
  };
  return (
    <>
      <div className="flex flex-col justify-between min-h-screen">
        <div>
          {/*PRODUCTOS */}
          <div className="px-6 max-w-6xl mx-auto" id="productos">
            <Product
              ref={childRef}
              deshabilitarVerMas={deshabilitarVerMas}
              habilitarVerMas={habilitarVerMas}
              ocultarButton={ocultarButton}
            />
          </div>

          <div
            className={`px-6 flex justify-center ${
              visibleButton ? "" : "hidden"
            }`}
          >
            <Button
              isLoading={isLoadignButton}
              onClick={() => childRef.current.childFunction(null, "Agregar")}
              className={`bg-primary text-white ${
                visibleButton ? "" : "hidden"
              }`}
            >
              Ver más
            </Button>
          </div>

          {/*PREGUNTAS FRECUENTES */}
          <div className="px-6 max-w-6xl mx-auto my-16" id="preguntas">
            <PreguntasFrecuentes />
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
};
