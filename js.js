 // Create floating gold particles
 function createParticles() {
    const container = document.getElementById('particles');
    const particleCount = 15;
    
    for (let i = 0; i < particleCount; i++) {
      const particle = document.createElement('div');
      particle.className = 'particle';
      
      // Random size and position
      const size = Math.random() * 6 + 3;
      const posX = Math.random() * 100;
      const delay = Math.random() * 15;
      const duration = Math.random() * 10 + 10;
      
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;
      particle.style.left = `${posX}%`;
      particle.style.animationDelay = `${delay}s`;
      particle.style.animationDuration = `${duration}s`;
      
      container.appendChild(particle);
    }
  }
  
  // Update countdown timer
  function updateTimer() {
    const targetDate = new Date("2030-07-07T00:00:00").getTime();
    const now = new Date().getTime();
    const diff = targetDate - now;
    
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);
    
    document.getElementById("timer").innerHTML = `
      ${days.toString().padStart(3, '0')} <small>days</small><br>
      ${hours.toString().padStart(2, '0')} <small>hours</small><br>
      ${minutes.toString().padStart(2, '0')} <small>minutes</small>
    `;
  }
  
  // Show personalized message
  function showMessage(name, photo, message) {
    document.getElementById('popupPhoto').src = photo;
    document.getElementById('popupName').textContent = name;
    document.getElementById('popupMessage').textContent = message;
    document.getElementById('messagePopup').classList.add('active');
    document.body.style.overflow = 'hidden';


       // Set up WhatsApp button
       const whatsappBtn = document.getElementById('whatsappBtn');
       whatsappBtn.onclick = function() {
         window.open(`https://chat.whatsapp.com/KeimGL4ZPr16n7HkEUhCwK`, '_blank');
       }; 
    
    // Pulse animation on click
    event.target.style.animation = 'none';
    void event.target.offsetWidth;
    event.target.style.animation = 'pulse 0.6s ease';
  }
  
  // Hide message
  function hideMessage() {
    document.getElementById('messagePopup').classList.remove('active');
    document.body.style.overflow = 'auto';
  }
  
  // In your showMessage function:
  document.getElementById('whatsappBtn').href = "https://chat.whatsapp.com/KeimGL4ZPr16n7HkEUhCwK";
  // Initialize everything when page loads
  window.addEventListener('load', () => {
    createParticles();
    updateTimer();
    setInterval(updateTimer, 60000); // Update every minute
  });
  
  // Close popup when clicking outside content
  document.getElementById('messagePopup').addEventListener('click', function(e) {
    if (e.target === this) {
      hideMessage();
    }
  });




  