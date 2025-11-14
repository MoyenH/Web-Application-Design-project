
document.addEventListener('DOMContentLoaded', () => {
  const loginForm = document.getElementById('loginForm');
  if (!loginForm) return;


  let isLoading = false;


  const validationRules = {
    email: {
      required: true,
      pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
      message: 'Please enter a valid email address'
    },
    password: {
      required: true,
      minLength: 6,
      message: 'Password must be at least 6 characters'
    }
  };

  const emailInput = loginForm.querySelector('#email');
  const passwordInput = loginForm.querySelector('#password');

  if (emailInput) {
    emailInput.addEventListener('blur', () => validateField(emailInput, 'email'));
    emailInput.addEventListener('input', () => clearError(emailInput));
  }

  if (passwordInput) {
    passwordInput.addEventListener('blur', () => validateField(passwordInput, 'password'));
    passwordInput.addEventListener('input', () => clearError(passwordInput));
    

    addPasswordToggle(passwordInput);
  }

  loginForm.addEventListener('submit', async function(e) {
    e.preventDefault();
    
    if (isLoading) return;

    const email = emailInput.value.trim();
    const password = passwordInput.value;


    const emailValid = validateField(emailInput, 'email');
    const passwordValid = validateField(passwordInput, 'password');

    if (!emailValid || !passwordValid) {
      shakeForm();
      return;
    }

    isLoading = true;
    const submitBtn = loginForm.querySelector('button[type="submit"]');
    const originalBtnText = submitBtn.innerHTML;
    submitBtn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Logging in...';
    submitBtn.disabled = true;

    try {

      await simulateLogin(email, password);
      

      showNotification('Login successful! Redirecting...', 'success');
      
    
      localStorage.setItem('userEmail', email);
      localStorage.setItem('isLoggedIn', 'true');
      
    
      setTimeout(() => {
        window.location.href = 'index.html';
      }, 1500);
      
    } catch (error) {
    
      showNotification(error.message || 'Login failed. Please try again.', 'error');
      submitBtn.innerHTML = originalBtnText;
      submitBtn.disabled = false;
      isLoading = false;
    }
  });

 
  addRememberMeOption();
  

  addSocialLoginButtons();
  
  
  checkExistingSession();
});


function validateField(input, fieldName) {
  const value = input.value.trim();
  const rules = validationRules[fieldName];
  
  clearError(input);
  

  if (rules.required && !value) {
    showError(input, `${fieldName.charAt(0).toUpperCase() + fieldName.slice(1)} is required`);
    return false;
  }
  

  if (rules.pattern && !rules.pattern.test(value)) {
    showError(input, rules.message);
    return false;
  }
  

  if (rules.minLength && value.length < rules.minLength) {
    showError(input, rules.message);
    return false;
  }
  

  input.classList.add('valid');
  return true;
}


function showError(input, message) {
  input.classList.add('invalid');
  

  let errorDiv = input.nextElementSibling;
  if (!errorDiv || !errorDiv.classList.contains('error-message')) {
    errorDiv = document.createElement('div');
    errorDiv.className = 'error-message';
    input.parentNode.insertBefore(errorDiv, input.nextSibling);
  }
  
  errorDiv.textContent = message;
  errorDiv.style.display = 'block';
}


function clearError(input) {
  input.classList.remove('invalid', 'valid');
  
  const errorDiv = input.nextElementSibling;
  if (errorDiv && errorDiv.classList.contains('error-message')) {
    errorDiv.style.display = 'none';
  }
}

function shakeForm() {
  const loginForm = document.getElementById('loginForm');
  loginForm.classList.add('shake');
  setTimeout(() => loginForm.classList.remove('shake'), 500);
}


function addPasswordToggle(passwordInput) {
  const toggleBtn = document.createElement('button');
  toggleBtn.type = 'button';
  toggleBtn.className = 'password-toggle';
  toggleBtn.innerHTML = '<i class="fa-solid fa-eye"></i>';
  toggleBtn.setAttribute('aria-label', 'Toggle password visibility');
  
  passwordInput.parentNode.style.position = 'relative';
  passwordInput.parentNode.appendChild(toggleBtn);
  
  toggleBtn.addEventListener('click', () => {
    const type = passwordInput.type === 'password' ? 'text' : 'password';
    passwordInput.type = type;
    toggleBtn.innerHTML = type === 'password' 
      ? '<i class="fa-solid fa-eye"></i>' 
      : '<i class="fa-solid fa-eye-slash"></i>';
  });
}

function addRememberMeOption() {
  const loginForm = document.getElementById('loginForm');
  const submitBtn = loginForm.querySelector('button[type="submit"]');
  
  const rememberDiv = document.createElement('div');
  rememberDiv.className = 'remember-me';
  rememberDiv.innerHTML = `
    <label>
      <input type="checkbox" id="rememberMe" name="rememberMe">
      <span>Remember me</span>
    </label>
  `;
  
  loginForm.insertBefore(rememberDiv, submitBtn);
}

function addSocialLoginButtons() {
  const loginForm = document.getElementById('loginForm');
  const submitBtn = loginForm.querySelector('button[type="submit"]');
  
  const divider = document.createElement('div');
  divider.className = 'login-divider';
  divider.innerHTML = '<span>Or continue with</span>';
  
  const socialButtons = document.createElement('div');
  socialButtons.className = 'social-login-buttons';
  socialButtons.innerHTML = `
    <button type="button" class="social-btn google-btn">
      <i class="fa-brands fa-google"></i> Google
    </button>
    <button type="button" class="social-btn facebook-btn">
      <i class="fa-brands fa-facebook-f"></i> Facebook
    </button>
  `;
  
  loginForm.insertBefore(divider, submitBtn);
  loginForm.insertBefore(socialButtons, submitBtn);
  

  socialButtons.querySelectorAll('.social-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const platform = e.currentTarget.classList.contains('google-btn') ? 'Google' : 'Facebook';
      showNotification(`${platform} login coming soon!`, 'info');
    });
  });
}


function simulateLogin(email, password) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
    
      if (email === 'demo@jobfinder.com' && password === 'demo123') {
        resolve({ success: true, user: { email, name: 'Demo User' } });
      } else {
        resolve({ success: true, user: { email, name: 'User' } });
      }
    }, 1500);
  });
}


function checkExistingSession() {
  const isLoggedIn = localStorage.getItem('isLoggedIn');
  if (isLoggedIn === 'true') {
    showNotification('You are already logged in. Redirecting...', 'info');
    setTimeout(() => {
      window.location.href = 'index.html';
    }, 2000);
  }
}


function showNotification(message, type = 'info') {

  const existing = document.querySelector('.notification');
  if (existing) existing.remove();

  const notification = document.createElement('div');
  notification.className = `notification notification-${type}`;
  
  const iconMap = {
    success: 'check-circle',
    error: 'exclamation-circle',
    info: 'info-circle'
  };
  
  notification.innerHTML = `
    <i class="fa-solid fa-${iconMap[type]}"></i>
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