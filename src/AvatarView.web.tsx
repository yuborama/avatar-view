import * as React from 'react';

import { AvatarViewProps } from './AvatarView.types';

export default function AvatarView(props: AvatarViewProps) {
  return (
    <div>
      <iframe
        style={{ flex: 1 }}
        src={props.url}
        onLoad={() => props.onLoad({ nativeEvent: { url: props.url } })}
      />
    </div>
  );
}
