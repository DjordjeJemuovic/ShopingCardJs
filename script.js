let allTotal = 0;

function addToCart(element) {
  //selektovanje elemenata povrca na pijaci
  let mainEl = element.closest(".single-item");
  let price = mainEl.querySelector(".price").innerText;
  let name = mainEl.querySelector("h3").innerText;
  let quantiti = mainEl.querySelector("input").value;

  //selektovanje korpe

  let card = document.querySelector(".cart-items");

  let totalno = document.querySelector('.total');

  if (parseInt(quantiti) > 0) {
    price = price.substring(1);
    let total = parseInt(price) * quantiti;
    card.innerHTML += `<div class="cart-single-item">
                    <h3>${name}</h3>
                    <p>${price} x ${quantiti} = <span>${total}</span></p>
                    <button class="remove-item" onclick="removeItem(this)">Ukloni</button>
    
    </div>`;
    allTotal +=total;
    totalno.innerText=`Total:${allTotal}`
    element.innerText = "Dodato";
    element.setAttribute("disabled", "true");
  } else {
    alert("Unesi kolicinu");
  }

  console.log(quantiti);
}

function removeItem(element){
    let mainEl = element.closest('.cart-single-item');
    let price = mainEl.querySelector('p span').innerText;
    let name = mainEl.querySelector('h3').innerText;
    let vegetablrs= document.querySelectorAll('.single-item');

    let totalno = document.querySelector('.total');

    allTotal-=parseInt(price);
    totalno.innerText=`Total:${allTotal}`;

    mainEl.remove();

    vegetablrs.forEach(function(vege){
            let itemName = vege.querySelector('.si-content h3').innerText;
            if(itemName === name){
                vege.querySelector('.actions input').value = 0;
                 vege.querySelector('.actions button').removeAttribute('disabled');
                vege.querySelector('.actions button').innerText = 'Dodaj';
               
            }
    });
 
}
