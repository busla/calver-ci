import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { slugify } from '../slugify';

describe('slugify', () => {
  it('lowercases ASCII input', () => {
    assert.equal(slugify('Hello'), 'hello');
  });

  it('replaces spaces with hyphens', () => {
    assert.equal(slugify('hello world'), 'hello-world');
  });

  it('strips diacritics', () => {
    assert.equal(slugify('hvað er að frétta'), 'hva-er-a-fretta');
  });

  it('collapses multiple hyphens', () => {
    assert.equal(slugify('a--b---c'), 'a-b-c');
  });

  it('replaces slashes and backslashes with hyphens', () => {
    assert.equal(slugify('a/b\\c'), 'a-b-c');
  });

  it('strips non-alphanumeric non-hyphen characters', () => {
    assert.equal(slugify('hello!@#$world'), 'helloworld');
  });

  it('returns empty string for empty input', () => {
    assert.equal(slugify(''), '');
  });
});
