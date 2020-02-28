<script>
import items from "../data/items";

export default {
  data: () => ({
    items
  }),
  render() {
    return this.$scopedSlots.default({ items: this.items });
  }
};
</script>