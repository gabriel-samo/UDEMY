// Leave the next line, the form must be assigned to a variable named 'form' in order for the exercise test to pass
const form = document.querySelector('form');
const list = document.querySelector('#list');

const productName = form.elements.product;
const productQty = form.elements.qty;

form.addEventListener('submit', (e) => {
    e.preventDefault();
    addToList();
})

function addToList(){
    const newLi = document.createElement('li');
    newLi.innerText = `${productQty.value} ${productName.value}`;
    list.appendChild(newLi);
    productName.value = '';
    productQty.value = '';
}
