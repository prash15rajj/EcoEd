document.addEventListener("DOMContentLoaded", function() {
    const startTourButton = document.getElementById('start-tour');
    const viewSelect = document.getElementById('view-select');
    const scene = document.getElementById('scene');

    startTourButton.addEventListener('click', function() {
        scene.style.display = 'block';
    });

    viewSelect.addEventListener('change', function() {
        const selectedView = viewSelect.value;
        const views = document.querySelectorAll('a-sky, a-videosphere');

        views.forEach(view => {
            if (view.id === selectedView) {
                view.style.display = 'block';
            } else {
                view.style.display = 'none';
            }
        });
    });
});
