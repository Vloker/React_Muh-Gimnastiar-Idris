// form
const form = document.querySelector('.form');
const data = document.querySelector('#tabelData tbody');

let noUrut = 1;

form.addEventListener('submit',(e) => {
    e.preventDefault();

    const pname = document.getElementById("pname").value;
    const pcategory = document.getElementById("pcategory").value;
    const iproduct = document.getElementById("iproduct").value;
    const radioValue = document.querySelector('input[name="flexRadioDefault"]:checked');
    const ADes = document.getElementById("ADes").value;
    const pprice = document.getElementById("pprice").value;

    // Validasi input
    if (pname.trim() === '') {
        alert('Product name tidak boleh kosong.');
        return;
    }else if(pname.length > 25){
        alert('Last Name must not exceed 25 characters')
        return false;
    }else if (!pname.match(/^[a-zA-Z0-9\s]{1,25}$/)){
        alert('Name must not contain symbols')
        return false;
    }

    if (pcategory.trim() === '') {
        alert('Product category tidak boleh kosong.');
        return;
    }

    if (!iproduct.trim()) {
        const iproductInput = document.getElementById("iproduct");
        iproductInput.value = "";
    }

    if (!radioValue) {
        alert('Pilih salah satu product freshness.');
        return;
    }

    if (ADes.trim() === '') {
        alert('Additional description tidak boleh kosong.');
        return;
    }

    if (pprice.trim() === '' || isNaN(pprice)) {
        alert('Product price harus diisi dengan angka.');
        return;
    }

        const newRow = data.insertRow();

        const urut = newRow.insertCell(0);
        const pnameCell = newRow.insertCell(1);
        const pcategoryCell = newRow.insertCell(2);
        const iproductCell = newRow.insertCell(3);
        const radioCell = newRow.insertCell(4);
        const ADesCell = newRow.insertCell(5);
        const ppriceCell = newRow.insertCell(6);

        urut.innerHTML = noUrut++;
        pnameCell.innerHTML = pname;
        pcategoryCell.innerHTML = pcategory;
        iproductCell.innerHTML = iproduct;
        radioCell.innerHTML = radioValue.value;
        ADesCell.innerHTML = ADes;
        ppriceCell.innerHTML = '$' + pprice;
        
        alert('Product berhasil ditambahkan.');

})

const rows = data.getElementsByTagName('tr')

// searching
const search = document.getElementById('search');

search.addEventListener('click', () => {
    const kataKunci = document.getElementById('cari').value.toLowerCase()


    Array.from(rows).forEach((e) => {
        const pname = e.getElementsByTagName('td')[1].textContent.toLowerCase()

        if (pname.includes(kataKunci)) {
            e.style.display = '';
        } else {
            e.style.display = 'none';
        }
    });

})


// deleting
const deleteButton = document.getElementById('deleted');
deleteButton.addEventListener('click', () => {
    if (rows.length > 0) {
        data.deleteRow(rows.length - 1); 
        noUrut--;
    }
});




