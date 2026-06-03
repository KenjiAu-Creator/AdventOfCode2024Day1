import { findSimilarity } from '../index';
import { describe, expect, test } from '@jest/globals';


test('example', () => {
    expect(findSimilarity('./src/tests/example.txt')).toBe(31);
});

test('part2', () => {
    expect(findSimilarity('./src/tests/part1.txt')).toBe(25574739);
});