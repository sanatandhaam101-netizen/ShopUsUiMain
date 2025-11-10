document.addEventListener('DOMContentLoaded', () => {
    // Mock data for orders
    const mockOrders = [
        { id: 'ORD001', customer: 'John Doe', status: 'Pending', total: 150.00 },
        { id: 'ORD002', customer: 'Jane Smith', status: 'Shipped', total: 200.50 },
        { id: 'ORD003', customer: 'Mike Johnson', status: 'Delivered', total: 75.25 },
    ];

    // Populate order list on vendor dashboard
    const orderList = document.getElementById('order-list');
    if (orderList) {
        mockOrders.forEach(order => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td class="py-2">${order.id}</td>
                <td>${order.customer}</td>
                <td><span class="bg-yellow-200 text-yellow-800 py-1 px-3 rounded-full text-xs">${order.status}</span></td>
                <td>$${order.total.toFixed(2)}</td>
            `;
            orderList.appendChild(row);
        });
    }

    // Handle 'Export to Excel' button
    const exportButton = document.getElementById('export-orders');
    if (exportButton) {
        exportButton.addEventListener('click', () => {
            let csvContent = "data:text/csv;charset=utf-8,";
            csvContent += "OrderID,Customer,Status,Total\n";
            mockOrders.forEach(order => {
                csvContent += `${order.id},${order.customer},${order.status},${order.total}\n`;
            });
            const encodedUri = encodeURI(csvContent);
            const link = document.createElement("a");
            link.setAttribute("href", encodedUri);
            link.setAttribute("download", "orders.csv");
            document.body.appendChild(link); 
            link.click();
            document.body.removeChild(link);
        });
    }

    // Handle 'Add Product' form
    const addProductForm = document.getElementById('add-product-form');
    if (addProductForm) {
        addProductForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const productName = document.getElementById('product-name').value;
            const productPrice = document.getElementById('product-price').value;
            const productImage = document.getElementById('product-image').value;
            
            // In a real application, you would send this to a server.
            // For now, we'll just log it and show a confirmation.
            console.log('New Product:', { name: productName, price: productPrice, image: productImage });
            alert('Product added successfully!');
            addProductForm.reset();
        });
    }
});
