/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

declare module '@utils/path' {
  export function getPath(path: string): string;
}
