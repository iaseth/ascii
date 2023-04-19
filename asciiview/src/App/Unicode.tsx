import unicodeBlocksJson from '../../../crawler/unicodeblocks.json';



interface ScriptType {
	name: string,
	charCount: number
}

interface UnicodeBlockType {
	plane: string,
	blockRange: string,
	blockStart: string,
	blockEnd: string,

	blockStartInt: number,
	blockEndInt: number,

	blockName: string,
	blockPageURL: string,

	codePoints: number,
	assignedCharacters: number,
	scripts: ScriptType[]
}

export const unicodeBlocks: UnicodeBlockType[] = unicodeBlocksJson.unicodeBlocks;
