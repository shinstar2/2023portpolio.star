$(function(){


  // start 부분
  
let start = gsap.matchMedia();

start.add("(min-width:1025px)", () => {
 
  gsap.to('.header-bottom > *',{
    yPercent:100,
    opacity:1,
    stagger:.1,
    invalidateOnRefresh: true,
  })
  
  const title = new SplitType('.header-top span', { types: 'words, chars', });
  
  gsap.from(title.chars,{
    delay:.5,
    yPercent:100,
    stagger:{
        amount:.5,
  
    }, 
    invalidateOnRefresh: true,
  })
  
  
  
  const barMotion = gsap.timeline({
    delay:.7,
  })
  
  barMotion
  .from('.header-top .bar',{
    xPercent:-100,
  
  })
  .from('.sc-intro .intro-box1 .bar',{
    xPercent:-100,
  
  })
  .from('.sc-intro .intro-box2 .bar',{
    xPercent:-100,
  })
  .from('.sc-intro .intro-box3 .bar',{
    xPercent:-100,
  })
  
  // intro split
  const split = new SplitType('.sc-intro .txt1', { types: 'words, chars',});
  gsap.from(split.chars,{
    delay:1,
    yPercent:100,
    stagger:{
        amount:.9,
  
    }, 
  });
  
  gsap.from('.menu-list a',{
    delay:1,
    yPercent:100,
    opacity:0,
    stagger:{
        amount:.9,
  
    }, 
  })
});



//responsive
let mm = gsap.matchMedia();

mm.add("(min-width: 1025px)", () => {
  const pjTitle = new SplitType('.sc-project .title strong', { types: 'words, chars', });
    const pjMotion = gsap.timeline({
    scrollTrigger:{
      trigger:'.sc-project',
      start:'-10% 60%',
      end:'5% 50%',
      scrub:1,
      invalidateOnRefresh: true,
    },
  
  })
  pjMotion
  .to(pjTitle .chars,{
    yPercent:-100,
    stagger:{
        amount:1,
        from:'random'
    }, 
  })
  .to('.sc-project .bar',{
    width:'100%',
  });


});





  
  

  

  // study

let studyMotion = gsap.matchMedia();

studyMotion.add("(min-width: 1025px)", () => {
  const study = new SplitType('.sc-study .title', { types: 'words, chars',});
  const studyTitle = gsap.timeline({
    scrollTrigger:{
      trigger:'.sc-study',
      start:'-20% 60%',
      end:'0% 50%',
      scrub:1,

    },
  })
  studyTitle
  .from(study.chars,{
    yPercent:100,
    stagger:{
        amount:.9,
    }, 
  })
  .to('.sc-study .bar',{
    width:'100%',
    invalidateOnRefresh: true,
  })

  
});
  
  // button-top
  
  let lastScroll=0;
  $(window).scroll(function(){
      curr = $(this).scrollTop();

          if (curr > lastScroll) {
              $('.btn-top').removeClass('show');
          } else {
              $('.btn-top').addClass('show');
          }

          if(curr < 100){
              $('.btn-top').removeClass('show');
          }
          lastScroll = curr;
  })
  $('.btn-top').click(function(){
    window.scrollTo({top:0,behavior:'smooth',});

})

$('.menu-list .menu').click(function(e){
  e.preventDefault();
  targetPos = $(this).data('pos');
  resultOffset = $(targetPos).offset().top;
  window.scrollTo({top:resultOffset,behavior:'smooth',});
})


// project-hover

  const headTxt = new SplitType('.sc-project .hover-txt span', { types: 'words, chars', });
  gsap.set('.item .char',{yPercent:100,});

  const marMotion = gsap.to('.item .char', {
    delay:0.3,
      yPercent:0,
        stagger:{
            amount:0.5,
            from:'random',
            loop:true,
        },   
        paused:true,
    });

    $(".sc-project .item").hover(function(){
    marMotion.restart();
    },function(){});


// project-info

$('.project-link1 .btn-info').hover(function(){
  $('.project-link1 .info-box').css('opacity','1');},function(){
    $('.project-link1 .info-box').css('opacity','0').css('z-index','0')
});
$('.project-link2 .btn-info').hover(function(){
  $('.project-link2 .info-box').css('opacity','1');},function(){
    $('.project-link2 .info-box').css('opacity','0').css('z-index','0')
});
$('.project-link3 .btn-info').hover(function(){
  $('.project-link3 .info-box').css('opacity','1');},function(){
    $('.project-link3 .info-box').css('opacity','0').css('z-index','0')
});
$('.project-link4 .btn-info').hover(function(){
  $('.project-link4 .info-box').css('opacity','1');},function(){
    $('.project-link4 .info-box').css('opacity','0').css('z-index','0')
});
$('.project-link5 .btn-info').hover(function(){
  $('.project-link5 .info-box').css('opacity','1');},function(){
    $('.project-link5 .info-box').css('opacity','0').css('z-index','0')
});
$('.project-link6 .btn-info').hover(function(){
  $('.project-link6 .info-box').css('opacity','1');},function(){
    $('.project-link6 .info-box').css('opacity','0').css('z-index','0')
});
$('.project-link7 .btn-info').hover(function(){
  $('.project-link7 .info-box').css('opacity','1');},function(){
    $('.project-link7 .info-box').css('opacity','0').css('z-index','0')
});

// const percentMotion = gsap.timeline({})

// percentMotion
// .to('.loader',{
//   delay:0.2,duration:2,background:'#00f',
//   onUpdate:function(){
//    $('.loader').html(this.progress()*100);}
//   })
//   .to('.loader',{
//     delay:.5,
//     opacity:0,
//   })

})