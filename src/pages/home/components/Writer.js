import React, { PureComponent } from "react";
import { WriterWrapper, WriterItem, RecommendWriter, ViewAllWriter, RecommendWriterSwitch } from "../style";

class Writer extends PureComponent {
  render() {
    return (
      <WriterWrapper>
        <RecommendWriter>
          推荐作者
          <RecommendWriterSwitch>
            <i className="iconfont spin">&#xe603;</i>
            换一批
          </RecommendWriterSwitch>
        </RecommendWriter>
        <WriterItem>

        </WriterItem>
        <ViewAllWriter>
          查看全部 &gt;
        </ViewAllWriter>
      </WriterWrapper>
    );
  }
}

export default Writer;