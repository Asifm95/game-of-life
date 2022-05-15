export const config = {
  board: {
    row: 50,
    column: 50,
    randomize: true,
    padding: {
      verticalPadding: 3,
      hoirizontalPadding: 0,
    },
  },
  cells: {
    size: 17,
    aliveColor: "#dc7373",
    deadColor: "#212121",
    border: "solid 1px #0f0f0f",
  },
  controls: {
    speed: 60,
    gameDescription:
      "The game is a zero-player game, meaning that its evolution is determined by its initial state, requiring no further input. One interacts with the Game of Life by creating an initial configuration and observing how it evolves. It is Turing complete and can simulate a universal constructor or any other Turing machine. Simply click on the grid to set intial state and click play!",
    startBtnColor: "#a3dc63",
    stopBtnColor: "#ff4343",
    resetBtnColor: "#f17bcd",
    showSettingsColor: "#63bbde",
    hideSettingsColor: "#ebd74b",
  },
}
