import React from "react";

import { PhotoCard, PhotoCardSkeleton } from "../components/PhotoCard";

import { gql } from "@apollo/client";

import { Query } from "@apollo/client/react/components";

const GET_SINGLE_PHOTO = gql`
  query getSinglePhoto($id: ID!) {
    photo(id: $id) {
      id
      categoryId
      src
      likes
      userId
      liked
    }
  }
`;

export const PhotoCardWithQuery = ({ id }) => {
  return (
    <Query query={GET_SINGLE_PHOTO} variables={{ id }}>
      {({ loading, error, data = {} }) => {
        if (loading) return <PhotoCardSkeleton />;
        const { photo = {} } = data;
        return <PhotoCard {...photo} />;
      }}
    </Query>
  );
};
