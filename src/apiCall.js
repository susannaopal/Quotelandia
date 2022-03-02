export const fetchQuotes = () => {
  return fetch('https://type.fit/api/quotes')
  .then(response => response.json())
  // .then(data => console.log(data))
}

export const GetQuotes = () => {
  return fetch('https://api.quotable.io/quotes')
  .then(response => response.json())
  // .then(data => console.log(data))
}

