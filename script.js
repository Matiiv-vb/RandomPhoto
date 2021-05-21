let arrlink = ['https://aws.random.cat/meow', 'https://dog.ceo/api/breeds/image/random', 'https://random.dog/woof.json', 'https://randomfox.ca/floof/'];

let bt = document.querySelectorAll('.bt');

for (let i = 0; i < bt.length; i++) {
  bt[i].value = arrlink[i];
}


let apiFunc = function (el) {
  fetch(`${this.value}`)
    .then(function (resp) {
      return resp.json()
    })
    .then(function (data) {
      let img = document.createElement('img');

      if (el.toElement.value == arrlink[0]) {
        console.log(img.src = data.file);
      }

      if (el.toElement.value == arrlink[1]) {
        console.log(img.src = data.message);
      }

      if (el.toElement.value == arrlink[2]) {
        console.log(img.src = data.url);
      }

      if (el.toElement.value == arrlink[3]) {
        console.log(img.src = data.image);
      }

      img.classList.add('img-min')
      document.querySelector('.div-wrapper').appendChild(img);
      document.querySelector('.img-text').textContent = img.src;

    })

}

bt.forEach(box =>
  box.addEventListener("click", apiFunc));


const images = document.querySelectorAll('.img-min');
let count = 0;

let imMax = document.querySelector('.img-max');

const next = document.querySelector('.next');
// next.onclick = nextFunction;
// next.ontouchend = nextFunction;
next.addEventListener('touchend', nextFunction)
next.addEventListener('click', nextFunction)


const prev = document.querySelectorAll('.prev');
prev[0].onclick = prevFunction;
prev[0].ontouchend = prevFunction;

const reset = document.querySelector('.reset');

reset.addEventListener('touchend', resetFunction)
reset.addEventListener('click', resetFunction)


function nextFunction(e) {
  e.preventDefault();

  const images = document.querySelectorAll('.img-min');

  for (let k = 0; k < images.length; k++) {

    if (images[k].classList.contains('active-img')) {
      count = k;
    }
  }

  count++;

  for (let i = count; i <= images.length; i++) {

    if (i == count && count < images.length) {
      images[i - 1].classList.remove('active-img')
      images[i].classList.add('active-img')
      imMax.src = images[i].src

    } else if (count > images.length - 1) {
      images[images.length - 1].classList.remove('active-img')
      count = 0;
      images[count].classList.add('active-img')
      imMax.src = images[count].src
    }

  }


}

function prevFunction(e) {
  e.preventDefault();

  const images = document.querySelectorAll('.img-min');

  for (let k = 0; k < images.length; k++) {

    if (images[k].classList.contains('active-img')) {
      count = k;
    }
  }

  count--;

  for (let i = count; i >= -1; i--) {

    if (i == count && count >= 0) {
      images[i + 1].classList.remove('active-img')
      images[i].classList.add('active-img')
      imMax.src = images[i].src

    } else if (count == -1) {
      images[count + 1].classList.remove('active-img')
      count = images.length - 1;
      images[count].classList.add('active-img');
      imMax.src = images[count].src

    }

  }



}

function resetFunction(e) {
  e.preventDefault();

  const images = document.querySelectorAll('.img-min');

  for (let k = 0; k < images.length; k++) {

    if (images[k].classList.contains('active-img')) {
      images[k].classList.remove('active-img')
      images[0].classList.add('active-img')
      imMax.src = images[0].src
    }
  }

}