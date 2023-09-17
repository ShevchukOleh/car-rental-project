import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { Header, StyledLink } from "./Layout.styled";

const Layout = () => {
  return (
    <>
      <Header>
        <ul style={{display: 'flex', gap: '50px'}}>
          <li>
            <StyledLink to="/">Home</StyledLink>
          </li>
          <li>
            <StyledLink to="catalog">Catalog</StyledLink>
          </li>
          <li>
            <StyledLink to="favorites">Favorites</StyledLink>
          </li>
        </ul>
      </Header>
      <main>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
};

export default Layout;