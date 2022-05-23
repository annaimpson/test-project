/**
 * Primary JS entry.
 */

/**
 * Sample fetch.
 */
// fetch("https://mockend.com/Wide-Eye-Creative/technical-test-2022/posts")
//   .then((response) => response.json())
//   .then((data) => console.log(data));

  getData();

  function getData() {
      let request = new XMLHttpRequest();
      request.open("GET", "https://mockend.com/Wide-Eye-Creative/technical-test-2022/posts");
      request.send();
      request.onload = () => {
          if(request.status === 200) {
              let users = JSON.parse(request.response);
              users.sort((a, b) => {
                  return new Date(b.publishedDate).getTime() - new Date(a.publishedDate).getTime();
              })

              let html = '';
              users.slice(0, 6).forEach(user => {

                  // attempt to alphabetize
                  // users.sort((a, b) => {
                  //     return a.authorName.localeCompare(b.authorName);
                  // });
                  let htmlSegment = `<li class="home__article-item">
                                        <a class="home__article-item-body-wrap" href="https://www.google.com/">
                                        <span class="we__helper-text">This link leads off-site.</span>
                                          <img class="home__article-item-img" src="${user.photo}" >
                                          <div class="home__article-item-copy-wrap">
                                              <h2 class="we__title--h5 home__article-item-details">${user.publishedDate} | ${user.authorName}</h2>
                                              <div class="we__title--h4 home__article-item-title">${user.title}</div>
                                              <p class="we__copy home__article-item-copy">${user.excerpt}</p>
                                          </div>
                                        </a>
                                  </li>`;
                  html += htmlSegment;
              });
              let articlesWrap = document.querySelector('.home__articles-wrap');
                  articlesWrap.innerHTML = html;
          } else {
              console.log("error");
          }
      }
  }
