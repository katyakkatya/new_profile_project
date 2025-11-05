class ProjectModal {
    constructor() {
        this.modal = document.getElementById('modal');
        this.backdrop = document.querySelector('.modal-backdrop');
        this.description = document.querySelector('.project-modal__description-content');
        this.image = document.querySelector('.project-modal__img');
        this.init();
    }

    init() {
        this.backdrop.addEventListener('click', (e) => {
            if (e.target === this.backdrop) {
                this.close();
            }
        })

        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                this.close();
            }
        });
    }

    open(projectData) {
        this.fillContent(projectData);
        this.backdrop.style.display = 'block';
        document.body.classList.add('body-dimmed');
        document.body.style.overflow = 'hidden';

    }

    close() {
        this.backdrop.style.display = 'none';
        document.body.classList.remove('body-dimmed');
        document.body.style.overflow = '';
    }

    fillContent(projectData) {
        this.description.innerHTML = projectData.description;
        this.image.src = projectData.image;
    }
}

let projectModal;

document.addEventListener('DOMContentLoaded', function () {
    projectModal = new ProjectModal;
});


modal.addEventListener('keydown', function(event) {
 if (event.key === 'Tab') {
    const focusableElements = modal.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];

    // Зацикливаем фокус внутри модалки
    if (event.shiftKey && document.activeElement === firstElement) {
        event.preventDefault();
        lastElement.focus();
    } else if (!event.shiftKey && document.activeElement === lastElement) {
        event.preventDefault();
        firstElement.focus();
    }
 }
 });


function openModal(projectId) {
    const project = projectData[projectId];
    previousActiveElement = document.activeElement;
    if (project) {
        projectModal.open(project);
        modal.focus();
        document.querySelectorAll('body > *:not(.modal):not(.overlay)').forEach(el => el.setAttribute('aria-hidden', 'true'));
    }
}

function closeModal() {
    projectModal.close();
    if (previousActiveElement) { previousActiveElement.focus(); }
}