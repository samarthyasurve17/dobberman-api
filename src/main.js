console.log("completed")
/**
 * breed list: https://dog.ceo/api/breeds/list/all
 * get single breed image :https://dog.ceo/api/breed/doberman/images/random
 */
const selectEl = document.querySelector("#dogs_breed");
console.log(selectEl);
//thisfunctions retutn bredds
function getDogsBreed(){
  return fetch("https://dog.ceo/api/breeds/list/all")
   .then((response)=> response.json())
   .then((data)=>Object.keys(data.message))
   .catch((err) => console.log(err))
   }
//    .catch((err)=> console.log(err));
//    console.log("noice")
// }
// getDogsBreed();
function renderOptions(){
    getDogsBreed().then((breeds)=> {
        for (let breed of breeds){
            const option =document.createElement("option");
            option.textContent=breed[0].toUpperCase()+ breed.slice(1);
            option.value =breed;
         selectEl.appendChild(option);

        }
    });

}
renderOptions()