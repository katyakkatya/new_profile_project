class ProjectModal {
    constructor() {
        this.modal = document.getElementById('modal');
        this.backdrop = document.querySelector('.modal-backdrop');
        this.description = document.querySelector('.project-modal__description-content');
        this.init();
    }

    init() {
        this.backdrop.addEventListener('click', (e) => {
            if (e.target === this.backdrop) {
                this.close();
            }
        })
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
    }
}

let projectModal;

document.addEventListener('DOMContentLoaded', function () {
    projectModal = new ProjectModal;
});

function openModal(projectId) {
    const project = projectData[projectId];
    if (project) {
        projectModal.open(project);
    }
}

function closeModal() {
    projectModal.close();
}