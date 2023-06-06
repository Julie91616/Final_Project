var shop = document.getElementById('shopping_list');
var vip = document.getElementById('vip');
var closeX = document.getElementById('closeX');
var closeX_shop = document.getElementById('closeX_shop');
var page1 = document.getElementById('login_1');
var page2 = document.getElementById('login_2');
var go1 = document.getElementById('go1');
var go2 = document.getElementById('go2');


function shop_page() {
    if(shop.style.display=="none"){
        shop.style.display="flex";
        if(vip.style.display!="none")
            vip.style.display="none";
    }
    else
        shop.style.display="none";
}

closeX_shop.addEventListener('click', function(e) {
    e.preventDefault();
    shop.style.display="none";
});

function login_page() {
    if(vip.style.display=="none"){
        vip.style.display="flex";
        if(shop.style.display!="none")
            shop.style.display="none";
    }
    else
        vip.style.display="none";
}

closeX.addEventListener('click', function(e) {
    e.preventDefault();
    vip.style.display="none";
});

go1.addEventListener('click', function(e) {
    e.preventDefault();
    page2.style.display="none";
    page1.style.display="flex";
});

go2.addEventListener('click', function(e) {
    e.preventDefault();
    page1.style.display="none";
    page2.style.display="flex";
});


var menu = document.getElementById('drop-down');

function showmenu() {
    if(menu.style.display=="none")
        menu.style.display="inline-block";
    else
        menu.style.display="none";
}