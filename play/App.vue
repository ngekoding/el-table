<script>
import dataDummy from './data-dummy';
import dataDummyNested from './data-dummy-nested';

export default {
  data() {
    return {
      keyword: '',
      data: dataDummy,
      dataNested: dataDummyNested,
      paging: {
        currentPage: 1,
        perPage: 10
      }
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
      :data="dataNested"
      :search-keyword="keyword"
      :search-columns="['name', 'contact.address', 'contact.phone']"
      :search-delay="250"
      :current-page.sync="paging.currentPage"
      :per-page.sync="paging.perPage"
    >
      <i-el-table-column type="row-number" label="#" width="50" />
      <i-el-table-column prop="name" label="Name" sortable />
      <i-el-table-column prop="contact.address" label="Address" />
      <i-el-table-column prop="contact.email" searchable label="Email" />
      <i-el-table-column prop="contact.phone" label="Phone" />
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