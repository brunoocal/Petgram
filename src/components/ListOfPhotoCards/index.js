import React from "react";
import { List } from "./styles";
import { PhotoCard, PhotoCardSkeleton } from "../PhotoCard";

export const ListOfPhotoCardsComponent = ({ loading, error, data }) => {
  if (error) {
    return <h2>Internal Server Error</h2>;
  }

  return (
    <List>
      {loading
        ? Array(6)
            .fill(0)
            .map((skeleton) => {
              return <PhotoCardSkeleton />;
            })
        : data.photos.map((photo) => <PhotoCard key={photo.id} {...photo} />)}
    </List>
  );
};
