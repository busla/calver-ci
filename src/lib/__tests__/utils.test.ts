import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { getNextRelease } from '../utils';

describe('getNextRelease', () => {
  it('increments a patch version', () => {
    const result = getNextRelease({
      modifier: 'patch',
      release: '22.9.10.0',
      format: 'yy.mm.dd.patch',
    });
    assert.equal(result, '22.9.10.1');
  });

  it('appends a build identifier', () => {
    const result = getNextRelease({
      modifier: 'patch',
      release: '22.9.10.0',
      identifier: 'abc123',
      format: 'yy.mm.dd.patch',
    });
    assert.equal(result, '22.9.10.1+abc123');
  });

  it('slugifies unicode in build identifier', () => {
    const result = getNextRelease({
      modifier: 'patch',
      release: '22.9.10.0',
      identifier: 'hvað er að frétta',
      format: 'yy.mm.dd.patch',
    });
    assert.equal(result, '22.9.10.1+hva-er-a-fretta');
  });

  it('creates an rc pre-release', () => {
    const result = getNextRelease({
      modifier: 'rc',
      release: '22.9.10.0',
      format: 'yy.mm.dd.patch',
    });
    assert.equal(result, '22.9.10.0-rc.0');
  });

  it('increments an existing rc version', () => {
    const result = getNextRelease({
      modifier: 'rc',
      release: '22.9.10.0-rc.0',
      format: 'yy.mm.dd.patch',
    });
    assert.equal(result, '22.9.10.0-rc.1');
  });

  it('strips existing build identifier before bumping', () => {
    const result = getNextRelease({
      modifier: 'patch',
      release: '22.9.10.0+oldbuild',
      format: 'yy.mm.dd.patch',
    });
    assert.equal(result, '22.9.10.1');
  });
});
