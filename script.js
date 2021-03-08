document.addEventListener('DOMContentLoaded',function(){

    var $contents = document.querySelectorAll('#contents > section'),
        $menuTop = document.querySelectorAll('.menu_top li a'),
        $menuBot = document.querySelectorAll('.menu_bot li a'),
        $mainSlide = document.querySelectorAll('header .slide'),
        $mainSlideCount = $mainSlide.length,
        $pagerHTML = '',
        $pager = document.querySelector('.pager'),
        $mainSlideWrap = document.querySelector('.main_slide'),
        $mainCurrentIndex = 0,
        $headerPrev = document.querySelector('.nav_container .prev'),
        $headerNext = document.querySelector('.nav_container .next'),
        $reviewSlideWrap = document.querySelector('.review_slide'),
        $reviewSlide = document.querySelectorAll('.review_slide .slide'),
        $reviewSlideCount = $reviewSlide.length,
        $reviewCurrentIndex = 0,
        $reviewPrev = document.querySelector('#review .prev'),
        $reviewNext = document.querySelector('#review .next');

    for(var i = 0; i < $menuTop.length; ++i){
        $menuTop[i].addEventListener('click', function(ev){
            ev.preventDefault();
            var idx = this.getAttribute('data-num');
            var tt = $contents[idx].offsetTop;
            window.scroll({ 
                behavior: 'smooth',
                top: tt
            });
        });
        $menuBot[i].addEventListener('click', function(ev){
            ev.preventDefault();
            var idx = this.getAttribute('data-num');
            var tt = $contents[idx].offsetTop;
            window.scroll({ 
                behavior: 'smooth',
                top: tt
            });
        });
    }

    for(var i = 0; i < $mainSlideCount; ++i) {
        $mainSlide[i].style.left = 100*i + '%';
        $pagerHTML += '<span data-idx="'+i+'">'+(i+1)+'</span>';
        $pager.innerHTML = $pagerHTML;
    }
    for(var i = 0; i < $reviewSlideCount; ++i) {
        $reviewSlide[i].style.left = 100*i + '%';
    }
    var $pagerBtn = document.querySelectorAll('.nav_container .pager span');

    function goToMainSlide(idx){
        $mainSlideWrap.style.left = -100 * idx + '%';
        $mainCurrentIndex = idx;

        for(var i = 0; i < $pagerBtn.length; ++i){
            $pagerBtn[i].classList.remove('active');
        }
        $pagerBtn[idx].classList.add('active');
    }
    function goToReviewSlide(idx){
        $reviewSlideWrap.style.left = -100 * idx + '%';
        $reviewCurrentIndex = idx;
    }
    goToMainSlide(0);
    goToReviewSlide(0);

    $headerPrev.addEventListener('click',function(ev){
        ev.preventDefault();
        if($mainCurrentIndex == 0){
            goToMainSlide($slideCount-1);
        } else{
            goToMainSlide($mainCurrentIndex-1);
        }
    });
    $headerNext.addEventListener('click',function(ev){
        ev.preventDefault();
        if($mainCurrentIndex == $mainSlideCount-1){
            goToMainSlide(0);
        } else{
            goToMainSlide($mainCurrentIndex+1);
        }
    });

    $reviewPrev.addEventListener('click', function(ev){
        ev.preventDefault();
        if($reviewCurrentIndex == 0){
            goToReviewSlide($reviewSlideCount-1);
        } else{
            goToReviewSlide($reviewCurrentIndex-1);
        }
    });

    $reviewNext.addEventListener('click', function(ev){
        ev.preventDefault();
        if($reviewCurrentIndex == $reviewSlideCount-1){
            goToReviewSlide(0);
        } else{
            goToReviewSlide($reviewCurrentIndex+1);
        }
    });

    for(var i = 0; i < $pagerBtn.length; ++i){
        $pagerBtn[i].addEventListener('click',function(e){
            var $pagerNum = e.target.innerText - 1;
            goToMainSlide($pagerNum);
        })
    }
})