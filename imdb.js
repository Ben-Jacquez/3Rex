const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '201fb6c1e4mshb63d3ed158cd9c9p14f35fjsnb3474b2899d8',
		'X-RapidAPI-Host': 'online-movie-database.p.rapidapi.com'
	}
};

fetch('https://online-movie-database.p.rapidapi.com/auto-complete?q=bullet%20train', options)

    .then(response => response.json())
    .then(data => {
        const list = data.d;

        list.map((item) => {
            const name = item.l;
            const poster = item.i.imageurl;
            const movie = `<li><img src="${poster}"> <h2>${name}</h2></li>`;
            document.querySelector('.movies').innerHTML += movie;

        })
    })
    .catch(err => {
        console.error(err);
    });

    ()