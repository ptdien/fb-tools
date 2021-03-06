tha_tym(10000)
function tha_tym (times) {
  return new Promise(async(resolve, reject) => {
    let heart = document.querySelector('.uiLayer span[aria-label="Love"]')
    let like = document.querySelector('.uiLayer span[aria-label="Like"]')
    let array = [heart, like]
    for (let i = 0; i < times; i++) {
          let reaction = array[random_generator(array)]
          reaction.click()
          await wait(500)
        };
    resolve()
  })
};

function wait (milliseconds) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve()
      }, milliseconds)
  })
}

function random_generator (array) {
  return Math.floor((Math.random() * array.length) + 1) - 1
}
