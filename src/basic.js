export const pipe = (headFn, ...restFns) => (...args) => restFns.reduce(
  (value, fn) => fn(value),
  headFn(...args)
);

export const compose = (...fns) => pipe(...fns.reverse());

export const curry = (f, ...args) => args.length >= f.length ? f(...args) : (...next) => curry(f, ...args, ...next);
export const uncurry = f => (...args) => args.reduce(
  (g, x) => (g = g(x), typeof g === "function" && g.length === 1
   ? uncurry(g)
   : g), f
);

const check_builtin_type= typename => x =>{
  if (typeof x === typename) return x;
  throw new TypeError("Except a "+typename+"!");
}

export const num = check_builtin_type("number");
export const str = check_builtin_type("string");
export const bool= check_builtin_type("boolean");
export const func= check_builtin_type("function");
export const undef= check_builtin_type("undefined");
export const obj= check_builtin_type("object");