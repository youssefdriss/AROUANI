document.addEventListener('DOMContentLoaded', () => {
    function updateTotalPrice() {
        const items = document.querySelectorAll('.qute');
        let total = 0;

        items.forEach(item => {
            const quantity = parseInt(item.textContent);
            const price = parseFloat(item.closest('.card-body').querySelector('.unitt-price').textContent);
            total += quantity * price;
        });

        document.getElementById('total-price').textContent = total.toFixed(2);
    }

    document.querySelectorAll('.fa-plus-circle').forEach(btn => {
        btn.addEventListener('click', () => {
            const quantityElement = btn.nextElementSibling;
            quantityElement.textContent = parseInt(quantityElement.textContent) + 1;
            updateTotalPrice();
        });
    });

    document.querySelectorAll('.fa-minus-circle').forEach(btn => {
        btn.addEventListener('click', () => {
            const quantityElement = btn.previousElementSibling;
            if (parseInt(quantityElement.textContent) > 0) {
                quantityElement.textContent = parseInt(quantityElement.textContent) - 1;
                updateTotalPrice();
            }
        });
    });

    document.querySelectorAll('.fa-trash-alt').forEach(btn => {
        btn.addEventListener('click', () => {
            btn.closest('.card').remove();
            updateTotalPrice();
        });
    });

    document.querySelectorAll('.fa-heart').forEach(btn => {
        btn.addEventListener('click', () => {
            btn.classList.toggle('liked');
        });
    });

    updateTotalPrice();
});