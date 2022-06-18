const btn = document.querySelectorAll("button")
// console.log(btn)
btn.forEach(function(button,index){
    button.addEventListener("click", function(event){{
        var btnItem = event.target
        var product = btnItem.parentElement
        var productImg = product.querySelector("img").src
        var productName = product.querySelector("h1").innerText
        var productPrice = product.querySelector("span").innerText
        addcart(productPrice,productImg,productName)
    }})

})
function addcart(productPrice,productImg,productName){
    var addtr = document.createElement("tr")
    var cartItem = document.querySelectorAll("tbody tr")
    for (var i=0;i<cartItem.length;i++){
        var productT = document.querySelectorAll(".title")
        if(productT[i].innerHTML == productName ) {
            alert("Sản phẩm của bạn đã có trong giỏ hàng")
            return
        }
    }
    var trcontent = ' <tr><td col="2" style="display: flex; flex-wrap:wrap; align-items: center;"><img style="width: 70px" src="' + productImg + '" alt=""><span class="title" style="width:70%">'
        + productName + '</span><span class="cart-delete" style="width:53%;cursor: pointer;" > Xóa </span></td><td><span class="prices">' + productPrice +
        '</span><sub>đ</sub></td><td><input style="width: 30px;outline: none;" type="number" value="1" min="1"  onmouseup="totalPrice(this,' + productPrice + ')"></td><td style="cursor:pointer;" id="total">' + productPrice + '</td></tr>'
    addtr.innerHTML = trcontent
    var cartTable = document.querySelector("tbody")
    cartTable.append(addtr)

    carttotal()
    deleteCart()
}
// TỔNG TIỀN TỪNG SẢN PHẨM
function totalPrice(e, price){
    let t = e.parentElement.nextElementSibling;
    t.innerHTML = e.value *price + ".000 Đ";
}
// TỔNG TIỀN
function carttotal(){
    var cartItem = document.querySelectorAll("tbody tr")
    var totalC = 0
    for (var i=0;i<cartItem.length;i++){
        var inputValue = cartItem[i].querySelector("input").value
        // console.log(inputValue)
        var productPrice = cartItem[i].querySelector(".prices").innerHTML
        // console.log(productPrice)
        totalA = inputValue*productPrice*1000
        // totalB = totalA.toLocaleString('de-DE')
        // console.log(totalB)
        totalC = totalC + totalA
        // console.log(totalC)
        // totalD = totalC.toLocaleString('de-DE')
    }
    var cartTotalA = document.querySelector(".price-total span")
    cartTotalA.innerHTML = totalC.toLocaleString('de-DE')
    inputchange()

}
// XÓA SẢN PHẨM
function deleteCart(){
    var cartItem = document.querySelectorAll("tbody tr")
    for (var i=0;i<cartItem.length;i++){
        var productT = document.querySelectorAll(".cart-delete")
        productT[i].addEventListener("click", function(event){
            var cartDelete = event.target
            var cartItemR = cartDelete.parentElement.parentElement
            cartItemR.remove()
            carttotal()
            // console.log(cartItemR)

        })
        
    }

}
// Thay đổi select tăng tiền
function inputchange(){
    var cartItem = document.querySelectorAll("tbody tr")
    for (var i=0;i<cartItem.length;i++){
        var inputValue = cartItem[i].querySelector("input")
        inputValue.addEventListener("change",function(){
            carttotal()
        })
            // console.log(cartItemR)
        
    }
}