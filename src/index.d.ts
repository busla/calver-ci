declare module 'calver' {
  export function inc(
    format: string,
    version: string,
    modifier: string,
  ): string;
}
