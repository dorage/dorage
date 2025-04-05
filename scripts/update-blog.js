const fs = require("fs");
const path = require("path");

(function () {
  const files = fs.readdirSync(path.resolve(process.cwd(), "blogs"));

  // get blogs
  const blogs = files
    .map((file) => {
      const content = fs.readFileSync(
        path.resolve(process.cwd(), "blogs", file),
        { encoding: "utf8" },
      );

      const date = (content.match(/date:(.*)/) ?? [])[1];
      const title = (content.match(/title:(.*)/) ?? [])[1];

      if (title == null || date == null) {
        return;
      }
      if (date.trim() === "") {
        return;
      }

      return { file, date: date.trim(), title: title.trim() };
    })
    .filter((blog) => blog);

  blogs.sort((a, b) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });

  // update recent blogs in README.md
  {
    const readme = fs.readFileSync(path.resolve(process.cwd(), "README.md"), {
      encoding: "utf8",
    });

    fs.writeFileSync(
      path.resolve(process.cwd(), "README.md"),
      readme.replace(
        /<!-- start_recent_blogs -->(.*)<!-- end_recent_blogs -->/s,
        `<!-- start_recent_blogs -->
${blogs
  .slice(0, 10)
  .map((blog) => {
    return `**[${blog.title}](./blogs/${encodeURI(blog.file)})**
: <sub>${blog.date}</sub>`;
  })
  .join("\n\n")}
<!-- end_recent_blogs -->`,
      ),
      { encoding: "utf8" },
    );
  }

  // update blog list in blogs/README.md
  {
    const readme = fs.readFileSync(
      path.resolve(path.resolve(process.cwd(), "blogs", "README.md")),
      {
        encoding: "utf8",
      },
    );

    fs.writeFileSync(
      path.resolve(process.cwd(), "blogs", "README.md"),
      readme.replace(
        /<!-- start_blogs -->(.*)<!-- end_blogs -->/s,
        `<!-- start_blogs -->
${blogs
  .map((blog) => {
    return `**[${blog.title}](./blogs/${encodeURI(blog.file)})**
: <sub>${blog.date}</sub>`;
  })
  .join("\n\n")}
<!-- end_blogs -->`,
      ),
      {
        encoding: "utf8",
      },
    );
  }
})();
