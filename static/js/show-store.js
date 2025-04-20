// Остальные функции showStore, showYarn, showProfile остаются без изменений



function showStoreMachines() {
    const storeMachines = query(".tab.store .machines")
    storeMachines.innerHTML = '';
    
    const grid = document.createElement("div");
    grid.className = "main-grid";
    
    database.getProducts().forEach(product => {
        const card = document.createElement("div");
        card.className = "machine-card";
        card.innerHTML = `
            <div class="machine-header">
                <div class="machine-img" style="--machine-img-url: url('img/sturm.jpg');"></div>
                <span class="machine-name">${product.name}</span>
                <span>${product.state.transcription}</span>
            </div>
            <div class="machine-header">
                <span>Цена: ${product.price} млн ₽</span>
                <button class="buy-btn">Купить</button>
            </div>
        `;
        grid.appendChild(card);
    });
    
    storeMachines.appendChild(grid);
}

function showStoreSpares() {
    const storeSpares = document.querySelector(".tab.store .spares");
    storeSpares.innerHTML = '';

    // Consumables section
    const consumablesGrid = document.createElement("div");
    consumablesGrid.className = "main-grid";

    database.getSpares().forEach(item => {
        const card = document.createElement("div");
        card.className = "card vertical";
        card.innerHTML = `
            <div class="card-row">
                <span class="product-name">${item.transcription}</span>
                <span class="product-price">${item.price} ₽</span>
            </div>
            <span class="product-name">${item.description}</span>
            <div class="card-row">
                <span class="product-price">Количество</span>
                <input type="number" value="1" min="1" max="999">
                <button class="buy-btn">Купить</button>
            </div>
        `;
        consumablesGrid.appendChild(card);
    });

    storeSpares.appendChild(consumablesGrid);
}

function showStoreYarn() {
    const yarnTab = query('.tab.store .sub-tab.yarn');
    yarnTab.style.display = 'block';
    yarnTab.innerHTML = '';
    
    const yarns = database.getYarns();
    const grid = document.createElement("div");
    grid.className = "main-grid";
    
    yarns.forEach(yarn => {
        const card = document.createElement("div");
        card.className = "card vertical";
        card.innerHTML = `
            <div class="card-row">
                <div>${yarn.name}</div>
                <div>${yarn.price.toFixed(0)} ₽</div>
            </div>
            <div>Состав: ${yarn.composition}</div>
            <div class="card-row">
                <div>Килограмм</div>
                <input type="number" class="yarn-quantity" value="1" min="1" max="10000">
                <button class="buy-btn">Купить</button>
            </div>
        `;
        grid.appendChild(card);
    });
    
    yarnTab.appendChild(grid);
}