var width,height;
var canvas,bufCanvas
var playSound=true;
var audio=null;
var playing=false;
var outter=null;

function animate(){
  var outerWidth=width*1.2;
  var outerTo=outerWidth+'px';
  var outerMLTo=-outerWidth/2+'px';
  var outerFrom=outerWidth*2+'px';
  var outerMLFrom=-outerWidth+'px';
  TweenLite.fromTo('#first-outer', 3,
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
    delay:2.5,
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
  TweenLite.fromTo('#first-inner', 3,
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
    delay:2.5,
    transform:'scale(1)',
    // width:innerTo,
    // height:innerTo,
    // marginLeft:innerMLTo,
    // marginTop:innerMLTo,
    onComplete:function(e) {
      TweenLite.to('#first-outer',1,{delay:1,opacity:0});
      TweenLite.to('#first-inner',1,{delay:1,opacity:0});
    }
  });
  
  TweenLite.to(canvas,1,{
    delay:7,
    y:'-20%',
    onComplete:function(){
      TweenLite.fromTo('#question', 1,
      {
        opacity:1,
        transform:'scale(2)',
        ease: Power1.easeIn,
        //webkitFilter:'blur(10px)',
      },
      {
        borderColor:'#fff',
        backgroundColor:'rgba(5,3,4,0.35)',
        transform:'scale(1)',
        //webkitFilter:'blur(0)',
        onComplete:function(e) {
          // var q=document.getElementById('question');
          // q.style.borderColor='#fff';
          // q.style.backgroundColor='rgba(5,3,4,0.35)';
          setTimeout(function(){whenWhere();},1000);
        }
      });
    }
  });
  
  
  
}

function whenWhere(){
  TweenLite.fromTo('#whenwhere', 1,
  {
    opacity:0.5,transform:'scale(2)',
    //fontSize:'6em',width:'80%',marginLeft:'-40%',
    //webkitFilter:'blur(10px)'
  },
  {
    opacity:1,
    transform:'scale(1)',
    ease: Power1.easeIn,
    //fontSize:'4em',width:'60%',marginLeft:'-30%',
    //webkitFilter:'blur(0)',
    onComplete:function(e) {
      setTimeout(function(){
       // alert(JSON.stringify(document.getElementById('whenwhere').style))
        answer();  
      },600);
      
    }}
  );
}
function answer(){
  TweenLite.fromTo('#answer', 1,
  {
    opacity:0.5,transform:'scale(2)',
    //webkitFilter:'blur(10px)'
  },
  {
    opacity:1,
    transform:'scale(1)',
    ease: Power1.easeIn,
    //webkitFilter:'blur(0)',
    onComplete:function(e) {
      setTimeout(function(){moveUp();},500);
    }}
  );
}

function moveUp() {
  TweenLite.to('#question', 2.5,{
    opacity:0
  });
  TweenLite.to('#answer', 2.5,
  {
    opacity:0,
  });
  TweenLite.to('#first-page',2.5,{
    y:'-60%',
    onComplete:function(e) {
      TweenLite.to('#question', 1,{
        y:'-10%'
      });
      
      // var q=document.getElementById('question');
      // q.parentNode.removeChild(q);
      // var a=document.getElementById('answer');
      // a.parentNode.removeChild(a);
      showLogo();
    }
  });
  
}

function showLogo() {
  var outerHeight=width*0.4;
  //var oc=document.getElementById('outer-circle');
  var innerTop=height*0.2+outerHeight/2;
  // oc.style.width=width*0.4;
  // oc.style.height=width*0.4;
  // oc.style.marginLeft=width*-0.2;
  // oc.style.opacity=1;
  // var oc=document.getElementById('inner-circle');
  // oc.style.width=width*0.21;
  // oc.style.height=width*0.21;
  // oc.style.marginLeft=width*-0.105;
  // oc.style.marginTop=width*-0.105;
  // oc.style.opacity=1;
  
  TweenLite.fromTo('#inner-circle',0.6,{
    top:innerTop,
    opacity:1,
    width:width*0.21,
    height:width*0.21,
    marginLeft:width*-0.105,
    marginTop:width*-0.105,
    transform:'scale(0)',
  },{
    transform:'scale(1)',
    ease: Power1.easeIn
  });
  TweenLite.fromTo('#outer-circle',0.4,{
    opacity:1,
    width:width*0.4,
    height:width*0.4,
    marginLeft:width*-0.2,
    //marginTop:width*-0.2,
    transform:'scale(0.5)',
  },{
    delay:1,
    transform:'scale(1)',
    ease: Power2.easeIn
  });
  
  
  TweenLite.to('#logo', 2,
  // {
  //   //backgroundImage:'url(img/icon_logo.png) no-repeat',
  //   //backgroundSize:'auto,100%',
  //   width:'306%',
  //   marginLeft:'-153%'
  // },
  {
    delay:2,
    width:'312%',
    marginLeft:'-156%',
    onComplete:function() {
      subject();
    }
  });
}

function subject() {
  TweenLite.fromTo('#subject', 1,
  {
    opacity:1,transform:'scale(2)',
    webkitFilter:'blur(10px)'
  },
  {
    transform:'scale(1)',
    webkitFilter:'blur(0)',
    onComplete:function(e) {
      setTimeout(function(){
        var btn=document.getElementById('btn');
        btn.style.opacity=1;  
      },500);
      
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
function getUrlParam(name,location) {
  var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"); //构造一个含有目标参数的正则表达式对象
  var r = location.search.substr(1).match(reg);  //匹配目标参数
  if (r) return decodeURI(r[2]); return null; //返回参数值
}

function init() {
  var btn=document.getElementById('btn');
  btn=btn.getElementsByTagName('button')[0];
  btn.addEventListener('click',function(){
    var url="http://host.convertlab.com/page/1238467299/e62b6509f30c4892ae0640cc59806884";
    //debugger
    //alert(JSON.stringify(window.location));
    //if(parent.frames.length){
      
      var sr=getUrlParam('cl_sr',window.location);
      var ctnm=getUrlParam('cl_ctnm',window.location);
      if(sr){
        if(ctnm=='121'){
          url='http://host.convertlab.com/page/1238467299/066b450b5c66474da9fe1d5c98b05301'+'?cl_sr='+sr;
        }else if(ctnm=='%E4%B8%80%E5%AF%B9%E4%B8%80%E9%82%80%E8%AF%B7%E5%87%BD'){
          url='http://host.convertlab.com/page/1238467299/066b450b5c66474da9fe1d5c98b05301'+'?cl_sr='+sr;
        }else{
          url=url+'?cl_sr='+sr;
        }
      }
    //}
    window.location.href=url;
  });
  
  
  //var plr=document.querySelector('.plyr');
  // plr.addEventListener('ready', function(event) {
  //   console.log("r")
  // });
  //plr.addEventListener('canplay', function(event) {
    // alert('cp');
    // event.target.plyr.play();
  //});
  //var a=plyr.setup(plr, {"autoplay":true,controls:[],volume:5})[0];
  
  width=document.body.offsetWidth;
  height=document.body.offsetHeight;
  var realHeight=width*1.6;
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
    {txt:'新媒体',size:0.13,baseLine:'Bottom',align:'right',x:canvasWidth/2-base*0.3,y:top,running:true},
    {txt:'SOCIAL',size:0.25,baseLine:'Bottom',align:'left',x:canvasWidth/2-base*0.25,y:top-base*0.05,running:true},
    {txt:'DM',size:0.32,baseLine:'bottom',align:'right',x:canvasWidth/2-base*1.1,y:top+base*0.65,running:true},
    {txt:'BANNER',size:0.28,baseLine:'top',align:'right',x:canvasWidth/2-base*1.1,y:top+base*0.6,running:true},
    {txt:'社交',size:0.3,baseLine:'bottom',align:'left',x:canvasWidth/2+base*1.1,y:top+base*0.55,running:true},
    {txt:'粉丝',size:0.45,baseLine:'top',align:'left',x:canvasWidth/2+base*1.1,y:top+base*0.5},
    {txt:'直播',size:0.5,baseLine:'top',align:'right',x:canvasWidth/2-base*1.25,y:top+base*0.8},
    {txt:'分众',size:0.56,baseLine:'top',align:'right',x:canvasWidth/2-base*1.48,y:top+base*1.25},
    {txt:'用户标签',size:0.22,baseLine:'top',align:'left',x:canvasWidth/2-base*2.6,y:top+base*1.8},
    {txt:'网站',size:0.25,baseLine:'top',align:'left',x:canvasWidth/2-base*1.25,y:top+base*0.9},
    {txt:'iBeacon',size:0.25,baseLine:'top',align:'left',x:canvasWidth/2+base*1.1,y:top+base*0.95},
    {txt:'SEO',size:0.6,baseLine:'top',align:'left',x:canvasWidth/2+base,y:top+base*1.1},
    {txt:'RTB',size:0.65,baseLine:'top',align:'left',x:canvasWidth/2+base*1.15,y:top+base*1.55},
    {txt:'SEM',size:0.6,baseLine:'top',align:'left',x:canvasWidth/2+base*1.15,y:top+base*2.1},
    {txt:'VR',size:0.6,baseLine:'top',align:'right',x:canvasWidth/2+base*1.9,y:top+base*2.6},
    {txt:'流失',size:0.25,baseLine:'top',align:'left',x:canvasWidth/2+base*1.9,y:top+base*2.65},
    {txt:'H5',size:0.35,baseLine:'top',align:'right',x:canvasWidth/2+base*0.95,y:top+base*2.9},
    {txt:'MOBILE',size:0.45,baseLine:'top',align:'right',x:canvasWidth/2+base*1.85,y:top+base*3.2},
    {txt:'微信',size:0.5,baseLine:'top',align:'right',x:canvasWidth/2+base*0.95,y:top+base*3.6},
    {txt:'大V',size:0.15,baseLine:'top',align:'left',x:canvasWidth/2+base,y:top+base*3.6},
    {txt:'视频',size:0.15,baseLine:'top',align:'left',x:canvasWidth/2+base*0.85,y:top+base*3.8},
    {txt:'大数据',size:0.45,baseLine:'top',align:'center',x:canvasWidth/2+base*0.25,y:top+base*4.1},
    {txt:'微博',size:0.5,baseLine:'top',align:'center',x:canvasWidth/2,y:top+base*4.6},
    {txt:'AI',size:0.2,baseLine:'top',align:'right',x:canvasWidth/2-base*0.25,y:top+base*5.15},
    {txt:'埋点',size:0.25,baseLine:'top',align:'left',x:canvasWidth/2-base*0.2,y:top+base*5.1},
    {txt:'转化率',size:0.7,baseLine:'top',align:'center',x:canvasWidth/2,y:top+base*0.15},
    {txt:'网红',size:0.56,baseLine:'top',align:'center',x:canvasWidth/2,y:top+base*5.7},
    {txt:'SMS',size:0.57,baseLine:'top',align:'center',x:canvasWidth/2,y:top+base*6.2},
    {txt:'TRACKING',size:0.3,baseLine:'top',align:'center',x:canvasWidth/2,y:top+base*6.8},
    
    
  ];
  var ctx = bufCanvas.getContext("2d");
  
  var w=canvasWidth/2;
  var h=canvasHeight/3;
  for(var i=0;i<29;i++){
    var word=words[i];
    word.startSize= 3;
    var x,y;
    var line=Math.floor((i%6)/2);
    var m=i%2;
    if(m===0){
      x=Math.random()*w-200;
    }else{
      x=Math.random()*w+w+200;
    }
    y=Math.random()*h+line*h;
    
    word.startX=x;
    word.startY=y;
    var sequence=Math.floor(i/6);
    var now=Date.now();
    if(sequence>0){
      var t=new Date();
      word.start=t.setSeconds(t.getSeconds()+sequence);
    }else{
      word.start=now;
    }
    word.running=true;    
  }
  //debugger;
  // function initWords(base,len){
  //   for(var i=base;i<len;i++){
  //     var word=words[i];
  //     word.startSize= 2.5; //word.size+Math.random();
  //     var x,y;
  //     var line=Math.floor((i-base)/2);
  //     var m=i%2;
  //     if(m===0){
  //       x=Math.random()*w-300;
  //     }else{
  //       x=Math.random()*w+w+300;
  //     }
  //     y=Math.random()*h+line*h;
  //     word.running=true;
  //     word.startX=x;
  //     word.startY=y;
  //     word.start=Date.now();
  //   }
  // }
  // initWords(0,4);
  // setTimeout(function(){
  //   initWords(4,8);
  // },600);
  // setTimeout(function(){
  //   initWords(8,12);
  // },1200);
  // setTimeout(function(){
  //   initWords(12,16);
  // },1800);
  // setTimeout(function(){
  //   initWords(16,20);
  // },2400);
  // setTimeout(function(){
  //   initWords(20,24);
  // },3000);
  // setTimeout(function(){
  //   initWords(24,29);
  // },3600);
  
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
  var duration=1500,draw=true,fps=15,fpsInterval=1000/fps,elap,then=Date.now();
  
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
        if(elapsed<0){
          return;
        }
        var percent= elapsed/duration;
        if(percent<1){
          //ctx.fillStyle='#fff';
          ctx.fillStyle='rgba(255, 255, 255,'+(percent*0.6+0.4).toString() +')';
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
ready(loading);

function loading() {
  var soundLoaded=false;
  var imgLoaded=false;
  outter=document.getElementById('outter');
  audio=document.getElementById('sound');
  function audioListener(){
    soundLoaded=true;
    start();
  }
  audio.addEventListener('canplaythrough',audioListener);
  audio.addEventListener('load',function(){
    setTimeout(audioListener,10000);
  });
  audio.src='http://fabuhui.oss-cn-shanghai.aliyuncs.com/img/sound.mp3';
  audio.load();
  var loaded=0;
  var images=[
    'http://fabuhui.oss-cn-shanghai.aliyuncs.com/img/bg.jpg',
    'http://fabuhui.oss-cn-shanghai.aliyuncs.com/img/logo.png',
    'http://fabuhui.oss-cn-shanghai.aliyuncs.com/img/icon_sound.png',
    'http://fabuhui.oss-cn-shanghai.aliyuncs.com/img/icon_nosound.png'
  ];
  function onImgLoad(cb){
    loaded++;
    if(loaded===images.length){
      imgLoaded=true;
      start();
    }
  }
  function start(){
    if(soundLoaded && imgLoaded){
      outter.addEventListener('touchstart',play,true);
      outter.addEventListener('click',play,true);
      document.getElementsByClassName('clear-loading')[0].style.display='none';
      document.getElementById('start').style.display='block';
      document.getElementById('click').style.display='block';
    }
  }
  function play() {
    if(!playing){
      document.getElementById('start').style.display='none';
      document.getElementById('click').style.display='none';
      var soundBtn=document.getElementById('sound-btn');
      soundBtn.addEventListener('touchstart',function(){
        //audio.muted=playSound;
        playSound=!playSound;
        if(playSound){
          audio.play();
        }else{
          audio.pause();
        }
        soundBtn.src=playSound?'http://fabuhui.oss-cn-shanghai.aliyuncs.com/img/icon_sound.png':"http://fabuhui.oss-cn-shanghai.aliyuncs.com/img/icon_nosound.png"
      });
      soundBtn.style.display='block';
      outter.style.height='100px';
      playing=true;
      setTimeout(init,400);
      //audio.volume=0.4;
      audio.play();
      setInterval(function(){
        if(sndCount++<15){
          audio.play();
          //console.log(sndCount);
        }
        //audio.pause();
        // setTimeout(function() {
        //   audio.play();
        // }, 0);
      },1000);
    }
  }
  var img=[];
  for(var i=0;i<images.length;i++){
    img[i]=new Image();
    img[i].onload=onImgLoad;
    img[i].src=images[i];
  }
  
}
var sndCount=0;
window.requestAnimFrame = (function(callback) {
  return window.requestAnimationFrame || window.webkitRequestAnimationFrame
   || window.mozRequestAnimationFrame || window.oRequestAnimationFrame
   || window.msRequestAnimationFrame || function(callback) {
          window.setTimeout(callback, 1000 / 60);
   };
})();