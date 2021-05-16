<template>
    <el-form style="width: 50%;" :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
        <el-form-item label="档案编号" prop="file_id">
            <el-input v-model="ruleForm.file_id"></el-input>
        </el-form-item>
        <el-form-item label="患者姓名" prop="name">
            <el-input v-model="ruleForm.name"></el-input>
        </el-form-item>
        <el-form-item label="身份证号码" prop="id_num">
            <el-input v-model="ruleForm.id_num"></el-input>
        </el-form-item>
        <el-form-item label="家庭住址" prop="addr">
            <el-input v-model="ruleForm.addr"></el-input>
        </el-form-item>
        <el-form-item label="民族" prop="nation">
            <el-input v-model="ruleForm.nation"></el-input>
        </el-form-item>
        <el-form-item label="研究者姓名" prop="r_name">
            <el-input v-model="ruleForm.r_name"></el-input>
        </el-form-item>
        <el-form-item label="开始日期" prop="start_date">
            <el-date-picker
                    v-model="ruleForm.start_date"
                    type="date"
                    placeholder="选择日期">
            </el-date-picker>
        </el-form-item>

        <el-form-item>
            <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
        </el-form-item>
    </el-form>
</template>

<script>
    export default {
        data() {
            return {
                ruleForm: {
                    file_id:'',
                    name: '',
                    id_num: '',
                    addr:'',
                    nation: '',
                    r_name: '',
                    start_date: ''
                },
                rules: {

                    region: [
                        { required: true, message: '请选择活动区域', trigger: 'change' }
                    ],
                    date1: [
                        { type: 'date', required: true, message: '请选择日期', trigger: 'change' }
                    ],
                    date2: [
                        { type: 'date', required: true, message: '请选择时间', trigger: 'change' }
                    ],
                    type: [
                        { type: 'array', required: true, message: '请至少选择一个活动性质', trigger: 'change' }
                    ],
                    resource: [
                        { required: true, message: '请选择活动资源', trigger: 'change' }
                    ],
                    desc: [
                        { required: true, message: '请填写活动形式', trigger: 'blur' }
                    ]
                }
            };
        },
        methods: {
            test(){
                console.log(this.ruleForm)
            },
            submitForm(formName) {
                const _this = this
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        axios.put('http://localhost:8080/sys/basic_info/updateBasicInfoByFileId',this.ruleForm).then(function (resp) {
                            if(resp.data.success == true){
                                _this.$alert('修改成功', '消息', {
                                    confirmButtonText: '确定',
                                    callback: action => {
                                        _this.$router.push('/ViewFiles')
                                    }
                                });
                            }
                        })
                    } else {
                        console.log('error submit!!');
                        return false;
                    }
                });
            },
            resetForm(formName) {
                this.$refs[formName].resetFields();
            }
        },
        created(){
            const _this = this
            axios.get('http://localhost:8080/sys/basic_info/queryBasicInfoByfileId?file_id=' + _this.$route.query.file_id).then(function (resp) {
                console.log(resp)
                // console.log(resp)
                _this.ruleForm = resp.data.result
                var emp = _this.ruleForm.start_date.substr(0,10)
                _this.ruleForm.start_date = emp
            })
        }
    }
</script>

<style scoped>

</style>