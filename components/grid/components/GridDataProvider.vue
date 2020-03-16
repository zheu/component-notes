<script>
import items from "../data/items";

export default {
  data: () => ({
    items,
    searchBy: {},
    sortBy: "",
    sortDirection: "asc"
  }),
  methods: {
    sort(name) {
      if (this.sortBy !== name) {
        this.sortBy = name;
        this.sortDirection = "asc";
        return;
      }

      if (this.sortDirection === "asc") {
        this.sortDirection = "desc";
        return;
      }

      this.sortDirection = "";
      this.sortBy = "";
    },

    search(name, value) {
      this.$set(this.searchBy, name, value);
    }
  },

  watch: {
    searchBy: {
      deep: true,
      immediate: true,
      handler: function(searchBy) {
        this.items = items.filter(item =>
          Object.entries(searchBy).every(([key, value]) =>
            item[key].toLowerCase().includes(value.toLowerCase())
          )
        );
      }
    },
    sortBy: {
      deep: true,
      immediate: true,
      handler: function(sortBy) {
        // const sortDirection = this.sortDirection === 'asc' ? 1 : -1
        // this.items = sortBy !== "" ? items.sort((a, b) =>
        //   (a[sortBy] - b[sortBy]) * sortDirection
        // ) : items;
      }
    },
    sortDirection: {
      deep: true,
      immediate: true,
      handler: function(sortDirection, prev) {
        console.error("sortDirection", sortDirection);
      }
    }
  },

  render() {
    const { items, search, sort } = this;

    return this.$scopedSlots.default({
      items,
      search,
      sort
    });
  }
};
</script> 