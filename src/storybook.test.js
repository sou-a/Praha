/* eslint-disable no-undef */
import path from 'path';
import initStoryshots from '@storybook/addon-storyshots';
import { imageSnapshot } from '@storybook/addon-storyshots-puppeteer';

initStoryshots({
  suite: 'Image storyshots',
  test: imageSnapshot({
    storybookUrl: `file://${path.resolve(__dirname, '..', 'storybook-static')}`, // Storybookをビルド出力先を指定
  }),
  configPath: path.resolve(__dirname, '..', '.storybook'),
});
initStoryshots();
