async function fetchRandomQuote() {
    try {
        const response = await fetch('https://api.quotable.io/random');
        const data = await response.json();
        
        document.getElementById('quote-text').textContent = data.content;
        document.getElementById('quote-author').textContent = `— ${data.author}`;
    } catch (error) {
        console.error('Error fetching quote:', error);
        document.getElementById('quote-text').textContent = 'Failed to load quote. Please try again.';
    }
}

function setupInteractiveCanvas() {
    const canvas = document.getElementById('interactive-canvas');
    const ctx = canvas.getContext('2d');
    
    function resizeCanvas() {
        canvas.width = canvas.offsetWidth;
        canvas.height = 200;
    }
    
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    
    const particles = [];
}
    