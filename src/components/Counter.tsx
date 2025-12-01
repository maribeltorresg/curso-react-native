import { UseCounter } from "../hooks/UseCounter";

export const Counter = () => {
  // Custom hooks
  const { count, increaseBy } = UseCounter();

  return (
    <>
      <h3 className="my-4 text-xl">
        Contador: <small>{count}</small>
      </h3>
      <div className="flex gap-2">
        <button
          onClick={() => increaseBy(+1)}
          className="px-4 py-2 bg-blue-400 text-white rounded-xl"
        >
          +1
        </button>
        <button
          onClick={() => increaseBy(-1)}
          className="px-4 py-2 bg-blue-400 text-white rounded-xl"
        >
          -1
        </button>
      </div>
    </>
  );
};
