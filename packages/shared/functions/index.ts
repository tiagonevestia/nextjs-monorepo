export const capitalize = (frase: string): string =>
  frase.split(' ')
    .map(palavra => palavra[0].toUpperCase() + palavra.substr(1)
      .toLowerCase())
    .join(' ')
