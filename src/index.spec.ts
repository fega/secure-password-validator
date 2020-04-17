// tslint:disable:no-expression-statement
import test from 'ava';
import { validate, RULES } from '.';

test('validate(,{minLength: invalid})', t => {
  t.throws(() => validate("", { minLength: 5 }), /minLength must be bigger than 8/)
});

test('validate(,{maxLength: invalid})', t => {
  t.throws(() => validate("", { maxLength: 30 }), /maxLength must be bigger than 50/)
});

test('validate(minLength)', t => {
  t.deepEqual(validate("a"), { valid: false, errors: [RULES.MIN_LENGTH] })
})

test('validate(maxLength)', t => {
  t.deepEqual(validate(new Array(1000).fill("a").join()), { valid: false, errors: [RULES.MAX_LENGTH] })
})


test('validate(blacklist)', t => {
  t.deepEqual(validate("qwertyuiop"), { valid: false, errors: [RULES.BLACKLIST] })
})

test('validate(pass, {letters: true})', t => {
  t.deepEqual(validate("123432112412124421124"), { valid: false, errors: [RULES.LETTERS] })
})


test('validate(pass, {digits: true})', t => {
  t.deepEqual(validate("aaaaaaaaaaaa", { digits: true }), { valid: false, errors: [RULES.DIGITS] })
});

test('validate(pass, {uppercase: true})', t => {
  t.deepEqual(validate("aaaaaaaaaaaa", { uppercase: true }), { valid: false, errors: [RULES.UPPERCASE] })
});

test('validate(pass, {lowercase: true})', t => {
  t.deepEqual(validate("AAAAAAAAAAAAAA", { lowercase: true }), { valid: false, errors: [RULES.LOWERCASE] })
});

test('validate(pass, {symbols: true})', t => {
  t.deepEqual(validate("AAAAAAAAAAAAAA", { symbols: true }), { valid: false, errors: [RULES.SYMBOLS] })
});

test('validate(invalid, {all in true})', t => {
  t.deepEqual(validate("AAA", {
    symbols: true,
    digits: true,
    letters: true,
    uppercase: true,
    lowercase: true,
  }), { valid: false, errors: [RULES.MIN_LENGTH, RULES.DIGITS, RULES.LOWERCASE, RULES.SYMBOLS] })
})

test('validate(valid, {all in true})', t => {
  t.deepEqual(validate("AAAaaaa###123@@", {
    symbols: true,
    digits: true,
    letters: true,
    uppercase: true,
    lowercase: true,
  }), { valid: true, errors: [] })
})