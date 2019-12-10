'use strict';

const path = require('path');

let currentModule = module;

while (!/[/\\]eslint[/\\]lib[/\\]cli-engine[/\\]config-array-factory\.js/i.test(currentModule.filename)) {
    if (!currentModule.parent) {
        throw new Error('Failed to patch ESLint because the calling module was not recognized');
    }

    currentModule = currentModule.parent;
}

const eslintFolder = path.join(path.dirname(currentModule.filename), '../..');

const configArrayFactoryPath = path.join(eslintFolder, 'lib/cli-engine/config-array-factory');
const {ConfigArrayFactory} = require(configArrayFactoryPath);

if (!ConfigArrayFactory.__patched) {
    ConfigArrayFactory.__patched = true;

    const moduleResolverPath = path.join(eslintFolder, 'lib/shared/relative-module-resolver');
    const ModuleResolver = require(moduleResolverPath);

    const originalLoadPlugin = ConfigArrayFactory.prototype._loadPlugin;

    ConfigArrayFactory.prototype._loadPlugin = function(name, importerPath, importerName) {
        const originalResolve = ModuleResolver.resolve;

        try {
            ModuleResolver.resolve = function(moduleName, relativeToPath) {
                return originalResolve.call(this, moduleName, importerPath);
            };

            return Reflect.apply(originalLoadPlugin, this, arguments);
        } finally {
            ModuleResolver.resolve = originalResolve;
        }
    };
}
