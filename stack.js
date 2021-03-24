export class Stack {
  constructor(inputMaxStackLength = 10) {
    this._maxStackLength = inputMaxStackLength;
    this._store = [];
  }

  push(element) {
    const { _store, _maxStackLength } = this;

    if (_store.length >= _maxStackLength) {
      throw new Error("Max stack size exceded");
    }

    _store.push(element);
  }

  pop() {
    const { _store } = this;

    if (this.isEmpty()) {
      throw new Error("Stack is empty");
    }

    return _store.pop();
  }

  peek() {
    const { _store } = this;

    if (this.isEmpty()) {
      throw new Error("Stack is empty");
    }

    return _store[_store.length - 1];
  }

  isEmpty() {
    return !this._store.length;
  }

  toArray() {
    const output = [];

    while (!this.isEmpty()) {
      output.push(this._store.pop());
    }

    output
      .concat()
      .reverse()
      .forEach((el) => this._store.push(el));

    return output;
  }

  static fromIterable(iterable) {
    if (!this._isIterable(iterable)) {
      throw new Error("Are you kidding me??");
    }

    const iterableArray = Array.from(iterable);

    const output = new Stack(iterableArray.length);
    iterableArray.forEach((el) => output.push(el));
    return output;
  }

  static _isIterable(obj) {
    if (obj == null) {
      return false;
    }

    return typeof obj[Symbol.iterator] === "function";
  }
}
