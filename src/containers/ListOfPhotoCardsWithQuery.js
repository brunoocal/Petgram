import React from "react";

import { gql } from "@apollo/client";
import { Query } from "@apollo/client/react/components";
import { ListOfPhotoCardsComponent } from "../components/ListOfPhotoCards";

const GET_PHOTOS_BY_CATEGORYID = gql`
  query getPhotos($categoryId: ID) {
    photos(categoryId: $categoryId) {
      id
      categoryId
      src
      likes
      liked
      userId
    }
  }
`;

export const ListOfPhotoCardsWithQuery = ({ categoryId }) => (
  <Query query={GET_PHOTOS_BY_CATEGORYID} variables={{ categoryId }}>
    {({ loading, error, data = {} }) => (
      <ListOfPhotoCardsComponent loading={loading} error={error} data={data} />
    )}
  </Query>
);
