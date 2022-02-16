// function ShowCountries(){
//     let xhr = new XMLHttpRequest()

//     xhr.open('GET', 'https://restcountries.com/v3.1/all', true)
//     xhr.open('GET', 'https://mainfacts.com/media/images/coats_of_arms/pe.png', true)
//     xhr.onload = function() {
//         if (xhr.status == 200) {
//             console.log("success..")
//             let Countries = JSON.parse(this.response)
//             console.log(Countries)
//             Countries.forEach(country => {
//                 const countryCard = document.createElement('div')
//                 const countryCardImage = document.createElement('img')
//                 countryCard.innerHTML = country.name.common 
//                 countryCardImage.innerHTML = country.area
//                 countryCardImage.appendChild(countryCardImage)
//                 document.getElementById('feed').appendChild(countryCard)
//             })
//         }
//     }
//     xhr.send()
//     xhr.send()
// }
////////////////////////////////////////////////////

// const button = document.querySelector('button')
// button.addEventListener('click', () => {
//     let count = 0
//     for (let i = 0; i < 100000000; i++) {
//         count++
//     }

//     console.log(count)

//     const text = document.createElement('h1')
//     text.innerHTML = "this has nothing to do with the count."
//     document.body.appendChild(text)
// })
/////////////////////////////////////
