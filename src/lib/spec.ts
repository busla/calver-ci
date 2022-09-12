export const spec = {
  '--help': Boolean,
  '--release': String,
  '--identifier': String,
  '--format': String,
  '--locale': String,
  '-h': '--help',
  '-r': '--release',
  '-i': '--identifier',
  '-f': '--format',
  '-l': '--locale',
} as const;
