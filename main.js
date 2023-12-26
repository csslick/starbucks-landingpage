// main.js
window.onload = function() {
  // 이미지, 배경 세팅값
  var titleData = [
    {
      imgUrl: 'images/img1.png',
      bgUrl: 'images/circle-pie1.svg'
    },
    {
      imgUrl: 'images/img2.png',
      bgUrl: 'images/circle-pie2.svg'
    },
    {
      imgUrl: 'images/img3.png',
      bgUrl: 'images/circle-pie3.svg'
    },
  ];

  // 이벤트
  $('.pager > ul > li').eq(0).click(function(){
    // 타이틀 제품 이미지
    $('.circle-bg svg .st0').css('fill', '#017143');
    $('#title figure img').attr('src', titleData[0].imgUrl)
  });

  $('.pager > ul > li').eq(1).click(function(){
    $('.circle-bg svg .st0').css('fill', '#ee7d9b');
    $('#title figure img').attr('src', titleData[1].imgUrl)
  });

  $('.pager > ul > li').eq(2).click(function(){
    $('.circle-bg svg .st0').css('fill', '#ba2d93'); 
    $('#title figure img').attr('src', titleData[2].imgUrl)  
  });

}
