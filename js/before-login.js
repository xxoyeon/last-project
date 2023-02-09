(function() {
    new fullpage('#full-page' , {
        navigation: true,
        navigationTooltips: ['MAIN', 'BEST PRODUCT', 'IF YOU LOGIN', 'COMMUNITY', 'SEARCH', 'FOOTER'],
        scrollingSpeed: 1200
    });
    
    //best-product 토글
    
    const productMenuList = document.querySelectorAll('.product-btn');
    const productImgList = document.querySelectorAll('.a');
    
    productMenuList.forEach((item, i) => {
        item.addEventListener('click', e => {
            productMenuList.forEach(subItem => {
                subItem.classList.toggle('btn-click', e.target === subItem);
            });
            productImgList.forEach((subItem, subI) => {
                subItem.classList.toggle('display-none', i !== subI);
            });
        });
    });

    //login 토글

    const toggleIcon = document.querySelectorAll('.toggle [class*=toggle-img]');
    const loginPetPage = document.querySelectorAll('[class*=login-pet]');

    toggleIcon.forEach((item, i) => {
        item.addEventListener('click', e => {
            toggleIcon.forEach(subItem => {
                subItem.classList.toggle('toggle-click', e.target === subItem);
            });
            loginPetPage.forEach((subItem, subI) => {
                subItem.classList.toggle('none-click', i !== subI);
            });
        });
    });
    
    //좋아요 버튼 & +
    
    const heart = document.querySelectorAll('.like_button');
    
    const heartNum = document.querySelectorAll('.heart_number');
    const likeNumArr = [ 213, 187, 240, 153, 301, 218 ];
    
    function numSum(){
        for(let i=0; i<heartNum.length; i++){
            heartNum[i].innerHTML = likeNumArr[i].toLocaleString('ko-KR');
        }
    }
    
    numSum();
    
    heart.forEach(likeIt => {
        const heartSum = likeIt.children;
        
        heartSum[0].addEventListener('click', e => {
            
            let heartReplace = null;
            
            if(heartSum[0].classList.contains('fa-solid')){
                e.target.classList.remove('fa-solid');
                heartReplace = parseInt(heartSum[1].textContent.replace(',', '')) - 1;
            } 
            else {
                e.target.classList.add('fa-solid');
                heartReplace = parseInt(heartSum[1].textContent.replace(',', '')) + 1;
            }
            
            heartSum[1].innerHTML = heartReplace.toLocaleString('ko-KR');
            
        });
    });
    
    //북마크 버튼
    
    var i = 0;
    $('.bi-bookmark').on('click',function(){
        if(i==0){
            $(this).removeClass('bi-bookmark');
            $(this).addClass('bi-bookmark-fill');
            i++;
        }else if(i==1){
            $(this).removeClass('bi-bookmark-fill');
            $(this).addClass('bi-bookmark');
            i--;
        }
        
    });
    
    //이벤트 배너
    
    var swiper = new Swiper(".mySwiper", {
        direction: "vertical",
        spaceBetween: 30,
        centeredSlides: true,
        loop: true,
        autoplay: {
            delay:3000,
            disableOnInteraction: false,
        }
    });


})()