let images = document.getElementsByTagName('img')
let cart = document.querySelector('.c-cart__product-count')
// chrome.runtime.onInstalled.addListener(function () {
//   chrome.storage.local.set({ values: 1 }, function () {
//     console.log('The color is green.')
//   })

// localStorage.count = 0
// console.log(images)
let total = 0

for (let i = 0; i < images.length; i++) {
  images[i].addEventListener('click', e => {
    e.preventDefault()
    chrome.storage.local.get(['value'], CSE_Challenge => {
      chrome.storage.local.set({ value: CSE_Challenge.value + 1 }, () => {
        console.log('score set to ' + CSE_Challenge.value)
      })
    })

    // localStorage.count++
    // console.log(localStorage.count)
  })
}

console.log('cart amount: ', cart.innerHTML)
// })
