const main = () => {
  const [, , ...args] = process.argv
  if (args[0]) {
    console.log("Ciao!")
  }
  console.log(process.argv)
}

module.exports = main
