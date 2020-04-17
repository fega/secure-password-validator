# secure-password-validator

Validate Passwords with OWASP standards. [Check OWASP Source Here](https://owasp-top-10-proactive-controls-2018.readthedocs.io/en/latest/c6-implement-digital-identity.html#level-1-passwords).

## Motivation

Current methods to validate secure passwords, like enforce at least a number or an uppercase letter have been proven to be ineffective.

For that reason this library focus on ensuring that the passwords have not only those rules, but also enforces a minimum password length and checks it in a blacklist of the most commonly used passwords.

## Usage

```js
import {validate} from 'secure-password-validator' 

const myWeakPassword = 'password'

const result = validate(myWeakPassword)

console.log(result.valid) // boolean
console.log(result.errors) // string[], an array with broken rules
```
### Options

```javascript
const options ={ // options and its keys are optional
  // min password length, default = 8, cannot be less than 8
  minLength: number,
  // max password length, default = 100, cannot be less than 50
  maxLength: number,
  //array with blacklisted passwords default black list with first 1000 most common passwords
  blackList: string[], 
  // password Must have numbers, default = false
  digits: boolean,
  // password Must have letters, default = false
  letters: boolean,
  // password Must have uppercase letters, default = false
  uppercase: boolean,
  // password Must have lowercase letters, default = false
  lowercase: boolean,
  // password Must have symbols letters, default = false
  symbols: boolean,
};

const result = validate(myWeakPassword, options)
```
### Using another blacklist

Checking for the most common 10.000 passwords is a better option

```javascript
import {validate} from 'secure-password-validator' 
import first10000 from 'secure-password-validator/build/main/blacklists/first10_000'
const myWeakPassword = 'password'

const options ={
  blacklist: first10000
}

const result = validate(myWeakPassword, options)
```