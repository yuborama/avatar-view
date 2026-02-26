import { NativeModule, requireNativeModule } from 'expo';

import { AvatarViewModuleEvents } from './AvatarView.types';

declare class AvatarViewModule extends NativeModule<AvatarViewModuleEvents> {
  PI: number;
  hello(): string;
  setValueAsync(value: string): Promise<void>;
}

// This call loads the native module object from the JSI.
export default requireNativeModule<AvatarViewModule>('AvatarView');
