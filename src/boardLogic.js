function boardLogicReportToDom(){
    let newElement = document.createElement(`div`);
    newElement.innerHTML = `BoardLogic dom test success`;
    document.body.appendChild(newElement);
    return;
}



function boardLogicReportToConsole(){
    console.log(`BoardLogic console test success`)
    return;
}


export {
    boardLogicReportToDom,
    boardLogicReportToConsole    
}