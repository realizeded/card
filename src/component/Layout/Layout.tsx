import React from "react";
import { compose } from "redux";
import { ICommonRenderProps } from "../../types/common";
import { IElementItemType } from "../../types/Element/element";
import { Animate } from "../Animate";
import { Box } from "../Box";
import { Render } from "../Rnder";
import { Event } from "../Event";
import $style from "./style.module.less";

const C = compose(Box, Animate, Event)(Render);

const flat = (project: IElementItemType) => {
  let queue: IElementItemType[] = [project];
  const items: IElementItemType[] = [];
  while (queue.length) {
    const current = queue.shift();
    if (!current) {
      break;
    }
    items.push(current);
    const children = current?.children || [];
    queue = queue.concat(children);
  }

  return items;
};

export const Layout: React.FC<ICommonRenderProps> = ({ project }) => {
  // 层次遍历 树扁平化成数组
  const items = flat(project);

  return (
    <div className={$style.fullPage}>
      {items.map((item) => (
        <C project={item} key={item.id} />
      ))}
    </div>
  );
};
