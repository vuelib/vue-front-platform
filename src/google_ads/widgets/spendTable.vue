<template>
  <data-tables
    :data="tableData"
    :table-props="{
      defaultSort: {prop: 'spend', order: 'descending'}
    }"
    :current-page="1"
    :page-size="5"
    :pagination-props="{ background: true, pageSizes: [5] }"
  >
    <!-- Custom Columns -->
    <component
      :is="column"
      v-for="column in tableColumns"
      :key="column.prop"
    />
  </data-tables>
</template>
<script>
import BaseTable from "@/components/widgets/BaseTable"
import Platform from "@/google_ads"

export default {
  name: "GoogleAdsSpendTable",
  extends: BaseTable,
  data() {
    return {
      platform: Platform,
      tableColumns: Platform.tableColumns.accounts
    }
  }
}
</script>
