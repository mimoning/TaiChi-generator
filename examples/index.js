async function xxx() {
  const a = await Promise.resolve(2)
  console.log(a)
}

xxx()
