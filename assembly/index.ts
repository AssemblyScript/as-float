export function f64_pow(x: f64, y: f64): f64 {
  return inline.always(Math.pow(x, y));
}
