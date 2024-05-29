const result = document.getElementById('result');
const filter = document.getElementById('filter'); // Added missing equal sign
const listItems = [];
getData();
filter.addEventListener('input', (e) => filterData(e.target.value));

async function getData() {
    const res = await fetch('https://randomuser.me/api?results=50'); // Added missing semicolon
    const { results } = await res.json();
    // Clear result
    result.innerHTML = ''; // Set innerHTML to an empty string
    results.forEach(user => {
        const li = document.createElement('li'); // Added missing equal sign
        listItems.push(li);
        li.innerHTML = `
            <img src="${user.picture.large}" alt="${user.name.first}">
            <div class="user-info">
                <h4>${user.name.first} ${user.name.last}</h4>
                <p>${user.location.city}, ${user.location.country}</p>
            </div>
        `;
        result.appendChild(li);
    });
}

function filterData(searchTerm) {
    listItems.forEach(item => {
        if (item.innerText.toLowerCase().includes(searchTerm.toLowerCase())) {
            item.classList.remove('hide');
        } else {
            item.classList.add('hide');
        }
    });
}
