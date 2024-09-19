<template>
  <div class="querypanel-box">
    <h5>Filters</h5>
    <div class="eachScope-box">
      <!-- Element Filter -->
      <div class="filter-box">
        <h6>Element</h6>
        <a-select
          mode="multiple"
          size="middle"
          placeholder="Select Element"
          style="width: 100%"
          @change="handleElementsChange"
        >
          <a-select-opt-group
            v-for="group in elementOptions"
            :key="group.label"
            :label="group.label"
          >
            <a-select-option
              v-for="option in group.options"
              :key="option.value"
              :value="option.value"
            >
              {{ option.label }}
            </a-select-option>
          </a-select-opt-group>
        </a-select>
      </div>

      <!-- Element:Axis Filter -->
      <div class="filter-box">
        <h6>Element:Axis</h6>
        <a-select
          mode="multiple"
          size="middle"
          placeholder="Select Element Axis"
          style="width: 100%"
          @change="handleElementAxesChange"
        >
          <a-select-opt-group
            v-for="group in elementAxisOptions"
            :key="group.label"
            :label="group.label"
          >
            <a-select-option
              v-for="option in group.options"
              :key="option.value"
              :value="option.value"
            >
              {{ option.label }}
            </a-select-option>
          </a-select-opt-group>
        </a-select>
      </div>

      <!-- Layout Filter -->
      <div class="filter-box">
        <h6>Layout</h6>
        <a-select
          mode="multiple"
          size="middle"
          :options="layoutOptions"
          placeholder="Select Layout"
          style="width: 100%"
          @change="handleLayoutChange"
        />
      </div>

      <!-- Style Filter -->
      <div class="filter-box">
        <h6>Style</h6>
        <a-select
          mode="multiple"
          size="middle"
          :options="styleOptions"
          placeholder="Select Style"
          style="width: 100%"
          @change="handleStyleChange"
        />
      </div>

      <!-- Embellishment Filter -->
      <div class="filter-box">
        <h6>Embellishment</h6>
        <a-select
          mode="multiple"
          size="middle"
          :options="embellishmentOptions"
          placeholder="Select Embellishment"
          style="width: 100%"
          @change="handleEmbellishmentChange"
        />
      </div>

      <!-- Composition Filter -->
      <div class="filter-box">
        <h6>Composition</h6>
        <a-select
        mode="multiple"
          size="middle"
          :options="compositionOptions"
          placeholder="Select Composition"
          style="width: 100%"
          @change="handleCompositionChange"
        />
      </div>
    </div>

    
    <div class="button-box">
      <a-button type="primary" @click="emitFilters">Apply Filters</a-button>
    </div>
  </div>
</template>

<script>
import { Select, SelectOptGroup, SelectOption, Button } from 'ant-design-vue';
import { EventBus } from '@/eventBus';

export default {
  name: 'QueryPanel',
  components: {
    ASelect: Select,
    ASelectOptGroup: SelectOptGroup,
    ASelectOption: SelectOption,
    AButton: Button,
  },
  data() {
    return {
      selectedElements: [],
      selectedElementAxes: [],
      selectedLayout: [],
      selectedStyle: [],
      selectedEmbellishment: [],
      selectedComposition: [],
      elementOptions: [
        {
          label: 'Ridge',
          options: [
            { label: 'Area', value: 'area' },
            { label: 'Line', value: 'line' },
            { label: 'Bar', value: 'bar' },
            { label: 'Step', value: 'step' },
          ],
        },
        {
          label: 'Optional',
          options: [
            { label: 'Mode Line', value: 'Mode Line' },
            { label: 'Reference Line', value: 'Reference Line' },
          ],
        },
      ],
      elementAxisOptions: [
        {
          label: 'X-axis',
          options: [
            { label: 'Continuous-Time', value: 'continuous-time' },
            { label: 'Continuous-Ratio', value: 'continuous-ratio' },
            { label: 'Continuous-Longitude', value: 'continuous-longitude' },
            { label: 'Discrete-Level', value: 'level' },
            { label: 'Discrete-Score', value: 'Score' },
            { label: 'Discrete-Age', value: 'age' },
          ],
        },
        {
          label: 'Y-axis',
          options: [
            { label: 'Segmented Value', value: 'segmented-value' },
            { label: 'Category', value: 'category' },
            { label: 'Identity', value: 'identity' },
          ],
        },
        {
          label: 'Z-axis',
          options: [
            { label: 'Ratio', value: 'ratio' },
            { label: 'Count', value: 'count' },
          ],
        },
      ],
      layoutOptions: [
        {
          label: 'Transform',
          options: [
            { label: 'Regular', value: 'Regular' },
            { label: 'Circular', value: 'Circular' },
          ],
        },
      ],
      styleOptions: [
        {
          label: 'Usage',
          options: [
            { label: 'Encode Data', value: 'Encode Data' },
            { label: 'Style', value: 'Style' },
          ],
        },
      ],
      embellishmentOptions: [
        {
          label: 'Y-axis',
          options: [
            { label: 'Segmented Value', value: 'segmented-value' },
            { label: 'Category', value: 'category' },
            { label: 'Identity', value: 'identity' },
          ],
        },
      ],
      compositionOptions: [
        {label:'composition',
          options:[
            { label: 'Dot plot', value: 'Dot plot' },
            { label: 'Strip plot', value: 'Strip plot' },
          ]
        }
      ],
    };
  },
  methods: {
    handleElementsChange(value) {
      this.selectedElements = value;
    },
    handleElementAxesChange(value) {
      this.selectedElementAxes = value;
    },
    handleLayoutChange(value) {
      this.selectedLayout = value;
    },
    handleStyleChange(value) {
      this.selectedStyle = value;
    },
    handleEmbellishmentChange(value) {
      this.selectedEmbellishment = value;
    },
    handleCompositionChange(value) {
      this.selectedComposition = value;
    },
    emitFilters() {
    
      const elementFilter = this.getFilteredOptions(this.selectedElements, this.elementOptions);
      const elementAxisFilter = this.getFilteredOptions(this.selectedElementAxes, this.elementAxisOptions);
      const elementLayoutFilter = this.getFilteredOptions(this.selectedLayout, this.layoutOptions);
      const elementStyleFilter = this.getFilteredOptions(this.selectedStyle, this.styleOptions);
      const elementEmbellishmentFilter = this.getFilteredOptions(this.selectedEmbellishment, this.embellishmentOptions);
      const elementCompositionFilter = this.getFilteredOptions(this.selectedComposition, this.compositionOptions);

      EventBus.emit('filterChanged', {
        selectedElements: elementFilter,
        selectedElementAxes: elementAxisFilter,
        selectedLayout: elementLayoutFilter,
        selectedStyle: elementStyleFilter,
        selectedEmbellishment:elementEmbellishmentFilter,
        selectedComposition: elementCompositionFilter,
      });
    },
    getFilteredOptions(selectedValues, options) {
     
      const result = [];
      options.forEach(group => {
        group.options.forEach(option => {
          if (selectedValues.includes(option.value)) {
            result.push({ label: option.label, value: option.value, group: group.label });
          }
        });
      });
      return result;
    },
  },
};
</script>

<style scoped>
.querypanel-box {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
}

.eachScope-box {
  flex-wrap: wrap;
  display: flex;
  align-items: flex-start;
  margin: 0;
  padding-bottom: 2%;
  width: 100%;
}

.filter-box {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 45%;
  padding: 2%;
}

h6 {
  padding: 0;
  margin: 0;
  align-self: flex-start;
}

.button-box {
  margin-top: 16px;
}
</style>
