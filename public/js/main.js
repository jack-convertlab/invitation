var width,height;
function animate(){
    
  TweenLite.fromTo('#question', 1,
  {
    opacity:1,
    transform:'scale(2)',
    webkitFilter:'blur(10px)'
  },
  {
    transform:'scale(1)',
    webkitFilter:'blur(0)',
    onComplete:function(e) {
      var q=document.getElementById('question');
      q.style.borderColor='#fff';
      q.style.backgroundColor='rgba(5,3,4,0.35)';
      whenWhere();
    }
  });
  
}

function whenWhere(){
  TweenLite.fromTo('#whenwhere', 1,
  {
    opacity:1,transform:'scale(2)',
    //fontSize:'6em',width:'80%',marginLeft:'-40%',
    webkitFilter:'blur(10px)'
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
    webkitFilter:'blur(10px)'
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
      showLogo();
    }
  });
}

function showLogo() {
  var oc=document.getElementById('outer-circle');
  oc.style.width=width*0.5;
  oc.style.height=width*0.5;
  oc.style.marginLeft=width*-0.25;
  oc.style.opacity=1;
  
  var oc=document.getElementById('inner-circle');
  oc.style.width=width*0.25;
  oc.style.height=width*0.25;
  oc.style.marginLeft=width*-0.125;
  oc.style.marginTop=width*-0.125;
  oc.style.opacity=1;

  TweenLite.fromTo('#logo', 1.5,{
    backgroundImage:'url(img/icon_logo.png)',
  },{
    width:'807px',
    marginLeft:'-403.5px',
    onComplete:function() {
      subject();
    }
  });
}

function subject() {
  TweenLite.fromTo('#subject', 1,
  {
    opacity:1,transform:'scale(2)',
    webkitFilter:'blur(20px)'
  },
  {
    transform:'scale(1)',
    webkitFilter:'blur(0)',
    onComplete:function(e) {
      var btn=document.getElementById('btn');
      btn.style.opacity=1;
    }}
  );
}

function ready(fn) {
  if (document.readyState != 'loading'){
    fn();
  } else {
    document.addEventListener('DOMContentLoaded', fn);
  }
}
function init() {
  width=document.body.offsetWidth;
  height=document.body.offsetHeight;
  animate();
}
ready(init);