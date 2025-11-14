
document.addEventListener('DOMContentLoaded', () => {
  

  const yearSpan = document.getElementById('year');
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }


  const searchForm = document.getElementById('searchForm');
  if (searchForm) {
    searchForm.addEventListener('submit', (e) => {
      const query = searchForm.query.value.trim();
      const location = searchForm.location.value.trim();
      const category = searchForm.category.value;
      
      
      if (!query && !location && !category) {
        e.preventDefault();
        
        
        searchForm.classList.add('shake');
        setTimeout(() => searchForm.classList.remove('shake'), 500);
        
        
        searchForm.query.focus();
        
     
        showNotification('Please enter a job keyword, location, or select a category to search!', 'warning');
        return false;
      }
    });

  
    const inputs = searchForm.querySelectorAll('input, select');
    inputs.forEach(input => {
      input.addEventListener('focus', function() {
        this.parentElement.classList.add('input-focused');
      });
      
      input.addEventListener('blur', function() {
        this.parentElement.classList.remove('input-focused');
      });
    });
  }


  const categoryLinks = document.querySelectorAll('.category-list a');
  categoryLinks.forEach(link => {
    link.addEventListener('click', (e) => {

      createRipple(e, link);
    });
  });


  animateStatsOnScroll();


  addParallaxEffect();


  initTypingAnimation();
});


function showNotification(message, type = 'info') {

  const existing = document.querySelector('.notification');
  if (existing) existing.remove();

  const notification = document.createElement('div');
  notification.className = `notification notification-${type}`;
  notification.innerHTML = `
    <i class="fa-solid fa-${type === 'warning' ? 'exclamation-triangle' : 'info-circle'}"></i>
    <span>${message}</span>
    <button class="notification-close"><i class="fa-solid fa-times"></i></button>
  `;
  
  document.body.appendChild(notification);
  

  setTimeout(() => notification.classList.add('show'), 10);
  

  notification.querySelector('.notification-close').addEventListener('click', () => {
    notification.classList.remove('show');
    setTimeout(() => notification.remove(), 300);
  });
  

  setTimeout(() => {
    if (notification.parentElement) {
      notification.classList.remove('show');
      setTimeout(() => notification.remove(), 300);
    }
  }, 4000);
}


function createRipple(event, element) {
  const ripple = document.createElement('span');
  ripple.classList.add('ripple');
  
  const rect = element.getBoundingClientRect();
  const size = Math.max(rect.width, rect.height);
  const x = event.clientX - rect.left - size / 2;
  const y = event.clientY - rect.top - size / 2;
  
  ripple.style.width = ripple.style.height = size + 'px';
  ripple.style.left = x + 'px';
  ripple.style.top = y + 'px';
  
  element.style.position = 'relative';
  element.style.overflow = 'hidden';
  element.appendChild(ripple);
  
  setTimeout(() => ripple.remove(), 600);
}


function animateStatsOnScroll() {
  const stats = document.querySelectorAll('.stat strong');
  
  if (stats.length === 0) return;
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const target = entry.target;
        const finalValue = target.textContent;
        const isPercentage = finalValue.includes('%');
        const numericValue = parseInt(finalValue.replace(/[^0-9]/g, ''));
        
        animateValue(target, 0, numericValue, 1500, isPercentage);
        observer.unobserve(target);
      }
    });
  }, { threshold: 0.5 });
  
  stats.forEach(stat => observer.observe(stat));
}


function animateValue(element, start, end, duration, isPercentage = false) {
  const startTime = performance.now();
  
  function update(currentTime) {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    
   
    const easeOutQuart = 1 - Math.pow(1 - progress, 4);
    const current = Math.floor(start + (end - start) * easeOutQuart);
    
    if (isPercentage) {
      element.textContent = current + '%';
    } else if (end >= 1000) {
      element.textContent = (current / 1000).toFixed(1) + 'k+';
    } else {
      element.textContent = current.toFixed(1);
    }
    
    if (progress < 1) {
      requestAnimationFrame(update);
    }
  }
  
  requestAnimationFrame(update);
}


function addParallaxEffect() {
  const hero = document.querySelector('.hero');
  if (!hero) return;
  
  window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const parallax = scrolled * 0.5;
    hero.style.transform = `translateY(${parallax}px)`;
  });
}


function initTypingAnimation() {
  const heroTitle = document.querySelector('.hero-left h1');
  if (!heroTitle) return;
  
  const text = heroTitle.textContent;
  heroTitle.textContent = '';
  heroTitle.style.opacity = '1';
  
  let index = 0;
  
  function typeWriter() {
    if (index < text.length) {
      heroTitle.textContent += text.charAt(index);
      index++;
      setTimeout(typeWriter, 50);
    }
  }
  

  setTimeout(typeWriter, 300);
}