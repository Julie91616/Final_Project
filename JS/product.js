function pro_view(pro_items){
    Object.values(pro_items).forEach((item) => {
        document.write("<a href='"+item.a+"'>");
        document.write("<div class=card>");
        document.write("<img src="+item.photo+" />");
        document.write("<div>"+item.title+"&emsp;price: "+item.price+"&emsp;<i class=\"fa fa-shopping-cart\" aria-hidden=\"true\"></i></div>");
        document.write("</div></a>");
    });
}
