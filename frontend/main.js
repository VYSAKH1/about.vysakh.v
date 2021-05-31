window.addEventListener('DOMContentLoaded', (event) =>{
    getVisitCount();
})

const functionApi = 'https://myazurecloudresume.azurewebsites.net/api/AzureCloudResume?code=kpqRJ6pw2dpLE3d0nVlLzAhSvcrlWoRO81rmGluvpy9TdJCNDXWQOQ==';

const getVisitCount = () => {
    let count =30;
    fetch(functionApi).then(response => {
        return response.json()
    }).then(response =>{
        console.log("Website called function Api");
        count = response.count;
        document.getElementById("counter").innerText = count;
    }).catch(function(error){
        console.log(error);
    });
    return count
}