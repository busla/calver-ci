#!/usr/bin/env node
import arg from 'arg';
import { getNextVersion, message } from './lib';

const spec = {
  '--help': Boolean,
  '--version': String,
  '--identifier': String,
  '--format': String,
  '-h': '--help',
  '-v': '--version',
  '-i': '--identifier',
  '-f': '--format',
} as const;

const cli = arg(spec);

if (cli['--help']) message();

const modifier = cli._[0] || message('modifier missing');
const version = cli['--version'] || message('--version missing');
const identifier = cli['--identifier'] || '';
const format = cli['--format'] || 'yy.dd.mm.patch';

const nextVersion = getNextVersion(modifier, version, identifier, format);
console.log(nextVersion);
