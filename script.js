document.addEventListener('DOMContentLoaded', () => {
    const quoteText = document.querySelector('.quote');
    const movieTitle = document.querySelector('.movie-title span');
    const actorName = document.querySelector('.actor-name span');
    const category = document.querySelector('.category span');
    const publishDate = document.querySelector('.publish-date span');
    const context = document.querySelector('.context span');
    const newQuoteBtn = document.getElementById('new-quote-btn');

    const getQuote = async () => {
        try {
            const response = await fetch('quotes.json');
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json();
            const quotes = data.Quotes[0];
            const randomIndex = Math.floor(Math.random() * quotes.length);
            const quote = quotes[randomIndex];

            quoteText.textContent = `"${quote.quote}"`;
            movieTitle.textContent = quote.movie_title;
            actorName.textContent = quote.actor_name;
            category.textContent = quote.category;
            publishDate.textContent = quote.publish_date;
            context.textContent = quote.context || 'N/A';
        } catch (error) {
            console.error('Error fetching quote:', error);
            quoteText.textContent = '"Could not fetch a quote. Please try again later."';
        }
    };

    newQuoteBtn.addEventListener('click', getQuote);

    // Load a quote on initial page load
    getQuote();
});
