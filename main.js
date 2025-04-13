const tabState = {
    workshop: false,
    store: false,
    market: false,
    profile: false,
}

const tabs = {
    all: ["workshop", "store", "market", "profile"],
    workshop: {
        machines: "machines", warehouse: "warehouse", yarn: "yarn",
        all: ["machines", "warehouse", "yarn"],
    },
    store: { 
        machines: "machines", spares: "spares", yarn: "yarn",
        all: ["machines", "spares", "yarn"],
    },
    market: {
        bazaar: "bazaar", online: "online", social: "social",
        all: ["bazaar", "online", "social"]
    },
    profile: {
        profile: "profile", friends: "friends", rating: "rating",
        all: ["profile", "friends", "rating"]
    },
}

const showFunctions = {
    workshop: showWorkshop,
    store: showStore,
    market: showMarket,
    profile: showProfile,
}

function showMarket() {
    activateTab("market")
}

// Инициализация при загрузке страницы
document.addEventListener('DOMContentLoaded', function() {
    // Обработчики для кнопок вкладок
    // document.getElementById('workshopBtn').addEventListener('click', showWorkshop);
    // document.getElementById('storeBtn').addEventListener('click', showStore);
    // document.getElementById('staffBtn').addEventListener('click', showStaff);
    // document.getElementById('profileBtn').addEventListener('click', showProfile);

    tabs.all.forEach(addListeners)

    function addListeners(name) {
        query(`.tab-btn.${name}`).addEventListener("click", showFunctions[name])
        queryAll(`.tab.${name} .sub-tab-btn`).forEach((subTabBtn, index) => {
            subTabBtn.addEventListener("click", () => activateSubTab(name, tabs[name].all[index]))
        })
    }

    // Показать цех по умолчанию
    showWorkshop();
});

function showWorkshop() {
    activateTab("workshop")
    // hideAllTabs();
    // const workshopBtn = document.getElementById('workshopBtn')
    // workshopBtn.classList.add('active');
    // const workshopTab = document.getElementById('workshop');
    // workshopTab.style.display = 'block';
    
    if (tabState.workshop !== false) return
    
    tabState.workshop = tabs.workshop.machines

    const workshopMachinesSubTab = query(".tab.workshop .machines")
    workshopMachinesSubTab.innerHTML = '';
    
    // Создаем сетку для машин
    const machines = database.getMachines();
    const grid = document.createElement("div");
    grid.className = "machines-grid";
    
    machines.forEach(machine => {
        const card = document.createElement("div");
        card.className = "machine-card";
        card.innerHTML = `
            <h3>${machine.name}</h3>
            <p>Status: <span class="status-${machine.status.toLowerCase()}">${machine.status}</span></p>
            <p>Last Maintenance: ${machine.lastMaintenance}</p>
        `;
        grid.appendChild(card);
    });
    
    workshopMachinesSubTab.appendChild(grid);
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
function showStore() {
    activateTab("store")

    // hideAllTabs();
    // const storeTab = document.getElementById('storeTab');
    // storeTab.style.display = 'block';
    const storeTab1 = query(".tab.store .machines")
    storeTab1.innerHTML = '';
    
    const products = database.getProducts();
    const grid = document.createElement("div");
    grid.className = "products-grid";
    
    products.forEach(product => {
        const card = document.createElement("div");
        card.className = "product-card";
        card.innerHTML = `
            <h3>${product.name}</h3>
            <p>Price: $${product.price}</p>
            <button class="buy-btn">Add to Cart</button>
        `;
        grid.appendChild(card);
    });
    
    storeTab1.appendChild(grid);
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
    return
    // Reset all sub-tab-buttons to first tab when switching main tabs
    document.querySelectorAll('.sub-tab-buttons').forEach(subTabs => {
        const buttons = subTabs.querySelectorAll('.sub-tab-btn');
        const contents = subTabs.parentElement.querySelectorAll('.sub-tab-content');
        
        buttons.forEach((btn, index) => {
            btn.classList.toggle('active', index === 0);
        });
        
        contents.forEach((content, index) => {
            content.style.display = index === 0 ? 'block' : 'none';
        });
    });
}

function activateSubTab(name, subName) {
    console.log(name, subName)
    hideAllSubTabs(name)
    query(`.tab.${name} .sub-tab.${subName}`).style.display = "block"
    query(`.tab.${name} .sub-tab-btn.${subName}`).classList.add("active")
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
