let buttonAdd = document.querySelectorAll(".btn-add")
let buttonRemove = document.querySelectorAll(".btn-remove")

buttonAdd.forEach((item) => {
    item.addEventListener("click", () => {
        addItem(item.parentElement.parentElement)
    })
})

buttonRemove.forEach((item) => {
    item.addEventListener("click", () => {
        removeItem(item.parentElement.parentElement)
    })
})

function addItem(element) {
    let quantityCurrent = parseInt(element.querySelector("strong").textContent)
    let valueItem = element.getAttribute("data-valueItem")
    if (quantityCurrent >= 0 && quantityCurrent < 20) {
        element.querySelector("strong").textContent = quantityCurrent + 1
        calcTotal(valueItem * 1)
    } else {
        return
    }
}

function removeItem(element) {
    let quantityCurrent = parseInt(element.querySelector("strong").textContent)
    let valueItem = element.getAttribute("data-valueItem")
    if (quantityCurrent > 0) {
        element.querySelector("strong").textContent = quantityCurrent - 1
        calcTotal(valueItem * -1)
    } else {
        return
    }
}

function calcTotal(value) {
    let total = document.querySelectorAll(".total")
    total.forEach((item) => {
        totalClear = item.textContent.replace(/\D/g, "") * 1
        newTotalCart = totalClear + value
        if (!isNaN(newTotalCart))
            item.textContent = "R$ " + formatReal(newTotalCart)
        else 
            item.textContent = "R$ 0,00"})
}

function formatReal( int )
{
        var tmp = int+'';
        tmp = tmp.replace(/([0-9]{2})$/g, ",$1");
        if( tmp.length > 6 )
                tmp = tmp.replace(/([0-9]{3}),([0-9]{2}$)/g, ".$1,$2");

        return tmp;
}