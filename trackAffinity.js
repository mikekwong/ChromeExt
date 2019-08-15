let images = document.getElementsByTagName('img')
let cart = document.querySelector('.c-cart__product-count')
let allCategories = document
  .querySelector('.dom-landing-page-modules')
  .getElementsByTagName('div')

for (let i = 0; i < allCategories.length; i++) {
  if (allCategories[i].className === 'o-row   ') {
    if (i === 2) {
      allCategories[2].classList.add('womens')
    }
    if (i === 68) {
      allCategories[68].classList.add('mens')
    }
    if (i === 134) {
      allCategories[134].classList.add('home')
    }
    if (i === 200) {
      allCategories[200].classList.add('lifestyle')
    }
    if (i === 266) {
      allCategories[266].classList.add('beauty')
    }
  }
}

// chrome.runtime.onInstalled.addListener(function () {
//   chrome.storage.local.set({ values: 1 }, function () {
//     console.log('The color is green.')
//   })

// localStorage.count = 0
// console.log(images)
let utag_data = {
  product_category: {
    womens: 0,
    mens: 0,
    home: 0,
    lifestyle: 0,
    beauty: 0
  }
}

for (let i = 0; i < images.length; i++) {
  images[i].addEventListener('click', e => {
    // e.preventDefault()
    chrome.storage.local.get(['value'], CSE_Challenge => {
      chrome.storage.local.set({ value: CSE_Challenge.value + 1 }, () => {
        e.preventDefault()
        console.log('score set to ' + CSE_Challenge.value)
        console.log('cart amount: ', cart.innerHTML * 3)
      })
    })

    // localStorage.count++
    // console.log(localStorage.count)
  })
}

// })
