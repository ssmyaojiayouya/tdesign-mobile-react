import React from 'react';
import { SwipeCell, Button } from 'tdesign-mobile-react';
import TDemoBlock from '../../../site/mobile/components/DemoBlock';

export default function Demo() {
  return (
    <TDemoBlock title="是否启用滑动功能">
      <SwipeCell
        style={{ height: 48 }}
        right={<Button theme="primary">编辑</Button>}
        content={<div className="content-text">是否启用滑动功能</div>}
      />
    </TDemoBlock>
  );
}
