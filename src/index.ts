import defaultBlackList from './blacklists/first1_000'
export interface PasswordOptions {
  minLength?: number,
  maxLength?: number,
  blackList?: string[]
  digits?: boolean,
  letters?: boolean,
  uppercase?: boolean,
  lowercase?: boolean,
  symbols?: boolean,
}
export interface ValidationObject {
  valid: boolean,
  errors: string[]
}

export const RULES = {
  MIN_LENGTH: 'MIN_LENGTH',
  MAX_LENGTH: 'MAX_LENGTH',
  BLACKLIST: 'BLACKLIST',
  DIGITS: 'DIGITS',
  LETTERS: 'LETTERS',
  UPPERCASE: 'UPPERCASE',
  LOWERCASE: 'LOWERCASE',
  SYMBOLS: 'SYMBOLS',
}

function hasDigits(password: string) {
  return /\d+/.test(password)
}

function hasLowercase(password: string) {
  return password.toUpperCase()!== password
}

function hasUppercase(password: string) {
  return password.toLowerCase()!== password
}

function hasSymbols(password: string) {
  return /[`~\!@#\$%\^\&\*\(\)\-_\=\+\[\{\}\]\\\|;:'",<.>\/\?€£¥₹]+/.test(password)
}

function hasLetters(password: string) {
  return /[a-zA-Z]+/.test(password)
}

export function validate(password: string, options: PasswordOptions = {}): ValidationObject {
  const errors = []
  const minLength = options.minLength || 8
  const maxLength = options.maxLength || 100
  const blacklist = options.blackList || defaultBlackList;
  const letters = options.letters === undefined ? true : options.letters;
  const digits = options.digits;
  const uppercase = options.uppercase;
  const lowercase = options.lowercase;
  const symbols = options.symbols;

  if (minLength < 8) throw new RangeError('minLength must be bigger than 8')

  if (maxLength < 50) throw new RangeError('maxLength must be bigger than 50')

  if (password.length < minLength) errors.push(RULES.MIN_LENGTH)
  if (password.length > maxLength) errors.push(RULES.MAX_LENGTH)
  if (digits && !hasDigits(password)) errors.push(RULES.DIGITS)
  if (letters && !hasLetters(password)) errors.push(RULES.LETTERS)
  if (uppercase && !hasUppercase(password)) errors.push(RULES.UPPERCASE)
  if (lowercase && !hasLowercase(password)) errors.push(RULES.LOWERCASE)
  if (symbols && !hasSymbols(password)) errors.push(RULES.SYMBOLS)
  if (!errors.length && blacklist.includes(password)) errors.push(RULES.BLACKLIST)


  return {
    valid: !errors.length,
    errors
  }
}
