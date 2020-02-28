<script>
export default {
  props: {
    items: Array
  },

  render() {
    const headers = this.$scopedSlots.headers({});
    const rows = this.items.map(item => (
      <tr>{this.$scopedSlots.columns({ item })}</tr>
    ));

    return (
      <table>
        <thead>{headers}</thead>
        <tbody>{rows}</tbody>
      </table>
    );
  }
};
</script>

