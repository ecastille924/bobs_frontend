const baseURL = 'http://localhost:3000'

const bobQuotes = document.getElementById("bob-quotes")
const lindaQuotes = document.getElementById("linda-quotes")
const tinaQuotes = document.getElementById("tina-quotes")
const geneQuotes = document.getElementById("gene-quotes")
const louiseQuotes = document.getElementById("louise-quotes")

fetch("http://localhost:3000/quotes")
    .then(resp => resp.json())
    .then(data => renderQuotes(data))

    function renderQuotes(quotesResp){
        const quotes = quotesResp.data
        quotes.forEach(quotes => {
            const li = document.createElement('li')
            
            const editBtn = document.createElement('BUTTON');
            editBtn.innerText = "Edit"
            editBtn.addEventListener("click", function(){
            li.contentEditable = true;
            })

            const deleteBtn = document.createElement('BUTTON');
            deleteBtn.innerText = "Delete"
            deleteBtn.addEventListener("click", function(){
            })


            if(quotes.relationships.character.data.id == 1){
                li.innerText = quotes.attributes.content
                bobQuotes.append(li, editBtn, deleteBtn)
            }
            else if(quotes.relationships.character.data.id == 2){
                li.innerText = quotes.attributes.content
                lindaQuotes.append(li, editBtn, deleteBtn)
            }
            else if(quotes.relationships.character.data.id == 3){
                li.innerText = quotes.attributes.content
                tinaQuotes.append(li, editBtn, deleteBtn)
            }
            else if(quotes.relationships.character.data.id == 4){
                li.innerText = quotes.attributes.content
                geneQuotes.append(li, editBtn, deleteBtn)
            }
            else if(quotes.relationships.character.data.id == 5){
                li.innerText = quotes.attributes.content
                louiseQuotes.append(li, editBtn, deleteBtn)
            }
        })
    }