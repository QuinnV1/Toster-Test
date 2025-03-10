/// swiper

var swiper = new Swiper(".mySwiper", {
    spaceBetween: 12,
    slidesPerView: 4,
    freeMode: true,
    watchSlidesProgress: true,
  });
  var swiper2 = new Swiper(".mySwiper2", {
    spaceBetween: 12,
    thumbs: {
      swiper: swiper,
    },
  });
///

///  timer

var dateEnd = new Date('2025-03-17 20:00:00'),
    dateNow = new Date(),
    date = Math.floor((dateEnd.getTime() - dateNow.getTime()) / 1000);

function countdown() {
    var dateLeft = date,
        dateTemp = 0;

    dateTemp = Math.floor(dateLeft / (60 * 60));
    dateLeft -= dateTemp * 60 * 60;
    if (dateTemp < 10) dateTemp = '0' + dateTemp;
    document.querySelector('#group #h').innerHTML = dateTemp;

    dateTemp = Math.floor(dateLeft / (60));
    dateLeft -= dateTemp * 60;
    if (dateTemp < 10) dateTemp = '0' + dateTemp;
    document.querySelector('#group #m').innerHTML = dateTemp;

   
    if (dateLeft < 10) dateLeft = '0' + dateLeft;
    document.querySelector('#group #s').innerHTML = dateLeft;

    date--;

    if(date < 0){
        document.querySelector('#group').innerText = 'Акция завершена';
        document.querySelector('#group').style.fontSize = '12px';
        document.querySelector('#group').style.color = 'red';
    }
}

setInterval(countdown, 1000);
///

/// selector

const element = document.querySelector(".js-choice")

const choices = new Choices(element, {
    searchEnabled: false,
    itemSelectText: ""
})

const elementTwo = document.querySelector(".js-choice-two")

const choicesTwo = new Choices(elementTwo, {
    searchEnabled: false,
    itemSelectText: ""
})

///
