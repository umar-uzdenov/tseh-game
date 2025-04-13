// Обновлённая база данных с методами внутри объекта
var database = {
    users: [
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
    ],
    getStaff: function() {
        return this.users;
    },
    products: [
        { id: 1, name: "Flat Knitter Pro", price: 1500 },
        { id: 2, name: "KnitMaster 3000", price: 1200 },
        { id: 3, name: "WeaveTech Flat", price: 1800 },
        { id: 4, name: "StitchPerfect", price: 1600 },
        { id: 5, name: "LoopCreator", price: 1400 },
        { id: 6, name: "Flat Knitter 1", price: 1550 },
        { id: 7, name: "Flat Knitter 2", price: 1650 },
        { id: 8, name: "Flat Knitter 3", price: 1750 },
        { id: 9, name: "Flat Knitter 4", price: 1850 },
        { id: 10, name: "Flat Knitter 5", price: 1950 },
        { id: 11, name: "Flat Knitter 6", price: 2050 },
        { id: 12, name: "Flat Knitter 7", price: 2150 },
        { id: 13, name: "Flat Knitter 8", price: 2250 },
        { id: 14, name: "Flat Knitter 9", price: 2350 },
        { id: 15, name: "Flat Knitter 10", price: 2450 },
        { id: 16, name: "Flat Knitter 11", price: 2550 },
        { id: 17, name: "Flat Knitter 12", price: 2650 },
        { id: 18, name: "Flat Knitter 13", price: 2750 },
        { id: 19, name: "Flat Knitter 14", price: 2850 },
        { id: 20, name: "Flat Knitter 15", price: 2950 }
    ],
    getProducts: function() {
        return this.products;
    },
    getMachines: function() {
        return [
            { id: 1, name: "Flat Knitter Pro", status: "Active", lastMaintenance: "2023-10-15" },
            { id: 2, name: "KnitMaster 3000", status: "Active", lastMaintenance: "2023-09-28" },
            { id: 3, name: "WeaveTech Flat", status: "Maintenance", lastMaintenance: "2023-11-02" },
            { id: 4, name: "StitchPerfect", status: "Active", lastMaintenance: "2023-10-20" },
            { id: 5, name: "LoopCreator", status: "Active", lastMaintenance: "2023-11-10" }
        ];
    },
    
    yarns: [
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
    ],
    
    getYarns: function() {
        return this.yarns;
    }
};
