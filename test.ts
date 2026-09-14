import { strict as assert } from 'node:assert';
import { add } from './calculator.ts';

assert.equal(add(2,3),5);