![Build Status](https://travis-ci.org/xpepermint/typeablejs.svg?branch=master)&nbsp;[![NPM Version](https://badge.fury.io/js/approved.svg)](https://badge.fury.io/js/approved)&nbsp;[![Dependency Status](https://gemnasium.com/xpepermint/typeablejs.svg)](https://gemnasium.com/xpepermint/typeablejs)

# typeable.js

> A library for checking and casting types.

## Install

```
$ npm install --save typeable
```

## Example

```js
import {cast} from 'typeable';

cast(100, 'string'); // => '100'
cast('true', 'boolean'); // => true
cast('10.13', 'integer'); // => 10
cast('10.13', 'float'); // => 10.13
cast(1229380112300, 'date'); // => Date(2008-12-15T22:28:32.300Z)
cast('John', 'array'); // => ['John']
cast('John', '[]'); // => ['John']
cast(100, '[string]'); // => ['100']
cast([100], '[string]'); // => ['100']
cast('true', '[boolean]'); // => [true]
cast(['true'], '[boolean]'); // => [true]
cast('10.13', '[integer]'); // => [10]
cast(['10.13'], '[integer]'); // => [10]
cast('10.13', '[float]'); // => [10.13]
cast(['10.13'], '[float]'); // => [10.13]
cast(1229380112300, '[date]'); // => [Date(2008-12-15T22:28:32.300Z)]
cast([1229380112300], '[date]'); // => [Date(2008-12-15T22:28:32.300Z)]
```

## API

**isUndefined(value)**
> Returns `true` if the `value` is undefined.

**isNull(value)**
> Returns `true` if the `value` is null.

**isNaN(value)**
> Returns `true` if the `value` is a NaN number.

**isFinite(value)**
> Returns `true` if the `value` is a finite number.

**isInfinite(value)**
> Returns `true` if the `value` is a infinite number.

**isValue(value)**
> Returns `true` if the `value` is some sort of value.

**isString(value)**
> Returns `true` if the `value` is a string value.

**isBoolean(value)**
> Returns `true` if the `value` is a boolean value.

**isNumber(value)**
> Returns `true` if the `value` is a number.

**isInteger(value)**
> Returns `true` if the `value` is an integer number.

**isFloat(value)**
> Returns `true` if the `value` is a float number.

**isDate(value)**
> Returns `true` if the `value` is a date object.

**isObject(value)**
> Returns `true` if the `value` is an object (an object with keys).

**isArray(value)**
> Returns `true` if the `value` is an array.

**isAbsent(value)**
> Returns `true` if the `value` represents an empty value.

**isPresent(value)**
> Returns `true` if the `value` represents a present value.

**toString(value)**
> Converts the `value` to string.

**toBoolean(value)**
> Converts the `value` to boolean.

**toInteger(value)**
> Converts the `value` to integer.

**toFloat(value)**
> Converts the `value` to float.

**toDate(value)**
> Converts the `value` to date.

**toArray(value)**
> Converts the `value` to array.

**cast(value, type)**
> Converts the `value` to the specified `type`.

## License (MIT)

```
Copyright (c) 2016 Kristijan Sedlak <xpepermint@gmail.com>

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
```
