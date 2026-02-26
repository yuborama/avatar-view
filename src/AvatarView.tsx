import { requireNativeView } from "expo";
import * as React from "react";

import { AvatarViewProps } from "./AvatarView.types";

const NativeView: React.ComponentType<AvatarViewProps> =
  requireNativeView("AvatarView");

export default function AvatarView(props: AvatarViewProps) {
  const size = props.size ?? 120;
  return (
    <NativeView
      {...props}
      style={[{ width: size, height: size }, props.style]}
    />
  );
}