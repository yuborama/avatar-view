import type { StyleProp, ViewStyle } from 'react-native';

export type AvatarViewModuleEvents = {
  onChange: (params: ChangeEventPayload) => void;
};

export type ChangeEventPayload = {
  value: string;
};

export type AvatarViewProps = {
  name: string;
  size?: number;
  style?: StyleProp<ViewStyle>;
};