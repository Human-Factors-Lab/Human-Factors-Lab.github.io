document.addEventListener('DOMContentLoaded', function () {
  const directory = document.querySelector('[data-project-directory]');
  if (!directory) return;

  const searchInput = directory.querySelector('[data-project-search]');
  const filterButtons = Array.from(directory.querySelectorAll('[data-project-filter]'));
  const cards = Array.from(directory.querySelectorAll('[data-project-card]'));
  const emptyState = directory.querySelector('[data-project-empty]');
  const status = directory.querySelector('[data-project-status]');

  const params = new URLSearchParams(window.location.search);
  let activeFilter = (params.get('tag') || 'all').toLowerCase();
  let currentQuery = (params.get('q') || '').trim().toLowerCase();

  if (searchInput) {
    searchInput.value = params.get('q') || '';
  }

  function matchesTag(element) {
    const tags = (element.dataset.projectTags || '').split(/\s+/).filter(Boolean);
    const funder = (element.dataset.projectFunder || '').toLowerCase();
    if (activeFilter === 'all') return true;
    if (tags.includes(activeFilter)) return true;
    return funder === activeFilter;
  }

  function matchesQuery(element) {
    if (!currentQuery) return true;
    const haystack = (element.dataset.searchText || '').toLowerCase();
    return haystack.includes(currentQuery);
  }

  function setButtonState() {
    filterButtons.forEach(function (button) {
      const isActive = button.dataset.projectFilter === activeFilter;
      button.classList.toggle('is-active', isActive);
    });
  }

  function updateUrl() {
    const next = new URLSearchParams();
    if (activeFilter && activeFilter !== 'all') next.set('tag', activeFilter);
    if (currentQuery) next.set('q', currentQuery);
    const nextQuery = next.toString();
    const nextUrl = nextQuery ? `${window.location.pathname}?${nextQuery}${window.location.hash}` : `${window.location.pathname}${window.location.hash}`;
    window.history.replaceState({}, '', nextUrl);
  }

  function applyFilters() {
    let visibleCount = 0;

    cards.forEach(function (card) {
      const show = matchesTag(card) && matchesQuery(card);
      card.hidden = !show;
      if (show) visibleCount += 1;
    });

    if (emptyState) {
      emptyState.hidden = visibleCount !== 0;
    }

    if (status) {
      const filterLabel = activeFilter === 'all' ? 'all categories' : activeFilter.toUpperCase();
      if (currentQuery) {
        status.textContent = `Showing ${visibleCount} project(s) for "${currentQuery}" in ${filterLabel}.`;
      } else {
        status.textContent = `Showing ${visibleCount} project(s) in ${filterLabel}.`;
      }
    }

    setButtonState();
    updateUrl();
  }

  if (searchInput) {
    searchInput.addEventListener('input', function (event) {
      currentQuery = event.target.value.trim().toLowerCase();
      applyFilters();
    });
  }

  filterButtons.forEach(function (button) {
    button.addEventListener('click', function () {
      activeFilter = button.dataset.projectFilter || 'all';
      applyFilters();
    });
  });

  applyFilters();
});
