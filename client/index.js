// showCountries = async () => {
//     const response = await fetch("http://localhost:3003/countries");
//     const countries = await response.json();
//     const list = document.querySelector("#countryList");
  
//     for (let i = 0; i < countries.length; i++) {
//       country = document.createElement('button') //could change to links later
//       country.innerHTML = countries[i].name;
//       country.classList.add("countryBtn");
//       country.setAttribute("id", countries[i].name)
//       list.appendChild(country)
  
//     }
//     countryBtns = document.querySelectorAll(".countryBtn")
//     for (let i = 0; i < countryBtns.length; i++) {
//       countryBtns[i].addEventListener("click", () => {
//         showOneCountry(countryBtns[i].id)
//       })
//     }
//   }
  
//   showOneCountry = async (name) => {
//     const response = await fetch(`http://localhost:3003/countries/${name}`);
//     const data = await response.json();
//     const body = document.querySelector('body')
//     const para = document.createElement("p");
//     para.setAttribute("id", name)
//     para.innerHTML = `The capital of ${data.name} is ${data.capital}. ${data.name} has a population of ${data.population} people and the official language(s) of ${data.name} is/are ${data.languages}.`;
//     body.appendChild(para);
//     const deleteBtn = document.createElement("button")
//     deleteBtn.innerHTML = "delete"
//     deleteBtn.classList.add("deleteBtn")
//     para.appendChild(deleteBtn)
    
  
//     deleteBtns = document.querySelectorAll(".deleteBtn");
//     for (let i = 0; i < deleteBtns.length; i++) {
//       deleteBtns[i].addEventListener("click", () => {
//         deleteBtns[i].parentElement.remove()
//       })
//     }
  
  
//     const dbDeleteBtn = document.createElement("button")
//     dbDeleteBtn.innerHTML = "delete for good"
//     dbDeleteBtn.classList.add("dbDeleteBtn")
//     para.appendChild(dbDeleteBtn)
    
//     dbDeleteBtn.addEventListener("click", ()=> {
//       deleteCountry(dbDeleteBtn.parentElement.id)
//       dbDeleteBtn.parentElement.remove()
//     })
  
//     const updateBtn = document.createElement("button")
//     updateBtn.innerHTML = "update"
//     updateBtn.classList.add("updateBtn")
//     para.appendChild(updateBtn)
  
//     updateBtn.addEventListener("click", ()=> {
//       updateCountry(updateBtn.parentElement.id); //updates passing in country name
//     })
  
//   }
  
//   deleteCountry = async (name) => {
//     const response = await fetch(`http://localhost:3003/countries/${name}`, {method:'DELETE'})
//   }
  
  
//   document.getElementById("new-country").addEventListener("submit", async (e)=> {
//     e.preventDefault()
//     let countryName = document.querySelector("#name").value;
//     let capital = document.querySelector("#capital").value;  
//     let population = parseFloat(document.querySelector("#population").value);
//     let languages = document.querySelector("#languages").value;
//     const data = {
//       "name":countryName,
//       "capital":capital,
//       "population":population,
//       "languages":languages
//     }
//     const options = {
//       method: "POST",
//       headers: {
//         "Content-Type":"application/json"
//       },
//       body:JSON.stringify(data)
//     }
//     const response = await fetch("http://localhost:3003/countries", options)
//   })
  
//   updateCountry = (name) => {
//     const newForm = document.createElement("form");
//     let paraId = name;
//     let paraArr = paraId.split(" ")
//     if (paraArr.length>1) {
//       paraId = `${paraArr[0]}\\ ${paraArr[1]}`
//     }
//     const para = document.querySelector(`p#${paraId}`);
//     console.log(`p#${name}`)
//     para.appendChild(newForm);
//     const updateName = document.createElement("input"); 
//     updateName.setAttribute("type","text")
//     updateName.setAttribute("placeholder","Enter updated name")
//     const updateCapital = document.createElement("input");
//     updateCapital.setAttribute("type","text")
//     updateCapital.setAttribute("placeholder","Enter updated Capital")
//     const updatePopulation = document.createElement("input");
//     updatePopulation.setAttribute("type","text")
//     updatePopulation.setAttribute("placeholder","Enter updated Population")
//     const updateLanguages = document.createElement("input");
//     updateLanguages.setAttribute("type","text")
//     updateLanguages.setAttribute("placeholder","Enter updated Languages")
//     const submitUpdate = document.createElement("input");
//     submitUpdate.setAttribute("type","submit");
//     submitUpdate.innerHTML = "submit";
//     newForm.appendChild(updateName)
//     newForm.appendChild(updateCapital)
//     newForm.appendChild(updatePopulation)
//     newForm.appendChild(updateLanguages)
//     newForm.appendChild(submitUpdate)
//     const data = {
//       "name": updateName.value,
//       "capital": updateCapital.value,
//       "population": parseFloat(updatePopulation.value),
//       "languages": updateLanguages.value
//     }
//     const options = {
//       method: "PATCH",
//       headers: {
//         "Content-Type":"application/json"
//       },
//       body: JSON.stringify(data),
//     }
  
//     submitUpdate.addEventListener("click", async (e) => {
//       e.preventDefault()
//       const data = {
//         "name": updateName.value,
//         "capital": updateCapital.value,
//         "population": parseFloat(updatePopulation.value),
//         "languages": updateLanguages.value
//       }
//       const options = {
//         method: "PATCH",
//         headers: {
//           "Content-Type":"application/json"
//         },
//         body: JSON.stringify(data),
//       }
//       const response = await fetch(`http://localhost:3003/countries/${name}`, options)
//     })
   
//   }
  
  
  
//   showCountries()