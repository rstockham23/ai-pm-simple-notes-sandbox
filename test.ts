import { strict as assert } from 'node:assert';
import { add, subtract, multiply } from './calculator.ts';
assert.equal(add(2,3),5);
assert.equal(subtract(5,2),3);
assert.equal(multiply(2,3),6);
assert.equal(multiply(-2,3),-6);
