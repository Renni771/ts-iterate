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
    const arr_copy = this.arr;
    for (let i = 0; i < this.capacity; i++) {
      arr_copy[i] = mapper(arr_copy[i]);
    }
    return new Iter([...arr_copy]);
  }

  filter(predicate: (input: T) => boolean) {
    const filteredArray = this.arr.filter(predicate);
    return new Iter(filteredArray);
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
    let i = this.capacity;
    while (!result) {
      result = result || predicate(this.arr[i]);
      i--;
    }
    return result;
  }

  chain(other: Iter<T>) {
    return new Iter([...this.arr, ...other.arr]);
  }

  collect() {
    return new Iter([...this.arr]);
  }

  enumerate() {
    const enumaration = Array<{ i: number; item: T }>(this.capacity);
    for (let i = 0; i < this.capacity; i++) {
      enumaration[i] = {
        i, item: this.arr[i]
      }
    }
    return enumaration;
  }

  take(n: number) {
    if (n > this.capacity) {
      throw new Error(`Cannot take ${n} items from an iterator of capacity ${this.capacity}.`);
    }

    return new Iter([...this.arr].slice(0, n));
  }
}

function toIter<T>(array: T[]) {
  return new Iter(array);
}
