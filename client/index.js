showEntries = async () => {
  const response = await fetch("http://localhost:3000/entries");
  const entries = await response.json();
  const entryDiv = document.querySelector("#entries");

  for (let i = 0; i < entries.length; i++) {
    entry = document.createElement("div"); //could change to links later
    const btnId = entries[i].entry_id;
    entry.setAttribute("id", btnId);
    entryText = document.createElement("p");
    entryText.innerHTML = entries[i].text;

    entryCategory = document.createElement("p");
    entryCategory.innerHTML = entries[i].category;

    entryDateTime = document.createElement("p");

    entryDateTime.innerHTML =
      entries[i].date.substring(0, 10) + " " + entries[i].time.substring(0, 5);

    entry.appendChild(entryText);
    entry.appendChild(entryCategory);
    entry.appendChild(entryDateTime);

    entryDiv.appendChild(entry);

    deleteBtn = document.createElement("button");
    deleteBtn.innerHTML = "Delete";
    entry.appendChild(deleteBtn);

    deleteBtn.addEventListener("click", async () => {
      deleteEntry(btnId);
    });

    const updateBtn = document.createElement("button");
    updateBtn.innerHTML = "Update";
    updateBtn.classList.add("updateBtn");
    entry.appendChild(updateBtn);

    updateBtn.addEventListener("click", () => {
      updateEntry(btnId);
    });
  }
};

const deleteEntry = async (id) => {
  const response = await fetch(`http://localhost:3000/entries/${id}`, {
    method: "DELETE",
  });
  location.reload();
};

const updateEntry = (id) => {
  const newForm = document.createElement("form");

  entry.appendChild(newForm);
  const updateText = document.createElement("input");
  updateText.setAttribute("type", "text");
  updateText.setAttribute("placeholder", "Enter updated text");

  const submitUpdate = document.createElement("input");
  submitUpdate.setAttribute("type", "submit");
  submitUpdate.innerHTML = "submit";
  newForm.appendChild(updateText);
  newForm.appendChild(submitUpdate);

//   const data = {
//     text: updateText.value,
//   };

//   const options = {
//     method: "PATCH",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(data),
//   };

  submitUpdate.addEventListener("click", async (e) => {
    e.preventDefault();
    const data = {
      text: updateText.value
    };
    const options = {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    };
    const response = await fetch(
      `http://localhost:3000/entries/${id}`,
      options
    );
    location.reload();

  });
};

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

//
//   }

const createEntry = () => {
  document
    .getElementById("createEntry")
    .addEventListener("submit", async (e) => {
      e.preventDefault();
      let entryText = document.querySelector("#text").value;
      console.log(entryText);
      let entryCategory = document.querySelector("#category").value;
      console.log(entryCategory);

      const data = {
        text: entryText,
        category: entryCategory,
      };
      console.log(data);

      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      };
      const response = await fetch("http://localhost:3000/entries", options);
      location.reload();
    });
};

showEntries();
createEntry();
