<template>
  <div>
    <h3>Design Space Dataset</h3>
    <table>
      <tbody>
        <tr v-for="(row, rowIndex) in filteredTableData" :key="rowIndex">
          <td @mouseover="scrollImage(rowIndex)" @mouseleave="resetScroll(rowIndex)">
            <div class="image-container" :ref="'imageWrapper' + rowIndex">
              <!-- 显示 loading 字样，直到图片加载完成 -->
              
              <img 
                v-if="!imageErrorMap[rowIndex] " 
                :src="`/RidgeBuilder${row[0]}`" 
                alt="Image" 
             
                @error="handleImageError(rowIndex)" 
              />
              <div v-else-if="imageErrorMap[rowIndex]" class="source-info">
                Source: {{ row[1] }}
              </div>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import * as XLSX from 'xlsx';
import { EventBus } from '../eventBus';

export default {
  name: 'ResultPanel',
  data() {
    return {
      headers: [],
      tableData: [],
      filteredTableData: [],
      filters: {
        selectedElements: [],
        selectedElementAxes: [],
        selectedLayout: [],
        selectedStyle: [],
        selectedEmbellishment: [],
        selectedComposition: [],
      },
      imageErrorMap: {}, 
      imageLoadingMap: {}, // 追踪图片加载状态
    };
  },
  created() {
    EventBus.on('filterChanged', this.handleFilterChange);
  },
  beforeUnmount() {
    EventBus.off('filterChanged', this.handleFilterChange);
  },
  mounted() {
    this.loadExcelData();
  },
  methods: {
    handleFilterChange(filterData) {
      this.filters = filterData;
      this.filterTableData();
    },
    filterTableData() {
      const filters = [
        ...this.filters.selectedElements,
        ...this.filters.selectedElementAxes,
        ...this.filters.selectedLayout,
        ...this.filters.selectedStyle,
        ...this.filters.selectedEmbellishment,
        ...this.filters.selectedComposition
      ];

      if (filters.length === 0) {
        this.filteredTableData = this.tableData;
        return;
      }

      const groupedFilters = this.groupFiltersByGroup(filters);

      this.filteredTableData = this.tableData.filter(row => {
        return Object.keys(groupedFilters).every(groupName => {
          const columnIndex = this.findColumnIndexByGroup(groupName);
          return columnIndex === -1 || this.matchByGroup(row, columnIndex, groupName);
        });
      });
    },

    matchByGroup(row, columnIndex, group) {
      const groupFilters = this.getFiltersByGroup(group);
      if(row[columnIndex]==undefined){
        return null;
      }else{
        return groupFilters.some(filter => row[columnIndex].toLowerCase().includes(filter.label.toLowerCase()));
      }
      
    },

    getFiltersByGroup(groupName) {
      return [
        ...this.filters.selectedElements,
        ...this.filters.selectedElementAxes,
        ...this.filters.selectedLayout,
        ...this.filters.selectedStyle,
        ...this.filters.selectedEmbellishment,
        ...this.filters.selectedComposition
      ].filter(filter => filter.group.toLowerCase() === groupName.toLowerCase());
    },

    groupFiltersByGroup(filters) {
      return filters.reduce((acc, filter) => {
        const group = filter.group.toLowerCase();
        if (!acc[group]) {
          acc[group] = [];
        }
        acc[group].push(filter);
        return acc;
      }, {});
    },

    findColumnIndexByGroup(groupName) {
      return this.headers.findIndex(header => header.toLowerCase() === groupName.toLowerCase());
    },

    scrollImage(rowIndex) {
      const imageWrapper = this.$refs['imageWrapper' + rowIndex][0];
      if (imageWrapper) {
        imageWrapper.scrollTo({
          top: imageWrapper.scrollHeight,
          behavior: 'smooth'
        });
      }
    },

    resetScroll(rowIndex) {
      const imageWrapper = this.$refs['imageWrapper' + rowIndex][0];
      if (imageWrapper) {
        imageWrapper.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      }
    },

    handleImageError(rowIndex) {
      this.imageErrorMap[rowIndex] = true;
    },


    async loadExcelData() {
      try {
        const response = await fetch(`${import.meta.env.BASE_URL}/Design_space_dataset02.xlsx`);
        const arrayBuffer = await response.arrayBuffer();
        const workbook = XLSX.read(arrayBuffer, { type: 'array' });
        const sheetName = workbook.SheetNames[0];
        const worksheet = XLSX.utils.sheet_to_json(workbook.Sheets[sheetName], { header: 1 });

        this.headers = worksheet[1];
        this.tableData = worksheet.slice(2);
        this.filteredTableData = this.tableData;
       
      } catch (error) {
        console.error('Error reading excel file:', error);
      }
    }
  }
};
</script>

<style scoped>
table {
  width: 100%;
}

tbody {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

tr {
  background-color: #f9f9f9;
  width: 80%;
  display: flex;
  margin-bottom: 1%;
  justify-content: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1), 0 6px 20px rgba(0, 0, 0, 0.1);
  border: 2px solid grey;
  border-radius: 5px;
  padding: 1%;
}

td {
  width: 100%;
}

tr:hover {
  background-color: #ddd;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2), 0 12px 40px rgba(0, 0, 0, 0.2);
}

.image-container {
  width: 100%;
  height: 200px;
  overflow: hidden;
}

img {
  width: 98%;
  height: auto;
}

.source-info {
  font-size: 14px;
  text-align: left;
  padding: 5px;
  width: 300px;
}

.loading-text {
  font-size: 16px;
  font-weight: bold;
  color: grey;
  text-align: center;
}
</style>
