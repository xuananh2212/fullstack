var html = `
        <div class="post-items">
            <img src="https://fastly.picsum.photos/id/339/200/300.jpg?hmac=rX8fDMMSNKZhzvcqJCduRuj33pXDgDlJiqOMqSuNwOo"
                alt="">
            <div class="post-contents">
                <h3 class="heading-lv3">Tieu de 1</h3>
                <p class="desc">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia deserunt reprehenderit ipsum
                    similique impedit magnam cum tempora quia, aperiam repellat sequi pariatur voluptas alias vel
                    consequuntur, natus iure. Laboriosam, reiciendis?
                </p>
            </div>

        </div>
`;

var posts = [
  {
    title: "tieu de 1",
    thumbnail: `https://fastly.picsum.photos/id/1045/200/300.jpg?hmac=Y71-83LHDOPyoD5nAk5iDk1IJKvlnjBznGezsMIZyJ8`,
    desc: `loreme de 1`,
  },
];

document.write(html);
