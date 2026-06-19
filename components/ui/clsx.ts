export function clsx(...inputs: Array<string | undefined | false | null>): string {
  return inputs.filter(Boolean).join(" ");
}
