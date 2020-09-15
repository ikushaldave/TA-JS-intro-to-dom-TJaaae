function render(houses) {
	const container = document.querySelector(".container");

	houses.forEach((house) => {
		for (let people of house.people) {
			const box = document.createElement("div");
			const img = document.createElement("img");
			const name = document.createElement("h2");
			const description = document.createElement("p");
			const link = document.createElement("a");

			img.src = people.image;
			name.textContent = people.name;
			description.textContent = people.description;
			link.href = people.wikiLink;
			link.innerText = "Learn More!";

			box.classList.add("box");

			box.append(img, name, description, link);
			container.append(box);
		}
	});
}

render(got.houses);
