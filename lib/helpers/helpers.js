"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.resolveAddMissingInputObjectTypeOptions = exports.addMissingInputObjectTypes = void 0;
const mongodb_helpers_1 = require("./mongodb-helpers");
const aggregate_helpers_1 = require("./aggregate-helpers");
const select_helpers_1 = require("./select-helpers");
const include_helpers_1 = require("./include-helpers");
const modelArgs_helpers_1 = require("./modelArgs-helpers");
function addMissingInputObjectTypes(inputObjectTypes, outputObjectTypes, models, modelOperations, dataSourceProvider, options) {
    // TODO: remove once Prisma fix this issue: https://github.com/prisma/prisma/issues/14900
    if (dataSourceProvider === 'mongodb') {
        (0, mongodb_helpers_1.addMissingInputObjectTypesForMongoDbRawOpsAndQueries)(modelOperations, outputObjectTypes, inputObjectTypes);
    }
    (0, aggregate_helpers_1.addMissingInputObjectTypesForAggregate)(inputObjectTypes, outputObjectTypes);
    if (options.isGenerateSelect) {
        (0, select_helpers_1.addMissingInputObjectTypesForSelect)(inputObjectTypes, outputObjectTypes, models);
        // Transformer.setIsGenerateSelect(true);
    }
    if (options.isGenerateSelect || options.isGenerateInclude) {
        (0, modelArgs_helpers_1.addMissingInputObjectTypesForModelArgs)(inputObjectTypes, models, options.isGenerateSelect, options.isGenerateInclude);
    }
    if (options.isGenerateInclude) {
        (0, include_helpers_1.addMissingInputObjectTypesForInclude)(inputObjectTypes, models, options.isGenerateSelect);
        // Transformer.setIsGenerateInclude(true);
    }
}
exports.addMissingInputObjectTypes = addMissingInputObjectTypes;
function resolveAddMissingInputObjectTypeOptions(generatorConfigOptions) {
    return {
        isGenerateSelect: generatorConfigOptions.isGenerateSelect === 'true',
        isGenerateInclude: generatorConfigOptions.isGenerateInclude === 'true',
    };
}
exports.resolveAddMissingInputObjectTypeOptions = resolveAddMissingInputObjectTypeOptions;
//# sourceMappingURL=helpers.js.map