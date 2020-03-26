i=0;
k=0;
var getBudget = function(operat, descr, value){
    this.operat = operat;
    this.descr = descr;
    this.value = value;
}

var incomeArray =[];
var expenseArray =[];








document.querySelector('.value-button').addEventListener('click', masterFunction);







function masterFunction(){
    object = createBudgetObject();
    console.log(incomeArray,expenseArray);
    listitem = addBudgetObjectToList(object);
    console.log(listitem);
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

    const para = document.createElement("p");
    const lbl = document.createElement("label");
    const node1 = document.createTextNode(budgetObject.descr);
    const node2 = document.createTextNode(budgetObject.operat +" "+budgetObject.value);

    lbl.appendChild(node2);
    para.appendChild(node1);
    para.appendChild(lbl);

    if (budgetObject.operator == "+"){
        elem = document.getElementById("main-container__3--stat-income");
        elem.appendChild(para);
    }else{
        elem1 = document.getElementById("main-container__3--stat-expense");
        elem1.appendChild(para);
    }
}








