import React from "react";

import { MdFavoriteBorder, MdFavorite } from "react-icons/md";

import { Button, LikeContainer, Likes } from "./styles";

export const FavButton = ({ liked, likes, onClick }) => {
  const Icon = liked ? MdFavorite : MdFavoriteBorder;

  return (
    <>
      <Button onClick={onClick}>
        <Icon size="36px" />
      </Button>
      <LikeContainer>
        <Likes>{likes}</Likes>
      </LikeContainer>
    </>
  );
};
