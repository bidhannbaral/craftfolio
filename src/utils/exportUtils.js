// Utility functions for exporting portfolios

export const exportPortfolioAsHTML = (portfolio) => {
  // Create a complete HTML document
  const htmlContent = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${portfolio.title}</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        
        body {
            font-family: ${portfolio.styling.fontFamily}, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            line-height: 1.6;
            color: ${portfolio.styling.textColor};
            background-color: ${portfolio.styling.backgroundColor};
        }
        
        .container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 20px;
        }
        
        .header {
            text-align: center;
            padding: 80px 20px;
            background-color: ${portfolio.styling.backgroundColor};
        }
        
        .profile-image {
            width: 150px;
            height: 150px;
            border-radius: 50%;
            object-fit: cover;
            margin: 0 auto 30px;
            border: 4px solid ${portfolio.styling.primaryColor};
            display: block;
        }
        
        .name {
            font-size: 3rem;
            font-weight: bold;
            color: ${portfolio.styling.primaryColor};
            margin-bottom: 15px;
        }
        
        .title {
            font-size: 1.5rem;
            color: ${portfolio.styling.secondaryColor};
            margin-bottom: 20px;
        }
        
        .description {
            font-size: 1.1rem;
            max-width: 600px;
            margin: 0 auto;
            line-height: 1.8;
        }
        
        .contact-info {
            margin-top: 30px;
            display: flex;
            justify-content: center;
            gap: 30px;
            flex-wrap: wrap;
        }
        
        .section {
            padding: 60px 20px;
        }
        
        .section:nth-child(even) {
            background-color: #f8fafc;
        }
        
        .section-title {
            font-size: 2.5rem;
            color: ${portfolio.styling.primaryColor};
            text-align: center;
            margin-bottom: 50px;
        }
        
        .projects-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 30px;
        }
        
        .project-card {
            background: white;
            border-radius: 10px;
            box-shadow: 0 4px 15px rgba(0,0,0,0.1);
            overflow: hidden;
            transition: transform 0.3s ease;
        }
        
        .project-card:hover {
            transform: translateY(-5px);
        }
        
        .project-image {
            width: 100%;
            height: 200px;
            object-fit: cover;
        }
        
        .project-content {
            padding: 25px;
        }
        
        .project-title {
            font-size: 1.3rem;
            color: ${portfolio.styling.primaryColor};
            margin-bottom: 15px;
        }
        
        .project-description {
            color: #666;
            margin-bottom: 20px;
            line-height: 1.6;
        }
        
        .tech-tags {
            display: flex;
            flex-wrap: wrap;
            gap: 8px;
            margin-bottom: 20px;
        }
        
        .tech-tag {
            background: ${portfolio.styling.secondaryColor};
            color: white;
            padding: 4px 12px;
            border-radius: 20px;
            font-size: 0.8rem;
        }
        
        .project-links {
            display: flex;
            gap: 15px;
        }
        
        .btn {
            padding: 10px 20px;
            border-radius: 5px;
            text-decoration: none;
            font-weight: 500;
            transition: opacity 0.3s ease;
        }
        
        .btn-primary {
            background: ${portfolio.styling.primaryColor};
            color: white;
        }
        
        .btn-secondary {
            border: 2px solid ${portfolio.styling.primaryColor};
            color: ${portfolio.styling.primaryColor};
            background: transparent;
        }
        
        .btn:hover {
            opacity: 0.9;
        }
        
        .skills-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 20px;
        }
        
        .skill-item {
            text-align: center;
            padding: 20px;
            border: 2px solid ${portfolio.styling.primaryColor}20;
            border-radius: 10px;
        }
        
        .skill-name {
            font-weight: bold;
            color: ${portfolio.styling.primaryColor};
            margin-bottom: 10px;
        }
        
        .skill-level {
            padding: 5px 10px;
            border-radius: 15px;
            color: white;
            font-size: 0.8rem;
        }
        
        .skill-expert { background: #10b981; }
        .skill-advanced { background: #3b82f6; }
        .skill-intermediate { background: #f59e0b; }
        .skill-beginner { background: #6b7280; }
        
        .footer {
            background: #1f2937;
            color: white;
            text-align: center;
            padding: 60px 20px;
        }
        
        .footer-title {
            font-size: 2rem;
            color: ${portfolio.styling.primaryColor};
            margin-bottom: 20px;
        }
        
        .footer-description {
            font-size: 1.1rem;
            margin-bottom: 30px;
        }
        
        .footer-links {
            display: flex;
            justify-content: center;
            gap: 20px;
            flex-wrap: wrap;
        }
        
        .footer-btn {
            padding: 15px 30px;
            border-radius: 5px;
            text-decoration: none;
            font-weight: 500;
            transition: opacity 0.3s ease;
        }
        
        .footer-btn-primary {
            background: ${portfolio.styling.primaryColor};
            color: white;
        }
        
        .footer-btn-secondary {
            border: 2px solid white;
            color: white;
            background: transparent;
        }
        
        @media (max-width: 768px) {
            .name { font-size: 2rem; }
            .section { padding: 40px 10px; }
            .contact-info { flex-direction: column; align-items: center; }
            .projects-grid { grid-template-columns: 1fr; }
            .skills-grid { grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); }
        }
    </style>
</head>
<body>
    <!-- Header Section -->
    <header class="header">
        <div class="container">
            ${portfolio.sections.about.profileImage ? 
                `<img src="${portfolio.sections.about.profileImage}" alt="${portfolio.sections.about.name}" class="profile-image">` : 
                ''
            }
            <h1 class="name">${portfolio.sections.about.name || portfolio.title}</h1>
            <h2 class="title">${portfolio.sections.about.title}</h2>
            <p class="description">${portfolio.sections.about.description}</p>
            
            ${(portfolio.sections.about.email || portfolio.sections.about.location) ? `
            <div class="contact-info">
                ${portfolio.sections.about.email ? `<span>📧 ${portfolio.sections.about.email}</span>` : ''}
                ${portfolio.sections.about.location ? `<span>📍 ${portfolio.sections.about.location}</span>` : ''}
            </div>
            ` : ''}
        </div>
    </header>

    ${portfolio.sections.projects.items.length > 0 ? `
    <!-- Projects Section -->
    <section class="section">
        <div class="container">
            <h2 class="section-title">Featured Projects</h2>
            <div class="projects-grid">
                ${portfolio.sections.projects.items.map(project => `
                <div class="project-card">
                    ${project.image ? `<img src="${project.image}" alt="${project.title}" class="project-image">` : ''}
                    <div class="project-content">
                        <h3 class="project-title">${project.title}</h3>
                        <p class="project-description">${project.description}</p>
                        ${project.technologies.length > 0 ? `
                        <div class="tech-tags">
                            ${project.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
                        </div>
                        ` : ''}
                        <div class="project-links">
                            ${project.liveUrl ? `<a href="${project.liveUrl}" class="btn btn-primary" target="_blank">Live Demo</a>` : ''}
                            ${project.githubUrl ? `<a href="${project.githubUrl}" class="btn btn-secondary" target="_blank">GitHub</a>` : ''}
                        </div>
                    </div>
                </div>
                `).join('')}
            </div>
        </div>
    </section>
    ` : ''}

    ${portfolio.sections.experience.items.length > 0 ? `
    <!-- Experience Section -->
    <section class="section">
        <div class="container">
            <h2 class="section-title">Professional Experience</h2>
            <div style="display: flex; flex-direction: column; gap: 2rem;">
                ${portfolio.sections.experience.items.map(exp => `
                <div style="background: white; border-radius: 8px; box-shadow: 0 4px 6px rgba(0,0,0,0.1); padding: 1.5rem; border-left: 4px solid ${portfolio.styling.primaryColor};">
                    <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 1rem; flex-wrap: wrap;">
                        <div style="margin-bottom: 0.5rem;">
                            <h3 style="color: ${portfolio.styling.primaryColor}; font-size: 1.25rem; font-weight: 600; margin-bottom: 0.25rem;">${exp.position}</h3>
                            <h4 style="color: #374151; font-size: 1.125rem; font-weight: 500; margin-bottom: 0.5rem;">${exp.company}</h4>
                        </div>
                        <div style="color: #6b7280; font-size: 0.875rem;">
                            ${exp.startDate ? new Date(exp.startDate + '-01').toLocaleDateString('en-US', { year: 'numeric', month: 'long' }) : 'Start Date'} - 
                            ${exp.current ? 'Present' : (exp.endDate ? new Date(exp.endDate + '-01').toLocaleDateString('en-US', { year: 'numeric', month: 'long' }) : 'End Date')}
                        </div>
                    </div>
                    <div style="color: #374151; line-height: 1.6; white-space: pre-line;">${exp.description}</div>
                </div>
                `).join('')}
            </div>
        </div>
    </section>
    ` : ''}

    ${portfolio.sections.skills.items.length > 0 ? `
    <!-- Skills Section -->
    <section class="section">
        <div class="container">
            <h2 class="section-title">Skills & Expertise</h2>
            <div class="skills-grid">
                ${portfolio.sections.skills.items.map(skill => `
                <div class="skill-item">
                    <div class="skill-name">${skill.name}</div>
                    <span class="skill-level skill-${skill.level.toLowerCase()}">${skill.level}</span>
                </div>
                `).join('')}
            </div>
        </div>
    </section>
    ` : ''}

    <!-- Footer Section -->
    <footer class="footer">
        <div class="container">
            <h2 class="footer-title">Let's Connect</h2>
            <p class="footer-description">I'm always interested in new opportunities and collaborations.</p>
            <div class="footer-links">
                ${portfolio.sections.contact.email ? `<a href="mailto:${portfolio.sections.contact.email}" class="footer-btn footer-btn-primary">Email Me</a>` : ''}
                ${portfolio.sections.contact.linkedin ? `<a href="${portfolio.sections.contact.linkedin}" class="footer-btn footer-btn-secondary" target="_blank">LinkedIn</a>` : ''}
                ${portfolio.sections.contact.github ? `<a href="${portfolio.sections.contact.github}" class="footer-btn footer-btn-secondary" target="_blank">GitHub</a>` : ''}
            </div>
        </div>
    </footer>
</body>
</html>
  `.trim();

  // Create and download the file
  const blob = new Blob([htmlContent], { type: 'text/html' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = `${portfolio.title.replace(/\s+/g, '_')}_portfolio.html`;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
};

export const exportPortfolioAsJSON = (portfolio) => {
  const dataStr = JSON.stringify(portfolio, null, 2);
  const dataBlob = new Blob([dataStr], { type: 'application/json' });
  const url = URL.createObjectURL(dataBlob);
  const link = document.createElement('a');
  link.href = url;
  link.download = `${portfolio.title.replace(/\s+/g, '_')}_portfolio.json`;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
};

export const importPortfolioFromJSON = (file) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        const portfolio = JSON.parse(e.target.result);
        // Validate portfolio structure
        if (portfolio.sections && portfolio.template) {
          resolve(portfolio);
        } else {
          reject(new Error('Invalid portfolio file format'));
        }
      } catch (error) {
        reject(new Error('Failed to parse portfolio file'));
      }
    };
    reader.readAsText(file);
  });
};
