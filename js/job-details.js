
document.addEventListener('DOMContentLoaded', () => {
  

  const jobsDatabase = {
    'frontend-dev': {
      id: 'frontend-dev',
      company: 'SuperSoft IT',
      title: 'Frontend Web Developer',
      location: 'Dhaka, Bangladesh',
      salary: '45,000 - 60,000 BDT/month',
      type: 'Full-Time',
      experience: '2-4 years',
      education: 'Bachelor\'s Degree in Computer Science',
      posted: '2 days ago',
      deadline: 'November 30, 2025',
      openings: 3,
      desc: `
        <p>We are seeking an experienced frontend developer to join our dynamic team. The ideal candidate will have strong expertise in modern web technologies and a passion for creating exceptional user experiences.</p>
        
        <h3><i class="fa-solid fa-clipboard-list"></i> Key Responsibilities:</h3>
        <ul>
          <li>Develop and maintain responsive web applications using React.js</li>
          <li>Collaborate with UX/UI designers to implement pixel-perfect designs</li>
          <li>Write clean, maintainable, and well-documented code</li>
          <li>Optimize applications for maximum speed and scalability</li>
          <li>Work closely with backend developers to integrate APIs</li>
          <li>Participate in code reviews and mentor junior developers</li>
          <li>Stay updated with emerging frontend technologies and best practices</li>
        </ul>
        
        <h3><i class="fa-solid fa-check-circle"></i> Requirements:</h3>
        <ul>
          <li>Bachelor's degree in Computer Science or related field</li>
          <li>2+ years of professional experience in frontend development</li>
          <li>Expert knowledge of HTML5, CSS3, JavaScript (ES6+)</li>
          <li>Strong experience with React.js and its ecosystem (Redux, React Router)</li>
          <li>Proficiency with responsive design and CSS frameworks (Tailwind, Bootstrap)</li>
          <li>Experience with version control systems (Git)</li>
          <li>Understanding of RESTful APIs and asynchronous programming</li>
          <li>Strong problem-solving skills and attention to detail</li>
        </ul>
        
        <h3><i class="fa-solid fa-star"></i> Nice to Have:</h3>
        <ul>
          <li>Experience with TypeScript</li>
          <li>Knowledge of Next.js or other React frameworks</li>
          <li>Familiarity with testing frameworks (Jest, React Testing Library)</li>
          <li>Experience with CI/CD pipelines</li>
          <li>Understanding of web accessibility standards (WCAG)</li>
        </ul>
        
        <h3><i class="fa-solid fa-gift"></i> What We Offer:</h3>
        <ul>
          <li>Competitive salary package</li>
          <li>Health insurance coverage</li>
          <li>Annual performance bonuses</li>
          <li>Flexible working hours</li>
          <li>Professional development opportunities</li>
          <li>Modern office environment</li>
          <li>Team building activities and events</li>
        </ul>
      `,
      logo: 'https://logo.clearbit.com/microsoft.com',
      companyInfo: {
        size: '200-500 employees',
        founded: '2015',
        industry: 'IT & Software Development',
        website: 'www.supersoftit.com'
      }
    }
  };


  const urlParams = new URLSearchParams(window.location.search);
  const jobId = urlParams.get('id') || 'frontend-dev';
  

  const job = jobsDatabase[jobId] || jobsDatabase['frontend-dev'];
  

  renderJobDetails(job);
  

  initializeShareButtons(job);
  

  initializeSaveJob(job);
  

  initializeApplyButton(job);
});

function renderJobDetails(job) {
  const container = document.getElementById('job-detail-container');
  if (!container) return;
  
  container.innerHTML = `
    <div class="job-detail-content fade-in">
      <!-- Header Section -->
      <div class="job-detail-header">
        <div class="job-header-left">
          <img src="${job.logo}" class="job-detail-logo" alt="${job.company}" onerror="this.src='https://via.placeholder.com/100'">
          <div class="job-company-and-title">
            <div class="job-detail-title">${job.title}</div>
            <div class="job-detail-company">
              <i class="fa-solid fa-building"></i> ${job.company}
            </div>
            <div class="job-detail-location">
              <i class="fa-solid fa-location-dot"></i> ${job.location}
            </div>
          </div>
        </div>
        <div class="job-header-actions">
          <button class="action-btn save-btn" title="Save Job">
            <i class="fa-regular fa-bookmark"></i>
          </button>
          <button class="action-btn share-btn" title="Share Job">
            <i class="fa-solid fa-share-nodes"></i>
          </button>
        </div>
      </div>
      
      <!-- Quick Info Cards -->
      <div class="job-quick-info">
        <div class="info-card">
          <i class="fa-solid fa-wallet"></i>
          <div class="info-label">Salary</div>
          <div class="info-value">${job.salary}</div>
        </div>
        <div class="info-card">
          <i class="fa-solid fa-briefcase"></i>
          <div class="info-label">Job Type</div>
          <div class="info-value">${job.type}</div>
        </div>
        <div class="info-card">
          <i class="fa-solid fa-clock"></i>
          <div class="info-label">Experience</div>
          <div class="info-value">${job.experience}</div>
        </div>
        <div class="info-card">
          <i class="fa-solid fa-calendar"></i>
          <div class="info-label">Deadline</div>
          <div class="info-value">${job.deadline}</div>
        </div>
      </div>
      
      <!-- Job Description -->
      <div class="job-description-section">
        <h2><i class="fa-solid fa-file-lines"></i> Job Description</h2>
        <div class="job-desc">${job.desc}</div>
      </div>
      
      <!-- Company Info Sidebar -->
      <div class="company-info-section">
        <h3><i class="fa-solid fa-building"></i> About ${job.company}</h3>
        <div class="company-details">
          <div class="company-detail-item">
            <i class="fa-solid fa-users"></i>
            <span><strong>Company Size:</strong> ${job.companyInfo.size}</span>
          </div>
          <div class="company-detail-item">
            <i class="fa-solid fa-calendar-check"></i>
            <span><strong>Founded:</strong> ${job.companyInfo.founded}</span>
          </div>
          <div class="company-detail-item">
            <i class="fa-solid fa-industry"></i>
            <span><strong>Industry:</strong> ${job.companyInfo.industry}</span>
          </div>
          <div class="company-detail-item">
            <i class="fa-solid fa-globe"></i>
            <span><strong>Website:</strong> <a href="https://${job.companyInfo.website}" target="_blank">${job.companyInfo.website}</a></span>
          </div>
        </div>
      </div>
      
      <!-- Application Stats -->
      <div class="application-stats">
        <div class="stat-item">
          <i class="fa-solid fa-users"></i>
          <span><strong>45</strong> Applicants</span>
        </div>
        <div class="stat-item">
          <i class="fa-solid fa-eye"></i>
          <span><strong>234</strong> Views</span>
        </div>
        <div class="stat-item">
          <i class="fa-solid fa-door-open"></i>
          <span><strong>${job.openings}</strong> Openings</span>
        </div>
      </div>
      
      <!-- Apply Button -->
      <div class="apply-section">
        <button class="apply-btn-large" id="applyBtn">
          <i class="fa-solid fa-paper-plane"></i> Apply Now
        </button>
        <p class="apply-note">
          <i class="fa-solid fa-info-circle"></i> 
          You will be redirected to the application form
        </p>
      </div>
      
      <!-- Back Button -->
      <a href="jobs.html" class="back-link">
        <i class="fa-solid fa-arrow-left"></i> Back to Job Listings
      </a>
    </div>
  `;
}

function initializeShareButtons(job) {
  const shareBtn = document.querySelector('.share-btn');
  if (!shareBtn) return;
  
  shareBtn.addEventListener('click', () => {
    const shareData = {
      title: `${job.title} at ${job.company}`,
      text: `Check out this job opportunity: ${job.title}`,
      url: window.location.href
    };
    
    if (navigator.share) {
      navigator.share(shareData);
    } else {
 
      navigator.clipboard.writeText(window.location.href);
      showNotification('Link copied to clipboard!', 'success');
    }
  });
}

function initializeSaveJob(job) {
  const saveBtn = document.querySelector('.save-btn');
  if (!saveBtn) return;
  
  const savedJobs = JSON.parse(localStorage.getItem('savedJobs') || '[]');
  const isSaved = savedJobs.includes(job.id);
  
  if (isSaved) {
    saveBtn.innerHTML = '<i class="fa-solid fa-bookmark"></i>';
    saveBtn.classList.add('saved');
  }
  
  saveBtn.addEventListener('click', () => {
    let savedJobs = JSON.parse(localStorage.getItem('savedJobs') || '[]');
    
    if (savedJobs.includes(job.id)) {
      savedJobs = savedJobs.filter(id => id !== job.id);
      saveBtn.innerHTML = '<i class="fa-regular fa-bookmark"></i>';
      saveBtn.classList.remove('saved');
      showNotification('Job removed from saved list', 'info');
    } else {
      savedJobs.push(job.id);
      saveBtn.innerHTML = '<i class="fa-solid fa-bookmark"></i>';
      saveBtn.classList.add('saved');
      showNotification('Job saved successfully!', 'success');
    }
    
    localStorage.setItem('savedJobs', JSON.stringify(savedJobs));
  });
}

function initializeApplyButton(job) {
  const applyBtn = document.getElementById('applyBtn');
  if (!applyBtn) return;
  
  applyBtn.addEventListener('click', () => {
    showApplicationModal(job);
  });
}

function showApplicationModal(job) {
  const modal = document.createElement('div');
  modal.className = 'modal-overlay';
  modal.innerHTML = `
    <div class="modal-content">
      <button class="modal-close"><i class="fa-solid fa-times"></i></button>
      <h2><i class="fa-solid fa-paper-plane"></i> Apply for ${job.title}</h2>
      <p>You're about to apply for <strong>${job.title}</strong> at <strong>${job.company}</strong></p>
      
      <div class="application-checklist">
        <h3>Before you apply, make sure you have:</h3>
        <ul>
          <li><i class="fa-solid fa-check-circle"></i> Updated resume (PDF format)</li>
          <li><i class="fa-solid fa-check-circle"></i> Cover letter (optional)</li>
          <li><i class="fa-solid fa-check-circle"></i> Portfolio or work samples (if applicable)</li>
        </ul>
      </div>
      
      <div class="modal-actions">
        <button class="btn-secondary" onclick="this.closest('.modal-overlay').remove()">
          Cancel
        </button>
        <button class="btn-primary" onclick="proceedToApplication()">
          <i class="fa-solid fa-arrow-right"></i> Proceed to Application
        </button>
      </div>
    </div>
  `;
  
  document.body.appendChild(modal);
  setTimeout(() => modal.classList.add('show'), 10);
  
  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.classList.remove('show');
      setTimeout(() => modal.remove(), 300);
    }
  });
  
  modal.querySelector('.modal-close').addEventListener('click', () => {
    modal.classList.remove('show');
    setTimeout(() => modal.remove(), 300);
  });
}

function proceedToApplication() {
  showNotification('Redirecting to application form...', 'success');
  setTimeout(() => {
    window.location.href = 'application-form.html';
  }, 1500);
}

function showNotification(message, type = 'info') {
  const notification = document.createElement('div');
  notification.className = `notification notification-${type} show`;
  notification.innerHTML = `
    <i class="fa-solid fa-${type === 'success' ? 'check-circle' : 'info-circle'}"></i>
    <span>${message}</span>
  `;
  
  document.body.appendChild(notification);
  
  setTimeout(() => {
    notification.classList.remove('show');
    setTimeout(() => notification.remove(), 300);
  }, 3000);
}