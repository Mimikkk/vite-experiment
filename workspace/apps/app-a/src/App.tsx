import { foobar } from "@mimi/lib-ab";

export const App = () => {
  function foo(a: number, b: number, c: number, d: number, e: number, f: number, g: number) {}

  return <h1>Hello World + {foo()} + {foobar()}</h1>;
};
