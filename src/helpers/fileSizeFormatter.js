const FILE_SIZES = ['by', 'kb', 'mb', 'gb']
const FILE_SIZES_STEP = 1024

export const fileSizeFormatter = (size) => {
  let step = 0,
    currSize = size
  while (Math.trunc(currSize / FILE_SIZES_STEP) > 0) {
    step++
    currSize /= FILE_SIZES_STEP
  }
  return `${currSize.toFixed(2)} ${FILE_SIZES[step].toUpperCase()}`
}
