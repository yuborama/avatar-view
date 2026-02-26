import { registerWebModule, NativeModule } from 'expo';

import { AvatarViewModuleEvents } from './AvatarView.types';

class AvatarViewModule extends NativeModule<AvatarViewModuleEvents> {
  PI = Math.PI;
  async setValueAsync(value: string): Promise<void> {
    this.emit('onChange', { value });
  }
  hello() {
    return 'Hello world! 👋';
  }
}

export default registerWebModule(AvatarViewModule, 'AvatarViewModule');
