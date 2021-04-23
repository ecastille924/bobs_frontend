const bobQuotes = document.getElementById("bob-quotes")
const lindaQuotes = document.getElementById("linda-quotes")
const tinaQuotes = document.getElementById("tina-quotes")
const geneQuotes = document.getElementById("gene-quotes")

fetch("http://localhost:3000/quotes")
    .then(resp => resp.json())
    .then(data => renderQuotes(data))

    function renderQuotes(quotesResp){
        const quotes = quotesResp.data
        quotes.forEach(quotes => {
            const li = document.createElement('li')
            if(quotes.relationships.character.data.id == 1){
                li.innerText = quotes.attributes.content
                bobQuotes.append(li)
            }
            else if(quotes.relationships.character.data.id == 2){
                li.innerText = quotes.attributes.content
                lindaQuotes.append(li)
            }
            else if(quotes.relationships.character.data.id == 3){
                li.innerText = quotes.attributes.content
                tinaQuotes.append(li)
            }
            else if(quotes.relationships.character.data.id == 4){
                li.innerText = quotes.attributes.content
                geneQuotes.append(li)
            }
        })
    }