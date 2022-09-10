import calver from 'calver';
import { usage } from '.';

const message = (msg?: string): never => {
  console.error(usage);

  if (msg) {
    console.error(`[ERROR]: ${msg}`);
  }
  process.exit(2); // ignore stack trace when exiting
};

const finalizeVersion = (version: string, buildId: string): string => {
  return buildId !== '' ? `${version}+${buildId}` : version;
};

const getNextVersion = (
  modifier: string,
  version: string,
  buildId = '',
  format = 'yy.mm.dd.patch',
): string | never => {
  try {
    const nextVersion = calver.inc(format, `${version}`, modifier);
    return finalizeVersion(nextVersion, buildId);
  } catch (e) {
    return message(`${e.message}, ${version}`);
  }
};

export { getNextVersion, message };
