function animate(){
    
  TweenLite.fromTo('#question', 1,
  {
    opacity:1,
    transform:'scale(2)',
    webkitFilter:'blur(20px)'
  },
  {
    transform:'scale(1)',
    webkitFilter:'blur(0)',
    onComplete:function(e) {
      document.getElementById('question').style.borderColor='#fff';
      whenWhere();
    }
  });
  
}

function whenWhere(){
  TweenLite.fromTo('#whenwhere', 1,
  {
    opacity:1,transform:'scale(2)',
    //fontSize:'6em',width:'80%',marginLeft:'-40%',
    webkitFilter:'blur(20px)'
  },
  {
    transform:'scale(1)',
    //fontSize:'4em',width:'60%',marginLeft:'-30%',
    webkitFilter:'blur(0)',
    onComplete:function(e) {
      answer();
    }}
  );
}
function answer(){
  TweenLite.fromTo('#answer', 1,
  {
    opacity:1,transform:'scale(2)',
    webkitFilter:'blur(20px)'
  },
  {
    transform:'scale(1)',
    webkitFilter:'blur(0)',
    onComplete:function(e) {
      moveUp();
    }}
  );
}

function moveUp() {
  TweenLite.to('#question', 2.5,{
    top:'0',
    opacity:0
  });
  TweenLite.to('#whenwhere', 2.5,{
    top:'10%'
  });
  TweenLite.to('#answer', 2.5,
  {
    top:'20%',
    opacity:0,
    onComplete:function(e) {
      
    }
  });
}

function ready(fn) {
  if (document.readyState != 'loading'){
    fn();
  } else {
    document.addEventListener('DOMContentLoaded', fn);
  }
}

ready(animate);