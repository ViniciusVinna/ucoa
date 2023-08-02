/**
 * Lighten a color by a given amount
 * @param hex
 * @param amount
 * @returns
 */

export function lightenColor(hex: string, amount: number): string {
  hex = hex.replace("#", "");

  const num = parseInt(hex, 16);

  let red = (num >> 16) + Math.floor(amount);
  let green = (num >> 8 & 0x00FF) + Math.floor(amount);
  let blue = (num & 0x0000FF) + Math.floor(amount);

  red = Math.min(Math.max(0, red), 255);
  green = Math.min(Math.max(0, green), 255);
  blue = Math.min(Math.max(0, blue), 255);

  const newHex = ((red << 16) | (green << 8) | blue).toString(16);

  return "#" + "0".repeat(6 - newHex.length) + newHex;
}

/**
 * darken a color by a given amount
 * @param hex
 * @param amount
 * @returns
 */
export function darkenColor(hex: string, amount: number): string {
  // Remover o '#' do início, caso esteja presente
  hex = hex.replace("#", "");

  // Converter para valor RGB
  const num = parseInt(hex, 16);

  // Extrair componentes RGB
  let red = (num >> 16) - Math.floor(amount);
  let green = (num >> 8 & 0x00FF) - Math.floor(amount);
  let blue = (num & 0x0000FF) - Math.floor(amount);

  // Verificar limites (0-255)
  red = Math.min(Math.max(0, red), 255);
  green = Math.min(Math.max(0, green), 255);
  blue = Math.min(Math.max(0, blue), 255);

  // Converter novamente para hexadecimal
  const newHex = ((red << 16) | (green << 8) | blue).toString(16);

  // Preencher com zeros à esquerda, caso necessário
  return "#" + "0".repeat(6 - newHex.length) + newHex;
}