/* HTML
 <section class="cards">
  <template id="template-card">
    <figure class="card">
      <img />
      <figcaption></figcaption>
    </figure>
  </template>
 </section>
*/

const $cards = document.querySelector(".cards"),
  $template = document.getElementById("template-card").content,
  $fragment = document.createDocumentFragment(),
  cardsContent = [
    {
      title: "Tecnologia",
      img: "https://cdn.pixabay.com/photo/2017/08/10/08/47/laptop-2620118_960_720.jpg",
    },
    {
      title: "Animales",
      img: "https://cdn.pixabay.com/photo/2020/06/20/11/08/siamese-cat-5320568_960_720.jpg",
    },
    {
      title: "Arquitectura",
      img: "https://cdn.pixabay.com/photo/2013/04/11/19/46/building-102840_960_720.jpg",
    },
    {
      title: " Gente",
      img: "https://cdn.pixabay.com/photo/2017/06/20/22/14/man-2425121_960_720.jpg",
    },
    {
      title: "Naturaleza",
      img: "https://cdn.pixabay.com/photo/2015/12/01/20/28/road-1072821_960_720.jpg",
    },
  ];

cardsContent.forEach((el) => {
  $template.querySelector("img").setAttribute("src", el.img);
  $template.querySelector("img").setAttribute("alt", el.title);
  $template.querySelector("figcaption").textContent = el.title;

  let $clone = document.importNode($template, true);
  $fragment.appendChild($clone);
});

$cards.appendChild($fragment);
