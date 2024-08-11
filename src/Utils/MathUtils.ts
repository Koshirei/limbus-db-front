/**
 * get a random integer between min and max INCLUDED
 * @param min
 * @param max
 */
export const rand = (min: number, max: number): number => {
  return Math.floor(Math.random() * (max - min + 1)) + min
}