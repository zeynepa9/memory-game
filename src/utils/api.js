export const getRandomCards = (numberOfCards) => {
    return fetch(`https://tarotapi.dev/api/v1/cards/random?n=15`)
      .then(response => response.json())
      .then(data => data.cards)
      .catch(error => console.error("API error:", error));
  };


