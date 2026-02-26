import { requireNativeView } from 'expo';
import * as React from 'react';

import { AvatarViewProps } from './AvatarView.types';

const NativeView: React.ComponentType<AvatarViewProps> =
  requireNativeView('AvatarView');

export default function AvatarView(props: AvatarViewProps) {
  return <NativeView {...props} />;
}
