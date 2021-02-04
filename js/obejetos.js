const _cashier = (start) => {
    let cash = start;
    return {
        sale: (total) => {
            cash += total;
        },
        purchase: (total) => {
            if (total < cash) {
                cash -= total;
            } else {
                throw { error: "Fondos insuficientes" }
            }
        },
        getStored: () => {
            return cash;
        }
    };
};

const _products = (start) => {
    return {
        sale: (id, amount) => {
            const index = products.findIndex((item) => item.id === id);
            if (index > -1) {
                if (products[index].stored >= amount) {
                    products[index].stored -= amount;
                } else {
                    throw { error: "Poca existencia" }
                }
            } else {
                throw { error: "Producto no encontrado" }
            }
        },
        purchase: (id, amount) => {
            const index = products.findIndex((item) => item.id === id);
            if (index > -1) {
                products[index].stored += amount;
            } else {
                throw { error: "Producto no encontrado" }
            }
        },
        getAllProducts: () => {
            return products;
        },
        getProduct: () => {
            const index = products.findIndex((item) => item.id === id);
            return products[index];
        },
        newProduct: (name, stored, price) => {
            const lastProduct = products[products.length - 1];
            const newPro = { id: lastProduct.id + 1, name: name, stored: stored, price: price };
            products.push(newPro);
            return newPro;
        },
    };
};

const _sales = (start) => {
    let sales = start;
    return {
        new: (id, quantity, price) => {
            sales.push({
                productId: id,
                date: new Date(),
                quantity: quantity,
                totalPrice: quantity * price,
            });
        },
        getAllSales: () => {
            return sales;
        },
    };
};

const _purchase = (start) => {
    let purchases = start;
    return {
        new: (id, quantity, price) => {
            sales.push({
                productId: id,
                date: new Date(),
                quantity: quantity,
                totalPrice: quantity * price,
                price: price,
            });
        },
        getAllPurchase: () => {
            return purchases;
        },
    };
};