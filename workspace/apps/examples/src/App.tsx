import { foo } from "@mimi/lib-a";
import { foobar } from "@mimi/lib-ab";

export const App = () => {
  return <h1>Hello World + {foo()} + {foobar()}</h1>;
};
