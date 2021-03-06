const collectionList = require("../_components/collection-list");
exports.data = {
  layout: "index",
};

exports.render = (data) => {
  const mostRecentPostsExcludingSelf = data.collections.post
    .reverse()
    .filter((p) => data.page.url !== p.url)
    .slice(0, 3);

  return `
  <article>
    ${data.content}
  </article>
  <nav class="continue-reading">
    <h1>Continue reading</h1>
    <p>Here are some more articles that you could read next:</p>
    ${
      mostRecentPostsExcludingSelf.length
        ? collectionList(data, mostRecentPostsExcludingSelf)
        : ""
    }
  </nav>`;
};
