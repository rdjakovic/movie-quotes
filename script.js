document.addEventListener('DOMContentLoaded', () => {
  const quoteText = document.querySelector(".quote");
  const movieText = document.querySelector(".movie");
  const newQuoteBtn = document.getElementById("new-quote-btn");
  //https://cors-anywhere.herokuapp.com/https://api.example.com

  const getQuote = async () => {
    try {
      const response = await fetch(
        "https://cors-anywhere.herokuapp.com/https://quoteapi.pythonanywhere.com/random"
      );
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      const quote = data.Quotes[0];
      quoteText.textContent = `"${quote.quote}"`;
      movieText.textContent = `- ${quote.author}`;
    } catch (error) {
      console.error("Error fetching quote:", error);
      quoteText.textContent =
        '"Could not fetch a quote. Please try again later."';
      movieText.textContent = "";
    }
  };

  newQuoteBtn.addEventListener("click", getQuote);

  // Load a quote on initial page load
  getQuote();
});
