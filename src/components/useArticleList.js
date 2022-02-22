// hooks/useArticleList.js
import { ref } from "@vue/composition-api";
import { getArticleList } from "@/mock/index"; // mock ajax请求
 
function useArticleList() {
  const articleList = ref([]);
  function getList(page) {
    getArticleList(page).then((res) => {
      articleList.value = res.data;
      page.total = res.total;
    });
  }
  return {
    articleList,
    getList,
  };
}
export default useArticleList;
