<template>
  <div class="form-group autosuggest-group">
    <label v-if="label">{{ label }}</label>
    <div class="autosuggest-container">
      <VueAutosuggest
              v-model="query"
              :suggestions="filteredOptions"
              @selected="onSelected"
              :get-suggestion-value="getSuggestionValue"
              :input-props="{placeholder:placeholder, class: 'form-control'}"
      />
    </div>
    <div v-if="error" class="invalid-feedback">
      {{ error }}
    </div>
  </div>
</template>

<script>
  import {VueAutosuggest} from 'vue-autosuggest';


  export default {
    name: 'Autocomplete',
    components: {
      VueAutosuggest
    },
    props: {
      label: {
        type: String,
        default: 'Autocomplete field'
      },
      placeholder: {
        type: String,
        default: 'Who are you from lord of the rings?'
      },
      error: {
        type: String,
        default: ''
      },
      suggestions: {
        type: Array,
        default: () => [
          'Frodo',
          'Samwise',
          'Gandalf',
          'Aragorn',
        ],
      },
      inputProps: {
        type: Object,
        default: () => ({placeholder: 'Who are you from lord of the rings?', class: 'form-control autosuggest__input'}),
      },
    },
    data() {
      return {
        query: "",
        selected: "",
      };
    },
    computed: {
      filteredOptions() {
        return [
          {
            data: this.suggestions.filter(option => {
              return option.toLowerCase().indexOf(this.query.toLowerCase()) > -1;
            })
          }
        ];
      }
    },
    methods: {
      onSelected(item) {
        this.selected = item;
      },
      getSuggestionValue(suggestion) {
        return suggestion;
      },
    }
  }
</script>

<style lang="scss">
  .autosuggest {
    position: relative;

    &-group {
      input {
        padding: 0.5rem;
      }

      ul {
        width: 100%;
        color: rgba(30, 39, 46, 1.0);
        list-style: none;
        margin: 0;
        padding: 0;
      }

      li {
        margin: 0 0 0 0;
        border-radius: 5px;
        padding: 0.3rem 0 0.3rem 0.6rem;
        display: flex;
        align-items: center;
      }

      li:hover {
        cursor: pointer;
      }
    }
    &-container {
      display: flex;
      justify-content: center;
      width: 100%;
      &>div {
        position: relative;
        width: 100%;
        display: block;
      }
    }
    &__results {
      border: 1px solid #ced4da;
      border-radius: .25rem;
      &-container {
        background-color: #fff;
        position: absolute;
        z-index: 1;
        left: 0;
        right: 0;
      }
      &-item--highlighted {
        background-color: rgba(51, 217, 178, 0.2);
      }
    }
  }
</style>
