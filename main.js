const tabState = {
    workshop: false,
    store: false,
    market: false,
    profile: false,
}

const tabs = {
    all: ["workshop", "store", "market", "profile"],
    workshop: {
        name: "workshop",
        machines: "machines", warehouse: "warehouse", yarn: "yarn",
        all: ["machines", "warehouse", "yarn"],
    },
    store: { 
        name: "store",
        machines: "machines", spares: "spares", yarn: "yarn",
        all: ["machines", "spares", "yarn"],
    },
    market: {
        name: "market",
        bazaar: "bazaar", online: "online", social: "social",
        all: ["bazaar", "online", "social"]
    },
    profile: {
        name: "profile",
        profile: "profile", friends: "friends", rating: "rating",
        all: ["profile", "friends", "rating"]
    },
}

function showMarket() {
    activateTab("market")
}

// Инициализация при загрузке страницы
document.addEventListener('DOMContentLoaded', function() {
    tabs.all.forEach(addListeners)

    function addListeners(name) {
        query(`.tab-btn.${name}`).addEventListener("click", () => activateTab(name))

        queryAll(`.tab.${name} .sub-tab-btn`).forEach((subTabBtn, index) => {
            subTabBtn.addEventListener("click", () => activateSubTab(name, tabs[name].all[index]))
        })

        queryAll(`.tab.${name} .sub-tab`).forEach((subTab, index) => {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) showSubTab(name, tabs[name].all[index], subTab)
                });
            });
    
            observer.observe(subTab)
        })
    }

    activateTab(tabs.profile.name)
    activateSubTab(tabs.profile.name, tabs.profile.profile)

    // Показать цех по умолчанию
    // showWorkshop();
});

function showWorkshopMachines() {
    const workshopMachines = query(".tab.workshop .machines")
    workshopMachines.innerHTML = '';
    
    // Создаем сетку для машин
    const grid = document.createElement("div");
    grid.className = "main-grid";
    
    database.getMachines().forEach(machine => {
        const card = document.createElement("div");
        card.className = "machine-card";
        // <div class="machine-img"><img src="${machine.image}" alt="${machine.name}"></div>
        card.innerHTML = `
            <div class="machine-header">
                <div class="machine-img" style="--machine-img-url: url('img/sturm.jpg');"></div>
                <span class="machine-name">${machine.name}</span>
                <span class="status-${machine.status.style}">${
                    machine.status.description
                }</span>
            </div>

            <div class="machine-maintenance">
                <span>Обслуживание:</span>
                <span>${machine.lastMaintenance}</span>
            </div>
        `;
        grid.appendChild(card);
    });
    
    workshopMachines.appendChild(grid);
}



function showProfile() {
    const profileTab = query(".tab.profile .sub-tab.profile")
    profileTab.style.display = 'block';
    profileTab.innerHTML = `
        <div class="main-grid">
            <div class="profile-card">
                <div
                    class="profile-avatar"
                    style="--profile-img-url: url('img/default-profile-icon.jpg');">
                </div>
                <div class="profile-info">
                    <h3>Амин Халкечев</h3>
                    <p><strong>Профессия:</strong> Программист</p>
                    <p><strong>Зарегистрирован:</strong> 15 апреля 2025</p>
                </div>
            </div>
            <div class="profile-stats">
                <div class="stat-card">
                    <h4>Станков куплено</h4>
                    <p>120</p>
                </div>
                <div class="stat-card">
                    <h4>Станков продано</h4>
                    <p>53</p>
                </div>
                <div class="stat-card">
                    <h4>Заработок</h4>
                    <p>8 000 млн ₽</p>
                </div>
            </div>
        </div>
    `;
}

function activateTab(name) {
    hideAllTabs()
    // console.log(name)
    query(`.tab-btn.${name}`).classList.add("active")
    query(`.tab.${name}`).style.display = "block"
}

function hideAllTabs() {
    queryAll('.tab').forEach(tab => tab.style.display = 'none')
    queryAll(".tab-btn").forEach(button =>  button.classList.remove("active"))
}

function activateSubTab(name, subName) {
    // console.log(name, subName)
    hideAllSubTabs(name)
    query(`.tab.${name} .sub-tab.${subName}`).style.display = "block"
    query(`.tab.${name} .sub-tab-btn.${subName}`).classList.add("active")
}

function showSubTab(name, subName, subTab) {
    console.log(name, subName, subTab)

    if (name == tabs.workshop.name) {
        if (subName == tabs.workshop.machines) showWorkshopMachines()
        // if (subName == tabs.workshop.machines) showWorkshop()
    } else if (name == tabs.store.name) {
        if (subName == tabs.store.machines) { showStoreMachines() }
        if (subName == tabs.store.spares) { showStoreSpares() }
        if (subName == tabs.store.yarn) { showStoreYarn() }
    } else if (name == tabs.market.name) {
        // market
    } else if (name == tabs.profile.name) {
        if (subName == tabs.profile.profile) { showProfile() }
    }
}

function hideAllSubTabs(name) {
    queryAll(`.tab.${name} .sub-tab`).forEach(subtab => subtab.style.display = "none")
    queryAll(`.tab.${name} .sub-tab-btn`).forEach(button => button.classList.remove("active"))
}

function query(selector) {
    return document.querySelector(selector);
}

function queryAll(selector) {
    return document.querySelectorAll(selector);
}
