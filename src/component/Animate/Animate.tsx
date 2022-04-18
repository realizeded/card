import React from "react";
import { ICommonRenderProps } from "../../types/common";
import { EAnimateKey } from "../../types/Element/element";
import { css } from "@emotion/css";
import $style from "./style.module.less";
const animateKeyMapToAnimation = {
  [EAnimateKey.Scale]: (from: number, to: number) => {
    return css`
      @keyframes scale {
        from {
          transform: scale(${from});
        }

        to {
          transform: scale(${to});
        }
      }

      animation-name: scale;
      animation-delay: 100ms;
      animation-direction: alternate;
      animation-duration: 0.8s;
      animation-fill-mode: backwards;
      animation-iteration-count: infinite;
    `;
  },
};
export const Animate = (C: any) => {
  return function Wrapper(props: ICommonRenderProps) {
    const project = props.project;
    const animate = project.animate;
    let animationClassNames = [];
    if (animate) {
      animationClassNames = Object.keys(animate).map((key) => {
        const animateOfKey = (animate as any)[key];
        return (animateKeyMapToAnimation as any)[key](...animateOfKey);
      });
    }

    return (
      <div className={[$style.wrapper, ...animationClassNames].join(" ")}>
        <C {...props} />
      </div>
    );
  };
};
