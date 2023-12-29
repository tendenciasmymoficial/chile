import { Accordion, AccordionItem } from "@nextui-org/react";
import React from "react";

export const PreguntasFrecuentes = () => {

  return (
    <>
      <div className="my-14">
        <h2 className="text-center text-lg uppercase">Preguntas frecuentes</h2>
      </div>

      <Accordion>
        <AccordionItem
          key="1"
          aria-label="Accordion 1"
          title="¿A través de qué empresas realizan envíos?"
          subtitle="Presiona para expandir"
        >
          <p className="text-[#71717A]">
            Realizamos envíos a todo Chile a través de Starken, Correos de chile
            y Chilexpress
          </p>
        </AccordionItem>
        <AccordionItem
          key="2"
          aria-label="Accordion 2"
          subtitle="Presiona para expandir"
          title="¿Ofrecen entregas presenciales en Rengo y sus alrededores, y cuál es el costo adicional asociado?"
        >
          <p className="text-[#71717A]">
            Realizamos entregas presenciales en Rengo y alrededores por un costo
            adicional
          </p>
        </AccordionItem>
        <AccordionItem
          key="3"
          aria-label="Accordion 3"
          title="¿Es posible cambiar un producto y cuáles son las condiciones para hacerlo?"
          subtitle="Presiona para expandir"
        >
          <p className="text-[#71717A]">
            Si, Tienes un plazo de 7 días corridos desde la fecha de recepción
            del producto para hacer válido el cambio, ya sea por talla u otro
            producto siempre y cuando esté sin uso y con su respectiva caja.
          </p>
          <br />
          <p className="text-[#71717A]">
            El costo del envío de devolución es responsabilidad del comprador.
          </p>
          <br />
          <p className="text-[#71717A]">No realizamos reembolso de dinero.</p>
        </AccordionItem>

        <AccordionItem
          key="4"
          aria-label="Accordion 4"
          title="¿Que medios de pago aceptan?"
          subtitle="Presiona para expandir"
        >
          <p className="text-[#71717A]">
            Aceptamos transferencias y efectivo.
          </p>
        </AccordionItem>
      </Accordion>
    </>
  );
};
