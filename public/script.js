// Simple JavaScript for the demo page
document.addEventListener('DOMContentLoaded', function() {
    console.log('Vercel Upload Based Builders Demo loaded');
    
    // Add click handlers to API links to show loading state
    const apiLinks = document.querySelectorAll('a[href^="/api"]');
    
    apiLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const originalText = this.textContent;
            this.textContent = 'Loading...';
            this.style.pointerEvents = 'none';
            
            // Reset after 3 seconds
            setTimeout(() => {
                this.textContent = originalText;
                this.style.pointerEvents = 'auto';
            }, 3000);
        });
    });
    
    // Display current time
    const now = new Date();
    console.log('Page loaded at:', now.toISOString());
});