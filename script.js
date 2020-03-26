
var getBudget = function(operat, descr, value){
    this.operat = operat;
    this.descr = descr;
    this.value = value;
}
var i=0;
var k =0;
var incomeArray=[];
var expenseArray =[];
var fullbudget=0;
var fullexpense=0;
var fullincome=0;

document.querySelector('.value-button').addEventListener('click', masterFunction);

/*

//apply hover effect to default <p>
var pdelete = document.querySelectorAll('.main-container__3--stat p');
deleteAbleObject(pdelete);
*/



















//FUNCTIONS

function masterFunction(){
    object = createBudgetObject();
    addBudgetObjectToList(object);
    calculateFullBudget(object);
    deleteAbleObject(getP());
}


function createBudgetObject(){

    options = document.getElementById("main-container__2--operator-select");
    operator = options.options[options.selectedIndex].value;
    description = document.getElementById("input-description").value;
    value = document.getElementById("input-value").value;
    budget = new getBudget(operator,description,value);

    if (operator=="+"){
        incomeArray[i]=budget;
        i++;
    }else{
        expenseArray[k]=budget;
        k++;
    }
    return budget;
    
}


function addBudgetObjectToList(budgetObject){
    para = document.createElement("p");
    lbl = document.createElement("label");
    let value = parseFloat(budgetObject.value).toFixed(2);
    node1 = document.createTextNode(budgetObject.descr);
    node2 = document.createTextNode(budgetObject.operat +" "+ value);

    lbl.appendChild(node2);
    para.appendChild(node1);
    

    if (budgetObject.operat == "+"){
        elem = document.getElementById("main-container__3--stat-income");
        para.appendChild(lbl);
        elem.appendChild(para);
    }else{
        elem1 = document.getElementById("main-container__3--stat-expense");
        lbl.classList.add("stat-label1");
        para.appendChild(lbl);
        elem1.appendChild(para);
    }
    
    console.log(para);
}





function calculateFullBudget(object){
    
    
    if (object.operat == "+"){
        fullincome = parseFloat(fullincome)+parseFloat(object.value);
        
        document.getElementsByClassName("income-label1")[0].textContent = "+ " + fullincome.toFixed(2);
    }else{
        fullexpense= parseFloat(fullexpense)+parseFloat(object.value);
        document.getElementsByClassName("expense-label1")[0].textContent = "- " + fullexpense.toFixed(2);
    }
    fullbudget = fullincome - fullexpense;
    if (fullbudget<0){
        document.getElementsByClassName("main-container__1--budget-operator")[0].textContent = "";
    }else{
        document.getElementsByClassName("main-container__1--budget-operator")[0].textContent = "+";
    }
    document.getElementsByClassName("main-container__1--budget-cash")[0].textContent= fullbudget.toFixed(2);
}

/*

function getP(){
    return document.querySelectorAll('.main-container__3--stat p');
}


*/
/*
function deleteAbleObject(pdelete){
    
    for (let r = 0; r < pdelete.length; r++) {
        pdeletebtn = document.getElementsByClassName('deletestatbtn');
        pdelete[r].addEventListener("mouseover", function() {
            console.log("you clicked region number " + r);
            pdelete[r].classList.toggle("remove");
            pdeletebtn[r].style.display = "inline-block";
        });
        pdelete[r].addEventListener("mouseout", function() {
            console.log("you clicked region number " + r);
            pdelete[r].classList.toggle("remove");
            pdeletebtn[r].style.display = "none";
          });
      }
    
}

*/