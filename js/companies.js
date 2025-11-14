document.addEventListener('DOMContentLoaded', () => {
  const companies = [
    {
      name: "SuperSoft IT",
      industry: "IT & Software",
      details: "Innovative software solutions for enterprises. Based in Dhaka.",
      logo: "https://logo.clearbit.com/microsoft.com"
    },
    {
      name: "EduGenius",
      industry: "Education",
      details: "Next-generation EdTech platform serving Bangladesh and beyond.",
      logo: "https://logo.clearbit.com/coursera.org"
    },
    {
      name: "GreenEnergy BD",
      industry: "Renewables",
      details: "Solar and wind energy projects powering rural communities.",
      logo: "https://logo.clearbit.com/tesla.com"
    },
    {
      name: "AgroWave",
      industry: "Agriculture",
      details: "Smart farming tools and supply-chain solutions for farmers.",
      logo: "https://logo.clearbit.com/farmersedge.ca"
    },
    {
      name: "HealthBridge",
      industry: "Healthcare",
      details: "Telemedicine and health records platform connecting clinics.",
      logo: "https://logo.clearbit.com/teladoc.com"
    },
    {
      name: "FinovaPay",
      industry: "Fintech",
      details: "Digital payments and microloan services for small businesses.",
      logo: "https://logo.clearbit.com/stripe.com"
    },
    {
      name: "TravelVista",
      industry: "Travel & Tourism",
      details: "Local tour packages and travel booking tailored for Bangladesh.",
      logo: "https://logo.clearbit.com/expedia.com"
    },
    {
      name: "FashionHub",
      industry: "Retail",
      details: "Apparel marketplace showcasing local designers and artisans.",
      logo: "https://logo.clearbit.com/zara.com"
    },
    {
      name: "BuildRight Construction",
      industry: "Construction",
      details: "Sustainable construction and urban development services.",
      logo: "https://logo.clearbit.com/bechtel.com"
    },
    {
      name: "MediaPulse",
      industry: "Media & Entertainment",
      details: "Digital content studio producing short-form and web series.",
      logo: "https://logo.clearbit.com/netflix.com"
    }
    // Add more companies here
  ];

  const el = document.getElementById('companies-list');
  if (!el) return;
  
  el.innerHTML = companies.map(company => `
    <div class="company-card">
      <img src="${company.logo}" alt="${company.name} logo" class="company-logo"/>
      <div class="company-name">${company.name}</div>
      <div class="company-industry">${company.industry}</div>
      <div class="company-details">${company.details}</div>
    </div>
  `).join('');

  // Update company count
  const countEl = document.getElementById('company-count');
  if (countEl) {
    countEl.textContent = companies.length;
  }
});
