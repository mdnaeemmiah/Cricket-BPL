
let count =0;

const allBtn=document.getElementsByClassName('btn');

for(const btn of allBtn ){
    btn.addEventListener("click", function (event){
        const name =event.target.parentNode.childNodes[1].innerText;
        const price =event.target.parentNode.childNodes[3].childNodes[1].innerText;
        const category =event.target.parentNode.childNodes[5].childNodes[1].innerText;

      const selectedContainer =document.getElementById('selected-players-container');
        event.target.setAttribute("disabled",false);
       
       
   const firstCount = getConvertedValue('cart');
   if(firstCount+1>6){
    alert("limited");
    return;
   }
   event.target.parentNode.style.backgroundColor="gray";
      const budget = getConvertedValue("budget");
        document.getElementById("budget").innerText=budget-parseInt(price);
       

        const cartCount = getConvertedValue("cart");
        document.getElementById('cart').innerText = cartCount +1;

        const left = getConvertedValue("left");
        document.getElementById('left').innerText = left-1;


      const div = document.createElement('div');
      div.classList.add("flex");
      div.classList.add("justify-between");

      const p= document.createElement('p');
      p.innerText =name;
      const p2= document.createElement('p2');
      p2.innerText = price;
      const p3= document.createElement('p3');
      p3.innerText =category;

      div.appendChild(p);
      div.appendChild(p2);
      div.appendChild(p3);

      selectedContainer.appendChild(div);
      updateTotalCost(price);
      updateGrandTotal();
    })
}












function  updateGrandTotal(status){
    const totalCost = getConvertedValue("total-cost");
    if(status == undefined){
        document.getElementById('Grand-total').innerText = totalCost;
    }
    else{
        const couponCode =document.getElementById('coupon-code').value;   
        if(couponCode=="love"){
            const discunt =totalCost*0.2;
            document.getElementById('Grand-total').innerText = totalCost-discunt;
        }
        else{
            alert("please enter valid code");
        }
     }
}

function updateTotalCost(price){
    const totalCost = getConvertedValue("total-cost");
    const sum = totalCost+parseInt(price);
    document.getElementById('total-cost').innerText  = sum;
}

function getConvertedValue(id){
    const Price =document.getElementById(id).innerText;
    const convertPrice = parseInt(Price);
    return convertPrice;
}


 