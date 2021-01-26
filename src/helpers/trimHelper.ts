export const trimHelper = {
  oneSpace (item: string): string {
    if (item === null || item === undefined || item === '') {
      throw new Error('Null or undefined is not accepted.')
    }

    return (item.replace(/ +(?= )/g, '')).trim()
  }
}
