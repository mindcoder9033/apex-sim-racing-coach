/**
 * Reference Library Controller
 * Search & read racing theory articles from Motorsport Technical Glossary
 */

class ReferenceController {
  constructor() {
    this.activeCategory = 'All';
    this.searchQuery = '';
    this.categories = [
      'All',
      'Basic Fundamentals',
      'Car Control & Balance',
      'Braking & Corner Entry',
      'The Racing Line',
      'Racecraft',
      'Hardware & Setup',
      'Tires & Traction',
      'Advanced Concepts'
    ];
  }

  render() {
    const container = document.getElementById('reference');
    if (!container) return;

    const allRefs = APEX_CONTENT.references || [];
    const filteredRefs = this.getFilteredReferences(allRefs);

    container.innerHTML = `
      <div class="page-container">
        <div class="page-header flex justify-between items-center flex-wrap gap-4 mb-4">
          <div class="page-header-title">
            <h1>Reference Library</h1>
            <p class="text-muted" style="font-size:0.9rem; margin-top:0.25rem;">
              Complete Motorsport Technical Glossary (${allRefs.length} terms)
            </p>
          </div>
          <div class="badge badge-f1-pb" style="font-size:0.85rem; padding:0.4rem 0.85rem;" id="refCounterBadge">
            Showing ${filteredRefs.length} of ${allRefs.length} terms
          </div>
        </div>

        <div class="card mb-4">
          <div class="form-group mb-0">
            <input type="text" class="form-control" id="txtRefSearch" value="${this.escapeHtml(this.searchQuery)}" placeholder="Search racing terms (e.g. Apex, Slip Angle, Trail-Braking, Force Feedback)...">
          </div>
        </div>

        <div class="ref-pills-bar">
          ${this.categories.map(cat => `
            <button class="ref-pill ${this.activeCategory === cat ? 'active' : ''}" data-category="${cat}">
              ${cat}
            </button>
          `).join('')}
        </div>

        <div class="grid-2" id="refCardsContainer">
          ${this.renderRefCards(filteredRefs)}
        </div>
      </div>
    `;

    this.bindEvents();
    window.renderLucideIcons();
  }

  getFilteredReferences(refs) {
    const q = this.searchQuery.toLowerCase().trim();
    return refs.filter(r => {
      const matchCat = (this.activeCategory === 'All') || (r.category === this.activeCategory);
      const matchSearch = !q || 
        r.title.toLowerCase().includes(q) ||
        r.summary.toLowerCase().includes(q) ||
        r.category.toLowerCase().includes(q) ||
        (r.content && r.content.toLowerCase().includes(q));

      return matchCat && matchSearch;
    });
  }

  renderRefCards(refs) {
    if (!refs || refs.length === 0) {
      return `
        <div class="card text-center py-8" style="grid-column: 1 / -1;">
          <div class="mb-3 text-muted flex justify-center"><i data-lucide="search-x" style="width:48px; height:48px;"></i></div>
          <h3 class="mt-2">No Motorsport terms found</h3>
          <p class="text-muted mt-1" style="font-size:0.9rem;">Try resetting your search query or selecting a different category pill above.</p>
        </div>
      `;
    }
    return refs.map(r => `
      <div class="card card-interactive ref-item-card" data-ref-id="${r.id}">
        <div class="flex items-center gap-3 mb-2">
          <span class="icon-lg text-accent flex items-center">${window.getIconSvg(r.icon || 'book-open', 'icon-lg')}</span>
          <div>
            <h3 style="font-size:1.1rem; line-height:1.3;">${r.title}</h3>
            <span class="badge badge-f1-amber" style="font-size:0.7rem; margin-top:0.25rem;">${r.category}</span>
          </div>
        </div>
        <p class="text-muted mt-2" style="font-size:0.875rem; line-height:1.4;">${r.summary}</p>
        <button class="btn btn-outline mt-4" style="font-size:0.8rem; padding:0.35rem 0.75rem; pointer-events:none;">Read Guide →</button>
      </div>
    `).join('');
  }

  bindEvents() {
    // Search input event
    const searchInput = document.getElementById('txtRefSearch');
    if (searchInput) {
      searchInput.addEventListener('input', (e) => {
        this.searchQuery = e.target.value;
        this.updateFilteredView();
      });
    }

    // Category pills click events
    document.querySelectorAll('.ref-pill').forEach(pill => {
      pill.addEventListener('click', (e) => {
        const cat = e.currentTarget.getAttribute('data-category');
        this.activeCategory = cat;
        
        document.querySelectorAll('.ref-pill').forEach(p => p.classList.remove('active'));
        e.currentTarget.classList.add('active');

        this.updateFilteredView();
      });
    });

    this.bindCardEvents();
  }

  updateFilteredView() {
    const allRefs = APEX_CONTENT.references || [];
    const filteredRefs = this.getFilteredReferences(allRefs);

    const counterBadge = document.getElementById('refCounterBadge');
    if (counterBadge) {
      counterBadge.textContent = `Showing ${filteredRefs.length} of ${allRefs.length} terms`;
    }

    const container = document.getElementById('refCardsContainer');
    if (container) {
      container.innerHTML = this.renderRefCards(filteredRefs);
      this.bindCardEvents();
      window.renderLucideIcons();
    }
  }

  bindCardEvents() {
    document.querySelectorAll('.ref-item-card').forEach(card => {
      card.addEventListener('click', (e) => {
        const refId = e.currentTarget.getAttribute('data-ref-id');
        const ref = (APEX_CONTENT.references || []).find(r => r.id === refId);
        if (ref) {
          window.apexApp.showModal(ref.title, `
            <div class="flex items-center gap-2 mb-3">
              <span class="icon-lg text-accent flex items-center">${window.getIconSvg(ref.icon || 'book-open', 'icon-lg')}</span>
              <span class="badge" style="font-size:0.8rem;">${ref.category}</span>
            </div>
            <div class="ref-modal-content" style="font-size:0.95rem; line-height:1.6;">
              ${this.formatMarkdown(ref.content)}
            </div>
          `);
        }
      });
    });
  }

  formatMarkdown(content) {
    if (!content) return '';
    
    return content
      .split('\n\n')
      .map(block => {
        let text = block.trim();
        if (!text) return '';

        // Headings
        if (text.startsWith('### ')) {
          return `<h3>${text.replace('### ', '')}</h3>`;
        }
        if (text.startsWith('## ')) {
          return `<h2>${text.replace('## ', '')}</h2>`;
        }

        // Unordered lists
        if (text.includes('\n- ') || text.startsWith('- ')) {
          const items = text.split('\n')
            .filter(line => line.trim().startsWith('- '))
            .map(line => `<li>${this.formatInline(line.trim().substring(2))}</li>`)
            .join('');
          return `<ul>${items}</ul>`;
        }

        // Ordered lists
        if (text.includes('\n1. ') || text.startsWith('1. ')) {
          const items = text.split('\n')
            .filter(line => /^\d+\.\s/.test(line.trim()))
            .map(line => `<li>${this.formatInline(line.trim().replace(/^\d+\.\s/, ''))}</li>`)
            .join('');
          return `<ol style="margin-left:1.25rem; margin-bottom:1rem;">${items}</ol>`;
        }

        return `<p style="margin-bottom:0.75rem;">${this.formatInline(text)}</p>`;
      })
      .join('');
  }

  formatInline(text) {
    return text
      .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
      .replace(/\*(.*?)\*/g, '<em>$1</em>')
      .replace(/\$(.*?)\$/g, '<code>$1</code>');
  }

  escapeHtml(str) {
    if (!str) return '';
    return str
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  }
}

window.referenceController = new ReferenceController();

