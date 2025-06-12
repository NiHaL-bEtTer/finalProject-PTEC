// here we wait for the HTML to finish loading 
document.addEventListener('DOMContentLoaded', () => {

  // save product iamge source as the source from teh element wioth the id of productImage
  const productImageSrc = document.getElementById('productImage')?.src;
  // save product Name to Black Heritage Hoodie
  const productName     = 'Black Heritage Hoodie';
  // sacve product price as 5-
  const productPrice    = 50;

  
  // get the cartquanity from ocal storage or set to 0 if none
  let cartQuantity = parseInt(localStorage.getItem('cartQuantity')) || 0;
  // get the size from olcal storage or defualt to empty string 
  let cartSize     = localStorage.getItem('cartSize') || '';

  
  //now we save al the elements we need into different variable
  const sizeSelect  = document.getElementById('sizeSelect');  
  const addBtn      = document.getElementById('add-to-bag');  
  const cartSidebar = document.getElementById('cartSidebar'); 
  const cartImage   = document.getElementById('cartImg');     
  const cartName    = document.getElementById('cartName');   
  const cartSizeEl  = document.getElementById('cartSize');   
  const cartQtyEl   = document.getElementById('cartQty');     
  const cartTotalEl = document.getElementById('cartTotal');  
  const clearBtn    = document.getElementById('clearCart');   
  const closeBtn    = document.getElementById('closeCart');   
  //make function caled Update cart
  function updateCart() {
    // do the same thing as before and get the values from local storage or set it to 0
    cartQuantity = parseInt(localStorage.getItem('cartQuantity')) || 0;
    cartSize     = localStorage.getItem('cartSize')       || '';
    

    // if the cart quanity is 0 then set the text content for the following variables to an empty string
    if (cartQuantity === 0) {
      cartImage.src          = '';       
      cartName.textContent   = '';       
      cartSizeEl.textContent = '';       
      cartQtyEl.textContent  = '';       
      cartTotalEl.textContent = '';      
    } else {
      // if the cart quanity is not 0 then we give the the variables values from things we pulled earliar using al the document selectors
      cartImage.src           = productImageSrc;                                 
      cartName.textContent    = productName;                                      
      cartSizeEl.textContent  = 'Size: ' + cartSize;                             
      cartQtyEl.textContent   = 'Quantity: ' + cartQuantity;                      
      cartTotalEl.textContent = 'Total: $' + (productPrice * cartQuantity);       //concatinate the numbers with strings
    }
  }

  //if the size has been selected and the button is ther then we add the even listener to the  add button and when it clicks we  add 1 to the cart quantity
  if (addBtn && sizeSelect) {
    addBtn.addEventListener('click', () => {
      cartQuantity++;                 
      cartSize = sizeSelect.value;    //we also save the value  the user has selected as the size as teh cart size

      //once we do so, then we save it into local storage
      localStorage.setItem('cartQuantity', cartQuantity);
      localStorage.setItem('cartSize', cartSize);
      localStorage.setItem('cartImageSrc', productImageSrc);

      updateCart();                   // thenn we call the function we created earliar that refreshes the cart values
      cartSidebar?.classList.add('active');  // also, when the button is clicked, add the class list active so the cart slides in from the right
    });
  }

  // adding an event listerner to the clear button, when its clicked we set the values to 
  clearBtn?.addEventListener('click', () => {
    cartQuantity = 0; 
    cartSize     = ''; 

    // we also remove all these local storage keys
    localStorage.removeItem('cartQuantity');
    localStorage.removeItem('cartSize');
    localStorage.removeItem('cartImageSrc');

    updateCart();                     // and again call the update cart function refreshing the cart
    cartSidebar?.classList.remove('active'); // and remove teh active class so the cart sidebar leaves
  });


  closeBtn?.addEventListener('click', () => {
    cartSidebar?.classList.remove('active'); // when u click the close button (the x ) then we also remove the class so the sidebar goes away
  });

  
});
