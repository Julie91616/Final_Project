const itemobj = {
    0: {name: '紅豆鹿子', price: 'NT$480', introdnce: '外層顆粒飽滿的蜜漬紅豆，因形狀像鹿背上的斑紋，故得名「鹿子」。內餡為紅豆沙，中央夾著晶瑩果凍般的紅豆羊羹，每次咀嚼都能感受富層次的鬆綿與香甜。', information: '產品最佳賞味期: 冷藏5日。組合數量：8入, 12入, 15入。', context: '外面是粒粒飽滿的紅豆，裡面包的是紅豆沙及羊羹，吃起來豐富而多層次的口感！', img: 'image/1_namagashi/namagashi_tsubuan2.jpg'},
    1: {name: '蓮子鹿子', price: 'NT$540', introdnce: '外層為顆粒飽滿的蜜漬蓮子，內餡為白豆沙，中央夾著晶瑩果凍般的紅豆羊羹，每次咀嚼都能感受富層次的鬆綿與香甜。', information: '產品最佳賞味期: 冷藏5日。組合數量：8入, 12入, 15入。', context: '內餡是與蓮子味非常搭襯的白豆沙，中間有一小塊果凍質感的紅豆，美味極了！', img: 'image/1_namagashi/namagashi_hasunomi2.jpg'},
    2: {name: '紅豆饅頭', price: 'NT$540', introdnce: '如蛋糕口感的酥薄外皮，予人驚艷的舌尖饗宴，內餡為綿密細緻的紅豆沙，香甜滋味入口即化。', information: '產品最佳賞味期: 冷藏5日。組合數量：12入, 18入。', context: '吃起來的感覺像蛋糕口感的外皮又有包餡，就是好吃！', img: 'image/2_manjyu/manjyu_tsubuan2.jpg'},
    3: {name: '栗子饅頭', price: 'NT$540', introdnce: '酥脆的烤色表面光滑，令人著迷的光澤，裡面是濕潤的白豆沙，中間是切碎的栗子，具有令人印象深刻的蓬鬆質地。', information: '產品最佳賞味期: 冷藏5日。組合數量：12入, 18入。', context: '吃起來的味道，跟去日本買的一樣耶。', img: 'image/2_manjyu/manjyu_kuri2.jpg'},
    4: {name: '巧克力饅頭', price: 'NT$540', introdnce: '以麵粉與可可膏合製成的外皮，酥薄口感如蛋糕一般，並於外層灑滿可可粉，充分展現巧克力的魅力，內餡是綿密細緻的白小豆沙，微苦的可可巧妙中合豆沙的甜蜜，入口即化甜而不膩。', information: '產品最佳賞味期: 冷藏5日。組合數量：12入, 18入。', context: '這個東西，非常經典，好吃！', img: 'image/2_manjyu/manjyu_chocolate2.jpg'},
    5: {name: '白豆沙', price: 'NT$400', introdnce: '為古早味素中式大餅首選，伴手禮的最佳選擇，純白鳳豆精製，古法乾炒而成，口感細綿不黏，遵循古法製成的獨家燙油麵皮，布匹般柔軟具彈性口感。', information: '產品最佳賞味期: 冷藏5日。組合數量：8入, 12入, 15入。', context: '綿密細緻又甜而不膩的口感，我的首選！讚！', img: 'image/3_getsupei/getsupei_shiroan2.jpg'},
    6: {name: '綠豆椪', price: 'NT$400', introdnce: '嚴選特級綠豆製成香醇綿密的豆沙餡，口感綿密、甜度恰到好處，層層酥皮薄細如紙咬感極佳，一口咬下瞬間盈滿濃郁香氣。', information: '產品最佳賞味期: 冷藏5日。組合數量：8入, 12入, 15入。', context: '皮薄、綠豆仁不甜膩，很好吃！讚！', img: 'image/3_getsupei/getsupei_riyokutou2.jpg'},
    7: {name: '蛋黃酥', price: 'NT$560', introdnce: '餅皮使用特選高級麵粉以手工揉製桿平，在細緻的千層酥皮包覆之下，內餡嚴選飽滿鴨蛋製成鹹蛋黃，搭配著綿密細緻的紅豆沙，甜鹹滋味巧妙融合，是款經典不敗的傳統茶點。', information: '產品最佳賞味期: 冷藏5日。組合數量：8入, 12入, 15入。', context: '相較於一般的蛋黃酥，滋養製菓的餡跟蛋黃比例拿得相當好，一口咬下餅皮很薄又很酥，有蛋黃也有豆餡，比例十分好！推！！！', img: 'image/3_getsupei/getsupei_ranou2.jpg'},
    8: {name: '鳳梨酥', price: 'NT$550', introdnce: '金黃色澤的酥餅如餅乾一般爽脆，夾層為麥芽糖口感般的鳳梨餡，能嚐到果肉Q勁和天然的鳳梨香氣，咀嚼之間都是富層次的美味，以此創新吃法呈現傳統的老滋味，入口綿密彈牙，香香甜甜還吃得到果粒。', information: '產品最佳賞味期: 冷藏10日。組合數量：5入, 10入。', context: '', img: 'image/3_getsupei/getsupei_pineapple2.jpg'},
    9: {name: '黑芝麻酥', price: 'NT$660', introdnce: '金黃香酥的外皮予人驚艷的舌尖饗宴，搭配高營養價值的黑芝麻內餡，口感甜而不膩養生首選，綿密細緻的滋味令人垂涎難忘。', information: '產品最佳賞味期: 常溫5日。組合數量：12入, 18入。', context: '酥脆的口感、濃濃的芝麻香，好吃！', img: 'image/3_getsupei/getsupei_kurogoma2.jpg'},
    10: {name: '五福臨門伴手禮盒', price: 'NT$845', introdnce: '內容物：蜂蜜蛋糕*1、黑芝麻酥*3、銅鑼燒*2、巧克力饅頭*2、栗子饅頭*2、赤糖麻糬*2、果仁蛋糕*2', information: '產品最佳賞味期：冷藏3日', context: '太好吃了！推！', img: 'image/4_temiyage/temiyage1-2.jpg'},
    11: {name: '吉祥如意人氣禮盒', price: 'NT$1115', introdnce: '內容物：銅鑼燒 棗泥酥 果仁蛋糕 蜂蜜蛋糕 最中 栗子饅頭 燒饅頭 赤糖麻糬', information: '產品最佳賞味期：冷藏3日', context: '年節送禮的好夥伴！推！', img: 'image/4_temiyage/temiyage2-2.jpg'},
    12: {name: '大吉大利日本禮盒', price: 'NT$1325', introdnce: '內容物：鳯梨酥五入*1、最中三入*1、蜂蜜蛋糕*1、黑芝麻酥*3、棗泥酥*3、巧克力饅頭*3、栗子饅頭*3、果仁蛋糕*2', information: '產品最佳賞味期：冷藏5日', context: '好吃到滿出來，全家都喜歡，推！', img: 'image/4_temiyage/temiyage3-2.jpg'},
    13: {name: '喜餅禮盒', price: 'NT$945', introdnce: '內容物：鳯梨酥，黑芝麻酥，棗泥酥', information: '產品最佳賞味期：冷藏5日', context: '棗泥酥加鳳梨酥，夢幻組合呀！', img: 'image/4_temiyage/temiyage4-2.jpg'},
    14: {name: '彌月禮盒', price: 'NT$650', introdnce: '內容物：最中，銅鑼燒，蜂蜜蛋糕', information: '產品最佳賞味期：冷藏3日', context: '特別的日式和果子伴手禮店！包裝與口味很有日本味～推薦送禮佳節一定要購買！', img: 'image/4_temiyage/temiyage5-2.jpg'},
    15: {name: '迎春納福春節禮盒', price: 'NT$1265', introdnce: '內容物：蜂蜜蛋糕，鳳梨酥，燒饅頭，巧克力饅頭，果仁蛋糕，銅鑼燒，棗泥酥，黑芝麻酥', information: '產品最佳賞味期：冷藏3日', context: 'Good', img: 'image/4_temiyage/temiyage6-2.jpg'},
}; //各商品的詳細細節
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
let items;
window.onload = function(){
    setItem(itemobj[urlParams.get('id')]);
}
function setItem(obj){
    $("#commodity_img").attr("src", obj.img);
    $("#commodity_name").text(obj.name);
    $("#commodity_price").text(obj.price);
    $("#commodity_intr").text(obj.introdnce);
    $("#commodity_info").text(obj.information);
    //$("#commodity_context").text(obj.context);
}