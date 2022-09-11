import arg from 'arg';
import { Params } from '../types';
import { message } from './utils';
import { spec } from './spec';

const cli = arg(spec);

if (cli['--help'] || !cli._.length) message();

export const params: Params = {
  modifier: cli._[0] || message('modifier missing'),
  release: cli['--release'] || message('--release missing'),
  identifier: cli['--identifier'] || '',
  format: cli['--format'] || 'yy.dd.mm.patch',
};
