{/*Estilos */}
import { NextUIProvider } from "@nextui-org/react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { NavBar } from "./components/navegation/NavBar";
import { HOME, VERPRODUCTO } from "./routes/Paths";
import { Error404 } from "./views/Error404";
import { Home } from "./views/Home";
import { ProductoDetalles } from "./views/ProductoDetalles";
{/*Routes */}
{/*Components */}

function App() {
  return (
    <>
      <NextUIProvider>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path={HOME} element={<Home />} />
            <Route path={VERPRODUCTO} element={<ProductoDetalles />} />
            <Route path="*" element={<Error404 />} />
          </Routes>
        </BrowserRouter>
      </NextUIProvider>
    </>
  );
}

export default App;
