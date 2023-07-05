# Improved ElementUI Table Component

Improved ElementUI table component with search, pagination and more.

Features:

- [x] Pagination
- [x] Search
- [x] Row number
- [ ] Remote data

![Screenshot](./screenshots/improved-el-table.png)

## Installation

You can install the package via npm:

```sh
npm install @ngekoding/el-table
```

Next, you must register the component. The most common use case is to do that globally.

```js
import Vue from 'vue'
import ImprovedElTable from '@ngekoding/el-table'

Vue.use(ImprovedElTable)
```

or register it individually:

```js
import Vue from 'vue'
import IElTable from '@ngekoding/el-table/lib/table'
import IElTableColumn from '@ngekoding/el-table/lib/table-column'

Vue.component(IElTable.name, IElTable)
Vue.component(IElTableColumn.name, IElTableColumn)
```

Note: you are still need to import the style from `element-ui`, continue reading for example.

## Usage

Here's a simple example on how to use the component.

```vue
// App.vue
<script>
import { Input as ElInput } from 'element-ui'

// Import the index.css for simply use
// import 'element-ui/lib/theme-chalk/index.css'

// Or import specific required style only
import 'element-ui/packages/theme-chalk/lib/base.css'
import 'element-ui/packages/theme-chalk/lib/loading.css'
import 'element-ui/packages/theme-chalk/lib/table.css'
import 'element-ui/packages/theme-chalk/lib/table-column.css'
import 'element-ui/packages/theme-chalk/lib/select.css'
import 'element-ui/packages/theme-chalk/lib/option.css'
import 'element-ui/packages/theme-chalk/lib/pagination.css'

// For this demo only
import 'element-ui/packages/theme-chalk/lib/input.css'

export default {
  data() {
    return {
      keyword: '',
      data: [
        { name: 'John Doe', age: 25, email: 'john.doe@example.com', address: '123 Main Street', phone: '555-1234' },
        { name: 'Jane Smith', age: 30, email: 'jane.smith@example.com', address: '456 Elm Street', phone: '555-5678' },
        { name: 'Robert Johnson', age: 35, email: 'robert.johnson@example.com', address: '789 Oak Street', phone: '555-9012' },
      ]
    }
  }
}
</script>

<template>
  <div class="demo">
    <h1>@ngekoding/el-table demo</h1>
    <div class="table-header">
      <h2>Users</h2>
      <el-input
        v-model="keyword"
        placeholder="Search..."
        size="small"
        class="input-filter"
      />
    </div>
    <i-el-table
      :data="data"
      :search-keyword="keyword"
      :search-columns="['name', 'address', 'email']"
      :search-delay="250"
    >
      <i-el-table-column type="row-number" label="#" width="50" />
      <i-el-table-column prop="name" label="Name" sortable />
      <i-el-table-column prop="address" label="Address" />
      <i-el-table-column prop="email" label="Email" />
      <i-el-table-column prop="phone" label="Phone" />
    </i-el-table>
  </div>
</template>

<style>
.demo {
  max-width: 1000px;
  margin: 20px auto;
}
.table-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.input-filter {
  width: 250px;
}
</style>
```

### Props

You can use all the original [element-ui table component](https://element.eleme.io/#/en-US/component/table) props, and extras by this improved component.


#### i-el-table props
| Prop | Description |  Type | Default |
|--|--|--|--|
| paginate | Enable or disable pagination feature. | boolean | true |
| search-keyword | The keyword to search/filter in the data. | string | — |
| search-columns | The property of the data to search for. | array | All the data property |
| search-delay | The delay time in milliseconds for `search-keyword` before running (debounce delay).  | number | 500 |
| page-options-space | Add extra space for page options, useful when working with full table width in card/tabs.  | boolean | false |

#### i-el-table-column props

You can use `type="row-number"` to show the incremental number for each row.

## License

MIT
