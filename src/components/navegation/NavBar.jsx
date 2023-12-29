import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from "@nextui-org/react";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Link as LinkScroll } from "react-scroll";
import { HOME } from "../../routes/Paths";

export const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [currentPage, setCurrentPage] = React.useState(null);
  const navigate = useNavigate();

  const handleNavbarMenuToggleClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const indexPageTop = () => {
    window.scrollTo(0, 0);
  };

  // Función para realizar el scroll al elemento con el ID dado
  const scrollToElement = (elementId) => {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Función para manejar el clic en un enlace de navegación
  const handleNavLinkClick = (page, elementId) => {
    setCurrentPage(page);
    if (page !== HOME) {
      // Si no estamos en la página principal, redirigir al Home y luego hacer scroll
      navigate(HOME);
    }

    if (elementId === 'inicio') {
      indexPageTop()
    }

    // Hacer scroll al elemento con el ID dado después de la redirección
    setTimeout(() => {
      scrollToElement(elementId);
    }, 0);
    // Cerrar el menú si está abierto
    setIsMenuOpen(false);
  };

  return (
    <>
      <div className="bg-black h-[51px] flex justify-center items-center">
        <p className="text-white text-center text-sm">
          UBICADOS EN RENGO CON ENVÍOS A TODO CHILE
        </p>
      </div>
      <Navbar maxWidth="full" isMenuOpen={isMenuOpen}>
        <NavbarContent className="sm:hidden" justify="start">
          <NavbarBrand>
            <Link to={HOME} onClick={indexPageTop}>
              <img
                width={90}
                alt="tendencias-mym-logo"
                src="../../../public/logo.png"
                loading="lazy"
              />
            </Link>
          </NavbarBrand>
        </NavbarContent>

        <NavbarContent className="gap-0 w-full flex sm:hidden" justify="end">
          <NavbarMenuToggle
            onClick={handleNavbarMenuToggleClick}
            className="sm:hidden block"
          />
        </NavbarContent>

        <NavbarContent className="hidden sm:flex" justify="start">
          <Link to={HOME}>
            <img
              width={90}
              alt="tendencias-mym-logo"
              src="../../../public/logo.png"
              loading="lazy"
              onClick={indexPageTop}
            />
          </Link>
        </NavbarContent>

        <NavbarContent className="hidden sm:flex gap-4" justify="end">
          <NavbarItem>
            <Link onClick={indexPageTop} to={HOME}>
              Inicio
            </Link>
          </NavbarItem>
          <NavbarItem>
            <LinkScroll
              to="productos"
              smooth={true}
              duration={500}
              className="cursor-pointer"
              onClick={() =>
                handleNavLinkClick(window.location.pathname, "productos")
              }
            >
              Productos
            </LinkScroll>
          </NavbarItem>
          <NavbarItem>
            <LinkScroll
              to="preguntas"
              smooth={true}
              duration={500}
              className="cursor-pointer"
              onClick={() =>
                handleNavLinkClick(window.location.pathname, "preguntas")
              }
            >
              Preguntas frecuentes
            </LinkScroll>
          </NavbarItem>
        </NavbarContent>

        <NavbarMenu>
          <NavbarMenuItem className="mt-10">
            <Link
              onClick={() =>
                handleNavLinkClick(window.location.pathname, "inicio")
              }
              to={HOME}
            >
              Inicio
            </Link>
          </NavbarMenuItem>
          <NavbarMenuItem>
            <LinkScroll
              to="productos"
              smooth={true}
              duration={500}
              offset={-400}
              className="cursor-pointer"
              onClick={() =>
                handleNavLinkClick(window.location.pathname, "productos")
              }
            >
              Productos
            </LinkScroll>
          </NavbarMenuItem>
          <NavbarMenuItem>
            <LinkScroll
              to={`preguntas`}
              smooth={true}
              duration={500}
              offset={-200}
              className="cursor-pointer"
              onClick={() =>
                handleNavLinkClick(window.location.pathname, "preguntas")
              }
            >
              Preguntas frecuentes
            </LinkScroll>
          </NavbarMenuItem>
        </NavbarMenu>
      </Navbar>
    </>
  );
};
