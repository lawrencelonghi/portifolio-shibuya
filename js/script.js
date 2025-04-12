//intro
let intro = document.querySelector('.intro')
let logo = document.querySelector('.logo-header')
let logoSpan = document.querySelectorAll('.logo')

window.addEventListener('DOMContentLoaded', () =>{

  setTimeout(() =>{
    logoSpan.forEach((span, i) =>{
      setTimeout(() =>{
        span.classList.add('active')
      },(i + 1) * 400)
    })
  
    setTimeout(() => {
      logoSpan.forEach((span,i) =>{
        setTimeout(() =>{
          span.classList.remove('active')
          span.classList.add('fade')
        },(i +1) * 50)
      })
    }, 2000)

    setTimeout(() =>{
      intro.style.top = '-100vh'
    }, 2300)
  })
})

//popup video
document.querySelectorAll('.video-container video').forEach(vid =>{
  vid.onclick = () =>{
    document.querySelector('.popup-video').style.display = 'block'
    document.querySelector('.popup-video video').src = vid.getAttribute('src')
  }
});
document.querySelector('.popup-video span').onclick = () =>{
  document.querySelector('.popup-video').style.display = 'none'
}

// //test popup 2
// const staticVideo = document.querySelectorAll('.video-container video')
// const popupVideo = document.querySelectorAll('.popup-video')
// console.log(popupVideo);


// function handlePopup(){
//  popupVideo.forEach((popupvid) =>{
//   popupvid.classList.add('active')
//  })
// }

// staticVideo.forEach((vid) =>{
//   vid.addEventListener('click',handlePopup)
// })

// handlePopup()