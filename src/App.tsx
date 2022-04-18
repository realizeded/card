import React, { Component } from "react";
import {
  EAnimateKey,
  EElementType,
  IElementItemType,
} from "./types/Element/element";
import { compose } from "redux";
import { Box } from "./component/Box";
import { Render } from "./component/Rnder";
import { Layout } from "./component/Layout";
interface IProps {}

interface IState {}

const project: IElementItemType = {
  id: 1,
  type: EElementType.Block,
  name: "背景",
  style: {
    background: "http://localhost:3000/bg.png",
  },
  box: {
    width: "100%",
    height: "100%",
  },
  children: [
    {
      id: 2,
      type: EElementType.Block,
      name: "标题",
      style: {
        background: "http://localhost:3000/hd.png",
      },
      box: {
        width: 335,
        height: 112,
        top: 40,
        left: 20,
      },
    },
    {
      id: 3,
      type: EElementType.Block,
      name: "礼物",
      style: {
        background: "http://localhost:3000/box.png",
      },
      box: {
        width: 260,
        height: 228,
        top: 190,
        left: 63,
      },
      children: [
        {
          id: 11,
          type: EElementType.Block,
          name: "小手",
          style: {
            background: "http://localhost:3000/pointer.png",
          },
          box: {
            width: 50,
            height: 50,
            top: 280,
            left: 204,
          },
          animate: {
            [EAnimateKey.Scale]: [1, 1.4],
          },
        },
      ],
    },
    {
      id: 4,
      type: EElementType.Text,
      name: "点开提示文字",
      style: {
        textAlign: "center",
        color: "#fff",
        letterSpacing: "2",
      },
      box: {
        width: "100%",
        top: 420,
      },
      data: {
        text: "每天有3次开盲盒机会",
      },
    },
    {
      id: 5,
      type: EElementType.Button,
      name: "立即下载",
      style: {
        background: "http://localhost:3000/download.png",
      },
      box: {
        top: 540,
        left: 46,
        width: 283,
        height: 57,
      },
      event: {
        click: "http://www.baidu.com",
      },
    },
  ],
};

window.project = project;

class App extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <Layout project={window.project} />
      </div>
    );
  }
}

export default App;
