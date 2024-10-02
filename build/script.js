var curr_count=1,price=125;

var imageArray=[
    'images/image-product-1.jpg',
    'images/image-product-2.jpg',
    'images/image-product-3.jpg',
    'images/image-product-4.jpg'
]

var curr_img=0;
function addItem()
{
    curr_count+=1;
    var discountPriceDisplay=document.getElementById("price-discount");
    var priceDisplay=document.getElementById("price-original");
    var qty=document.getElementById("product-quantity");
    discountPriceDisplay.innerText=`$${price*curr_count}`;
    priceDisplay.innerText=`$${price*2*curr_count}`;
    qty.innerText=` ${curr_count}`;
    console.log('it works');

}

function removeItem()
{
    curr_count-=1;
    if (curr_count<0)
        curr_count=0;
    var discountPriceDisplay=document.getElementById("price-discount");
    var priceDisplay=document.getElementById("price-original");
    var qty=document.getElementById("product-quantity");
    discountPriceDisplay.innerText=`$ ${price*curr_count}`;
    priceDisplay.innerText=`$${price*2*curr_count}`;
    qty.innerText=`${curr_count}`;
    console.log('it works');
}





let cart = [];

function toggleCartDropdown() {
    const cartDropdown = document.getElementById('cartDropdown');
    cartDropdown.classList.toggle('hidden');
  }

function addToCart() {
    console.log('add to cart');
    var qty=Number(document.getElementById("product-quantity").innerText);
    const item = {name: "Fall Limited Edition Sneakers", price: Number(price), quantity: qty, img:'images/image-product-1-thumbnail.jpg' };
    cart.push(item);
    document.getElementById("product-quantity").innerText=`1`;
    curr_count=1;
    var discountPriceDisplay=document.getElementById("price-discount");
    var priceDisplay=document.getElementById("price-original");
    discountPriceDisplay.innerText=`$125`;
    priceDisplay.innerText=`$250`;
    updateCart();
    updateCartCount();
}

function removeFromCart(index) {
  cart.splice(index, 1);
  updateCart();
  updateCartCount();
}

function updateCart() {
  const cartItems = document.getElementById('cartItems');
  const cartCount = document.getElementById('cart-count');
  cartItems.innerHTML = '';

  cart.forEach((item, index) => {
    const listItem = document.createElement('li');
    listItem.className = 'flex justify-between items-center';

    listItem.innerHTML = `
      <div class="flex items-center space-x-4">
        <img src="${item.img}" alt="${item.name}" class="w-16 h-16 rounded-lg">
        <div>
          <h3 class="font-semibold">${item.name}</h3>
          <p class="text-gray-500">$${item.price.toFixed(2)} x ${item.quantity} <span class="font-semibold">$${(item.price * item.quantity).toFixed(2)}</span></p>
        </div>
      </div>
      <button onclick="removeFromCart(${index})" class="text-gray-500 hover:text-red-500">
        <img src='images/icon-delete.svg'></img>

      </button>
    `;
    
    cartItems.appendChild(listItem);
  });

  cartCount.textContent = cart.length;
}

function updateCartCount() {
    const cartCountElement = document.getElementById("cart-count");
    if (cart.length > 0) {
        cartCountElement.textContent = cart.length;
        cartCountElement.classList.remove("hidden");
    } else {
        cartCountElement.classList.add("hidden");
    }
}

function toggleMobileMenu() {
    const menuButton = document.getElementById('menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    console.log('mobile menu works');
    menuButton.addEventListener('click', () => {
        if (mobileMenu.classList.contains('hidden')) {
            mobileMenu.classList.remove('hidden');  // Show menu
            mobileMenu.classList.add('block');      // Ensure it's displayed
        } else {
            mobileMenu.classList.remove('block');   // Hide menu
            mobileMenu.classList.add('hidden');
        }
    });
}


function previousImage()
{
    mainImg=document.getElementById("main-img");
    curr_img=(4+(curr_img-1)%4)%4;
    mainImg.src=imageArray[curr_img];
}


function nextImage()
{
    mainImg=document.getElementById("main-img");
    curr_img=(4+(curr_img+1)%4)%4;
    mainImg.src=imageArray[curr_img];
}


function changeMainImage(imgElement) 
{
    const mainImg = document.getElementById('main-img');
    if (mainImg) {
      mainImg.src = imgElement.src.replace('-thumbnail', '');
    }
}



document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault();  
        
        document.querySelectorAll('.nav-link').forEach(link => {
            link.classList.remove('border-b-2', 'border-orange-500');
        });
        if (window.innerWidth >= 1024)
            link.classList.add('border-b-2', 'border-orange-500');
    });
});


function openLightbox() 
{
    if (window.innerWidth >= 1024) 
        { 
        lightbox.classList.remove('hidden');
    }
}

function closeLightBox()
{
    lightbox.classList.add('hidden');
}

let currentLightboxIndex = 0;

function previousLightBoxImage() {
    currentLightboxIndex = (4+(currentLightboxIndex-1)%4)%4;
    const lightboxImageElement = document.getElementById('lightbox-img');
    lightboxImageElement.src = imageArray[currentLightboxIndex];
}

// Function to go to the next image in the lightbox
function nextLightBoxImage() {
    currentLightboxIndex = currentLightboxIndex = (4+(currentLightboxIndex+1)%4)%4;;
    const lightboxImageElement = document.getElementById('lightbox-img');
    lightboxImageElement.src = imageArray[currentLightboxIndex];
}

document.getElementById('cart-button').addEventListener('click', toggleCartDropdown);

toggleMobileMenu();
