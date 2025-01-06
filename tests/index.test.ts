import { describe, it, expect } from 'vitest';

describe('Math tests', () => {
  it('should add numbers correctly', () => {
    const sum = 2 + 3;
    expect(sum).toBe(5);
  });

  it('should subtract numbers correctly', () => {
    const difference = 10 - 3;
    expect(difference).toBe(7);
  });
});