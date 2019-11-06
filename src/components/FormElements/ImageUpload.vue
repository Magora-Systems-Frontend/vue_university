<template>
  <div class="upload-images form-group">
    <label>Upload your Images:</label>
    <div class="images-list pl-2 pr-2 pt-2 pb-0">
      <div v-for="file in files" :key="file.id" class="images-list__item mr-2 mb-2">
          <img :src="file.blob" alt="">
          <div class="images-list__item-delete" @click="deleteFile(file.id)">
            <Icon
              name="bucket"
              stroke="#fff"
              :width="22"
              :height="22"
            />
        </div>
      </div>
      <label class="images-list__upload-button mr-2 mb-2" :for="name">
        <file-upload
                class="btn_upload-images"
                :input-id="name"
                :multiple="multiple"
                :accept="accept"
                :size="size"
                :drop="true"
                :drop-directory="true"
                v-model="files"
                ref="upload"
                @input-filter="inputFilter"
        >
          <Icon
                  name="plus"
                  stroke="#a1a7b3"
                  :width="22"
                  :height="40"
          />
          Upload
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
    name: 'ImageUploadComponent',
    components: {
      FileUpload,
      Icon,
    },
    props: {
      name: {
        type: String,
        default: 'file'
      },
      accept: {
        type: String,
        default: ''
      },
      multiple: {
        type: Boolean,
        default: true
      },
      size: {
        type: Number,
        default: 1024 * 1024
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
      },
      inputFilter: function (file) {
        if (file) {
          file.blob = '';
          let URL = window.URL || window.webkitURL;
          if (URL && URL.createObjectURL) {
            file.blob = URL.createObjectURL(file.file)
          }
        }
      }
    }
  }
</script>


<style lang="scss">
  @import "../../styles/variables";

  .upload-images {
    input {
      display: none;
    }
  }

  .images-list {
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
    border: 1px solid #dedfe0;
    border-radius: 10px;

    &__item {
      display: inline-block;
      width: 100px;
      height: 100px;
      border: 1px solid #dedfe0;
      border-radius: 10px;
      position: relative;
      overflow: hidden;
      &:hover {
        .images-list__item-delete {
          opacity: .6;
        }
      }

      img {
        border-radius: 8px;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 80px;
        height: 80px;
        object-fit: cover;
      }

      &-delete {
        display: flex;
        justify-content: center;
        align-items: center;
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        cursor: pointer;
        background-color: $gray-dark;
        opacity: 0;
        transition: .5s;
      }
    }
    &__upload-button {
      color: #a1a7b3;
      margin-bottom: 0;
      cursor: pointer;
      background-color: rgba($gray, .3);
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100px;
      height: 100px;
      border: 1px dashed #dedfe0;
      border-radius: 10px;
      transition: .5s;
      &:hover {
        border-color: $gray-medium;
      }
    }
  }

  .btn_upload-images {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
  }
</style>
