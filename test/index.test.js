import expect from 'expect';
import debounce from '../lib';

class Component {
  counter = 0;
  counter2 = 10;

  @debounce(100)
  increment () {
    this.counter++;
  }

  @debounce(100)
  incrementCounter2 () {
    this.counter2++;
  }

  @debounce(100, true)
  incrementImmediate () {
    this.counter++;
  }
}

describe('Debounce decorator', () => {
  let component;

  beforeEach(() => {
    component = new Component();
  });

  it('should execute after delay', done => {
    component.increment();
    expect(component.counter).toBe(0);

    setTimeout(() => {
      expect(component.counter).toBe(1);
      done();
    }, 150);
  });

  it('should only happen once', done => {
    component.increment();
    component.increment();
    component.increment();
    expect(component.counter).toBe(0);

    setTimeout(() => {
      expect(component.counter).toBe(1);
      done();
    }, 250);
  });

  it('should debounce independent methods', done => {
    component.increment();
    component.incrementCounter2();
    expect(component.counter).toBe(0);
    expect(component.counter2).toBe(10);

    setTimeout(() => {
      expect(component.counter).toBe(1);
      expect(component.counter2).toBe(11);
      done();
    }, 150);
  });

  it('should execute immediately and only once', done => {
    component.incrementImmediate();
    expect(component.counter).toBe(1);

    setTimeout(() => {
      expect(component.counter).toBe(1);
      done();
    }, 150);
  });
});
