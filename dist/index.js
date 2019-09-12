"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * End of line enums, strings and go-betweens.
 */
exports.LF_CHARS = '\n';
exports.CRLF_CHARS = '\r\n';
exports.NEL_CHARS = '\u0085';
// If using javascript , the enum values don't seem to be genned by Typescript.
// Probably I'm doing this wrong!
// In meantime, creating matching useable constants for Javascript native coders.
exports.LF_TYPE_VALUE = 0;
exports.CRLF_TYPE_VALUE = 1;
exports.NEL_TYPE_VALUE = 2;
exports.UNKNOWN_TYPE_VALUE = 3;
// Note default for unknown is LF
exports.EndOfLineStringArray = [exports.LF_CHARS, exports.CRLF_CHARS, exports.NEL_CHARS, exports.LF_CHARS];
function EndOfLineTypeToString(eolEnum) {
    return exports.EndOfLineStringArray[eolEnum];
}
exports.EndOfLineTypeToString = EndOfLineTypeToString;
function EndOfLineStringToType(eolString) {
    // Unrolled loop:
    if (eolString === EndOfLineTypeToString(0 /* LF */)) {
        return 0 /* LF */;
    }
    if (eolString === EndOfLineTypeToString(1 /* CRLF */)) {
        return 1 /* CRLF */;
    }
    if (eolString === EndOfLineTypeToString(2 /* NEL */)) {
        return 2 /* NEL */;
    }
    return 3 /* UNKNOWN */;
}
exports.EndOfLineStringToType = EndOfLineStringToType;
