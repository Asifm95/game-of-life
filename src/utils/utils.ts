export const emptyGridGenerator = (row: number, col: number): number[][] =>
  Array.from(Array(row)).map(() => Array.from(Array(col)).fill(0))

export const randomizedGridGenerator = ({ row, column }) => {
  const newGrid = emptyGridGenerator(row, column)
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < column; j++) {
      newGrid[i][j] = randomizer()
    }
  }
  return newGrid
}
export const getCurrentGridDim = (grid: number[][]) => [
  grid.length,
  grid[0].length,
]

export const getWindowWidth = () =>
  window.innerWidth ||
  document.documentElement.clientWidth ||
  document.body.clientWidth

export const getWindowHeight = () =>
  window.innerHeight ||
  document.documentElement.clientHeight ||
  document.body.clientHeight

// export const getPadding = (
//   {
//     verticalPadding,
//     hoirizontalPadding,
//     smScreenVerticalPadding,
//     smScreenhoirizontalPadding,
//   },
//   windowWidth: number
// ): { vPadding: number; hPadding: number } =>
//   windowWidth > 576
//     ? { vPadding: verticalPadding, hPadding: hoirizontalPadding }
//     : {
//         vPadding: smScreenVerticalPadding,
//         hPadding: smScreenhoirizontalPadding,
//       }

export const isMobileDevice = () =>
  typeof window.orientation !== "undefined" ||
  navigator.userAgent.indexOf("IEMobile") !== -1

export const setContainerHeight = () => {
  let vh = window.innerHeight * 0.01
  document.documentElement.style.setProperty("--vh", `${vh}px`)
}

export const randomizer = () => (Math.floor(Math.random() * 10000) % 5) % 2

export const digitsOnly: RegExp = /[^1234567890]/g
