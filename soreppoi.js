// Toasts
function showToast(message) {
    const toast = document.createElement("div");
    toast.classList.add("toast");
    toast.textContent = message;
    document.body.appendChild(toast);

    setTimeout(() => {
        toast.classList.add("show");
    }, 100);

    setTimeout(() => {
        toast.classList.remove("show");
        setTimeout(() => {
            document.body.removeChild(toast);
        }, 300);
    }, 3000);
}

// Usage example
document.addEventListener("DOMContentLoaded", function () {
    const toastButton = document.getElementById("showToastButton");
    toastButton.addEventListener("click", function () {
        showToast("This is a toast message.");
    });
});

// Ripple Effect
document.addEventListener('click', function(e) {
    if (e.target.classList.contains('ripple-parent')) {
        const ripple = document.createElement('div');
        ripple.classList.add('ripple');
        const rect = e.target.getBoundingClientRect();
        const offsetX = e.clientX - rect.left;
        const offsetY = e.clientY - rect.top;
        const size = Math.max(rect.width, rect.height);
        ripple.style.width = ripple.style.height = size + 'px';
        ripple.style.left = offsetX - size / 2 + 'px';
        ripple.style.top = offsetY - size / 2 + 'px';
        e.target.appendChild(ripple);
        setTimeout(() => {
            ripple.remove();
        }, 600);
    }
});


// Tooltip
document.addEventListener('mouseover', function(e) {
    if (e.target.classList.contains('chip')) {
        const tooltip = document.createElement('div');
        tooltip.classList.add('tooltip');
        tooltip.textContent = e.target.textContent;
        document.body.appendChild(tooltip);

        const chipRect = e.target.getBoundingClientRect();
        const tooltipRect = tooltip.getBoundingClientRect();

        tooltip.style.left = chipRect.left + 'px';
        tooltip.style.top = chipRect.top - tooltipRect.height - 10 + window.scrollY + 'px';

        // Hide tooltip on mouseout
        e.target.addEventListener('mouseout', function() {
            tooltip.remove();
        });
    }
});
