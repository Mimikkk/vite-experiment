import { foo } from "@mimi/lib-a";
import { foobar } from "@mimi/lib-ab";
import { bar } from "@mimi/lib-b";

export const App = () => <h1>Hello World + {foo()} + {bar()} + {foobar()}</h1>;
