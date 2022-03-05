export const fetchQuotes = () => {
  return fetch('https://type.fit/api/quotes')
  .then(response => response.json())
}



