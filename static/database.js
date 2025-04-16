// Обновлённая база данных с методами внутри объекта
Array.prototype.random = function() {
    return this[Math.floor(Math.random() * this.length)];
}

var database = (function() {

    const machineBrands = [
        { name: "Sturm", country: "Германия" },
        { name: "Arashi 嵐", country: "Япония" },
        { name: "Fēngbào 风暴", country: "Китай" },
        { name: "Tempête", country: "Швейцария" },
        { name: "Tempesta", country: "Италия" }
    ]

    const users = [
        { id: 1, name: "John Doe", email: "john@example.com", position: "Manager" },
        { id: 2, name: "Jane Smith", email: "jane@example.com", position: "Developer" },
        { id: 3, name: "Mike Johnson", email: "mike@example.com", position: "Designer" },
        { id: 4, name: "Sarah Williams", email: "sarah@example.com", position: "QA" },
        { id: 5, name: "David Brown", email: "david@example.com", position: "DevOps" },
        { id: 6, name: "Emily Davis", email: "emily@example.com", position: "Frontend" },
        { id: 7, name: "Robert Wilson", email: "robert@example.com", position: "Backend" },
        { id: 8, name: "Jennifer Lee", email: "jennifer@example.com", position: "UX" },
        { id: 9, name: "Thomas Taylor", email: "thomas@example.com", position: "PM" },
        { id: 10, name: "Lisa Anderson", email: "lisa@example.com", position: "HR" },
        { id: 11, name: "William Martinez", email: "william@example.com", position: "Analyst" },
        { id: 12, name: "Jessica Thomas", email: "jessica@example.com", position: "Marketing" },
        { id: 13, name: "Charles Garcia", email: "charles@example.com", position: "Sales" },
        { id: 14, name: "Karen Robinson", email: "karen@example.com", position: "Support" },
        { id: 15, name: "Daniel Clark", email: "daniel@example.com", position: "Architect" },
        { id: 16, name: "Michelle Rodriguez", email: "michelle@example.com", position: "Scrum Master" },
        { id: 17, name: "Matthew Lewis", email: "matthew@example.com", position: "Tech Lead" },
        { id: 18, name: "Amanda Walker", email: "amanda@example.com", position: "Content" },
        { id: 19, name: "Kevin Hall", email: "kevin@example.com", position: "SEO" },
        { id: 20, name: "Stephanie Young", email: "stephanie@example.com", position: "Copywriter" },
        { id: 21, name: "Andrew Allen", email: "andrew@example.com", position: "Data" },
        { id: 22, name: "Rebecca King", email: "rebecca@example.com", position: "Researcher" }
    ]

    const machineStates = [
        { state: "new", transcription: "Новая" },
        { state: "used", transcription: "Б/У" },
    ]

    const products = [
        { id: 1, name: machineBrands.random().name, state: machineStates.random(), price: 1.5 },
        { id: 2, name: machineBrands.random().name, state: machineStates.random(), price: 1.2 },
        { id: 3, name: machineBrands.random().name, state: machineStates.random(), price: 1.8 },
        { id: 4, name: machineBrands.random().name, state: machineStates.random(), price: 1.6 },
        { id: 5, name: machineBrands.random().name, state: machineStates.random(), price: 1.4 },
        { id: 6, name: machineBrands.random().name, state: machineStates.random(), price: 1.55 },
        { id: 7, name: machineBrands.random().name, state: machineStates.random(), price: 1.65 },
        { id: 8, name: machineBrands.random().name, state: machineStates.random(), price: 1.75 },
        { id: 9, name: machineBrands.random().name, state: machineStates.random(), price: 1.85 },
        { id: 10, name: machineBrands.random().name, state: machineStates.random(), price: 1.95 },
        { id: 11, name: machineBrands.random().name, state: machineStates.random(), price: 2.05 },
        { id: 12, name: machineBrands.random().name, state: machineStates.random(), price: 2.15 },
        { id: 13, name: machineBrands.random().name, state: machineStates.random(), price: 2.25 },
        { id: 14, name: machineBrands.random().name, state: machineStates.random(), price: 2.35 },
        { id: 15, name: machineBrands.random().name, state: machineStates.random(), price: 2.45 },
        { id: 16, name: machineBrands.random().name, state: machineStates.random(), price: 2.55 },
        { id: 17, name: machineBrands.random().name, state: machineStates.random(), price: 2.65 },
        { id: 18, name: machineBrands.random().name, state: machineStates.random(), price: 2.75 },
        { id: 19, name: machineBrands.random().name, state: machineStates.random(), price: 2.85 },
        { id: 20, name: machineBrands.random().name, state: machineStates.random(), price: 2.95 },
    ]

    const status = [
        { style: "active", description: "Работает" },
        { style: "active", description: "Работает" },
        { style: "active", description: "Работает" },
        { style: "maintenance", description: "Нужен ремонт" },
    ]

    const machines = [
        {
            id: 1,
            name: machineBrands.random().name,
            status: status.random(),
            lastMaintenance: "2023-10-15"
        },
        {
            id: 2,
            name: machineBrands.random().name,
            status: status.random(),
            lastMaintenance: "2023-09-28"
        },
        {
            id: 3,
            name: machineBrands.random().name,
            status: status.random(),
            lastMaintenance: "2023-11-02"
        },
        {
            id: 4,
            name: machineBrands.random().name,
            status: status.random(),
            lastMaintenance: "2023-10-20"
        },
        {
            id: 5,
            name: machineBrands.random().name,
            status: status.random(),
            lastMaintenance: "2023-11-10"
        },
        {
            id: 6,
            name: machineBrands.random().name,
            status: status.random(),
            lastMaintenance: "2023-11-10"
        },
        {
            id: 7,
            name: machineBrands.random().name,
            status: status.random(),
            lastMaintenance: "2023-11-10"
        },
        {
            id: 8,
            name: machineBrands.random().name,
            status: status.random(),
            lastMaintenance: "2023-11-10"
        },
    ]

    const yarns = [
        { id: 1, name: "Объёмка", price: 500, composition: "100% Акрил" },
        { id: 2, name: "Хлопок", price: 700, composition: "50% хлопок / 50% акрил" },
        { id: 3, name: "Вискоза", price: 1300, composition: "80% вискоза, 20% нейлон" },
    ]

    const spares = [
        {
            id: 1,
            name: "consumables",
            transcription: "Расходники",
            description: "Смазка, иголки, щётки",
            price: 5000
        },
        { id: 2,
            name: "repairKits",
            transcription: "Ремкоплект",
            description: "Платы, клинья, детали оттяжки",
            price: 30000
        },
    ]

    const models = [
        { id: 1, name: "Кардиган", url: "cardigan.jpg", description: "Молодёжный кардиган" },
        { id: 2, name: "Свитер", url: "sweater.jpg", description: "Классический свитер" },
        { id: 3, name: "Шапка", url: "cap.jpg", description: "Жаккардовая шапка" }
    ];

    function addModel(name, description) {
        const newId = models.length > 0 ? Math.max(...models.map(m => m.id)) + 1 : 1;
        const newModel = { id: newId, name: name, description: description };
        models.push(newModel);
    }

    const warehouseItems = [
        // here must be models and their quantities
        { name: "Кардиган", url: "cardigan.jpg", quantity: 10 },
        { name: "Свитер", url: "sweater.jpg", quantity: 5 },
        { name: "Шапка", url: "cap.jpg", quantity: 15 }
    ];

    function getWarehouseItems() {
        return warehouseItems;
    }

    return {
        machineBrands() { return machineBrands; },
        getStaff() { return users },
        getProducts() { return products },
        getMachines() { return machines },
        getYarns() { return yarns },
        getSpares() { return spares },
        getModels() { return models },
        addModel: addModel,
        getWarehouseItems: getWarehouseItems
    }
})();
