import React from "react";
import { ICommonRenderProps } from "../../types/common";
import { pxToRem } from "../../util";

export const Box = (C: any) => {
  return function Wrapper(props: ICommonRenderProps) {
    const box = props.project.box as any;

    const newBox = Object.keys(box).reduce((t, v) => {
      const num = Number(box[v]);
      if (!isNaN(num)) {
        t[v] = pxToRem(num);
      }
      return t;
    }, box);

    const style = {
      position: "absolute",
      ...newBox,
    };
    return (
      <div style={style as any}>
        <C {...props} />
      </div>
    );
  };
};
