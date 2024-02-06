var numOfNo = 0;
const images = ['images/img_(1).jpg', 'images/img_(2).jpg', 'images/img_(3).jpg', 'images/img_(4).jpg', 'images/img_(5).jpg', 'images/img_(6).jpg', 'images/img_(7).jpg','images/img_(8).jpg','images/img_(9).jpg','images/img_(10).jpg','images/img_(11).jpg']
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function btnYes(){
  const after = document.querySelector('#after')
  const before = document.querySelector('#before')
  before.classList.add('is-hidden');
  after.classList.remove('is-hidden'); 
  setInterval(function() {
      let randNum = Math.floor(Math.random() * 11)
      let img = document.querySelector('#img')
      img.src = images[randNum]
  }, 800)
}

function btnNo() {
  const messages = ["are you sure?", "are you certain?", "really?", "I'll give you one more chance", "Did you click the wrong one?", "Is that your final answer?", "This could be a mistake!", "Have a heart", "change your heart?"];
  const randNum = Math.floor(Math.random() * 9)
  numOfNo = numOfNo + 1;
  const btnNo = document.querySelector('#btnNo')
  btnNo.innerHTML = messages[randNum] 
  const yesBtn = document.querySelector('#btnYes')
  const currWidth = yesBtn.getBoundingClientRect().width;
  const currHeight = yesBtn.getBoundingClientRect().height;
  yesBtn.style.height = `${currHeight+10}px`
  yesBtn.style.width = `${currWidth+20}px`
  if (numOfNo == 15) {
    btnNo.innerHTML = "Im just gonna remove this"
  }
  if (numOfNo == 16){
    btnNo.classList.remove('is-danger')
    btnNo.classList.add('is-primary')
    btnNo.innerHTML = 'YES'
  }
  if (numOfNo == 17) {
    btnNo.onlick = btnYes();
  }

}

function closeMail() {
  const mail = document.querySelector('#envelope')
  const before = document.querySelector('#before')
  mail.classList.add('is-hidden')
  before.classList.remove('is-hidden')
}