<template>
    <div>
        <div class="essay-header-title">
            <Input type="text" size="large" placeholder="文章标题" v-model="essayData.title"/>
            <Button type="primary" size="large" @click="releaseEssay">发布</Button>
        </div>
        <div class="essay-content">
            <mavon-editor ref="md" v-model="essayData.content" :boxShadow="false" @change="editChange" @imgAdd="$imgAdd"/>
        </div>
        <Modal v-model="isModal" :title="title">
            <div>
                <Form ref="essayData" :model="essayData">
                    <FormItem label="文章封面">
                        <upload-picture v-model="essayData.picture" :action="action" name="picture" :width="400" :height="200"></upload-picture>
                    </FormItem>
                    <FormItem label="文章分类">
                        <RadioGroup v-model="essayData.category_id">
                            <Radio v-for="item in categorys" :key="item.id" :label="item.id">{{ item.title }}</Radio>
                        </RadioGroup>
                    </FormItem>
                    <FormItem label="文章标签">
                        <CheckboxGroup v-model="essayData.tags">
                            <Checkbox v-for="item in tags" :key="item.id" :label="item.id">{{ item.title }}</Checkbox>
                        </CheckboxGroup>
                    </FormItem>
                    <FormItem label="私密文章" prop="isPrivate">
                        <i-switch v-model="essayData.is_private" :true-value="trueValue" :false-value="falseValue"></i-switch>
                    </FormItem>
                </Form>
            </div>
            <div slot="footer">
                <Button type="default" @click="modalCancel">取消</Button>
                <Button type="default" @click="handleSubmit(0)">保存为草稿</Button>
                <Button type="primary" @click="handleSubmit(1)">发布文章</Button>
            </div>
        </Modal>
    </div>
</template>

<script>
import EssayAPI from '@/api/essay.js';
import UploadPicture from '@/components/upload-picture';
import {APP_CONFIG} from '@/config.js';
export default {
    components: {
        UploadPicture
    },
    data() {
        return {
            trueValue: 1,
            falseValue: 0,
            isModal: false,
            title: '发布文章',
            essayData: {
                title: '',
                picture: '',
                abstract: '',
                content: '',
                category_id: '',
                tags: [],
                is_private: 0,
                status: 0,
            },
            essayValidate: {
                title: [
                    {required: true, message: '请输入文章标题', trigger: 'blur'}
                ]
            }
        }
    },
    computed: {
        categorys () {
            return this.$store.state.essay.categoryList.data;
        },
        tags () {
            return this.$store.getters.getTagList.data;
        },
        action () {
            return APP_CONFIG.API_URL + '/upload';
        }
    },
    methods: {
        handleSubmit: function(status){
            this.essayData.status = status;
            this.$refs.essayData.validate((valid)=>{
                if (valid) {
                    let that = this;
                    EssayAPI.postEssayInfo(that.essayData)
                        .then(function(response){
                            if(response.data.code){
                                that.$Message.error(response.data.msg);
                            }else{
                                that.$Message.success(response.data.msg);
                                that.isModal = false;
                                that.$refs.essayData.resetFields();
                            }
                        })
                        .catch(function(){
                            that.$Message.info('系统繁忙，请稍后再试!');
                        });
                } else {
                    
                }
            });
        },
        releaseEssay: function(){
            if(this.essayData.title){
                this.isModal = true;
            }else{
                this.$Message.warning('请输入文章标题');
            }
        },
        modalCancel: function(){
            //隐藏弹框
            this.isModal = false;
        },
        editChange (d_value, d_render) {
            this.essayData.abstract = d_render;
        },
        /**
         * 编辑文章
         */
        editEssay: function(){
            let id = this.$route.params.id, that = this;
            if(id != undefined){
                that.$Message.loading({
                    content: 'Loading...',
                    duration: 0
                });
                EssayAPI.getEssayInfo({id:id})
                    .then(function(response){
                        that.$Message.destroy();
                        that.essayData = response.data.data;
                    })
                    .catch(function(){
                        that.$Message.info('系统繁忙，请稍后再试!');
                        that.$router.go(-1);
                    });
            }
        },
        $imgAdd (pos, $file) {
            let that = this;
            let formdata = new FormData();
            formdata.append('picture', $file);
            axios({
                url: APP_CONFIG.API_URL + '/upload',
                method: 'post',
                data: formdata,
                headers: {'Content-Type': 'multipart/form-data'}
            }).then((res) => {
                that.$refs.md.$img2Url(pos, res.data.url);
            });
        }
    },
    created () {
        this.$store.dispatch('loadCategoryList');
        this.$store.dispatch('loadTagList');
        this.editEssay();
    }
}
</script>

