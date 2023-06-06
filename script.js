
var registeredDocuments = [];
document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault();
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var doc = document.getElementById('documento').value;
    var address = document.getElementById('address').value;
    console.log('Submitted: Name - ' + name + ', Email - ' + email + ', Document - ' + doc + ', Address - ' + address);
    

    if (registeredDocuments.includes(doc)) {
        alert('Este documento já foi cadastrado. Apenas um cadastro por documento é permitido.');
        return;
    }

    registeredDocuments.push(doc);

    document.getElementById('myForm').reset();
});
  