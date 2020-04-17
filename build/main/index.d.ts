export interface PasswordOptions {
    minLength?: number;
    maxLength?: number;
    blackList?: string[];
    digits?: boolean;
    letters?: boolean;
    uppercase?: boolean;
    lowercase?: boolean;
    symbols?: boolean;
}
export interface ValidationObject {
    valid: boolean;
    errors: string[];
}
export declare const RULES: {
    MIN_LENGTH: string;
    MAX_LENGTH: string;
    BLACKLIST: string;
    DIGITS: string;
    LETTERS: string;
    UPPERCASE: string;
    LOWERCASE: string;
    SYMBOLS: string;
};
export declare function validate(password: string, options?: PasswordOptions): ValidationObject;
