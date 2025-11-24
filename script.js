document.addEventListener('DOMContentLoaded', () => {
    const grid = document.getElementById('projects-grid');
    const controlsContainer = document.querySelector('.controls');
    
    // Get unique categories
    const categories = ['All', ...new Set(projects.map(p => p.category))];
    
    // Generate filter buttons
    controlsContainer.innerHTML = categories.map(cat => {
        const count = cat === 'All' 
            ? projects.length 
            : projects.filter(p => p.category === cat).length;
        
        return `<button class="filter-btn ${cat === 'All' ? 'active' : ''}" data-filter="${cat}">
            <span class="label">${cat}</span>
            <span class="count">${count}</span>
        </button>`;
    }).join('');

    // Add event listeners to new buttons
    const filterBtns = document.querySelectorAll('.filter-btn');
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove active class from all
            filterBtns.forEach(b => b.classList.remove('active'));
            // Add active class to clicked
            btn.classList.add('active');
            
            const category = btn.getAttribute('data-filter');
            renderProjects(category);
        });
    });

    // Initial render
    renderProjects('All');

    function renderProjects(category) {
        // Clear grid
        grid.innerHTML = '';
        
        // Filter projects
        const filtered = category === 'All' 
            ? projects 
            : projects.filter(p => p.category === category);

        // Create and append cards
        filtered.forEach((project, index) => {
            const card = createCard(project, index);
            grid.appendChild(card);
        });
    }

    function createCard(project, index) {
        const card = document.createElement('div');
        card.className = 'project-card';
        card.style.animationDelay = `${index * 0.05}s`;
        
        const tagsHtml = project.tags.map(tag => `<span class="tag">${tag}</span>`).join('');

        card.innerHTML = `
            <div class="card-header">
                <div class="folder-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
                </div>
                <a href="${project.url}" target="_blank" class="external-link" aria-label="View Source">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                </a>
            </div>
            <h3 class="project-title">${project.name}</h3>
            <p class="project-desc">${project.description}</p>
            <div class="tags">
                ${tagsHtml}
            </div>
        `;
        
        return card;
    }
});
