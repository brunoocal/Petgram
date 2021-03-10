import React from "react";

import { ListOfCategories } from "./components/ListOfCategories";
import { ListOfPhotoCardsWithQuery } from "./containers/ListOfPhotoCardsWithQuery";
import { Logo } from "./components/Logo";
import { GlobalStyle } from "./styles/GlobalStyles";
import { PhotoCardWithQuery } from "./containers/PhotoCardWithQuery";

const App = () => {
  const urlParams = new window.URLSearchParams(window.location.search);
  const detailId = urlParams.get("detail");

  return (
    <>
      <GlobalStyle />
      <Logo />

      {detailId ? (
        <PhotoCardWithQuery id={detailId} />
      ) : (
        <>
          <ListOfCategories />
          <ListOfPhotoCardsWithQuery categoryId={1} />
        </>
      )}
    </>
  );
};

export default App;
