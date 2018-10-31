<template>
    <div class="upload-picture" :value="value">
        <Upload
            ref="upload"
            :action="action"
            :headers="headers"
            :data="fileData"
            :name="name"
            :show-upload-list="false"
            type="drag"
            accept="image/*"
            :format="format"
            :max-size="maxSize"
            :before-upload="handleBeforeUpload"
            :on-progress="handleProgress"
            :on-success="handleSuccess"
            :on-error="handleError"
            :on-format-error="handleFormatError"
            :on-exceeded-size="handleMaxSize"
            :style="{display: 'inline-block', width: width+'px'}">
            <div :style="{width: width+'px', height: height+'px', lineHeight: height+'px'}">
                <i-circle v-if="uploadStatus" :percent="uploadProgress">
                    <span class="demo-Circle-inner" style="font-size:24px">{{uploadProgress}}%</span>
                </i-circle>
                <Icon v-else-if="!pictureUrl" type="ios-camera" size="20"></Icon>
                <img v-else :src="pictureUrl" style="width: 100%;height: 100%;">
            </div>
        </Upload>
    </div>
</template>
<script>
export default {
    name: 'upload-picture',
    props: {
        value: {
            type: String,
            default: ''
        },
        action: {
            type: String,
            default: ''
        },
        headers: {
            type: Object,
            default: function () {
                return {}
            }
        },
        fileData: {
            type: Object,
            default: function () {
                return {}
            }
        },
        name: {
            type: String,
            default: 'file'
        },
        format: {
            type: Array,
            default: function () {
                return ['jpg','jpeg','png']
            }
        },
        maxSize: {
            type: Number,
            default: 2048
        },
        width: {
            type: Number,
            default: 200
        },
        height: {
            type: Number,
            default: 200
        }
    },
    data () {
        return {
            pictureUrl: '',
            oldPictureUrl: '',
            uploadStatus: false,
            uploadProgress: 0,
            
        }
    },
    watch: {
        value (curVal, oldVal) {
            this.pictureUrl = curVal;
        },
        pictureUrl (curVal, oldVal) {
            this.$emit('input', curVal);
        }
    },
    methods: {
        handleBeforeUpload () {
            this.uploadStatus = true;
            this.oldPictureUrl = this.pictureUrl;
            this.pictureUrl = '';
        },
        handleProgress (event, file) {
            this.uploadProgress = parseInt(event.percent);
            if (event.percent == 100){
                this.uploadStatus = false;
                this.uploadProgress = 0;
            }
        },
        handleSuccess (res, file) {
            if (res.code){
                this.$Notice.error({
                    title: '图片上传',
                    desc: res.msg
                });
            }else{
                this.pictureUrl = res.url;
            }            
        },
        handleError (err, file) {
            this.pictureUrl = this.oldPictureUrl;
        },
        handleFormatError (file) {
            this.$Notice.warning({
                title: 'The file format is incorrect',
                desc: 'File format of ' + file.name + ' is incorrect, please select jpg or png.'
            });
        },
        handleMaxSize (file) {
            this.$Notice.warning({
                title: 'Exceeding file size limit',
                desc: 'File  ' + file.name + ' is too large, no more than 2M.'
            });
        },
        handleRemove (file) {
            const fileList = this.$refs.upload.fileList;
            this.$refs.upload.fileList.splice(fileList.indexOf(file), 1);
        }
    },
    mounted () {
        if (this.value) {
            this.pictureUrl = this.value;
        }
    }
}
</script>
<style>
    .upload-picture {
        margin: 12px auto;
    }
    .upload-picture .ivu-upload .ivu-chart-circle {
        width: 178px;
        height: 178px;
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        margin: auto;
    }


    .demo-upload-list{
        display: inline-block;
        width: 60px;
        height: 60px;
        text-align: center;
        line-height: 60px;
        border: 1px solid transparent;
        border-radius: 4px;
        overflow: hidden;
        background: #fff;
        position: relative;
        box-shadow: 0 1px 1px rgba(0,0,0,.2);
        margin-right: 4px;
    }
    .demo-upload-list img{
        width: 100%;
        height: 100%;
    }
    .demo-upload-list-cover{
        display: none;
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background: rgba(0,0,0,.6);
    }
    .demo-upload-list:hover .demo-upload-list-cover{
        display: block;
    }
    .demo-upload-list-cover i{
        color: #fff;
        font-size: 20px;
        cursor: pointer;
        margin: 0 2px;
    }
</style>
