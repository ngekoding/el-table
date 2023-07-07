<script>
import dataDummy from './data-dummy';

export default {
  data() {
    return {
      keyword: '',
      data: dataDummy
    };
  }
};
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

<style lang="scss">
body { 
  background: #efefef;
}
.demo {
  max-width: 1000px;
  margin: 20px auto;
  padding: 20px;
  background: #fff;
  border-radius: 10px;
  h1 { 
    margin: 0;
  }
  .table-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    .input-filter {
      width: 250px;
    }
  }
}
</style>