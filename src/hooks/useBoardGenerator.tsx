import { useEffect, useState, Dispatch, SetStateAction } from "react"
import { config } from "../utils/config"
import { emptyGridGenerator, randomizedGridGenerator } from "utils/utils"
import useWindowResize from "./useWindowResize"

export interface Dimension {
  row: number
  column: number
}

export const useBoardGenerator = (
  gameBoard: React.RefObject<HTMLElement> | null
): [
  number[][],
  Dispatch<SetStateAction<any[][]>>,
  Dimension,
  Dispatch<SetStateAction<Dimension>>
] => {
  const [dimension, setDimension] = useState<Dimension>({ row: 0, column: 0 })
  const [grid, setGrid] = useState<number[][]>(() => emptyGridGenerator(0, 0))
  let { windowWidth } = useWindowResize()

  useEffect(() => {
    const calculateGridDimension = (height: number, width: number) => {
      const {
        board: {
          padding: { verticalPadding, hoirizontalPadding },
        },
        cells: { size },
      } = config
      return {
        row: Math.floor(height / size) - verticalPadding,
        column: Math.floor(width / size) - hoirizontalPadding,
      }
    }

    if (gameBoard && gameBoard.current) {
      const { clientHeight, clientWidth } = gameBoard.current
      const boardDim = calculateGridDimension(clientHeight, clientWidth)
      const board = randomizedGridGenerator(boardDim)
      setGrid(board)
      setDimension((dimension) => ({ ...dimension, ...boardDim }))
    }
  }, [gameBoard, windowWidth])

  return [grid, setGrid, dimension, setDimension]
}
