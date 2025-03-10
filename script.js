<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js"></script>

        // Simple JavaScript to make the site interactive
        document.addEventListener('DOMContentLoaded', function() {
            // Simulate video hover preview
            const videoCards = document.querySelectorAll('.video-card');
            
            videoCards.forEach(card => {
                card.addEventListener('mouseenter', function() {
                    const duration = this.querySelector('.video-duration');
                    duration.style.backgroundColor = 'var(--accent-color)';
                    duration.style.color = 'black';
                });
                
                card.addEventListener('mouseleave', function() {
                    const duration = this.querySelector('.video-duration');
                    duration.style.backgroundColor = 'rgba(0, 0, 0, 0.7)';
                    duration.style.color = 'white';
                });
            });
            
            // Add click event to subscribe button
            const subscribeBtn = document.querySelector('.btn-custom');
            subscribeBtn.addEventListener('click', function() {
                alert('Thank you for subscribing to HalalHub Premium! Enjoy unlimited halal food recipes and tutorials!');
            });
            
            // Add active class to category links
            const categoryLinks = document.querySelectorAll('.category-nav a');
            categoryLinks.forEach(link => {
                link.addEventListener('click', function(e) {
                    e.preventDefault();
                    categoryLinks.forEach(l => l.classList.remove('active'));
                    this.classList.add('active');
                });
            });
        });