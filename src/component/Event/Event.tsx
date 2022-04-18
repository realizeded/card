import React from "react";
import { ICommonRenderProps } from "../../types/common";
import $style from "./style.module.less";

export const Event = (C: any) => {
  return function Wrapper(props: ICommonRenderProps) {
    const project = props.project;

    const clickUrl = project.event?.click;

    const handleClick = () => {
      if (clickUrl) {
        location.href = clickUrl;
      }
    };
    return (
      <div className={$style.wrapper} onClick={handleClick}>
        <C {...props} />
      </div>
    );
  };
};
