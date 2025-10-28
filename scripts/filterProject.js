const categoryFilter = document.querySelector('.filters__select');
const projects = document.querySelectorAll('.projects__item');

function filter() {
    const selectedCategory = categoryFilter.value;

    projects.forEach(project => {
        const category = project.getAttribute('data-category');

        const matchesCategory = selectedCategory === 'all' || category === selectedCategory;

        if (matchesCategory) {
            project.classList.remove('hidden');
        }
        else {
            project.classList.add('hidden');
        }
    });
}
categoryFilter.addEventListener('change', filter);