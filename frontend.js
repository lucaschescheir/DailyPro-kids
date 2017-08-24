function getChild() {
    fetch(`http://localhost:3000`)
        .then(function (response) {
            return response.json(); // parse from json
        })
        .then(function (children) {
            let childText = '';

            for (let i = 0; i < children.length; i++) {
                childText += `

            <li>
                <p>${children[i].name} </p>
            </li>
            
            `;
            }

            const list = document.querySelector('ul');
            list.innerHTML = childText;
        });
}
getChild();
