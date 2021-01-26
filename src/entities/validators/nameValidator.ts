export function nameValidator (name: string): boolean {
  if (name === null || name === undefined) {
    return false
  }

  const formattedName = (name.replace(/\s\s+/g, ' ')).trim()

  if (formattedName.length < 2 || formattedName.length > 256) {
    return false
  }

  return true
}
