// form
const form = document.querySelector('.form');
const data = document.querySelector('#tabelData tbody');

let nomorUrut = 1;

form.addEventListener('submit',(e) => {
    e.preventDefault();

    const productName = document.getElementById("pname").value;
    const productCategory = document.getElementById("pcategory").value;
    const imageProduct = document.getElementById("iproduct").value;
    const productFreshness = document.querySelector('input[name="flexRadioDefault"]:checked');
    const additionalDescription = document.getElementById("ADes").value;
    const productPrice = document.getElementById("pprice").value;

    // Validasi input
    if (productName.trim() === '') {
        alert('Product name tidak boleh kosong.');
        return;
    }else if(productName.length > 25){
        alert('Last Name must not exceed 25 characters')
        return false;
    }else if (!productName.match(/^[a-zA-Z0-9\s]{1,25}$/)){
        alert('Name must not contain symbols')
        return false;
    }

    if (productCategory.trim() === '') {
        alert('Product category tidak boleh kosong.');
        return;
    }

    if (!imageProduct.trim()) {
        const imageProductInput = document.getElementById("iproduct");
        imageProductInput.value = "";
    }

    if (!productFreshness) {
        alert('Pilih salah satu product freshness.');
        return;
    }

    if (additionalDescription.trim() === '') {
        alert('Additional description tidak boleh kosong.');
        return;
    }

    if (productPrice.trim() === '' || isNaN(productPrice)) {
        alert('Product price harus diisi dengan angka.');
        return;
    }

    // Menambahkan baris ke dalam tabel dari setiap inputan data yang masuk
        const newRow = data.insertRow();

        const nomorTabel = newRow.insertCell(0);
        const productNameCell = newRow.insertCell(1);
        const productCategoryCell = newRow.insertCell(2);
        const imageProductCell = newRow.insertCell(3);
        const productFreshnessCell = newRow.insertCell(4);
        const additionalDescriptionDesCell = newRow.insertCell(5);
        const productPriceCell = newRow.insertCell(6);

        nomorTabel.innerHTML = nomorUrut++;
        productNameCell.innerHTML = productName;
        productCategoryCell.innerHTML = productCategory;
        imageProductCell.innerHTML = imageProduct;
        productFreshnessCell.innerHTML = productFreshness.value;
        additionalDescriptionDesCell.innerHTML = additionalDescription;
        productPriceCell.innerHTML = '$' + productPrice;
        
        alert('Product berhasil ditambahkan.');

})

const rows = data.getElementsByTagName('tr')

// Pencarian data dari dalam tabel
const search = document.getElementById('search');

search.addEventListener('click', () => {
    const kataKunci = document.getElementById('cari').value.toLowerCase()

// Kondisi saat pencarian data
    Array.from(rows).forEach((elemen) => {
        const productname = elemen.getElementsByTagName('td')[1].textContent.toLowerCase()
        if (productname.includes(kataKunci)) {
            elemen.style.display = '';
        } else {
            elemen.style.display = 'none';
        }
    });

})


// Penghapusan data dalam tabel
const deleteButton = document.getElementById('deleted');

deleteButton.addEventListener('click', () => {

// Kondisi Saat Menghapus setiap data yang terakhir di input dan nomor urut akan diperbarui
    if (rows.length > 0) {
        data.deleteRow(rows.length - 1); 
        nomorUrut--;
    }
});




