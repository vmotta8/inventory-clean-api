export function nameValidator (name: string): boolean {
  if (!name) {
    return false
  }

  if (name.trim().length < 2 || name.trim().length > 256) {
    return false
  }

  return true
}
