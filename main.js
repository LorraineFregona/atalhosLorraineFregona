// Adicionando efeitos de hover via JavaScript como fallback
document.querySelectorAll('.projects-button').forEach(button => {
    // Garantir que o hover funcione mesmo se houver problemas com CSS
    button.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-3px)';
        this.style.boxShadow = '0 8px 25px rgba(142, 84, 233, 0.6)';
    });
    
    button.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
        this.style.boxShadow = '0 5px 15px rgba(142, 84, 233, 0.4)';
    });
    
    button.addEventListener('mousedown', function() {
        this.style.transform = 'translateY(1px)';
    });
    
    button.addEventListener('mouseup', function() {
        this.style.transform = 'translateY(-3px)';
    });
});