# TS Iterate

Rust like iterators for Typescript.

## Usage

Create an iterator:
```typescript
const iterator = toIter([1, 2, 3, 4, 5]);
```

Manipulate an iterator:
```typescript
const result = iterator
  .map((i) => i ** 2)
  .filter((i) => i % 2 === 0)
  .take(2)
  .collect();

console.log(result); // [4, 16]

const iterator2 = toIter([1, 2]);
const iterator3 = iterator.chain(iterator2);
// ^? Iterator([1, 2, 3, 4]);
```

Inspect an iterator:
```typescript
const iterator4 = toIter([1, 2, 3]);

console.log(iterator4.nth(4).unwrapOrThrow());
console.log(iterator4.find((i) => i === 420).unwrapOrDefault(-1));
console.log(iterator4.find((i) => i === 1).unwrapOrDefault(-1));
console.log('All one?', iter.all((i) => i == 1)) // false
console.log('Has at least one?', iter.any((i) => i == 1)) // true
```
