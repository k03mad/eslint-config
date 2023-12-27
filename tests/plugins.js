import assert from 'node:assert/strict';
import fs from 'node:fs/promises';
import {createRequire} from 'node:module';
import {describe, it} from 'node:test';

import * as plugins from '../plugins/_index.js';

describe('plugins', () => {
    const testData = {
        pluginsIndexFileName: '_index.js',
        pluginsFolderFromRoot: './plugins',
        packageJsonFolderRel: '../package',
        packageJsonEslintPluginsIncludes: 'eslint-plugin',
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
            .filter(elem => elem.includes(testData.packageJsonEslintPluginsIncludes));
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
