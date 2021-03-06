import { FbFormFieldPatternValidatorPlugin } from "@webiny/api-form-builder/types";

export default {
    type: "form-field-validator-pattern",
    name: "form-field-validator-pattern-upper-case",
    pattern: {
        name: "upperCase",
        regex: `^([A-Z]*)$`,
        flags: ""
    }
} as FbFormFieldPatternValidatorPlugin;
