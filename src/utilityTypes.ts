export type PartialReplace<
    InputType,
    ReplaceTypesMap extends Partial<Record<keyof InputType, unknown>>,
> = {
    [InputTypeKey in keyof InputType]: InputTypeKey extends keyof ReplaceTypesMap
        ? ReplaceTypesMap[InputTypeKey]
        : InputType[InputTypeKey];
};
