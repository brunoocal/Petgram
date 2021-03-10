import React, { useRef } from "react";

import { ContainerPhotoCardSkeleton, PhotoCardImageSkeleton } from "./styles";

const DEFAULT_IMAGE =
  "https://res.cloudinary.com/midudev/image/upload/w_300/q_80/v1560262103/dogs.png";

import {
  Article,
  ImgWrapper,
  Image,
  Button,
  LikeContainer,
  Likes,
} from "./styles";

import { MdFavoriteBorder, MdFavorite } from "react-icons/md";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import { useNearScreen } from "../../hooks/useNearScreen";

export const PhotoCard = ({ id, likes = 0, src = DEFAULT_IMAGE }) => {
  const ref = useRef(null);
  const [show, element] = useNearScreen();
  const key = `like-${id}`;
  const [liked, setLiked] = useLocalStorage(key, false);

  const Icon = liked ? MdFavorite : MdFavoriteBorder;

  return (
    <Article ref={element}>
      {show ? (
        <>
          <a href={`/detail/${id}`}>
            <ImgWrapper>
              <Image src={src} />
            </ImgWrapper>
          </a>

          <Button onClick={() => setLiked(!liked)}>
            <Icon size="36px" />
          </Button>
          <LikeContainer>
            <Likes>{likes}</Likes>
          </LikeContainer>
        </>
      ) : null}
    </Article>
  );
};

export const PhotoCardSkeleton = (props) => {
  return (
    <ContainerPhotoCardSkeleton>
      <PhotoCardImageSkeleton light={props.light} />
    </ContainerPhotoCardSkeleton>
  );
};
