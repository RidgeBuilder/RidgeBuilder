<template>
  <div>
    <h3>Design Space Dataset</h3>
    <table>
      <tbody>
        <!-- 渲染图片 -->
        <tr v-for="(row, rowIndex) in filteredTableData" :key="rowIndex">
          <td @mouseover="scrollImage(rowIndex)" @mouseleave="resetScroll(rowIndex)">
            <div class="image-container" :ref="'imageWrapper' + rowIndex">
              <!-- 检查图片是否加载出错 -->
             
                <img 
                 v-if="!imageErrorMap[rowIndex]"
                  :src="row[0]" 
                  alt="Image" 
                  @error="handleImageError(rowIndex)" />
             
                  <div v-else class="source-info">
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
import { EventBus } from '@/eventBus';

export default {
  name: 'ResultPanel',
  data() {
    return {
      headers: [],      // 保存表头
      tableData: [],    // 保存表格数据
      filteredTableData: [], // 保存过滤后的表格数据
      filters: {
        selectedElements: [],
        selectedElementAxes: [],
        selectedLayout: [],
        selectedStyle: [],
        selectedEmbellishment: [],
        selectedComposition: [],
      },
      imageErrorMap: {}, // 用于保存图片错误信息
    };
  },
  created() {
    // 监听 QueryPanel 发出的筛选项数据
    EventBus.on('filterChanged', this.handleFilterChange);
  },
  beforeUnmount() {
    // 组件销毁时移除监听器，防止内存泄漏
    EventBus.off('filterChanged', this.handleFilterChange);
  },
  mounted() {
    this.loadExcelData();
  },
  methods: {
    handleFilterChange(filterData) {
      this.filters = filterData;
      this.filterTableData(); // 调用过滤数据的方法
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
        // 如果没有筛选条件，显示所有数据
        this.filteredTableData = this.tableData;
        return;
      }

      // 根据筛选条件过滤数据
      this.filteredTableData = this.tableData.filter(row => {
        return filters.some(filter => {
          const columnIndex = this.findColumnIndexByGroup(filter.group);
          return columnIndex === -1 || this.matchByGroup(row, columnIndex, filter.group);
        });
      });
    },
    
    matchByGroup(row, columnIndex, group) {
      const groupFilters = this.getFiltersByGroup(group);
      return groupFilters.some(filter => row[columnIndex].toLowerCase().includes(filter.label.toLowerCase()));
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
      // 将对应索引的错误记录到 imageErrorMap
      this.imageErrorMap[rowIndex] = true;
    },

    async loadExcelData() {
      try {
        const response = await fetch('/Design_space_dataset02.xlsx');
        const arrayBuffer = await response.arrayBuffer();
        const workbook = XLSX.read(arrayBuffer, { type: 'array' });
        const sheetName = workbook.SheetNames[0];
        const worksheet = XLSX.utils.sheet_to_json(workbook.Sheets[sheetName], { header: 1 });

        this.headers = worksheet[1]; // 第一行作为表头
        this.tableData = worksheet.slice(2); // 剩余的行为数据
        this.filteredTableData = this.tableData; // 初始化时显示所有数据
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
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1), 0 6px 20px rgba(0, 0, 0, 0.1); /* 添加阴影 */
  border: 2px solid grey;
  border-radius: 5px;
  padding: 1%;
}

td {
  width: 100%;
}

tr:hover {
  background-color: #ddd;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2), 0 12px 40px rgba(0, 0, 0, 0.2); /* 鼠标悬浮时增加阴影效果 */
}

.image-container {
  width: 100%;
  height: 200px; /* 初始高度 */
  overflow: hidden; /* 隐藏溢出的部分 */
}

img {
  width: 98%;
  height: auto;
}

.source-info {
  font-size: 14px;
  text-align: left;
  padding: 5px;
  width:300px
}
</style>
