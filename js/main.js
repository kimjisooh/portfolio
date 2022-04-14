// data-link 
document.getElementById('box-01').addEventListener('click',e=>{
  if(e.target.nodeName === 'DIV'){
    let id_value = e.target.dataset.link;
    document.querySelector(id_value).scrollIntoView({behavior : 'smooth'});
  }
});

document.getElementById('box-02').addEventListener('click',e=>{
  if(e.target.nodeName === 'DIV'){
    let id_value = e.target.dataset.link;
    document.querySelector(id_value).scrollIntoView({behavior : 'smooth'});
  }
});

document.getElementById('box-03').addEventListener('click',e=>{
  if(e.target.nodeName === 'DIV'){
    let id_value = e.target.dataset.link;
    document.querySelector(id_value).scrollIntoView({behavior : 'smooth'});
  }
});

document.getElementById('box-04').addEventListener('click',e=>{
  if(e.target.nodeName === 'DIV'){
    let id_value = e.target.dataset.link;
    document.querySelector(id_value).scrollIntoView({behavior : 'smooth'});
  }
});

document.getElementById('box-05').addEventListener('click',e=>{
  if(e.target.nodeName === 'DIV'){
    let id_value = e.target.dataset.link;
    document.querySelector(id_value).scrollIntoView({behavior : 'smooth'});
  }
});

document.getElementById('UI').addEventListener('click',e=>{
  if(e.target.nodeName === 'DIV'){
    let id_value = e.target.dataset.link;
    document.querySelector(id_value).scrollIntoView({behavior : 'smooth'});
  }
});

document.getElementById('motion').addEventListener('click',e=>{
  if(e.target.nodeName === 'DIV'){
    let id_value = e.target.dataset.link;
    document.querySelector(id_value).scrollIntoView({behavior : 'smooth'});
  }
});


// Scroll Animation (an, 스크롤 애니메이션)
const anDefaultMargin = 200;
let anTriggerMargin = 0;
let anTriggerHeight = 0;
const anElementList = document.querySelectorAll('.an');

const anFunc = function() {
  for (const element of anElementList) {
    if (!element.classList.contains('show')) {
      if (element.dataset.anMargin) {
        anTriggerMargin = parseInt(element.dataset.anMargin);
      } else {
        anTriggerMargin = anDefaultMargin;
      }

      if (element.dataset.anTrigger) {
        anTriggerHeight = document.querySelector(element.dataset.anTrigger).getBoundingClientRect().top + anTriggerMargin;
      } else {
        anTriggerHeight = element.getBoundingClientRect().top + anTriggerMargin;
      }

      if (window.innerHeight > anTriggerHeight) {
        let delay = (element.dataset.anDelay) ? element.dataset.anDelay : 0;
        setTimeout(function() {
          element.classList.add('show');
        }, delay);
      }
    }
  }
}

window.addEventListener('load', anFunc);
window.addEventListener('scroll', anFunc);


