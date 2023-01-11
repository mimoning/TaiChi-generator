async function xxx(...args) {
  const a = await Promise.resolve(2)
  console.log(a)
  console.log(args)
}

xxx(1)
