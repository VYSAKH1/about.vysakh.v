# About this repository

My own resume following an [ACG cloud resume challenge video](https://www.youtube.com/watch?v=ieYrBWmkfno)

## Front End Folder
- contains the website containing the resume
- a main.js file for the visitor count

```js
window.addEventListener('DOMContentLoaded', (event) =>{
    getVisitCount();
})

const functionApi = '';

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
```