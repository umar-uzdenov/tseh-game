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

function showWorkshopModels() {
    const workshopModels = query(".tab.workshop .models");
    workshopModels.innerHTML = '';

    // Создаем сетку для моделей
    const grid = document.createElement("div");
    grid.className = "main-grid";

    // get models from database and show them
    database.getModels().forEach(model => {
        const card = document.createElement("div");
        card.className = "card";
        card.innerHTML = `
            <div class="card-icon" style="--icon-url: url('../img/model/${model.url}');"></div>
            <div class="card-column">
                <div class="model-name">${model.name}</div>
                <div class="model-description">${model.description}</div>
            </div>
        `;
        grid.appendChild(card);
    });
    workshopModels.appendChild(grid);
        
    // button to add new model
    const addModelButton = document.createElement("button");
    addModelButton.className = "ok-button";
    addModelButton.textContent = "Добавить модель";

    addModelButton.onclick = () => {
        addModelButton.style.display = "none"
        const form = document.createElement("form");
        form.className = "model-form card vertical";
        form.innerHTML = `
            <input type="text" id="model-name" name="model-name" placeholder="Название модели">
            <textarea id="model-description" name="model-description" placeholder="Описание модели"></textarea>
            <div class="card-row">
                <input class="ok-button" type="submit" value="Добавить">
                <input class="cancel-button" type="reset" value="Отменить">
            </div>
        `;
        form.addEventListener("submit", event => {
            event.preventDefault();
            database.addModel(
                form.elements["model-name"].value,
                form.elements["model-description"].value
            );
            form.remove();
            showWorkshopModels() // refresh page
        });
        form.addEventListener("reset", event => {
            event.preventDefault()
            grid.removeChild(form)
            addModelButton.style.display = "block"
        })
        grid.appendChild(form);
    }
    
    grid.appendChild(addModelButton);
}

function showWorkshopWarehouse() {
    const workshopWarehouse = query(".tab.workshop .warehouse");
    workshopWarehouse.innerHTML = '';

    // Assuming database has a getWarehouseItems method returning array of {name, quantity}
    const items = database.getWarehouseItems();

    if (items.length === 0) {
        const emptyMessage = document.createElement("div");
        emptyMessage.className = "empty-message";
        emptyMessage.textContent = "Склад изделий пуст";
        workshopWarehouse.appendChild(emptyMessage);
    } else {
        const grid = document.createElement("div");
        grid.className = "main-grid";
        items.forEach(item => {
            const card = document.createElement("div");
            card.className = "card horizontal";
            card.innerHTML = `
                <div class="card-icon" style="--icon-url: url('../img/model/${item.url}');"></div>
                <div class="card-column">
                    <div class="card-row">
                        <div>${item.name}</div>
                        <div>${item.quantity} шт</div>
                    </div>
                    <button class="ok-button">Продать</button>
                </div>
            `;
            const sellButton = card.querySelector(".ok-button");
            sellButton.onclick = () => {
                console.log("Продано: " + item.name);
                // Additional sell logic can be implemented here
            };
            grid.appendChild(card);
        });
        workshopWarehouse.appendChild(grid);
    }
}
