// Tabs
const tabs = document.querySelectorAll('.tab-btn');
const contents = document.querySelectorAll('.tab-content');

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        contents.forEach(c => c.classList.remove('active'));
        document.getElementById(tab.dataset.tab).classList.add('active');
    });
});