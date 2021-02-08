export const DEC_COUNTER = "DEC_Counter";
export function decreaseCounter() {
  return { type: DEC_COUNTER, add: -1 };
}
