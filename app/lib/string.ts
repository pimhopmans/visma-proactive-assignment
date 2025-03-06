export function removeSpecialCharacters(str: string) {
  return str.replace(/[^\w\s]/g, ' ')
}
