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
        { id: 1, name: machineBrands.random().name, state: machineStates.random(), price: 1500 },
        { id: 2, name: machineBrands.random().name, state: machineStates.random(), price: 1200 },
        { id: 3, name: machineBrands.random().name, state: machineStates.random(), price: 1800 },
        { id: 4, name: machineBrands.random().name, state: machineStates.random(), price: 1600 },
        { id: 5, name: machineBrands.random().name, state: machineStates.random(), price: 1400 },
        { id: 6, name: machineBrands.random().name, state: machineStates.random(), price: 1550 },
        { id: 7, name: machineBrands.random().name, state: machineStates.random(), price: 1650 },
        { id: 8, name: machineBrands.random().name, state: machineStates.random(), price: 1750 },
        { id: 9, name: machineBrands.random().name, state: machineStates.random(), price: 1850 },
        { id: 10, name: machineBrands.random().name, state: machineStates.random(), price: 1950 },
        { id: 11, name: machineBrands.random().name, state: machineStates.random(), price: 2050 },
        { id: 12, name: machineBrands.random().name, state: machineStates.random(), price: 2150 },
        { id: 13, name: machineBrands.random().name, state: machineStates.random(), price: 2250 },
        { id: 14, name: machineBrands.random().name, state: machineStates.random(), price: 2350 },
        { id: 15, name: machineBrands.random().name, state: machineStates.random(), price: 2450 },
        { id: 16, name: machineBrands.random().name, state: machineStates.random(), price: 2550 },
        { id: 17, name: machineBrands.random().name, state: machineStates.random(), price: 2650 },
        { id: 18, name: machineBrands.random().name, state: machineStates.random(), price: 2750 },
        { id: 19, name: machineBrands.random().name, state: machineStates.random(), price: 2850 },
        { id: 20, name: machineBrands.random().name, state: machineStates.random(), price: 2950 },
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
        { id: 1, name: "Merino Wool", weight: "Fingering", price: 12.99, color: "Natural White" },
        { id: 2, name: "Alpaca Blend", weight: "Sport", price: 15.50, color: "Charcoal Grey" },
        { id: 3, name: "Cashmere Silk", weight: "Lace", price: 29.99, color: "Blush Pink" },
        { id: 4, name: "Cotton Bamboo", weight: "DK", price: 9.99, color: "Sky Blue" },
        { id: 5, name: "Superwash Merino", weight: "Worsted", price: 14.75, color: "Forest Green" },
        { id: 6, name: "Mohair", weight: "Bulky", price: 18.25, color: "Cream" },
        { id: 7, name: "Linen", weight: "Aran", price: 11.50, color: "Natural Beige" },
        { id: 8, name: "Nylon Blend", weight: "Super Bulky", price: 8.99, color: "Black" },
        { id: 9, name: "Silk Mohair", weight: "Lace", price: 24.99, color: "Gold" },
        { id: 10, name: "Organic Cotton", weight: "Worsted", price: 10.25, color: "Ecru" },
        { id: 11, name: "Baby Alpaca", weight: "Sport", price: 19.99, color: "Soft Grey" },
        { id: 12, name: "Recycled Silk", weight: "Fingering", price: 16.50, color: "Variegated" }
    ]

    const spares = [
        {
            id: 1,
            name: "consumables",
            transcription: "Расходники",
            description: "Смазка, иголки, щётки",
            price: 300
        },
        { id: 2,
            name: "repairKits",
            transcription: "Ремкоплект",
            description: "Платы, клинья, детали оттяжки",
            price: 300
        },
    ]

    return {
        machineBrands() { return machineBrands; },
        getStaff() { return users },
        getProducts() { return products },
        getMachines() { return machines },
        getYarns() { return yarns },
        getSpares() { return spares }
    }
})();
