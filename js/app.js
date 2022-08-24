function addNumberList(){
    
    var nameContact = window.document.getElementById("name-contact").value;
    var numberContact = window.document.getElementById("number-contact").value;
    var obsContact = window.document.getElementById("obs-contact").value;

    if(nameContact && numberContact && obsContact){

        const template = window.document.querySelector(".template");
        const newTemplate = template.cloneNode(true);

        newTemplate.querySelector("#span-name").textContent = nameContact;
        newTemplate.querySelector("#span-number").textContent = numberContact;
        newTemplate.querySelector("#span-obs").textContent = obsContact;

        newTemplate.classList.remove("template");
        newTemplate.classList.remove("hide");

        const boxDivTemplate = window.document.querySelector("#box-secundaria");
        boxDivTemplate.appendChild(newTemplate);

        const btnRemove = newTemplate.querySelector("#remove-btn").addEventListener("click", function(){
            removeContact(this);
        });
      
        nameContact = window.document.getElementById("name-contact").value = ''
        numberContact = window.document.getElementById("number-contact").value = ''
        obsContact = window.document.getElementById("obs-contact").value = ''

    }


}

function removeContact(contac){

    contac.parentNode.remove(true);

}


// criando evento para adicionar contato
const addNumber = window.document.querySelector("#btn-add-contact");

addNumber.addEventListener("click", function(e){
    e.preventDefault();

    addNumberList();
});