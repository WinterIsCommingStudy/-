// 아래는 현재 home.html 페이지에서 쓰이는 코드는 아닙니다.
// 다만, 앞으로 ~.js 파일을 작성할 때 아래의 코드 구조를 참조할 수 있도록,
// 코드 예시를 남겨 두었습니다.

import * as Api from "../api.js";
import $ from "./js/utils.js/dom.js";
import { randomId, navigate } from "../useful-functions.js";
showProductItemsToContainer();

// function showProductDetail(id) {
//   navigate(`api/products/${id}`);
//   // window.location.href = `api/products/${id}`;
// }

getUrlPath();
console.log("fdf");
async function showProductItemsToContainer() {
  const products = await Api.get("/api/products");

  products.forEach(async (product) => {
    const {
      _id,
      imgUrl,
      title,
      price,
      category,
      author,
      publisher,
      publicationDate,
      pageNumber,
      summary,
    } = product;

    $(".book-list").insertAdjacentHTML(
      "beforeend",
      `
          <div class="book-list-item" id="a${_id}">
      <p>${title}</p>
      <img src="${imgUrl}" alt="책 표지" />
    </div>
          `
    );
    // /img/home-books/best-11.jpg

    // ./img/home-books/1667840685760_best-1.jpg 되는경로
    console.log(imgUrl);
    const productItem = document.querySelector(`#a${_id}`);
    ~productItem.addEventListener("click", navigate(`/products/${_id}`));
    //productItem.addEventListener("click", navigate(`/products/test?id=${_id}`));
  });
}
