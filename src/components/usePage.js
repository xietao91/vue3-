// hooks/usePage.js
import { reactive } from "@vue/composition-api";
 
function usePage(changeFn) {
  const page = reactive({
    currentPage: 1,
    pageSizes: [5, 10, 20],
    pageSize: 5,
    total: 0,
  });
  function handleSizeChange(val) {
    page.pageSize = val;
    changeFn(page);
  }
  function handleCurrentChange(val) {
    page.currentPage = val;
    changeFn(page);
  }
  return {
    page,
    handleSizeChange,
    handleCurrentChange,
  };
}
export default usePage;