var additemid= 0
function addtocart(item)(
    additemid += 1;
    var selecteditem = document.createElement("div")
    selecteditem.classList.add("carting")
    selecteditem.setAttribute("id",additemid);
    var cartitems = document.getElementById('title');
    cartitems.append (selecteditem);

)