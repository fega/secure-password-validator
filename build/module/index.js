import defaultBlackList from './blacklists/first1_000';
export const RULES = {
    MIN_LENGTH: 'MIN_LENGTH',
    MAX_LENGTH: 'MAX_LENGTH',
    BLACKLIST: 'BLACKLIST',
    DIGITS: 'DIGITS',
    LETTERS: 'LETTERS',
    UPPERCASE: 'UPPERCASE',
    LOWERCASE: 'LOWERCASE',
    SYMBOLS: 'SYMBOLS',
};
function hasDigits(password) {
    return /\d+/.test(password);
}
function hasLowercase(password) {
    return password.toUpperCase() !== password;
}
function hasUppercase(password) {
    return password.toLowerCase() !== password;
}
function hasSymbols(password) {
    return /[`~\!@#\$%\^\&\*\(\)\-_\=\+\[\{\}\]\\\|;:'",<.>\/\?€£¥₹]+/.test(password);
}
function hasLetters(password) {
    return /[a-zA-Z]+/.test(password);
}
export function validate(password, options = {}) {
    const errors = [];
    const minLength = options.minLength || 8;
    const maxLength = options.maxLength || 100;
    const blacklist = options.blackList || defaultBlackList;
    const letters = options.letters === undefined ? true : options.letters;
    const digits = options.digits;
    const uppercase = options.uppercase;
    const lowercase = options.lowercase;
    const symbols = options.symbols;
    if (minLength < 8) {
        throw new RangeError('minLength must be bigger than 8');
    }
    if (maxLength < 50) {
        throw new RangeError('maxLength must be bigger than 50');
    }
    if (password.length < minLength) {
        errors.push(RULES.MIN_LENGTH);
    }
    if (password.length > maxLength) {
        errors.push(RULES.MAX_LENGTH);
    }
    if (digits && !hasDigits(password)) {
        errors.push(RULES.DIGITS);
    }
    if (letters && !hasLetters(password)) {
        errors.push(RULES.LETTERS);
    }
    if (uppercase && !hasUppercase(password)) {
        errors.push(RULES.UPPERCASE);
    }
    if (lowercase && !hasLowercase(password)) {
        errors.push(RULES.LOWERCASE);
    }
    if (symbols && !hasSymbols(password)) {
        errors.push(RULES.SYMBOLS);
    }
    if (!errors.length && blacklist.includes(password)) {
        errors.push(RULES.BLACKLIST);
    }
    return {
        valid: !errors.length,
        errors
    };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxnQkFBZ0IsTUFBTSx5QkFBeUIsQ0FBQTtBQWdCdEQsTUFBTSxDQUFDLE1BQU0sS0FBSyxHQUFHO0lBQ25CLFVBQVUsRUFBRSxZQUFZO0lBQ3hCLFVBQVUsRUFBRSxZQUFZO0lBQ3hCLFNBQVMsRUFBRSxXQUFXO0lBQ3RCLE1BQU0sRUFBRSxRQUFRO0lBQ2hCLE9BQU8sRUFBRSxTQUFTO0lBQ2xCLFNBQVMsRUFBRSxXQUFXO0lBQ3RCLFNBQVMsRUFBRSxXQUFXO0lBQ3RCLE9BQU8sRUFBRSxTQUFTO0NBQ25CLENBQUE7QUFFRCxTQUFTLFNBQVMsQ0FBQyxRQUFnQjtJQUNqQyxPQUFPLEtBQUssQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUE7QUFDN0IsQ0FBQztBQUVELFNBQVMsWUFBWSxDQUFDLFFBQWdCO0lBQ3BDLE9BQU8sUUFBUSxDQUFDLFdBQVcsRUFBRSxLQUFJLFFBQVEsQ0FBQTtBQUMzQyxDQUFDO0FBRUQsU0FBUyxZQUFZLENBQUMsUUFBZ0I7SUFDcEMsT0FBTyxRQUFRLENBQUMsV0FBVyxFQUFFLEtBQUksUUFBUSxDQUFBO0FBQzNDLENBQUM7QUFFRCxTQUFTLFVBQVUsQ0FBQyxRQUFnQjtJQUNsQyxPQUFPLDJEQUEyRCxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQTtBQUNuRixDQUFDO0FBRUQsU0FBUyxVQUFVLENBQUMsUUFBZ0I7SUFDbEMsT0FBTyxXQUFXLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFBO0FBQ25DLENBQUM7QUFFRCxNQUFNLFVBQVUsUUFBUSxDQUFDLFFBQWdCLEVBQUUsVUFBMkIsRUFBRTtJQUN0RSxNQUFNLE1BQU0sR0FBRyxFQUFFLENBQUE7SUFDakIsTUFBTSxTQUFTLEdBQUcsT0FBTyxDQUFDLFNBQVMsSUFBSSxDQUFDLENBQUE7SUFDeEMsTUFBTSxTQUFTLEdBQUcsT0FBTyxDQUFDLFNBQVMsSUFBSSxHQUFHLENBQUE7SUFDMUMsTUFBTSxTQUFTLEdBQUcsT0FBTyxDQUFDLFNBQVMsSUFBSSxnQkFBZ0IsQ0FBQztJQUN4RCxNQUFNLE9BQU8sR0FBRyxPQUFPLENBQUMsT0FBTyxLQUFLLFNBQVMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDO0lBQ3ZFLE1BQU0sTUFBTSxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUM7SUFDOUIsTUFBTSxTQUFTLEdBQUcsT0FBTyxDQUFDLFNBQVMsQ0FBQztJQUNwQyxNQUFNLFNBQVMsR0FBRyxPQUFPLENBQUMsU0FBUyxDQUFDO0lBQ3BDLE1BQU0sT0FBTyxHQUFHLE9BQU8sQ0FBQyxPQUFPLENBQUM7SUFFaEMsSUFBSSxTQUFTLEdBQUcsQ0FBQyxFQUFFO1FBQUUsTUFBTSxJQUFJLFVBQVUsQ0FBQyxpQ0FBaUMsQ0FBQyxDQUFBO0tBQUU7SUFFOUUsSUFBSSxTQUFTLEdBQUcsRUFBRSxFQUFFO1FBQUUsTUFBTSxJQUFJLFVBQVUsQ0FBQyxrQ0FBa0MsQ0FBQyxDQUFBO0tBQUU7SUFFaEYsSUFBSSxRQUFRLENBQUMsTUFBTSxHQUFHLFNBQVMsRUFBRTtRQUFFLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxDQUFBO0tBQUU7SUFDbEUsSUFBSSxRQUFRLENBQUMsTUFBTSxHQUFHLFNBQVMsRUFBRTtRQUFFLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxDQUFBO0tBQUU7SUFDbEUsSUFBSSxNQUFNLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLEVBQUU7UUFBRSxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQTtLQUFFO0lBQ2pFLElBQUksT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxFQUFFO1FBQUUsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUE7S0FBRTtJQUNwRSxJQUFJLFNBQVMsSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsRUFBRTtRQUFFLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxDQUFBO0tBQUU7SUFDMUUsSUFBSSxTQUFTLElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLEVBQUU7UUFBRSxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQTtLQUFFO0lBQzFFLElBQUksT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxFQUFFO1FBQUUsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUE7S0FBRTtJQUNwRSxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sSUFBSSxTQUFTLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxFQUFFO1FBQUUsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLENBQUE7S0FBRTtJQUdwRixPQUFPO1FBQ0wsS0FBSyxFQUFFLENBQUMsTUFBTSxDQUFDLE1BQU07UUFDckIsTUFBTTtLQUNQLENBQUE7QUFDSCxDQUFDIn0=