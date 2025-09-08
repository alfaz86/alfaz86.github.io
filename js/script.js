const contentElement = document.getElementById("content");
const fetchButton = document.getElementById("fetchButton");
let currentContent = "";

function getContent(content = "about") {
    if (currentContent === content) return;

    const activeElement = document.querySelector('.active');
    const currentNav = document.querySelector('.nav-link.menu.' + content);
    const fileUrl = `../components/${content}.html`;

    activeElement.classList.remove('active');

    fetch(fileUrl)
        .then((response) => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.text();
        })
        .then((data) => {
            contentElement.innerHTML = data;
            currentContent = content
            currentNav.classList.add('active');

            if (content === "projects") {
                getContentProjects()
            }

        })
        .catch((error) => {
            console.error("Fetch error:", error);
        });
}

getContent()

function getContentProjects(type = "all") {
    const row = document.getElementById("row");
    const activeElement = document.querySelector('.filter.active');
    const currentNav = document.querySelector('.nav-link.filter.' + type);
    const fileUrl = `../components/card.html`;

    activeElement.classList.remove('active');

    let contentResult = ``;

    fetch(fileUrl)
        .then((response) => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.text();
        })
        .then((data) => {
            var filterProjects = repositories.filter(project => {
                if (type === "all") {
                    return project
                }
                if (project.visibility === type) {
                    return project
                }
            });
            filterProjects.forEach(repository => {
                const card = setCardContent(data, repository);
                contentResult += card;
            })
            row.innerHTML = contentResult;
            initTooltips();
            currentNav.classList.add('active');
        })
        .catch((error) => {
            console.error("Fetch error:", error);
        });
}

function setCardContent(card, repository) {
    card = card.replace(new RegExp('_image', 'g'), repository.image);
    card = card.replace(new RegExp('_name', 'g'), repository.name);
    card = card.replace(new RegExp('_homepage', 'g'), setLink(repository.homepage, "globe2", "Visit Website"));
    card = card.replace(new RegExp('_git', 'g'), setLink(repository.url, "github", "Visit GitHub Repository"));
    card = card.replace(
        new RegExp('_description', 'g'),
        repository.description.replace(/\n/g, '<br>')
    );
    card = card.replace(new RegExp('_tools', 'g'), setTools(repository.tools));
    card = card.replace(new RegExp('_android', 'g'), setLink(repository.android_download, "android", "Visit Android Download"));
    card = card.replace(new RegExp('_ios', 'g'), setLink(repository.ios_download, "apple", "Visit iOS Download"));

    return card;
}

function setLink(url, icon, tooltipText = "") {
    let result = ``;
    if (url) {
        result += `<span
            class="badge rounded border text-bg-light link-homepage"
            data-bs-toggle="tooltip"
            data-bs-placement="top"
            data-bs-title="${tooltipText}"
            onclick="openURL('${url}')">
                <i class="bi bi-${icon}"></i>
        </span>`;
    }
    return result;
}

function setTools(tools) {
    let result = ``;
    if (tools) {
        tools.forEach(tag => {
            result += `<span class="badge rounded-pill mb-2 tools">${tag}</span>`;
        });
    }
    return result;
}

function openURL(url) {
    if (url) {
        window.open(url, '_blank');
    }
}

function filterProjects(type) {
    getContentProjects(type)
}

function initTooltips() {
    const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
    [...tooltipTriggerList].forEach(el => new bootstrap.Tooltip(el));
}
