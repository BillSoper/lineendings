/**
 * End of line enums, strings and go-betweens.
 */
export declare const LF_CHARS = "\n";
export declare const CRLF_CHARS = "\r\n";
export declare const NEL_CHARS = "\u0085";
export declare const LF_TYPE_VALUE = 0;
export declare const CRLF_TYPE_VALUE = 1;
export declare const NEL_TYPE_VALUE = 2;
export declare const UNKNOWN_TYPE_VALUE = 3;
export declare const EndOfLineStringArray: string[];
export declare const enum EndOfLineType {
    /**
     * Use line feed (\n) as the end of line character.
     * baically *nix style.
     */
    LF = 0,
    /**
     * Use carriage return and line feed (\r\n) as the end of line character.
     * basically windows style.
     */
    CRLF = 1,
    /**
     * Use NEL as end of line character.
     * basically z/OS (in some EBCDIC code page) unix files e.g. mounted via SSHFS
     */
    NEL = 2,
    /**
     * Lastly, for defaulting something we did not recognize.
     */
    UNKNOWN = 3
}
export declare function EndOfLineTypeToString(eolEnum: EndOfLineType): string;
export declare function EndOfLineStringToType(eolString: String): EndOfLineType;
