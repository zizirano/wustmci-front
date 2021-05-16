<template>
	<div>
		<div class="demo-input-suffix">
		<el-input
			placeholder="请输入量表编号"
			suffix-icon="el-icon-search"
			v-model="file_id"
		>
		</el-input>
		<el-input
			placeholder="请输入患者姓名"
			suffix-icon="el-icon-search"
			v-model="interviewee"
		>
		</el-input>
		<el-input
			placeholder="请输入患者身份证号码"
			suffix-icon="el-icon-search"
			v-model="id_number"
		>
		</el-input>
		<el-input
			placeholder="请输入研究者姓名"
			suffix-icon="el-icon-search"
			v-model="researcher"
		>
		</el-input>
		</div>
		<el-date-picker class="date" v-model="startDate" type="date" placeholder="选择开始日期">
		</el-date-picker>
		<el-date-picker v-model="endDate" type="date" placeholder="选择结束日期">
		</el-date-picker>
		<el-button @click="search" type="primary" icon="el-icon-search">
			查询
		</el-button>
		<el-button @click="resetForm" type="primary" icon="el-icon-refresh-right">
			重置
		</el-button>
		<el-button @click="exportXls" type="primary" icon="el-icon-download">
			导出
		</el-button>
		<el-table :data="tableData" border style="width: 100%" cell-class-name="cell-class-name" :header-cell-style="{background:'rgb(188,222,233)'}">
			<el-table-column fixed prop="file_id" label="量表编号" width="100" class="el">
			</el-table-column>
			<el-table-column prop="survey_area" label="调查地区" width="80" class="el">
			</el-table-column>
			<el-table-column prop="interviewee" label="患者姓名" width="80">
			</el-table-column>
			<el-table-column prop="id_number" label="身份证号码" width="150">
			</el-table-column>
			<el-table-column prop="address" label="家庭住址" width="220">
			</el-table-column>
			<el-table-column prop="nation" label="民族" width="50">
			</el-table-column>
			<el-table-column prop="researcher" label="研究者姓名" width="100">
			</el-table-column>
			<el-table-column prop="date" label="开始日期" width="100">
			</el-table-column>
			<el-table-column prop="phone" label="联系方式" width="110">
			</el-table-column>
			<el-table-column prop="remarks" label="备注" width="200">
			</el-table-column>
			<el-table-column fixed="right" label="操作" width="120">
				<template slot-scope="scope">
					<el-button @click="view(scope.row)" type="text" size="small"
						>查看</el-button
					>
					<el-button @click="deletefile(scope.row)" type="text" size="small"
						>删除</el-button
					>
				</template>
			</el-table-column>
		</el-table>
		<el-pagination
			background
			layout="prev, pager, next"
			:page-size="pageSize"
			:total="total"
			@current-change="page"
		>
		</el-pagination>
	</div>
</template>

<script>
	import baseUrl from "../../utils/baseURL";
	export default {
		methods: {
			deletefile(row) {
				const _this = this;
				this.$confirm("此操作将永久删除该量表, 是否继续?", "提示", {
					confirmButtonText: "确定",
					cancelButtonText: "取消",
					type: "warning",
				})
					.then(() => {
						axios
							.post(baseUrl + "/fileInfo/deleteFileInfo", {
								file_id: row.file_id,
							})
							.then(function (resp) {
								_this.$alert("删除成功", "消息", {
									confirmButtonText: "确定",
									callback: (action) => {
										window.location.reload();
									},
								});
							});
					})
					.catch(() => {
						this.$message({
							type: "info",
							message: "已取消删除",
						});
					});
			},
			page(currentPage) {
				const _this = this;
				axios
					.post(baseUrl + "/fileInfo/selectFileInfo", {
						file_id: _this.file_id,
						interviewee: _this.interviewee,
						id_number: _this.id_number,
						researcher: _this.researcher,
						startDate: _this.startDate,
						endDate: _this.endDate,
						pageNum: currentPage,
						pageSize: 10,
					})
					.then(function (resp) {
						_this.tableData = resp.data.data.records;
						_this.total = resp.data.data.total;
					});
			},
			search() {
				const _this = this;
				axios
					.post(baseUrl + "/fileInfo/selectFileInfo", {
						file_id: _this.file_id,
						interviewee: _this.interviewee,
						id_number: _this.id_number,
						researcher: _this.researcher,
						startDate: _this.startDate,
						endDate: _this.endDate,
						pageNum: 1,
						pageSize: 10,
					})
					.then(function (resp) {
						_this.tableData = resp.data.data.records;
						_this.total = resp.data.data.total;
					});
			},
			view(row) {
				this.$router.push({
					name: "/update",
					params: {
						file_id: row.file_id,
					},
				});
			},

			resetForm() {
				(this.file_id = ""),
					(this.interviewee = ""),
					(this.id_number = ""),
					(this.researcher = ""),
					(this.startDate = ""),
					(this.endDate = "");
			},
			exportXls() {
				window.location.href=baseUrl + '/exportXls' + '?file_id=' + _this.file_id
					+ '&interviewee=' + _this.interviewee
					+ '&id_number=' + _this.id_number
					+ '&researcher=' + _this.researcher
					+ '&startDate=' + _this.startDate
					+ '&endDate=' + _this.endDate
				}
			},
		created() {
			const _this = this;
			axios
				.post(baseUrl + "/fileInfo/selectFileInfo", {
					file_id: _this.file_id,
					interviewee: _this.interviewee,
					id_number: _this.id_number,
					researcher: _this.researcher,
					startDate: _this.startDate,
					endDate: _this.endDate,
					pageNum: 1,
					pageSize: 10,
				})
				.then(function (resp) {
					_this.tableData = resp.data.data.records;
					_this.total = resp.data.data.total;
				});
		},

		data() {
			return {
				total: null,
				tableData: null,
				file_id: "",
				survey_area:"",
				interviewee: "",
				id_number: "",
				researcher: "",
				startDate: "",
				endDate: "",
				pageNum: 1,
				pageSize: 10,
			};
		},
	};
</script>

<style>
.el-table__body .el-table__row.hover-row td {
    background-color: #E0FFFF;
}

.el-date-editor.el-input {
	width:320px
}

.demo-input-suffix .el-input {
width: 25%;
}
</style>