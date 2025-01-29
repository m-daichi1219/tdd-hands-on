import { describe, it, expect } from 'vitest';
import { sum } from '../src/example';

describe('sum', () => {
  it('adds two numbers', () => {
    expect(sum(1, 2)).toBe(3);
  });
});
