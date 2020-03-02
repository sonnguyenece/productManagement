let NameProduct = ['Sony Xperia', 'Samsung Galaxy', 'Nokia 6', 'Xiaomi Redmi Note 4',
    'Apple Iphone 6S', 'Xiaomi Mi 5s Plus', 'Apple Iphone 8 Plus', 'Fujitsu F-04E', 'Oppo A71'];

function displayTable(arr) {
    // arr=arr.sort();
    let display = "<table><tr><th>Ord.Number</th><th>Product Name</th><th colspan='2'>Edit</th>";
    for (let i = 0; i < arr.length; i++) {
        display += "<tr><td>" + (i + 1) + "</td><td style='font-size: 20px'>" + arr[i] + "</td><td><input type='button' value='Edit' onclick='editArr(" + i + ")'></td>"
            + "<td><input type='button' value='Delete' onclick='delArr(" + i + ")'></td></tr>"
    }
    return display;
}

function addArr() {
    if (confirm("Do you really want to add a product?")) {
        if (document.getElementById('addValue').value === '') {
            alert("Input your new product please!!!");
            return;
        }
        NameProduct.push(document.getElementById('addValue').value);
        document.getElementById('tablePos').innerHTML = displayTable(NameProduct);
    } else return;
}

function editArr(i) {
    if (confirm("Do you really want to edit this product?")) {
        NameProduct.splice(i, 1, prompt("Reinput your product!!!"));
        document.getElementById('tablePos').innerHTML = displayTable(NameProduct);
    } else return;
}

function delArr(i) {
    if (confirm("Do you really want to delete this product?")) {
        NameProduct.splice(i, 1);
        document.getElementById('tablePos').innerHTML = displayTable(NameProduct);
    } else return;
}

function search() {
    let search = NameProduct.indexOf(document.getElementById('Search').value);
    if (search === -1) alert("Sorry we can not find that product.");
    else {
        document.getElementById('tablePos').innerHTML = displayTable(NameProduct.splice(search, 1));
    }
}


