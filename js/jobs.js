document.addEventListener('DOMContentLoaded', () => {
  const jobs = [
    {
      company: 'SuperSoft IT',
      title: 'Frontend Web Developer',
      location: 'Dhaka',
      desc: 'Develop modern apps using React, HTML/CSS/JS. 2+ years experience preferred.',
      type: 'Full-Time',
      category: 'it',
      salary: '45,000 - 60,000 BDT',
      posted: '2 days ago',
      url: 'job-details.html',
      logo: 'https://logo.clearbit.com/microsoft.com'
    },
    {
      company: 'EduGenius',
      title: 'UI/UX Designer',
      location: 'Chattogram',
      desc: 'Design user interfaces for web/mobile. Experience in Figma required.',
      type: 'Part-Time',
      category: 'design',
      salary: '35,000 - 45,000 BDT',
      posted: '1 week ago',
      url: 'job-details.html',
      logo: 'https://logo.clearbit.com/coursera.org'
    },
    {
      company: 'DataPulse',
      title: 'Data Analyst',
      location: 'Dhaka',
      desc: 'Analyze datasets, build dashboards with SQL and Tableau. 1-3 years experience.',
      type: 'Full-Time',
      category: 'it',
      salary: '40,000 - 55,000 BDT',
      posted: '3 days ago',
      url: 'job-details.html',
      logo: 'https://logo.clearbit.com/tableau.com'
    },
    {
      company: 'CloudWave',
      title: 'DevOps Engineer',
      location: 'Remote',
      desc: 'Maintain CI/CD pipelines and cloud infrastructure (AWS/GCP).',
      type: 'Full-Time',
      category: 'it',
      salary: '60,000 - 80,000 BDT',
      posted: '5 days ago',
      url: 'job-details.html',
      logo: 'https://logo.clearbit.com/aws.amazon.com'
    },
    {
      company: 'MarketMinds',
      title: 'Digital Marketing Specialist',
      location: 'Sylhet',
      desc: 'Manage PPC campaigns, SEO, and social media strategies.',
      type: 'Contract',
      category: 'sales',
      salary: '30,000 - 40,000 BDT',
      posted: '1 day ago',
      url: 'job-details.html',
      logo: 'https://logo.clearbit.com/hubspot.com'
    },
    {
      company: 'FinTrust',
      title: 'Junior Accountant',
      location: 'Khulna',
      desc: 'Assist with bookkeeping, invoicing and monthly reports. Basic accounting software knowledge required.',
      type: 'Full-Time',
      category: 'accounting',
      salary: '25,000 - 35,000 BDT',
      posted: '4 days ago',
      url: 'job-details.html',
      logo: 'https://logo.clearbit.com/quickbooks.intuit.com'
    },
    {
      company: 'CareWell Hospital',
      title: 'Medical Receptionist',
      location: 'Dhaka',
      desc: 'Front desk duties, appointment scheduling and patient support.',
      type: 'Part-Time',
      category: 'healthcare',
      salary: '20,000 - 28,000 BDT',
      posted: '2 days ago',
      url: 'job-details.html',
      logo: 'https://logo.clearbit.com/mayoclinic.org'
    },
    {
      company: 'BrightLearn',
      title: 'English Language Instructor',
      location: 'Rajshahi',
      desc: 'Teach conversational English to adults, prepare lesson plans.',
      type: 'Part-Time',
      category: 'education',
      salary: '22,000 - 30,000 BDT',
      posted: '1 week ago',
      url: 'job-details.html',
      logo: 'https://logo.clearbit.com/duolingo.com'
    },
    {
      company: 'PixelForge',
      title: 'Motion Graphics Artist',
      location: 'Chattogram',
      desc: 'Create motion assets for video and social media. After Effects required.',
      type: 'Contract',
      category: 'design',
      salary: '35,000 - 50,000 BDT',
      posted: '3 days ago',
      url: 'job-details.html',
      logo: 'https://logo.clearbit.com/adobe.com'
    },
    {
      company: 'RetailRise',
      title: 'Sales Executive',
      location: 'Barishal',
      desc: 'Drive B2B sales, manage client relations and sales pipeline.',
      type: 'Full-Time',
      category: 'sales',
      salary: '28,000 - 38,000 BDT',
      posted: '5 days ago',
      url: 'job-details.html',
      logo: 'https://logo.clearbit.com/salesforce.com'
    },
    {
      company: 'PeopleFirst HR',
      title: 'HR Coordinator',
      location: 'Dhaka',
      desc: 'Support recruitment, onboarding and employee records.',
      type: 'Full-Time',
      category: 'sales',
      salary: '32,000 - 42,000 BDT',
      posted: '6 days ago',
      url: 'job-details.html',
      logo: 'https://logo.clearbit.com/workday.com'
    },
    {
      company: 'InsightAI',
      title: 'Machine Learning Intern',
      location: 'Dhaka',
      desc: 'Work on prototype models, data preprocessing, and experiment tracking.',
      type: 'Internship',
      category: 'it',
      salary: '15,000 - 20,000 BDT',
      posted: '2 days ago',
      url: 'job-details.html',
      logo: 'https://logo.clearbit.com/openai.com'
    },
    {
      company: 'Productive Labs',
      title: 'Product Manager',
      location: 'Remote',
      desc: 'Lead product roadmap, collaborate with engineering and design teams.',
      type: 'Full-Time',
      category: 'it',
      salary: '70,000 - 90,000 BDT',
      posted: '1 day ago',
      url: 'job-details.html',
      logo: 'https://logo.clearbit.com/atlassian.com'
    }
  ];

  let currentJobs = [...jobs];
  
  function renderJobs(list, animate = true) {
    const el = document.getElementById('job-results');
    if (!el) return;
    
    if (!list.length) {
      el.innerHTML = `
        <div class="no-results fade-in">
          <i class="fa-regular fa-face-frown"></i>
          <h3>No jobs found</h3>
          <p>Try adjusting your search criteria</p>
        </div>
      `;
      return;
    }
    
    el.innerHTML = list.map((job, index) => `
      <div class="job-card ${animate ? 'fade-in-up' : ''}" style="animation-delay: ${index * 0.1}s">
        <div class="job-card-header">
          <img src="${job.logo}" alt="${job.company}" class="job-company-logo" onerror="this.src='https://via.placeholder.com/50'">
          <div class="job-meta">
            <i class="fa-solid fa-building"></i> ${job.company}
            <span class="separator">•</span>
            <i class="fa-solid fa-location-dot"></i> ${job.location}
            <span class="separator">•</span>
            <i class="fa-solid fa-clock"></i> ${job.posted}
          </div>
        </div>
        <div class="job-title">
          ${job.title} 
          <span class="tag tag-${job.type.toLowerCase().replace('-', '')}">${job.type}</span>
        </div>
        <div class="job-description">${job.desc}</div>
        <div class="job-footer">
          <div class="job-salary">
            <i class="fa-solid fa-wallet"></i> ${job.salary}
          </div>
          <a href="${job.url}" class="apply-btn">
            View Details <i class="fa-solid fa-arrow-right"></i>
          </a>
        </div>
      </div>
    `).join('');
    
    document.querySelectorAll('.apply-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        createRipple(e, btn);
      });
    });
  }

  let filterTimeout;
  const filterForm = document.getElementById('filterForm');
  
  if (filterForm) {
    const inputs = filterForm.querySelectorAll('input, select');
    inputs.forEach(input => {
      input.addEventListener('input', () => {
        clearTimeout(filterTimeout);
        filterTimeout = setTimeout(() => {
          applyFilters();
        }, 300);
      });
    });

    filterForm.addEventListener('submit', (e) => {
      e.preventDefault();
      applyFilters(true);
    });
  }

  function applyFilters(animate = false) {
    const query = filterForm.query.value.trim().toLowerCase();
    const location = filterForm.location.value.trim().toLowerCase();
    const type = filterForm.type.value;
    const category = filterForm.category.value;
    
    currentJobs = jobs.filter(job => {
      const matchesQuery = !query || 
        job.title.toLowerCase().includes(query) || 
        job.desc.toLowerCase().includes(query) ||
        job.company.toLowerCase().includes(query);
      
      const matchesLocation = !location || 
        job.location.toLowerCase().includes(location);
      
      const matchesType = !type || job.type === type;
      const matchesCategory = !category || job.category === category;
      
      return matchesQuery && matchesLocation && matchesType && matchesCategory;
    });
    
    renderJobs(currentJobs, animate);
    updateResultCount(currentJobs.length);
  }

  function updateResultCount(count) {
    let countElement = document.querySelector('.results-count');
    
    if (!countElement) {
      const mainHeading = document.querySelector('main h1');
      if (mainHeading) {
        countElement = document.createElement('p');
        countElement.className = 'results-count';
        mainHeading.after(countElement);
      }
    }
    
    if (countElement) {
      countElement.innerHTML = `
        <i class="fa-solid fa-briefcase"></i> 
        Showing <strong>${count}</strong> ${count === 1 ? 'job' : 'jobs'}
      `;
    }
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
    
    element.appendChild(ripple);
    
    setTimeout(() => ripple.remove(), 600);
  }

  function loadURLParams() {
    const urlParams = new URLSearchParams(window.location.search);
    
    if (filterForm) {
      if (urlParams.get('query')) filterForm.query.value = urlParams.get('query');
      if (urlParams.get('location')) filterForm.location.value = urlParams.get('location');
      if (urlParams.get('type')) filterForm.type.value = urlParams.get('type');
      if (urlParams.get('category')) filterForm.category.value = urlParams.get('category');
      
      if (urlParams.toString()) {
        applyFilters(true);
        return;
      }
    }
  }


  loadURLParams();
  if (currentJobs.length === jobs.length) {
    renderJobs(jobs);
    updateResultCount(jobs.length);
  }


  addSortingControls();
});

function addSortingControls() {
  const filterBar = document.querySelector('.filter-bar');
  if (!filterBar) return;
  
  const sortSelect = document.createElement('select');
  sortSelect.name = 'sort';
  sortSelect.innerHTML = `
    <option value="">Sort By</option>
    <option value="recent">Most Recent</option>
    <option value="salary-high">Salary: High to Low</option>
    <option value="salary-low">Salary: Low to High</option>
    <option value="title">Job Title (A-Z)</option>
  `;
  
  filterBar.appendChild(sortSelect);
}