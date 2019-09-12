/**
 * End of line enums, strings and go-betweens.
 */
export const LF_CHARS = '\n';
export const CRLF_CHARS = '\r\n';
export const NEL_CHARS = '\u0085';
// If using javascript , the enum values don't seem to be genned by Typescript.
// Probably I'm doing this wrong!
// In meantime, creating matching useable constants for Javascript native coders.
export const LF_TYPE_VALUE = 0;
export const CRLF_TYPE_VALUE = 1;
export const NEL_TYPE_VALUE = 2;
export const UNKNOWN_TYPE_VALUE = 3;
// Note default for unknown is LF
export const EndOfLineStringArray: string[] = [LF_CHARS, CRLF_CHARS, NEL_CHARS, LF_CHARS];
export const enum EndOfLineType {
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
export function EndOfLineTypeToString(eolEnum: EndOfLineType): string {

	return EndOfLineStringArray[eolEnum];
}

export function EndOfLineStringToType(eolString: String): EndOfLineType {
	
	// Unrolled loop:
	if (eolString === EndOfLineTypeToString(EndOfLineType.LF)) {
		return EndOfLineType.LF;
	}
	if (eolString === EndOfLineTypeToString(EndOfLineType.CRLF)) {
		return EndOfLineType.CRLF;
	}
	if (eolString === EndOfLineTypeToString(EndOfLineType.NEL)) {
		return EndOfLineType.NEL;
	}
	
	return EndOfLineType.UNKNOWN;

}

