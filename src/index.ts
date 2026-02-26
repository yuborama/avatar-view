// Reexport the native module. On web, it will be resolved to AvatarViewModule.web.ts
// and on native platforms to AvatarViewModule.ts
export { default } from './AvatarViewModule';
export { default as AvatarView } from './AvatarView';
export * from  './AvatarView.types';
