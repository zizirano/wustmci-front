<template>
	<el-form
		style="width: 50%"
		:model="ruleForm"
		:rules="rules"
		ref="ruleForm"
		label-width="100px"
		class="demo-ruleForm"
	>
		<el-form-item label="量表编号" prop="file_id">
			<el-input @blur="is_exist" v-model="ruleForm.file_id"></el-input>
		</el-form-item>
		<el-form-item label="调查地区" prop="survey_area">
			<el-radio v-model="ruleForm.survey_area" label="武汉">武汉</el-radio>
			<el-radio v-model="ruleForm.survey_area" label="大悟">大悟</el-radio>
		</el-form-item>
		<el-form-item label="患者姓名" prop="interviewee">
			<el-input v-model="ruleForm.interviewee"></el-input>
		</el-form-item>
		<el-form-item label="身份证号码" prop="id_number">
			<el-input v-model="ruleForm.id_number"></el-input>
		</el-form-item>
		<el-form-item label="家庭住址" prop="address">
			<el-input v-model="ruleForm.address"></el-input>
		</el-form-item>
		<el-form-item label="民族" prop="nation">
			<el-input v-model="ruleForm.nation"></el-input>
		</el-form-item>
		<el-form-item label="研究者姓名" prop="researcher">
			<el-input v-model="ruleForm.researcher"></el-input>
		</el-form-item>
		<el-form-item label="开始日期" prop="date">
			<el-date-picker
				v-model="ruleForm.date"
				type="date"
				placeholder="选择日期"
			>
			</el-date-picker>
		</el-form-item>
		<el-form-item label="联系方式" prop="phone">
			<el-input v-model="ruleForm.phone"></el-input>
		</el-form-item>
		<el-form-item label="备注" prop="remarks">
			<el-input v-model="ruleForm.remarks"></el-input>
		</el-form-item>

		<tr>
					<!-- <el-form-item> -->
			<el-button type="primary" @click="submitForm('ruleForm')"
				>立即创建</el-button
			>
			<el-button type="primary" @click="resetForm('ruleForm')">重置</el-button>
		<!-- </el-form-item> -->
		</tr>

	</el-form>
</template>

<script>
import baseUrl from '../../utils/baseURL';
	export default {
		data() {
			return {
				ruleForm: {
					file_id: "",
					survey_area:"",
					interviewee: "",
					id_number: '',
					address: "",
					nation: "",
					researcher: "",
					date: "",
					phone: "",
					remarks: "",
				},
				File_id: "",
				rules: {
					file_id: [
						{ required: true, message: "请输入档案编号", trigger: "blur" },
						// { type:'number', message:"请输入数字", trigger: "blur"}
						// { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
					],
					region: [
						{ required: true, message: "请选择活动区域", trigger: "change" },
					],
					id_number:[
						{ min: 18, max: 18, message: "请输入18位身份证号", trigger: "blur" },
						// { type:'number', message:"请输入数字", trigger: "blur"}
					],
					date1: [
						{
							type: "date",
							required: true,
							message: "请选择日期",
							trigger: "change",
						},
					],
					date2: [
						{
							type: "date",
							required: true,
							message: "请选择时间",
							trigger: "change",
						},
					],
					type: [
						{
							type: "array",
							required: true,
							message: "请至少选择一个活动性质",
							trigger: "change",
						},
					],
					resource: [
						{ required: true, message: "请选择活动资源", trigger: "change" },
					],
					desc: [{ required: true, message: "请填写活动形式", trigger: "blur" }],
				},
			};
		},
		methods: {
			submitForm(formName) {
				const _this = this;
				_this.$refs[formName].validate((valid) => {
					if (valid) {
						axios
							.post(
								baseUrl + "/fileInfo/insertFileInfo",
								this.ruleForm
							)
							.then(function (resp) {
								_this.$alert("添加成功", "标题名称", {
									confirmButtonText: "确定",
									callback: (action) => {
										_this.$router.push({
											name: "/update",
											params: {
												file_id: _this.ruleForm.file_id,
											},
										});
									},
								});
							});
					}
				});
			},
			is_exist() {
				const _this = this
				 axios.post(baseUrl + '/fileInfo/selectFileInfo',{
                    file_id: _this.ruleForm.file_id,
                    pageNum: 1,
                    pageSize: 1,
                }).then(function (resp) {
					let temp = resp.data.data.records
                	if(temp.length == 1) {
						_this.$message({
          					message: '编号重复，请重新输入！',
          					type: 'warning'
        				});
						_this.ruleForm.file_id = ''
					}
            	})
			},
			resetForm(formName) {
				this.$refs[formName].resetFields();
			},
		},
	};
</script>

<style scoped>
.demo-ruleForm{
  margin-top: 30px;
}
</style>