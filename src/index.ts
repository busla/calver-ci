#!/usr/bin/env node
import { getNextRelease } from './lib';
import { params } from './lib';

const release = getNextRelease(params);
console.log(release);
