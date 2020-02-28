<template>
  <GridDataProvider>
    <Grid
      slot-scope="{ items }"
      v-bind="{ items }"
      class="border border-red-300 border-solid border-radius-3"
    >
      <GridHeaders slot="headers" slot-scope="{ bindings, events }" v-bind="bindings" v-on="events">
        <template slot-scope="{}">
          <th>name</th>
          <th>phone</th>
          <th>mail</th>
          <th>profession</th>
        </template>
      </GridHeaders>
      <GridColumns
        slot="columns"
        slot-scope="{ bindings, events, item }"
        v-bind="bindings"
        v-on="events"
      >
        <td>{{ item.name }}</td>
        <td>{{ item.phone }}</td>
        <td>{{ item.mail }}</td>
        <td>{{ item.profession }}</td>
      </GridColumns>
    </Grid>
  </GridDataProvider>
</template>

<script>
import Grid from "./components/Grid";
import GridColumns from "./components/GridColumns";
import GridHeaders from "./components/GridHeaders";
import GridDataProvider from "./components/GridDataProvider";

export default {
  name: "App",
  components: { Grid, GridColumns, GridHeaders, GridDataProvider }
};
</script>

<style>
</style>
