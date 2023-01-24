import fs from 'fs'
;(async () => {
  const data = fs.readFile('./output/*.pdf', (err) => {
    if (err) {
      console.log(err)
    }
  })
  console.log(data)
})()
