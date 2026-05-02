// 1. 좋아요 기능
const heart = document.getElementById('heart');
let isLiked = false;
let likeNum = 42;

heart.addEventListener('click', function() {
    if (isLiked) {
        heart.src = './image/heart-off.png'
        likeNum--;
        likeCount.innerHTML = `좋아요 ${likeNum}개`
        isLiked = false;
    } else {
        heart.src = './image/heart-on.png'
        likeNum++;
        likeCount.innerHTML = `좋아요 ${likeNum}개`
        isLiked = true;
    }
});

// 2. 북마크 기능
const bookmark = document.getElementById('bm');
let isbookmarked = false;

bookmark.addEventListener('click', function() {
    if (isbookmarked) {
        bookmark.src = './image/bookmark-off.png'
        isbookmarked = false;
    } else {
        bookmark.src = './image/bookmark-on.png'
        isbookmarked = true;
    }
});

// 3. 더보기 기능
const moreBtn = document.getElementById('more-btn');
const hideBtn = document.getElementById('hide-btn');
const subText = document.getElementById('subText');

moreBtn.addEventListener('click', function() {
    subText.style.display = 'block';
    moreBtn.style.display = 'none';
    hideBtn.style.display = 'inline';
});

hideBtn.addEventListener('click', function() {
    subText.style.display = 'none';
    moreBtn.style.display = 'inline';
    hideBtn.style.display = 'none';
});

// 4. 추가 - 슬라이드 기능
const locationEl = document.getElementById('location');
const bgmEl = document.getElementById('bgm');

let isLocationShowing = true;

setInterval(function() {
    if (isLocationShowing) {
        locationEl.style.opacity = '0';
        locationEl.style.transform = 'translateY(-20px)';
        
        bgmEl.style.opacity = '1';
        bgmEl.style.transform = 'translateY(0)';
        
        isLocationShowing = false;
    } else {
        locationEl.style.opacity = '1';
        locationEl.style.transform = 'translateY(0)';
        
        bgmEl.style.opacity = '0';
        bgmEl.style.transform = 'translateY(20px)';
        
        isLocationShowing = true;
    }
}, 3000);