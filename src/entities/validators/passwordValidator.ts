export function passwordValidator (password: string): boolean {
  if (password === null || password === undefined) {
    return false
  }

  if ((password).length !== ((password).replace(/\s/g, '')).length || (password).length < 6) {
    return false
  }
  return true
}
