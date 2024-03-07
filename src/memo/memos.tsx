import { useMemo, useState } from 'react';
import './memos.styles.css';

export const BadMemoComponent = () => {
  const [arrayToMultiply, setArrayToMultiply] = useState<number[]>([40, 80, 100]);
  const [multiplier, setMultiplier] = useState<number>(2000);

  // It would only make sense to use useMemo if component is re-rendering frequently and no dependencies are
  // changing right? Well not really, useMemo is also useful when you have a heavy computation that you want to
  // avoid running on every render, even if the dependencies are not changing. Even if the array would become
  // very large and so the multiplier, it would still be more performant without the useMemo.
  console.time('Multiplying array')
  const multipliedArray = useMemo(() => {
    console.log('Multiplying array');
    return arrayToMultiply.map((value) => value * multiplier);
  }, [arrayToMultiply, multiplier]);
  console.timeEnd('Multiplying array')

  return (
    <div className="bad-memo-comp">
      <h2>Bad Memo</h2>
      <p>Multiplier: {multiplier}</p>
      <p>Multiplied array: {multipliedArray.join(', ')}</p>
      <div className="buttons-wrapper">
        <button
          onClick={() => setArrayToMultiply((prevArray) => [...prevArray, prevArray[prevArray.length - 1] + 1])}
        >
          Add number to array
        </button>
        <button onClick={() => setMultiplier((prevMultiplier) => prevMultiplier + 1)}>Increase multiplier</button>
      </div>
    </div>
  );
};

const calculateFibonacci = (n: number): number => {
  if (n <= 1) {
      return n;
  }

  return calculateFibonacci(n - 1) + calculateFibonacci(n - 2);
}

export const GoodMemoComponent = () => {
  const [number, setNumber] = useState(4);
  const [isLoading, setIsLoading] = useState(false);

  console.time('calculateFibonacci');
  const fibonacciNumber = useMemo(() => {
    setIsLoading(true);
    console.log('Calculating fibonacci number');
    const result = calculateFibonacci(number);
    setIsLoading(false);
    return result;
  }, [number]);
  console.timeEnd('calculateFibonacci');

  return (
    <div className="good-memo-comp">
      <h2>Good Memo</h2>
      <p>Fibonacci number: {isLoading ? 'calculating...' : fibonacciNumber}</p>
      <label id="calculator-number">Number (focus out to calculate):</label>
      <input defaultValue={number} className="fibonacci-input" type="number" onBlur={({ target: { value } }) => setNumber(Number(value))} aria-labelledby="calculator-number" />
    </div>
  );
};
