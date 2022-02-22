<script>
import { defineComponent, toRefs } from "@vue/composition-api";
import usePage from "@/hooks/usePage";
import useArticleList from "@/hooks/useArticleList";
export default defineComponent({
  setup() {
    const { articleList, getList } = useArticleList();
    const { page, handleSizeChange, handleCurrentChange } = usePage(getList);
    getList(page);
    return {
      ...toRefs(page),
      articleList,
      getList,
      handleSizeChange,
      handleCurrentChange,
    };
  },
});
</script>
