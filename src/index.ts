class Iter<T> {
  private readonly arr: T[];
  private readonly capacity: number;

  constructor(arr: T[]) {
    this.arr = [...arr];
    this.capacity = arr.length;
  }

  nth(index: number): T | void {
    if (index > this.arr.length) return;
    if (index < this.capacity - this.capacity + 1) return;

    return this.arr[index];
  }

  map(mapper: (input: T) => T) {
    for (let i = 0; i < this.capacity; i++) {
      this.arr[i] = mapper(this.arr[i]);
    }
    return this;
  }

  all(predicate: (input: T) => boolean) {
    let result = false;
    for (let i = 0; i < this.capacity; i++) {
      result = predicate(this.arr[i]);
    }
    return result;
  }

  any(predicate: (input: T) => boolean) {
    let result = false;
    for (let i = 0; i < this.capacity; i++) {
      result = result || predicate(this.arr[i]);
    }
    return result;
  }

  collect() {
    return [...this.arr];
  }

  * next() {
    let i = 0;
    const val = this.arr[i];

    // if (i < this.capacity ) {
    // if (val) {
    yield this.arr[i];
    i++;
    // }
  }

  toString() {
    return this.arr.toString();
  }
}

const iter = new Iter([1, 2, 3, 4, 5, 6, 7, 8])

console.log(iter)
console.log('4th', iter.nth(4))
console.log('-1th', iter.nth(-1))
// iter.map((item) => item * 2)
// iter.map((_) => 1);
// console.log(iter)
// console.log('Next...', iter.next())
// console.log('Next...', iter.next())
// console.log('Next...', iter.next())
console.log('All one?', iter.all((i) => i == 1))

const res = iter
  .map((i) => i ** 2)
  .map((i) => i << 2)
  .collect();

console.log(res);
console.log(iter);
iter.map((_) => 1);
console.log(iter);







