document.addEventListener('DOMContentLoaded', () => {
    const boxes = document.querySelectorAll('.box');
    
    // Función para generar un color aleatorio
    const getRandomColor = () => {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    };

    // Asignar colores iniciales a los cuadros
    boxes.forEach(box => {
        box.style.backgroundColor = getRandomColor();
    });

    // Cambiar color al pasar el cursor
    boxes.forEach(box => {
        box.addEventListener('mouseenter', () => {
            box.style.backgroundColor = getRandomColor();
        });
    });
});