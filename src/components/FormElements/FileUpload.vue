<template>
  <div class="drag form-group">
    <label>Upload your files:</label>
    <div class="upload">
      <ul class="files-list pl-2 mb-1" v-if="files.length">
        <li v-for="file in files" :key="file.id" class="files-list__item mb-1">
          <span>{{file.name}}</span> -
          <span>{{(file.size/1024).toFixed(1)}} KB</span>
          <span v-if="file.error"> - {{file.error}}</span>
          <span class="files-list__item-delete ml-1" @click="deleteFile(file.id)">×</span>
        </li>
      </ul>

      <label class="btn-action _simple" :for="name">
        <file-upload
                class="btn_upload-files"
                :input-id="name"
                post-action="/upload/post"
                :multiple="true"
                :drop="true"
                :drop-directory="true"
                v-model="files"
                ref="upload"
        >
          <Icon
                  addClass="mr-1"
                  name="document"
                  fill="#2727a4"
                  stroke="#2727a4"
                  :width="13"
                  :height="19"
          />
          Select files
        </file-upload>
      </label>
    </div>
    <div v-if="error" class="invalid-feedback">
      {{ error }}
    </div>
  </div>
</template>


<script>
  import FileUpload from 'vue-upload-component/dist/vue-upload-component.part.js';
  import Icon from 'components/Icon';

  export default {
    name: 'FileUploadComponent',
    components: {
      FileUpload,
      Icon,
    },
    props: {
      name: {
        type: String,
        default: 'file'
      },
      error: {
        type: String,
        default: ''
      },
    },
    data() {
      return {
        files: [],
      }
    },
    methods: {
      deleteFile: function (id) {
        this.files = this.files.filter(item => item.id !== id)
      }
    }
  }
</script>


<style lang="scss">
  @import "../../styles/variables";

  .drag {
    input {
      display: none;
    }
  }

  .files-list {
    list-style: none;
    &__item {
      white-space: normal;
      font-size: 14px;
      color: $gray-dark;
      &-delete {
        cursor: pointer;
        color: #000;
      }
    }
  }

  .btn_upload-files {
    display: flex;
    justify-content: space-between;
  }
</style>
