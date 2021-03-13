function add(){
    Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Berhasil Ditambahkan!',
        showConfirmButton: false,
        timer: 1500
      })
}

let carts = document.querySelectorAll('.add-cart');

let product = [
    // product K-food
    {
        name: 'Spicy Black Topokki',
        tag: 'kfood-1',
        price: 24000,
        InCart: 0
    },
    {
        name: 'Yangnyeom Chicken Topokki',
        tag: 'kfood-2',
        price: 37000,
        InCart: 0
    },
    {
        name: 'Beef Sausage Topokki',
        tag: 'kfood-3',
        price: 37000,
        InCart: 0
    },
    {
        name: 'Smoked Beef Oden',
        tag: 'kfood-4',
        price: 9000,
        InCart: 0
    },
    {
        name: 'Cheese Toast Oden',
        tag: 'kfood-5',
        price: 12000,
        InCart: 0
    },
    {
        name: 'Oden',
        tag: 'kfood-6',
        price: 8000,
        InCart: 0
    },
    {
        name: 'K-Chicken Fillet',
        tag: 'kfood-7',
        price: 30000,
        InCart: 0
    },
    {
        name: '>K-Chicken Finger Ori',
        tag: 'kfood-8',
        price: 32000,
        InCart: 0
    },
    {
        name: 'K-Chicken Finger Cheezy Cream',
        tag: 'kfood-9',
        price: 32000,
        InCart: 0
    },
    {
        name: 'K-Chicken Finger Soy',
        tag: 'kfood-10',
        price: 32000,
        InCart: 0
    },
    {
        name: 'Cheese Kimchi Bokkumbap',
        tag: 'kfood-11',
        price: 24000,
        InCart: 0
    },
    {
        name: 'Chicken Dakgalbi Bibimbowl Ori',
        tag: 'kfood-12',
        price: 32000,
        InCart: 0
    },
    // product bbq
    {
        name: 'Beef BBQ with Cheese',
        tag: 'bbq-1',
        price: 63000,
        InCart: 0
    },
    {
        name: 'Premium Beef BBQ with Cheese',
        tag: 'bbq-2',
        price: 75000,
        InCart: 0
    },
    {
        name: 'Chicken BBQ with Cheese',
        tag: 'bbq-3',
        price: 60000,
        InCart: 0
    },
    {
        name: 'Galbitang',
        tag: 'soup-1',
        price: 35000,
        InCart: 0
    },
    {
        name: 'Sundubu Jigae',
        tag: 'soup-2',
        price: 35000,
        InCart: 0
    },
    {
        name: 'Jjampong',
        tag: 'soup-3',
        price: 39000,
        InCart: 0
    },
    //product superjoy
    {
        name: 'Super JOY 1',
        tag: 'superjoy-1',
        price: 45000,
        InCart: 0
    },
    {
        name: 'Super JOY 2',
        tag: 'superjoy-2',
        price: 50000,
        InCart: 0
    },
    {
        name: 'Super JOY 3',
        tag: 'superjoy-3',
        price: 50000,
        InCart: 0
    },
    {
        name: 'Super JOY 4',
        tag: 'superjoy-4',
        price: 50000,
        InCart: 0
    },
    {
        name: 'Super JOY 5',
        tag: 'superjoy-5',
        price: 50000,
        InCart: 0
    },
    {
        name: 'Icon Set 1',
        tag: 'superjoy-6',
        price: 55000,
        InCart: 0
    },
    {
        name: 'Icon Set 2',
        tag: 'superjoy-7',
        price: 49500,
        InCart: 0
    },
    {
        name: 'Icon Set 3',
        tag: 'superjoy-8',
        price: 49500,
        InCart: 0
    },
    {
        name: 'K-Chicken Set 1',
        tag: 'superjoy-9',
        price: 58000,
        InCart: 0
    },
    {
        name: 'K-Chicken Set 2',
        tag: 'superjoy-10',
        price: 50000,
        InCart: 0
    },
    //product drinks
    {
        name: 'Korean Lemonade',
        tag: 'drink-1',
        price: 10000,
        InCart: 0
    },
    {
        name: 'Jeju Orange Tea',
        tag: 'drink-2',
        price: 10000,
        InCart: 0
    },
    {
        name: 'Matcha Milk Tea with Red Bean',
        tag: 'drink-3',
        price: 12000,
        InCart: 0
    },
    {
        name: 'Choco Banana Milk',
        tag: 'drink-4',
        price: 12000,
        InCart: 0
    },
    {
        name: 'Korean Tea (Ice/Hot)',
        tag: 'drink-5',
        price: 8000,
        InCart: 0
    },
    {
        name: 'Apple Tea (Ice/Hot)',
        tag: 'drink-6',
        price: 9000,
        InCart: 0
    },
    {
        name: 'Ice Sweet Jasmine Green Tea',
        tag: 'drink-7',
        price: 10000,
        InCart: 0
    },
    {
        name: 'Banana Milk',
        tag: 'drink-8',
        price: 10000,
        InCart: 0
    },
    //product dessert
    {
        name: 'Classic Bingsoo',
        tag: 'dessert-1',
        price: 20000,
        InCart: 0
    },
    {
        name: 'Choco Bingsoo',
        tag: 'dessert-2',
        price: 23000,
        InCart: 0
    },
    {
        name: 'Matcha Bingsoo',
        tag: 'dessert-3',
        price: 23000,
        InCart: 0
    },
    {
        name: 'Yogurt Bingsoo',
        tag: 'dessert-4',
        price: 23000,
        InCart: 0
    },
    {
        name: 'Hottoek',
        tag: 'dessert-5',
        price: 12000,
        InCart: 0
    },
    {
        name: 'Bungeoppang',
        tag: 'dessert-6',
        price: 12000,
        InCart: 0
    },
    //product sidedish
    {
        name: 'Japchae (Soun)',
        tag: 'sidedish-1',
        price: 15000,
        InCart: 0
    },
    {
        name: 'Nori (Rumput Laut Kering)',
        tag: 'sidedish-2',
        price: 8000,
        InCart: 0
    },
    {
        name: 'Telur Ceplok',
        tag: 'sidedish-3',
        price: 5000,
        InCart: 0
    },
    {
        name: 'Kimchi',
        tag: 'sidedish-4',
        price: 12000,
        InCart: 0
    },
    {
        name: 'Oden Soup',
        tag: 'sidedish-5',
        price: 9000,
        InCart: 0
    },
    {
        name: 'Jumokbap',
        tag: 'sidedish-6',
        price: 18000,
        InCart: 0
    },
    {
        name: 'Susu (untuk Bingsoo)',
        tag: 'sidedish-7',
        price: 7000,
        InCart: 0
    },
    {
        name: 'Bap (Nasi Putih)',
        tag: 'sidedish-8',
        price: 15000,
        InCart: 0
    }
];

for (let i = 0; i < carts.length; i++) {
    carts[i].addEventListener('click', ()=>{
        cartNumbers(product[i]);
        totalCost(product[i]);
    })
}
function hapus(){
    
}

function onLoadCartNumbers(){
    let productNumbers = localStorage.getItem('cartNumbers');

    if(productNumbers){
        document.querySelector('.buy').textContent = productNumbers;
    }
}

function cartNumbers(product){
    let productNumbers = localStorage.getItem('cartNumbers');

    productNumbers = parseInt(productNumbers);

    if(productNumbers){
        localStorage.setItem('cartNumbers', productNumbers + 1);
        document.querySelector('.buy').textContent = productNumbers + 1;
    }else{
        localStorage.setItem('cartNumbers', 1);
        document.querySelector('.buy').textContent = 1;
    }

    setItems(product);
}

function setItems(product){
    let cartItems = localStorage.getItem('productsInCart');
    cartItems = JSON.parse(cartItems);

    if(cartItems!=null){
        if(cartItems[product.tag]==undefined){
            cartItems={
                ...cartItems,
                [product.tag]: product
            }
        }
        cartItems[product.tag].InCart+=1;
    }else{
        product.InCart = 1;
        cartItems = {
            [product.tag]: product
        }
    }
    localStorage.setItem('productsInCart', JSON.stringify(cartItems));
}

function totalCost(product){
    let cartCost = localStorage.getItem('totalCost');

    if(cartCost!=null){
        cartCost=parseInt(cartCost);
        localStorage.setItem('totalCost', cartCost + product.price);
    }else{
        localStorage.setItem('totalCost', product.price);
    }
}

function displayCart(){
    let cartItems = localStorage.getItem('productsInCart');
    cartItems = JSON.parse(cartItems);
    let productContainer = document.querySelector('.outproducts');
    let cartCost = localStorage.getItem('totalCost');
    if(cartItems && productContainer){
        productContainer.innerHTML = '';
        Object.values(cartItems).map(item => {
            productContainer.innerHTML+=`
            <div class="products">
            <div class="product">
                <img src="./images/${item.tag}.jpg">
                <span>${item.name}</span>
            </div>
            <div class="price"><span>Rp.${item.price}</span></div>
			<div class="quantity"><span><b>${item.InCart}</b></span></div>
            <div class="total"><span>Rp.${item.InCart * item.price}</span></div>
            </div>
            `
        });

        productContainer.innerHTML+=`
        <div class="basketTotalContainer">
            <h4 class="basketTotalTitle">
            Total Harga
            </h4>
            <h4 class="basketTotal">
            Rp.${cartCost}
            </h4>
        </div>
        <center><a href="menu.html" class="btn btn-primary">Tambah Menu Lagi</i></a> <a href="#" onclick="cancel()" class="btn btn-danger">Cancel</i></a></center>
        `
    }else{
        productContainer.innerHTML = '<center><b>Keranjang Belanja Kosong! Yuk Buat Pesanan</b><br><a href="menu.html" class="btn btn-primary">View Menu</i></a></center>';
    }
}

function cancel(){
    localStorage.clear();
Swal.fire({
    title: 'Apakah anda yakin membatalkan pesanan?',
    text: "Anda tidak akan dapat mengembalikan ini!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#c8a97e',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Ya, batalkan pesanan!'
  }).then((result) => {
    if (result.isConfirmed) {
        Swal.fire({
            title: 'Berhasil Dibatalkan!',
            text: "Pesanan anda sudah berhasil di batalkan.",
            icon: 'success',
            showCancelButton: false,
            confirmButtonColor: '#c8a97e',
            confirmButtonText: 'OK'
          }).then((result) => {
            if (result.isConfirmed) {
                window.location.href="cart.html";
            }
          })
    }
  })
}

function pesan(){
    localStorage.clear();
    Swal.fire({
        title: 'Terima Kasih Telah Memesan',
        text: "Pesanan anda akan segera kami siapkan",
        icon: 'success',
        showCancelButton: false,
        confirmButtonColor: '#c8a97e',
        confirmButtonText: 'OK'
      }).then((result) => {
        if (result.isConfirmed) {
            window.location.href="cart.html";
        }
      })
}

onLoadCartNumbers();
displayCart();