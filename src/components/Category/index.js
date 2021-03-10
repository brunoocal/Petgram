import React from "react";
import { Anchor, Image } from "./styles";
import {
  ContainerCategorySkeleton,
  CategoryImage,
  CategoryTitle,
} from "./styles";

const DEFAULT_IMAGE = "https://i.imgur.com/FHETadE.png";

export const Category = ({ cover = DEFAULT_IMAGE, path, emoji = "?" }) => (
  <Anchor href={path}>
    <Image src={cover} />
    {emoji}
  </Anchor>
);

export const CategorySkeleton = (props) => {
  return (
    <ContainerCategorySkeleton>
      <CategoryImage light={props.light} />
      <CategoryTitle light={props.light} />
    </ContainerCategorySkeleton>
  );
};
