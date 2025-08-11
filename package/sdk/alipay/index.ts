import { downloadCdn } from 'mo-front-end-util';
import { URL_PATH } from './const';
import { register } from './register';

export async function init() {
  await downloadCdn(URL_PATH);

  register();
}
