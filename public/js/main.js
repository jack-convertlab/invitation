var width,height;
var canvas,bufCanvas
function animate(){
  var outerWidth=width*1.2;
  var outerTo=outerWidth+'px';
  var outerMLTo=-outerWidth/2+'px';
  var outerFrom=outerWidth*2+'px';
  var outerMLFrom=-outerWidth+'px';
  TweenLite.fromTo('#first-outer', 2,
  {
    opacity:1,
    transform:'scale(2)',
    width:outerTo,
    height:outerTo,
    marginLeft:outerMLTo,
    marginTop:outerMLTo,
    // width:outerFrom,
    // height:outerFrom,
    // marginLeft:outerMLFrom,
    // marginTop:outerMLFrom
  },
  {
    transform:'scale(1)',
    // width:outerTo,
    // height:outerTo,
    // marginLeft:outerMLTo,
    // marginTop:outerMLTo,
  });
  
  var innerWidth=width*0.8;
  var innerTo=innerWidth+'px';
  var innerMLTo=-innerWidth/2+'px';
  var innerFrom=innerWidth*2+'px';
  var innerMLFrom=-innerWidth*2/2+'px';
  TweenLite.fromTo('#first-inner', 2,
  {
    opacity:1,
    transform:'scale(2)',
    width:innerTo,
    height:innerTo,
    marginLeft:innerMLTo,
    marginTop:innerMLTo,
    // width:innerFrom,
    // height:innerFrom,
    // marginLeft:innerMLFrom,
    // marginTop:innerMLFrom
  },
  {
    transform:'scale(1)',
    // width:innerTo,
    // height:innerTo,
    // marginLeft:innerMLTo,
    // marginTop:innerMLTo,
    onComplete:function(e) {
      TweenLite.to('#first-outer',.5,{opacity:0});
      TweenLite.to('#first-inner',.5,{opacity:0});
    }
  });
  
  TweenLite.to(canvas,1,{
    delay:2.5,
    y:'-20%',
    onComplete:function(){
      TweenLite.fromTo('#question', 1.5,
      {
        opacity:1,
        transform:'scale(2)',
        webkitFilter:'blur(10px)',
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
  });
  
  
  
}

function whenWhere(){
  TweenLite.fromTo('#whenwhere', 1.5,
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
  TweenLite.fromTo('#answer', 1.5,
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
  TweenLite.to('#first-page',2.5,{
    y:'-60%',
    onComplete:function(e) {
      var q=document.getElementById('question');
      q.parentNode.removeChild(q);
      var a=document.getElementById('answer');
      a.parentNode.removeChild(a);
      showLogo();
    }
  });
  TweenLite.to('#question', 2.5,{
    //top:'0',
    opacity:0
  });
  // TweenLite.to('#whenwhere', 2.5,{
  //   top:'10%'
  // });
  TweenLite.to('#answer', 2.5,
  {
    //top:'20%',
    opacity:0,   
  });
}

function showLogo() {
  var oc=document.getElementById('outer-circle');
  oc.style.width=width*0.4;
  oc.style.height=width*0.4;
  oc.style.marginLeft=width*-0.2;
  oc.style.opacity=1;  
  var oc=document.getElementById('inner-circle');
  oc.style.width=width*0.21;
  oc.style.height=width*0.21;
  oc.style.marginLeft=width*-0.105;
  oc.style.marginTop=width*-0.105;
  oc.style.opacity=1;

  TweenLite.to('#logo', 2,
  // {
  //   //backgroundImage:'url(img/icon_logo.png) no-repeat',
  //   //backgroundSize:'auto,100%',
  //   width:'306%',
  //   marginLeft:'-153%'
  // },
  {
    delay:.5,
    width:'306%',
    marginLeft:'-153%',
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
  var realHeight=width*1.5;
  canvas=document.getElementById('words-canvas');
  canvas.style.top=(height-realHeight)/2+'px'
  canvas.width  = width;
  canvas.height = realHeight;
  
  bufCanvas = document.createElement('canvas');
  var canvasWidth=760;
  var canvasHeight=canvasWidth*1.5;
  bufCanvas.width = canvasWidth;
  bufCanvas.height = canvasHeight;

  var top=canvasHeight*0.28;
  var base=canvasWidth*0.09;
  
  var words=[
    {txt:'CHURN',size:0.13,baseLine:'Bottom',align:'right',x:canvasWidth/2-base*0.3,y:top},
    {txt:'WECHAT',size:0.25,baseLine:'Bottom',align:'left',x:canvasWidth/2-base*0.25,y:top-base*0.05},
    {txt:'H5',size:0.32,baseLine:'bottom',align:'right',x:canvasWidth/2-base*1.1,y:top+base*0.65},
    {txt:'BANNER',size:0.28,baseLine:'top',align:'right',x:canvasWidth/2-base*1.1,y:top+base*0.6},
    {txt:'LBS',size:0.3,baseLine:'bottom',align:'left',x:canvasWidth/2+base*1.1,y:top+base*0.55},
    {txt:'TAG',size:0.45,baseLine:'top',align:'left',x:canvasWidth/2+base*1.1,y:top+base*0.5},
    {txt:'CPM',size:0.55,baseLine:'top',align:'right',x:canvasWidth/2-base*1.25,y:top+base*0.8},
    {txt:'PPC',size:0.6,baseLine:'top',align:'right',x:canvasWidth/2-base*1.48,y:top+base*1.25},
    {txt:'WEBSITE',size:0.22,baseLine:'top',align:'left',x:canvasWidth/2-base*2.6,y:top+base*1.8},
    {txt:'MAU',size:0.25,baseLine:'top',align:'left',x:canvasWidth/2-base*1.25,y:top+base*0.9},
    {txt:'CONVERSION',size:0.22,baseLine:'top',align:'left',x:canvasWidth/2+base*0.7,y:top+base*0.95},
    {txt:'SEO',size:0.6,baseLine:'top',align:'left',x:canvasWidth/2+base,y:top+base*1.1},
    {txt:'RTB',size:0.65,baseLine:'top',align:'left',x:canvasWidth/2+base*1.15,y:top+base*1.55},
    {txt:'SEM',size:0.6,baseLine:'top',align:'left',x:canvasWidth/2+base*1.15,y:top+base*2.1},
    {txt:'ADs',size:0.6,baseLine:'top',align:'right',x:canvasWidth/2+base*1.9,y:top+base*2.6},
    {txt:'ASO',size:0.25,baseLine:'top',align:'left',x:canvasWidth/2+base*1.9,y:top+base*2.65},
    {txt:'DM',size:0.35,baseLine:'top',align:'right',x:canvasWidth/2+base*0.65,y:top+base*2.9},
    {txt:'MOBILE',size:0.45,baseLine:'top',align:'right',x:canvasWidth/2+base*1.5,y:top+base*3.2},
    {txt:'CPC',size:0.7,baseLine:'top',align:'right',x:canvasWidth/2+base*0.95,y:top+base*3.5},
    {txt:'DAU',size:0.15,baseLine:'top',align:'left',x:canvasWidth/2+base,y:top+base*3.6},
    {txt:'GMV',size:0.15,baseLine:'top',align:'left',x:canvasWidth/2+base*0.85,y:top+base*3.8},
    {txt:'SOCIAL',size:0.45,baseLine:'top',align:'center',x:canvasWidth/2+base*0.25,y:top+base*4.1},
    {txt:'SSP',size:0.7,baseLine:'top',align:'center',x:canvasWidth/2,y:top+base*4.5},
    {txt:'MRR',size:0.2,baseLine:'top',align:'right',x:canvasWidth/2-base*0.25,y:top+base*5.15},
    {txt:'WEIBO',size:0.25,baseLine:'top',align:'left',x:canvasWidth/2-base*0.2,y:top+base*5.1},
    {txt:'EDM',size:1,baseLine:'top',align:'center',x:canvasWidth/2,y:top},
    {txt:'DSP',size:0.7,baseLine:'top',align:'center',x:canvasWidth/2,y:top+base*5.7},
    {txt:'SMS',size:0.7,baseLine:'top',align:'center',x:canvasWidth/2,y:top+base*6.2},
    {txt:'TRACKING',size:0.3,baseLine:'top',align:'center',x:canvasWidth/2,y:top+base*6.8},
    
    
  ];
  var ctx = bufCanvas.getContext("2d");
  
  var w=canvasWidth/2;
  var h=canvasHeight/5;
  function initWords(base,len){
    for(var i=base;i<len;i++){
      var word=words[i];
      word.startSize=word.size+Math.random();
      var x,y;
      var line=Math.floor((i-base)/2);
      var m=i%2;
      if(m===0){
        x=Math.random()*w;
      }else{
        x=Math.random()*w+w;
      }
      y=Math.random()*h+line*h;
      word.running=true;
      word.startX=x;
      word.startY=y;
      word.start=Date.now();
    }
  }
  initWords(0,10);
  setTimeout(function(){
    initWords(10,20);
  },200);
  setTimeout(function(){
    initWords(20,29);
  },400);
  
  // ctx.fillStyle='rgba(255, 255, 255,1)';
  // words.forEach(function(word){
  //   var fontSize=word.size*base;
  //   ctx.font='bold '+fontSize.toString()+'px Arial';
  //   ctx.textBaseline = word.baseLine;
  //   ctx.textAlign=word.align;
  //   ctx.fillText(word.txt,word.x,word.y);
  // });
  // canvas.getContext('2d').drawImage(bufCanvas,0,0,canvasWidth,canvasHeight,0,0,width,realHeight);
  
  animate();
  var duration=2000,draw=true,fps=15,fpsInterval=1000/fps,elap,then=Date.now();
  
  function loop(){
    var now = Date.now();
    elap = now - then;
    if (elap < fpsInterval) {
      return requestAnimationFrame(loop);
    }
    then = now - (elap % fpsInterval);
    ctx.clearRect(0, 0, canvasWidth, canvasHeight);
    words.forEach(function(word){
      if(word.running){
        var elapsed= now - word.start;
        var percent= elapsed/duration;
        if(percent<1){
          ctx.fillStyle='#fff';
          //ctx.fillStyle='rgba(255, 255, 255,'+(percent*0.6+0.4).toString() +')';
          ctx.font='bold '+(((word.size-word.startSize)*percent+word.startSize)*base).toString()+'px Arial';
          ctx.textBaseline =word.baseLine;// 'middle';
          ctx.textAlign=word.align;//'center';
        //ctx.shadowBlur=20;
        //ctx.shadowColor="#fff";
        //ctx.shadowOffsetX = 6;
        //ctx.shadowOffsetY = 6;
          word.curX=(word.x-word.startX)*percent+word.startX;
          word.curY=(word.y-word.startY)*percent+word.startY;
          ctx.fillText(word.txt,word.curX,word.curY);
        }else{
          word.running=false;
          word.end=true;
        }
      }
      if(word.end){
        ctx.fillStyle='#fff';
        var fontSize=word.size*base;
        ctx.font='bold '+fontSize.toString()+'px Arial';
        ctx.textBaseline = word.baseLine;
        ctx.textAlign=word.align;
        ctx.fillText(word.txt,word.x,word.y);
      }
    });
    if(draw){
      canvas.getContext('2d').clearRect(0, 0, width, realHeight);
      canvas.getContext('2d').drawImage(bufCanvas,0,0,canvasWidth,canvasHeight,0,0,width,realHeight);
      requestAnimationFrame(loop);
    }
    draw=words.filter(function(x){  return x.running}).length>0;
  }
  loop();
}
ready(init);

function Font(txt,size){
  this.txt=txt;
  this.size=size;
}



window.requestAnimFrame = (function(callback) {
  return window.requestAnimationFrame || window.webkitRequestAnimationFrame
   || window.mozRequestAnimationFrame || window.oRequestAnimationFrame
   || window.msRequestAnimationFrame || function(callback) {
          window.setTimeout(callback, 1000 / 60);
   };
})();