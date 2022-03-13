// quote load section
const loadQuotes = () => {

// fetch url
    fetch('https://api.kanye.rest/')
        .then(res => res.json())
        .then(data => displayQuote(data))
}

// display quotes section
const displayQuote = (quotes) => {
    // console.log(quotes)
    const quoteElement = document.getElementById('quote')
    // previous quotes clear
    quoteElement.textContent=''
    
    for(const quote in quotes){
        const div = document.createElement('div')
        div.classList.add('m-2', 'p-2', )
        div.innerHTML = `
         "${quotes.quote}"
        `
        quoteElement.appendChild(div)
    }
   
}