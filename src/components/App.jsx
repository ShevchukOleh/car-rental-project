import { Catalog } from "pages/Catalog/Catalog";
import { Favorites } from "pages/Favorites/Favorites";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Catalog />}/> 
      <Route path="/catalog" element={<Catalog />}/> 
      <Route path="/favorites" element={<Favorites />}/>
    </Routes>
  );
}

export default App;