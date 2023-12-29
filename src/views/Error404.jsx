import React from "react";
import { Link } from "react-router-dom";
import { Footer } from "../components/Footer";
import { HOME } from "../routes/Paths";

export const Error404 = () => {
  return (
    <>
      <div className="flex flex-col justify-between min-h-screen">
        <div className="my-14">
          <h4 className="text-center text-6xl font-bold mb-2">404</h4>
          <h2 className="text-center text-lg uppercase">
            Pagina no encontrada
          </h2>

          <div className="flex justify-center my-16 hover:underline">
            <Link to={HOME} className="text-blue-500 flex gap-1">
              Ir al sitio principal{" "}
              <svg
                aria-hidden="true"
                fill="none"
                focusable="false"
                shape-rendering="geometricPrecision"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                viewBox="0 0 24 24"
                className="flex mx-1 text-current self-center w-5 h-5"
              >
                <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"></path>
                <path d="M15 3h6v6"></path>
                <path d="M10 14L21 3"></path>
              </svg>{" "}
            </Link>
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
};
