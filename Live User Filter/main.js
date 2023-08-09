const result = document.getElementById('result')
const filter = document.getElementById('filter')
const listItems = []

getData()

filter.addEventListener('input', (e) => filterData(e.target.value))

async function getData() {
    const res = await fetch('https://randomuser.me/api?results=50') // return promise
    const { results } = await res.json() // waiting for data to parse into json format
    // console.log(results)
    // clear result - this will clear/hide loading whic was present there 
    result.innerHTML = ''

    results.forEach(user => {
        // console.log(user)

        const li = document.createElement('li') // create li element

        listItems.push(li) // push li in the listItems array variable

        li.innerHTML = `
        <img src="${user.picture.large}" alt="${user.name.first}">
        <div class = "user-info">
            <h4>${user.name.first} ${user.name.last}</h4>
            <p>${user.location.city}, ${user.location.country}</p>
        </div>
        `

        result.appendChild(li)
    })
}
// console.log(listItems)

function filterData(searchTerm) {
    // console.log(searchTerm)

    listItems.forEach(item => {
        if (item.innerText.toLowerCase().includes(searchTerm.toLowerCase())) {
            item.classList.remove('hide') // here classList remove 'hide class' from every matched item
        } else {
            item.classList.add('hide') // here classList add 'hide class' in every non-matched item
        }
    })
}