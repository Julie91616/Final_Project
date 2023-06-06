function head(){
    //header
    document.write('<a id="showmenu" onclick="showmenu()"><img src="image/icon/menu.png"></a>');
    document.write('<ul class="drop-down-menu" id="drop-down">');
    document.write('<li><a href="index.html"><img src="image/logo.png" style="height: 30px;"></a></li>');
    document.write('<li><a href="#">商品介紹</a>');
    document.write('<ul>');
    document.write('<li><a href="product_total.html">商品總覽</a></li>');
    document.write('<li><a href="product_total_namagashi.html">生菓子</a></li>');
    document.write('<li><a href="product_total_manjyu.html">日式饅頭</a></li>');
    document.write('<li><a href="product_total_getsupei.html">漢餅</a></li>');
    document.write('<li><a href="product_total_temiyage.html">禮盒</a></li>');
    document.write('</ul>');
    document.write('</li>');
    document.write('<li><a href="question.html">常見問題</a></li>');
    document.write('<li><a href="story.html">品牌故事</a></li>');
    document.write('<li><a href="aboutUS.html">關於我們</a></li>');
    document.write('<li><a href="VIP.html">會員中心</a></li>');
    document.write('</ul>');
    document.write('<nav>');
    document.write('<a onclick="search_page()"><img src="image/icon/search.png" class="icon"></a>');
    document.write('<a onclick="shop_page()"><img src="image/icon/shopping-trolley.png" class="icon"></a>');
    document.write('<a onclick="login_page()"><img src="image/icon/vip.png" class="icon"></a>');
    document.write('</nav>');


    //vip_view
    document.write('<div id="vip">');
    document.write('<div id="login_1">');
    document.write('<form action="">');
    document.write('<h1>登入會員</h1>');
    document.write('<input type="text" placeholder="帳號"><br>');
    document.write('<input type="text" placeholder="密碼"><br>');
    document.write('<button>登陸</button><button id="go2">我要註冊</button>');
    document.write('</form>');
    document.write('</div>');

    document.write('<div id="login_2">');
    document.write('<form action="">');
    document.write('<h1>註冊會員</h1>');
    document.write('<input type="text" placeholder="帳號"><br>');
    document.write('<input type="text" placeholder="輸入密碼"><br>');
    document.write('<input type="text" placeholder="確認密碼"><br>');
    document.write('<button>註冊</button><button id="go1">我要登陸</button>');
    document.write('</form>');
    document.write('</div>');

    document.write('<button id="closeX" class="btn_closeX">X</button>');
    document.write('</div>');


    //shoppinglist_view
    document.write('<div id="shopping_list">');
    document.write('<div id="shop">');
    document.write('<p>紅豆鹿子');
    document.write('&emsp;');
    document.write('1 x NT$480');
    document.write('<br>');
    document.write('栗子饅頭');
    document.write('&emsp;');
    document.write('2 x NT$540');
    document.write('<br>');
    document.write('<br>');
    document.write('合計: NT$1560</p>');
    document.write('<button>確定</button>');
    document.write('</div>');

    document.write('<button id="closeX_shop" class="btn_closeX">X</button>');
    document.write('</div>');
}


function foot(){
    document.write("<h6>copyright@滋養製菓</h6>");
}