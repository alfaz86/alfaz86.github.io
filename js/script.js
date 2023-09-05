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
            currentNav.classList.add('active');
        })
        .catch((error) => {
            console.error("Fetch error:", error);
        });
}

function setCardContent(card, repository) {
    card = card.replace(new RegExp('_image', 'g'), repository.image);
    card = card.replace(new RegExp('_name', 'g'), repository.name);
    card = card.replace(new RegExp('_homepage', 'g'), setLink(repository.homepage, "link"));
    card = card.replace(new RegExp('_git', 'g'), setLink(repository.url, "github"));
    card = card.replace(new RegExp('_description', 'g'), repository.description);
    card = card.replace(new RegExp('_tools', 'g'), setTools(repository.tools));

    return card;
}

function setLink(url, content) {
    let result = ``;
    if (url) {
        result += `<span
            class="badge rounded text-bg-light link-homepage"
            onclick="openURL('${url}')">
            <i class="bi bi-${content}"></i>
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