import assert from 'node:assert/strict';
import fs from 'node:fs/promises';
import {createRequire} from 'node:module';
import {describe, it} from 'node:test';

import * as plugins from '../config/plugins/_index.js';

describe('plugins', () => {
    const testData = {
        packageJsonEslintPluginsRe: /eslint-plugin|@eslint\//,
        packageJsonFolderRel: '../package',
        pluginsFolderFromRoot: './config/plugins',
        pluginsIndexFileName: '_index.js',
    };

    let eslintPlugins, pluginFolderFilesWithoutIndex, pluginsExportedFromIndex;

    it('should get plugins exported from index', () => {
        pluginsExportedFromIndex = Object.keys(plugins);
    });

    it('should get plugins folder files', async () => {
        const pluginFolderFiles = await fs.readdir(testData.pluginsFolderFromRoot);

        pluginFolderFilesWithoutIndex = pluginFolderFiles
            .filter(elem => elem !== testData.pluginsIndexFileName);
    });

    it('should get eslint plugins dependencies', () => {
        const require = createRequire(import.meta.url);
        const {dependencies} = require(testData.packageJsonFolderRel);

        eslintPlugins = Object.keys(dependencies)
            .filter(elem => testData.packageJsonEslintPluginsRe.test(elem));
    });

    it('should have same plugins count at index file and plugins folder', () => {
        assert.equal(
            pluginsExportedFromIndex.length,
            pluginFolderFilesWithoutIndex.length,
        );
    });

    it('should have same plugins count at index file and dependencies', () => {
        assert.equal(
            pluginsExportedFromIndex.length,
            eslintPlugins.length,
        );
    });
});
