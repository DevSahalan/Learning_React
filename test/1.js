'use strict'
// const obj = {
//   name: 'myth',
//   language: ['javascript', 'react', 'express'],
//   showBio() {
//     console.log(this)
//     // let self = this
//     this.language.forEach(
//       function (lang) {
//         //   console.log(self)
//         console.log(`${this.name} loves ${lang}`)
//       }.bind(this)
//     )
//   },
// }

// obj.showBio()
const btn = document.querySelector('button')
class Events {
  constructor() {
    console.log(this)
    btn.addEventListener('click', this.handleClick)
  }
  handleClick() {
    console.dir(this)
  }
}
const event = new Events()
