import { findTotalDistance } from '../index';
import { describe, expect, test } from '@jest/globals';


test('example', () => {
    expect(findTotalDistance('./src/tests/example.txt')).toBe(11);
});

test('part1', () => {
    expect(findTotalDistance('./src/tests/part1.txt')).toBe(1603498);
});