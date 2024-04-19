var posts = [
  {
    title: "tieu de 1",
    thumbnail: `https://fastly.picsum.photos/id/1045/200/300.jpg?hmac=Y71-83LHDOPyoD5nAk5iDk1IJKvlnjBznGezsMIZyJ8`,
    desc: `lorem de 1`,
  },
  {
    title: "tieu de 2",
    thumbnail: `https://fastly.picsum.photos/id/1045/200/300.jpg?hmac=Y71-83LHDOPyoD5nAk5iDk1IJKvlnjBznGezsMIZyJ8`,
    desc: `lorem de 2`,
  },
  {
    title: "tieu de 3",
    thumbnail: `https://fastly.picsum.photos/id/1045/200/300.jpg?hmac=Y71-83LHDOPyoD5nAk5iDk1IJKvlnjBznGezsMIZyJ8`,
    desc: `lorem de 3`,
  },
];

var html = ` <section class="posts">
  ${posts.map((post) => {
    return ` <div class="post-items">
            <img src="${post.thumbnail}"
                alt="">
            <div class="post-contents">
                <h3 class="heading-lv3">${post.title}</h3>
                <p class="desc">
                    ${post.desc}
                </p>
            </div>

        </div>`;
  })}

    </section>
`;

document.write(html);
