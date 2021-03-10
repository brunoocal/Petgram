import React, { useRef } from "react";

import { ContainerPhotoCardSkeleton, PhotoCardImageSkeleton } from "./styles";
import { FavButton } from "../FavButton";
import { ToggleLikeMutation } from "../../containers/ToggleLikeMutation";

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

import { useLocalStorage } from "../../hooks/useLocalStorage";
import { useNearScreen } from "../../hooks/useNearScreen";

export const PhotoCard = ({ id, likes = 0, src = DEFAULT_IMAGE }) => {
  const ref = useRef(null);
  const [show, element] = useNearScreen();
  const key = `like-${id}`;
  const [liked, setLiked] = useLocalStorage(key, false);

  return (
    <Article ref={element}>
      {show ? (
        <>
          <a href={`/?detail=${id}`}>
            <ImgWrapper>
              <Image src={src} />
            </ImgWrapper>
          </a>

          <ToggleLikeMutation>
            {(toggleLike) => {
              const handleFavClick = () => {
                !liked && toggleLike({ variables: { input: { id } } });
                setLiked(!liked);
              };

              return (
                <FavButton
                  liked={liked}
                  likes={likes}
                  onClick={handleFavClick}
                />
              );
            }}
          </ToggleLikeMutation>
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
