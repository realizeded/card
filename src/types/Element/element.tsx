export enum EElementType {
  Block = "block",
  Text = "text",
  Button = "button",
}

export interface IElementBox {
  top: number;
  bottom: number;
  left: number;
  right: number;
  width: number | string;
  height: number | string;
}

export interface IElementStyle {
  background: string;
  textAlign: "center" | "left" | "right";
  color: string;
  letterSpacing: string;
}

export enum EAnimateKey {
  Scale = "scale",
}

export type TAnimateScale = [number, number];

export interface IElementItemType {
  id: number;
  name: string;
  type: EElementType;
  box: Partial<IElementBox>;
  style: Partial<IElementStyle>;
  children?: IElementItemType[];
  data?: {
    text?: string;
  };
  animate?: {
    [EAnimateKey.Scale]?: TAnimateScale;
  };
  event?: {
    click: string;
  };
}

declare global {
  interface Window {
    project: IElementItemType;
  }
}
