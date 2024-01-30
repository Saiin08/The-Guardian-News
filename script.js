// const loadData = async () => {
//   const response = await fetch(
//     "https://classes.codingbootcamp.cz/assets/classes/602/guardian.php"
//   );
//   const data = await response.json();
//   console.log(data);
// };

// loadData();

// const getData = async () => {
//   const response = await fetch(
//     "https://classes.codingbootcamp.cz/assets/classes/602/guardian.php?cat=science"
//   );
//   const data = await response.json();
//   console.log(data);
// };

// getData();

const loadData = async () => {
  const response = await fetch(
    "https://classes.codingbootcamp.cz/assets/classes/602/guardian.php"
  );
  const datum = await response.json();

  console.log(datum.data);

  const nav = document.querySelector(".navigation");

  datum.data.forEach((element) => {
    const menu = document.createElement("div");
    menu.className = "menu-item";
    menu.innerHTML = element;
    menu.style.fontSize = "40px";
    menu.style.backgroundColor = "lightgrey";
    nav.appendChild(menu);
    menu.addEventListener("click", () => {
      loadArticles(element);
    });
  });

  const loadArticles = async (category) => {
    console.log(category);
    const response = await fetch(
      `https://classes.codingbootcamp.cz/assets/classes/602/guardian.php?cat=${category}`
    );
    const content = await response.json();
    const items = content.data.channel.item;
    console.log(content);
    console.log(items);

    const container = document.querySelector(".article");
    container.innerHTML = "";
    // set the div to empty ''
    items.forEach((item) => {
      const itemContent = document.createElement("div");
      itemContent.innerHTML = `<strong>Title:</strong> ${item.title} </br> <strong>Link:</strong><a href=“${item.link}“>${item.link}</a></br> <strong>Description:</strong> ${item.description}`;
      itemContent.style.marginTop = "30px";
      itemContent.style.backgroundColor = "lightgrey";
      container.appendChild(itemContent);
    });
  };
};
loadData();
