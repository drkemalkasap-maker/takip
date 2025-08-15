const list = document.getElementById('takip-list');

function addItem() {
    const input = document.getElementById('itemInput');
    const value = input.value.trim();
    if (value === '') return;

    const li = document.createElement('li');
    li.textContent = value;

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Sil';
    deleteBtn.onclick = () => li.remove();

    li.appendChild(deleteBtn);
    list.appendChild(li);

    input.value = '';
}
