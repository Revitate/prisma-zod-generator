import { DMMF as PrismaDMMF } from '@prisma/client/runtime';
export declare type TransformerParams = {
    enumTypes?: PrismaDMMF.SchemaEnum[];
    fields?: PrismaDMMF.SchemaArg[];
    name?: string;
    models?: PrismaDMMF.Model[];
    modelOperations?: PrismaDMMF.ModelMapping[];
    aggregateOperationSupport?: AggregateOperationSupport;
    isDefaultPrismaClientOutput?: boolean;
    prismaClientOutputPath?: string;
};
export declare type AggregateOperationSupport = {
    [model: string]: {
        count?: boolean;
        min?: boolean;
        max?: boolean;
        sum?: boolean;
        avg?: boolean;
    };
};
