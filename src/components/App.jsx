import { Catalog } from "pages/Catalog/Catalog";
import { Favorites } from "pages/Favorites/Favorites";
import Home from "pages/Home/Home";
import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "./Layout/Layout";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/favorites" element={<Favorites />} />        
        <Route path="*" element={<Navigate to="/" />} />
      </Route>
    </Routes>
  );
}

export default App;