import React from "react";
import { ICommonRenderProps } from "../../types/common";
import { EElementType } from "../../types/Element/element";
import { Block } from "../Block";
import { Text } from "../Text";
const ElementTypeMapToComponent = {
  [EElementType.Block]: Block,
  [EElementType.Button]: Block,
  [EElementType.Text]: Text,
};
export const Render: React.FC<ICommonRenderProps> = ({ project }) => {
  const type = project.type;

  const C = ElementTypeMapToComponent[type];

  return <C project={project} />;
};
