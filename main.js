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

    activateTab(tabs.store.name)

    // Показать цех по умолчанию
    // showWorkshop();
});

function showWorkshopMachines() {
    const workshopMachines = query(".tab.workshop .machines")
    workshopMachines.innerHTML = '';
    
    // Создаем сетку для машин
    const grid = document.createElement("div");
    grid.className = "machines-grid";
    
    database.getMachines().forEach(machine => {
        const card = document.createElement("div");
        card.className = "machine-card";
        card.innerHTML = `
            <div class="machine-header">
                <span class="machine-name">${machine.name}</span>
                <span class="status-${machine.status.toLowerCase()}">${
                    machine.status
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

function showStaff() {
    hideAllTabs();
    const staffTab = document.getElementById('staffTab');
    staffTab.style.display = 'block';
    staffTab.innerHTML = '';
    
    const staffData = database.getStaff();
    const grid = document.createElement("div");
    grid.className = "staff-grid";
    
    staffData.forEach(staff => {
        const card = document.createElement("div");
        card.className = "staff-card";
        card.innerHTML = `
            <h3>${staff.name}</h3>
            <p>${staff.position}</p>
            <p>${staff.email}</p>
        `;
        grid.appendChild(card);
    });
    
    staffTab.appendChild(grid);
}

// Остальные функции showStore, showYarn, showProfile остаются без изменений
function showStoreMachines() {
    const storeMachines = query(".tab.store .machines")
    storeMachines.innerHTML = '';
    
    const grid = document.createElement("div");
    grid.className = "products-grid";
    
    database.getProducts().forEach(product => {
        const card = document.createElement("div");
        card.className = "machine-card";
        card.innerHTML = `
            <div class="machine-header">
                <span class="machine-name">${product.name}</span>
                <span>Состояние: ${product.state.transcription}</span>
            </div>
            <div class="machine-header">
                <span>Цена: $${product.price}</span>
                <button class="buy-btn">Купить</button>
            </div>
        `;
        grid.appendChild(card);
    });
    
    storeMachines.appendChild(grid);
}
function showYarn() {
    hideAllTabs();
    const yarnTab = document.getElementById('yarn');
    yarnTab.style.display = 'block';
    yarnTab.innerHTML = '';
    
    const yarns = database.getYarns();
    const grid = document.createElement("div");
    grid.className = "yarn-grid";
    
    yarns.forEach(yarn => {
        const card = document.createElement("div");
        card.className = "yarn-card";
        card.innerHTML = `
            <h3>${yarn.name}</h3>
            <p>Type: ${yarn.weight}</p>
            <p>Color: ${yarn.color}</p>
            <p>Price: $${yarn.price.toFixed(2)}</p>
            <button class="add-btn">Add to Project</button>
        `;
        grid.appendChild(card);
    });
    
    yarnTab.appendChild(grid);
}

function showProfile() {
    return activateTab("profile")
    hideAllTabs();
    const profileTab = document.getElementById('profileTab');
    profileTab.style.display = 'block';
    profileTab.innerHTML = `
        <div class="profile-container">
            <div class="profile-header">
                <h2>User Profile</h2>
            </div>
            <div class="profile-card">
                <div class="profile-avatar">
                    <img src="https://via.placeholder.com/150" alt="User Avatar">
                </div>
                <div class="profile-info">
                    <h3>John Doe</h3>
                    <p><strong>Email:</strong> john@example.com</p>
                    <p><strong>Position:</strong> Manager</p>
                    <p><strong>Member Since:</strong> January 2023</p>
                </div>
            </div>
            <div class="profile-stats">
                <div class="stat-card">
                    <h4>Projects</h4>
                    <p>12</p>
                </div>
                <div class="stat-card">
                    <h4>Machines Used</h4>
                    <p>5</p>
                </div>
                <div class="stat-card">
                    <h4>Yarn Types</h4>
                    <p>8</p>
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
        if (subName == tabs.store.machines) showStoreMachines()
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
