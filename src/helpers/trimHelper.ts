export const trimHelper = {
  oneSpace (data: string): string {
    return (data.replace(/ +(?= )/g, '')).trim()
  }
}
