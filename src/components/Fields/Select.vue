<template>
    <vSelect
        :class="className"
        @input="onInput"
        :options="options"
        :clearable="clearableSelect"
        :searchable="false"
        :placeholder="elementPlaceholder"
        :multiple="isMultiple"
        v-model="selected"
    />

</template>

<script>
	import vSelect from 'vue-select';
	import 'vue-select/dist/vue-select.css';

	export default {
		name: 'Select',
		components: {
			vSelect,
		},
		props: {
			options: Array,
			defaultInputValue: Object,
			onInput: Function,
            className: String,
            elementPlaceholder: String,
            clearableSelect: Boolean,
            isMultiple: Boolean
		},
		data() {
			return {
				selected: this.defaultInputValue ? this.defaultInputValue : '',
			}
		},
	}
</script>

<style lang="scss">
    .select-base {
        border: 1px solid #686f7a;
        border-radius: 3px;
        &:hover, &:focus {
            border-color: #29303b;
        }
        &:active {
            background-color: #f7f8fa;
        }
        .vs__actions {
            padding: 8px;
            transform: rotate(180deg);
            cursor: pointer;
        }
        .vs__dropdown-toggle {
            border: 1px solid transparent;
            border-radius: 3px;
            width: 180px;
            padding: 0;
            &:active {
                background-color: #f7f8fa;
            }
        }
        .vs__dropdown-menu {
            margin-bottom: 1px;
            background-color: #fff;
            box-shadow: 0 4px 16px rgba(20,23,28,.25);
        }
    }
    .lang-select {
        width: 180px;
    }
    .form-select {
        display: flex;
        align-items: center;
        .vs__dropdown-toggle {
            width: 413px;
        }
        .vs__selected {
            padding: 0;
            margin: 0;
        }
        .vs__actions {
            padding: 2px;
        }
        .vs__search {
            padding: 0;
            margin: 0;
            color: #495057;
            &::placeholder{
                color: #6c757d;
            }
        }
        .vs__selected-options {
            padding: 0;
        }
    }
    .multiple-select {
        .vs__selected {
            padding: 3px;
            margin: 1px;
        }
    }

</style>
