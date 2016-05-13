var width,height;
var canvas,bufCanvas
function animate(){
    
  TweenLite.fromTo('#question', 1.5,
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
      //moveUp();
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
  
  var oc=document.getElementById('first-outer');
  var outerWidth=width*1.2,outerML=-outerWidth/2;
  oc.style.width=outerWidth;
  oc.style.height=outerWidth;
  oc.style.marginLeft=outerML;
  oc.style.marginTop=outerML;
  oc.style.opacity=1;
  
  var oc=document.getElementById('first-inner');
  var innerWidth=originalWidth=width*0.8,innerML=-innerWidth/2;
  oc.style.width=innerWidth;
  oc.style.height=innerWidth;
  oc.style.marginLeft=innerML;
  oc.style.marginTop=innerML;
  oc.style.opacity=1;
  
  canvas=document.body.querySelector('canvas');
  canvas.width  = width;
  canvas.height = height;
  
  bufCanvas = document.createElement('canvas');
  //innerWidth=800;
  bufCanvas.width = innerWidth;
  bufCanvas.height = innerHeight;

  var top=innerWidth*0.12;
  var base=innerWidth*0.1;
  
  var words=[
    {txt:'EDM',size:1,baseLine:'top',align:'center',x:innerWidth/2,y:top},
    {txt:'CHURN',size:0.1,baseLine:'Bottom',align:'right',x:innerWidth/2-base*0.25,y:top},
    {txt:'WECHAT',size:0.25,baseLine:'Bottom',align:'left',x:innerWidth/2-base*0.2,y:top-base*0.1},
    {txt:'H5',size:0.4,baseLine:'bottom',align:'right',x:innerWidth/2-base*1.1,y:top+base*0.6},
    {txt:'BANNER',size:0.3,baseLine:'top',align:'right',x:innerWidth/2-base*1.1,y:top+base*0.6},
    {txt:'LBS',size:0.3,baseLine:'bottom',align:'left',x:innerWidth/2+base*1.1,y:top+base*0.5},
    {txt:'TAG',size:0.45,baseLine:'top',align:'left',x:innerWidth/2+base*1.1,y:top+base*0.5},
    {txt:'CPM',size:0.55,baseLine:'top',align:'right',x:innerWidth/2-base*1.35,y:top+base*0.8},
    {txt:'MAU',size:0.3,baseLine:'top',align:'left',x:innerWidth/2-base*1.35,y:top+base*0.9},
    {txt:'CONVERSION',size:0.25,baseLine:'top',align:'left',x:innerWidth/2+base*0.7,y:top+base*0.9},
    {txt:'SEO',size:0.6,baseLine:'top',align:'left',x:innerWidth/2+base*0.9,y:top+base*1.1},
    
    {txt:'SSP',size:0.7,baseLine:'top',align:'center',x:innerWidth/2,y:innerWidth*0.6},
    {txt:'DSP',size:0.7,baseLine:'top',align:'center',x:innerWidth/2,y:innerWidth*0.75},
    {txt:'SMS',size:0.7,baseLine:'top',align:'center',x:innerWidth/2,y:innerWidth*0.8},
    {txt:'TRACKING',size:0.3,baseLine:'top',align:'center',x:innerWidth/2,y:innerWidth*0.87},
  ];
  var ctx = bufCanvas.getContext("2d");
  ctx.fillStyle='#fff';
  words.forEach(function(word){
    var fontSize=word.size*base;
    // if(fontSize<12){
    //   var scale=fontSize/12;
    //   ctx.scale(scale,scale);
    // }
    console.log(word.txt+fontSize);
    ctx.font='bold '+fontSize.toString()+'px Arial';
    ctx.textBaseline = word.baseLine;
    ctx.textAlign=word.align;
    ctx.fillText(word.txt,word.x,word.y);
  });
  
  // ctx.font='12px Arial';
  // ctx.textBaseline = 'center';
  // ctx.textAlign='left';
  // ctx.fillText('word.txt',10,20);
  
  canvas.getContext('2d').drawImage(bufCanvas,0,0,innerWidth,innerWidth,0,0,originalWidth,originalWidth);
  animate();
}
ready(init);

function Font(txt,size){
  this.txt=txt;
  this.size=size;
}