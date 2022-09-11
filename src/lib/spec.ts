export const spec = {
  '--help': Boolean,
  '--release': String,
  '--identifier': String,
  '--format': String,
  '-h': '--help',
  '-r': '--release',
  '-i': '--identifier',
  '-f': '--format',
} as const;
