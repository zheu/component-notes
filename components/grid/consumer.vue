<template>
  <div class="w-full flex items-center justify-center">
    <GridDataProvider>
      <Grid
        slot-scope="{ items, sort, search }"
        v-bind="{ items }"
        class="border border-red-300 border-solid border-radius-3"
      >
        <GridHeaders
          slot="headers"
          slot-scope="{ bindings, events }"
          v-bind="bindings"
          v-on="events"
        >
          <template>
            <th>
              <div class>
                <div @click="() => sort('name')">name</div>
                <input
                  type="text"
                  class="border"
                  @change="$event => search('name', $event.target.value)"
                >
              </div>
            </th>
            <th>
              <div>
                <div @click="() => sort('phone')">phone</div>
                <input
                  type="text"
                  class="border"
                  @change="$event => search('phone', $event.target.value)"
                >
              </div>
            </th>
            <th>
              <div>
                <div @click="() => sort('mails')">mails</div>
                <input
                  type="text"
                  class="border"
                  @change="$event => search('mails', $event.target.value)"
                >
              </div>
            </th>
            <th>
              <div>
                <div @click="() => sort('profession')">profession</div>
                <input
                  type="text"
                  class="border"
                  @change="$event => search('profession', $event.target.value)"
                >
              </div>
            </th>
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
  </div>
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
