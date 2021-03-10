import React from "react";
import { List } from "./styles";
import { useQuery, gql } from "@apollo/client";
//COMPONENTS
import { PhotoCard, PhotoCardSkeleton } from "../PhotoCard";

const withPhotos = gql`
  query getPhotos {
    photos {
      id
      categoryId
      src
      likes
      userId
      liked
    }
  }
`;

export const ListOfPhotoCards = () => {
  const { loading, error, data } = useQuery(withPhotos);

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
