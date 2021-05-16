<template>
	<div class="aaa">
		<el-collapse v-model="activeNames">
			<el-collapse-item title="档案信息" name="0">
				<el-form
					style="width: 100%"
					:model="form"
					:rules="rules"
					ref="form"
					label-width="100px"
					class="demo-form"
				>
					<el-form-item label="档案编号" prop="file_id">
						<el-input v-model="form.file_id" readonly></el-input>
					</el-form-item>
					<el-form-item label="调查地区" prop="survey_area">
						<el-radio v-model="form.survey_area" label="武汉">武汉</el-radio>
						<el-radio v-model="form.survey_area" label="大悟">大悟</el-radio>
					</el-form-item>
					<el-form-item label="患者姓名" prop="name">
						<el-input v-model="form.interviewee"></el-input>
					</el-form-item>
					<el-form-item label="身份证号码" prop="id_num">
						<el-input v-model="form.id_number"></el-input>
					</el-form-item>
					<el-form-item label="家庭住址" prop="addr">
						<el-input v-model="form.address"></el-input>
					</el-form-item>
					<el-form-item label="民族" prop="nation">
						<el-input v-model="form.nation"></el-input>
					</el-form-item>
					<el-form-item label="研究者姓名" prop="r_name">
						<el-input v-model="form.researcher"></el-input>
					</el-form-item>
					<el-form-item label="开始日期" prop="start_date">
						<el-date-picker
							v-model="form.date"
							type="date"
							placeholder="选择日期"
						>
						</el-date-picker>
					</el-form-item>
					<el-form-item label="联系方式" prop="nation">
						<el-input v-model="form.phone"></el-input>
					</el-form-item>
					<el-form-item label="备注" prop="r_name">
						<el-input v-model="form.remarks"></el-input>
					</el-form-item>
					<el-form-item>
						<el-button type="primary" @click="updateForm()">提交</el-button>
					</el-form-item>
				</el-form>
			</el-collapse-item>
		</el-collapse>
		<el-collapse v-model="activeNames">
			<el-collapse-item
				title="A 一般资料"
				class="grid-content bg-purple-dark"
				name="1"
			>
				<el-form
					style="width: 90%"
					:model="form"
					:rules="rules"
					ref="form"
					label-width="100px"
					class="demo-form"
				>
					<el-form-item label="A1 性别" prop="a1">
						<el-radio v-model="form.a1" label="1">男</el-radio>
						<el-radio v-model="form.a1" label="2">女</el-radio>
					</el-form-item>
					<el-form-item label="A2 年龄" prop="a2">
						<el-input v-model="form.a2" number></el-input>
					</el-form-item>
					<el-form-item
						label="A3 受教育程度（包括职业教育及函授等）（年）"
						prop="a3"
					>
						<el-input v-model="form.a3"></el-input>
					</el-form-item>
					<el-form-item label="A4出生日期" prop="a4">
						<el-date-picker
							v-model="form.a4"
							type="date"
							placeholder="选择日期"
						>
						</el-date-picker>
					</el-form-item>
					<el-form-item>
						<el-button type="primary" @click="updateForm()">提交</el-button>
					</el-form-item>
				</el-form>
			</el-collapse-item>
		</el-collapse>

		<el-collapse v-model="activeNames">
			<el-collapse-item title="B 体格检查" name="2">
				<el-form
					style="width: 90%"
					:model="form"
					:rules="rules"
					ref="form"
					label-width="100px"
					class="demo-form"
				>
					<el-form-item label="B1 身高（cm）" prop="b1">
						<el-input v-model.number="form.b1"></el-input>
					</el-form-item>
					<el-form-item label="B2体重（Kg）" prop="b2">
						<el-input v-model.number="form.b2"></el-input>
					</el-form-item>
					<el-form-item label="B3 头围（cm）" prop="b3">
						<el-input v-model.number="form.b3"></el-input>
					</el-form-item>
					<el-form-item label="B4 腰围（cm）" prop="b4">
						<el-input v-model.number="form.b4"></el-input>
					</el-form-item>
					<el-form-item label="B5 臀围（cm）" prop="b5">
						<el-input v-model.number="form.b5"></el-input>
					</el-form-item>
					<h1 style="font-weight: normal">血压（mmHg）</h1>
					<el-form-item label="B6.1 收缩压" prop="b6_1">
						<el-input v-model.number="form.b6_1"></el-input>
					</el-form-item>
					<el-form-item label="B6.2 舒张压" prop="b6_2">
						<el-input v-model.number="form.b6_2"></el-input>
					</el-form-item>
					<el-form-item label="B7 心率（次/分）" prop="b7">
						<el-input v-model.number="form.b7"></el-input>
					</el-form-item>
					<h1 style="font-weight: normal">握力（kg）</h1>
					<el-form-item label="B8.1 左手（一）" prop="b8_1_1">
						<el-input v-model.number="form.b8_1_1"></el-input>
					</el-form-item>
					<el-form-item label="B8.2 左手（二）" prop="b8_1_2">
						<el-input v-model.number="form.b8_1_2"></el-input>
					</el-form-item>
					<el-form-item label="B8.3 右手（一）" prop="b8_2_1">
						<el-input v-model.number="form.b8_2_1"></el-input>
					</el-form-item>
					<el-form-item label="B8.4 右手（二）" prop="b8_2_2">
						<el-input v-model.number="form.b8_2_2"></el-input>
					</el-form-item>
					<h1 style="font-weight: normal">视力</h1>
					<el-form-item label="B9.1 左眼" prop="b9_1">
						<el-input v-model.number="form.b9_1"></el-input>
					</el-form-item>
					<el-form-item label="B9.2 右眼" prop="b9_2">
						<el-input v-model.number="form.b9_2"></el-input>
					</el-form-item>
					<h1 style="font-weight: normal">听力</h1>
					<el-form-item label="B10.1 左耳" prop="b10_1">
						<el-input v-model.number="form.b10_1"></el-input>
					</el-form-item>
					<el-form-item label="B10.2 右耳" prop="b10_2">
						<el-input v-model.number="form.b10_2"></el-input>
					</el-form-item>
					<el-form-item label="B11 嗅觉" prop="b11">
						<el-radio v-model="form.b11" label="1">正常</el-radio>
						<el-radio v-model="form.b11" label="2">轻度减退</el-radio>
						<el-radio v-model="form.b11" label="3">中度减退</el-radio>
						<el-radio v-model="form.b11" label="4">重度减退</el-radio>
					</el-form-item>
					<el-form-item label="B12.1 客观观察步态" prop="b12_1">
						<el-radio v-model="form.b12_1" label="1">正常</el-radio>
						<el-radio v-model="form.b12_1" label="2">异常</el-radio>
					</el-form-item>
					<el-form-item label="B12.2 跟以前相比，您走路的步频" prop="b12_2">
						<el-radio v-model="form.b12_2" label="1">变慢</el-radio>
						<el-radio v-model="form.b12_2" label="2">不变</el-radio>
						<el-radio v-model="form.b12_2" label="3">加快</el-radio>
					</el-form-item>
					<el-form-item label="B13 跟以前相比，您的嗅觉" prop="b13">
						<el-radio v-model="form.b13" label="1">变迟钝</el-radio>
						<el-radio v-model="form.b13" label="2">不变</el-radio>
						<el-radio v-model="form.b13" label="3">变灵敏</el-radio>
					</el-form-item>
					<el-form-item label="B14 跟以前相比，您的听觉" prop="b14">
						<el-radio v-model="form.b14" label="1">变迟钝</el-radio>
						<el-radio v-model="form.b14" label="2">不变</el-radio>
						<el-radio v-model="form.b14" label="3">变灵敏</el-radio>
					</el-form-item>
					<el-form-item>
						<el-button type="primary" @click="updateForm()">提交</el-button>
					</el-form-item>
				</el-form>
			</el-collapse-item>
		</el-collapse>

		<el-collapse v-model="activeNames">
			<el-collapse-item title="C 社会经济状况" name="3">
				<el-form
					style="width: 50%"
					:model="form"
					:rules="rules"
					ref="form"
					label-width="100px"
					class="demo-form"
				>
					<el-form-item label="C1 您退休前职业" prop="c1">
						<el-radio v-model="form.c1" label="1">干部</el-radio>
						<el-radio v-model="form.c1" label="2">农民</el-radio>
						<el-radio v-model="form.c1" label="3">个体及商业人员</el-radio>
						<el-radio v-model="form.c1" label="4">工人</el-radio>
						<el-radio v-model="form.c1" label="5">家务</el-radio>
						<el-radio v-model="form.c1" label="6">其他</el-radio>
					</el-form-item>
					<el-form-item label="C1.1 工作性质" prop="c1_1">
						<el-radio v-model="form.c1_1" label="1">脑力劳动者</el-radio>
						<el-radio v-model="form.c1_1" label="2">体力劳动者</el-radio>
						<el-radio v-model="form.c1_1" label="3">脑力＋体力</el-radio>
						<el-radio v-model="form.c1_1" label="4">其他</el-radio>
					</el-form-item>
					<el-form-item label="C2 婚姻状况" prop="c2">
						<el-radio v-model="form.c2" label="1">未婚</el-radio>
						<el-radio v-model="form.c2" label="2">已婚</el-radio>
						<el-radio v-model="form.c2" label="3"
							>已婚 但由于工作暂时没住在一起</el-radio
						>
						<el-radio v-model="form.c2" label="4">分居</el-radio>
						<el-radio v-model="form.c2" label="5">离婚</el-radio>
						<el-radio v-model="form.c2" label="6">丧偶</el-radio>
					</el-form-item>
					<el-form-item label="C3 您参加那些医疗保险（多选）" prop="c3">
						<el-checkbox-group v-model="form.c3">
							<el-checkbox label="1">新型农村合作医疗</el-checkbox>
							<el-checkbox label="2">商业医疗保险模式</el-checkbox>
							<el-checkbox label="3">公费医疗</el-checkbox>
							<el-checkbox label="4">其他</el-checkbox>
							<el-checkbox label="5">不清楚</el-checkbox>
							<el-checkbox label="6">没有</el-checkbox>
						</el-checkbox-group>
					</el-form-item>
					<el-form-item label="C4 您有稳定的收入吗？" prop="c4">
						<el-radio v-model="form.c4" label="1">是</el-radio>
						<el-radio v-model="form.c4" label="0">否</el-radio>
					</el-form-item>
					<el-form-item label="C4.1 您每月的收入来源" prop="c4_1">
						<el-radio v-model="form.c4_1" label="1">养老金</el-radio>
						<el-radio v-model="form.c4_1" label="2">子女亲人</el-radio>
						<el-radio v-model="form.c4_1" label="3">自己工作</el-radio>
						<el-radio v-model="form.c4_1" label="4">其他</el-radio>
					</el-form-item>
					<el-form-item label="C4.2 您每月收入" prop="c4_2">
						<el-radio v-model="form.c4_2" label="1">1000以下</el-radio>
						<el-radio v-model="form.c4_2" label="2">1000-2000</el-radio>
						<el-radio v-model="form.c4_2" label="3">2000-3000</el-radio>
						<el-radio v-model="form.c4_2" label="4">3000-4000</el-radio>
						<el-radio v-model="form.c4_2" label="5">4000以上</el-radio>
					</el-form-item>
					<el-form-item label="C4.3 您对每月收入满意吗？" prop="c4_3">
						<el-radio v-model="form.c4_3" label="1">是</el-radio>
						<el-radio v-model="form.c4_3" label="0">否</el-radio>
					</el-form-item>

					<el-form-item>
						<el-button type="primary" @click="updateForm()">提交</el-button>
					</el-form-item>
				</el-form>
			</el-collapse-item>
		</el-collapse>

		<el-collapse v-model="activeNames">
			<el-collapse-item title="D 社交网络" name="4">
				<el-form
					style="width: 50%"
					:model="form"
					:rules="rules"
					ref="form"
					label-width="100px"
					class="demo-form"
				>
					<el-form-item label="D1 近一年来您和谁住在一起？" prop="d1">
						<el-radio v-model="form.d1" label="1">一个人住</el-radio>
						<el-radio v-model="form.d1" label="2">和家人一起住</el-radio>
						<el-radio v-model="form.d1" label="3">养老机构</el-radio>
					</el-form-item>
					<el-form-item label="D2 您有子女吗？" prop="d2">
						<el-radio v-model="form.d2" label="1">无</el-radio>
						<el-radio v-model="form.d2" label="2">1个</el-radio>
						<el-radio v-model="form.d2" label="3">2个</el-radio>
						<el-radio v-model="form.d2" label="4">3个以上</el-radio>
					</el-form-item>
					<el-form-item label="D3 您有健在的兄弟姐妹吗？" prop="d3">
						<el-radio v-model="form.d3" label="0">无</el-radio>
						<el-radio v-model="form.d3" label="1">有</el-radio>
					</el-form-item>
					<el-form-item
						label="D4 您有多少关系密切，可以得到支持和帮助的朋友？"
						prop="d4"
					>
						<el-radio v-model="form.d4" label="1">一个也没有</el-radio>
						<el-radio v-model="form.d4" label="2">1-2个</el-radio>
						<el-radio v-model="form.d4" label="3">3-5个</el-radio>
						<el-radio v-model="form.d4" label="4">6个及以上</el-radio>
					</el-form-item>
					<el-form-item label="D5 您与邻居的关系" prop="d5">
						<el-radio v-model="form.d5" label="1"
							>相互之间从不关心，只是点头之交</el-radio
						>
						<el-radio v-model="form.d5" label="2"
							>遇到困难可能稍微关心</el-radio
						>
						<el-radio v-model="form.d5" label="3">有些邻居很关心您</el-radio>
						<el-radio v-model="form.d5" label="4">大多数邻居都很关心</el-radio>
					</el-form-item>
					<el-form-item
						label="D6 您参加的社交活动（跳舞，打牌，唱歌，旅游，购物，打零工，看望亲友，外出吃饭等）"
						prop="d6"
					>
						<el-radio v-model="form.d6" label="1">一年一次或者更少</el-radio>
						<el-radio v-model="form.d6" label="2">一年几次</el-radio>
						<el-radio v-model="form.d6" label="3">一个月几次</el-radio>
						<el-radio v-model="form.d6" label="4">一周几次</el-radio>
						<el-radio v-model="form.d6" label="5"
							>每一天，或者几乎每一天</el-radio
						>
					</el-form-item>

					<el-form-item>
						<el-button type="primary" @click="updateForm()">提交</el-button>
					</el-form-item>
				</el-form>
			</el-collapse-item>
		</el-collapse>

		<el-collapse v-model="activeNames">
			<el-collapse-item title="E 利手习惯" name="5">
				<el-form
					style="width: 50%"
					:model="form"
					:rules="rules"
					ref="form"
					label-width="100px"
					class="demo-form"
				>
					<el-form-item label="E1 利手习惯" prop="e">
						<el-radio v-model="form.e" label="1">右利手</el-radio>
						<el-radio v-model="form.e" label="2">左利手</el-radio>
						<el-radio v-model="form.e" label="3">双利手</el-radio>
					</el-form-item>
					<el-form-item>
						<el-button type="primary" @click="updateForm()">提交</el-button>
					</el-form-item>
				</el-form>
			</el-collapse-item>
		</el-collapse>

		<el-collapse v-model="activeNames">
			<el-collapse-item title="F 性格" name="6">
				<el-form
					style="width: 50%"
					:model="form"
					:rules="rules"
					ref="form"
					label-width="100px"
					class="demo-form"
				>
					<el-form-item label="F1 您的性格是" prop="f">
						<el-radio v-model="form.f" label="1"
							>中性，情绪稳定、社会适应均衡</el-radio
						>
						<el-radio v-model="form.f" label="2">外向，社会适应好</el-radio>
						<el-radio v-model="form.f" label="3">外向，社会适应差</el-radio>
						<el-radio v-model="form.f" label="4">内向，社会适应好</el-radio>
						<el-radio v-model="form.f" label="5">内向，社会适应差</el-radio>
					</el-form-item>
					<el-form-item>
						<el-button type="primary" @click="updateForm()">提交</el-button>
					</el-form-item>
				</el-form>
			</el-collapse-item>
		</el-collapse>

		<el-collapse v-model="activeNames">
			<el-collapse-item title="G 既往史" name="7">
				<el-form
					style="width: 50%"
					:model="form"
					:rules="rules"
					ref="form"
					label-width="100px"
					class="demo-form"
				>
					<el-form-item
						label="G1 是否有高血压病史"
						prop="g1"
					>
						<el-radio v-model="form.g1" label="1">是</el-radio>
						<el-radio v-model="form.g1" label="0">否</el-radio>
					</el-form-item>
					<p>如果是：</p>
					<div>
						<el-form-item label="G1.1 患高血压多少年" prop="g1_1">
							<el-input v-model="form.g1_1"></el-input>
						</el-form-item>
						<el-form-item label="G1.2.1 最高血压（mmHg）（低压）" prop="g1_2_1">
							<el-input v-model="form.g1_2_1"></el-input>
						</el-form-item>
						<el-form-item label="G1.2.2 最高血压（mmHg）（高压）" prop="g1_2_2">
							<el-input v-model="form.g1_2_2"></el-input>
						</el-form-item>
						<el-form-item label="G1.3 高血压是否规律服药">
							<el-radio v-model="form.g1_3" label="1">是</el-radio>
							<el-radio v-model="form.g1_3" label="0">否</el-radio>
						</el-form-item>
						<el-form-item label="G1.4 血压是否稳定" prop="g1_4">
							<el-radio v-model="form.g1_4" label="1">是</el-radio>
							<el-radio v-model="form.g1_4" label="0">否</el-radio>
						</el-form-item>
					</div>
					<el-form-item label="G2 是否有糖尿病病史" prop="g2">
						<el-radio v-model="form.g2" label="1">是</el-radio>
						<el-radio v-model="form.g2" label="0">否</el-radio>
					</el-form-item>
					<p>如果是：</p>
					<el-form-item label="G2.1 患糖尿病多少年" prop="g2_1">
						<el-input v-model="form.g2_1"></el-input>
					</el-form-item>
					<el-form-item label="G2.2 是否规律服药" prop="g2_2">
						<el-radio v-model="form.g2_2" label="1">是</el-radio>
						<el-radio v-model="form.g2_2" label="0">否</el-radio>
					</el-form-item>
					<el-form-item label="G2.3 血糖是否稳定" prop="g2_3">
						<el-radio v-model="form.g2_3" label="1">是</el-radio>
						<el-radio v-model="form.g2_3" label="0">否</el-radio>
					</el-form-item>

					<el-form-item label="G3 是否有冠心病病史" prop="g3">
						<el-radio v-model="form.g3" label="1">是</el-radio>
						<el-radio v-model="form.g3" label="0">否</el-radio>
					</el-form-item>
					<p>如果是：</p>
					<el-form-item label="G3.1 患冠心病多少年" prop="g3_1">
						<el-input v-model="form.g3_1"></el-input>
					</el-form-item>
					<el-form-item label="G3.2 是否规律服药" prop="g3_2">
						<el-radio v-model="form.g3_2" label="1">是</el-radio>
						<el-radio v-model="form.g3_2" label="0">否</el-radio>
					</el-form-item>
					<el-form-item label="G3.3 冠心病病情是否稳定" prop="g3_3">
						<el-radio v-model="form.g3_3" label="1">是</el-radio>
						<el-radio v-model="form.g3_3" label="0">否</el-radio>
					</el-form-item>
					<el-form-item label="G3.4 是否有心功能不全" prop="g3_4">
						<el-radio v-model="form.g3_4" label="1">是</el-radio>
						<el-radio v-model="form.g3_4" label="0">否</el-radio>
					</el-form-item>

					<el-form-item label="G4 是否有高脂血症史" prop="g4">
						<el-radio v-model="form.g4" label="1">是</el-radio>
						<el-radio v-model="form.g4" label="0">否</el-radio>
					</el-form-item>
					<p>如果是：</p>
					<el-form-item label="G4.1 患高脂血症多少年" prop="g4_1">
						<el-input v-model="form.g4_1"></el-input>
					</el-form-item>
					<el-form-item label="G4.2 是否规律服药" prop="g4_2">
						<el-radio v-model="form.g4_2" label="1">是</el-radio>
						<el-radio v-model="form.g4_2" label="0">否</el-radio>
					</el-form-item>
					<el-form-item label="G4.3 高脂血症病情是否稳定" prop="g4_3">
						<el-radio v-model="form.g4_3" label="1">是</el-radio>
						<el-radio v-model="form.g4_3" label="0">否</el-radio>
					</el-form-item>

					<el-form-item label="G5 是否有贫血病史" prop="g5">
						<el-radio v-model="form.g5" label="1">是</el-radio>
						<el-radio v-model="form.g5" label="0">否</el-radio>
					</el-form-item>
					<p>如果是：</p>
					<el-form-item label="G5.1 患贫血多少年" prop="g5_1">
						<el-input v-model="form.g5_1"></el-input>
					</el-form-item>
					<el-form-item label="G5.2 是否规律服药" prop="g5_2">
						<el-radio v-model="form.g5_2" label="1">是</el-radio>
						<el-radio v-model="form.g5_2" label="0">否</el-radio>
					</el-form-item>
					<el-form-item label="G5.3 贫血病情是否稳定" prop="g5_3">
						<el-radio v-model="form.g5_3" label="1">是</el-radio>
						<el-radio v-model="form.g5_3" label="0">否</el-radio>
					</el-form-item>

					<el-form-item label="G6 是否有脑血管病史" prop="g6">
						<el-radio v-model="form.g6" label="1">是</el-radio>
						<el-radio v-model="form.g6" label="0">否</el-radio>
					</el-form-item>
					<p>如果是：</p>
					<el-form-item label="G6.1 患脑血管病多少年" prop="g6_1">
						<el-input v-model="form.g6_1"></el-input>
					</el-form-item>
					<el-form-item label="G6.2 该病是否规律服药" prop="g6_2">
						<el-radio v-model="form.g6_2" label="1">是</el-radio>
						<el-radio v-model="form.g6_2" label="0">否</el-radio>
					</el-form-item>
					<el-form-item label="G6.3 该病情是否稳定">
						<el-radio v-model="form.g6_3" label="1">是</el-radio>
						<el-radio v-model="form.g6_3" label="0">否</el-radio>
					</el-form-item>
					<el-form-item label="G6.4 该病是否导致急性认知功能障碍" prop="g6_4">
						<el-radio v-model="form.g6_4" label="1">是</el-radio>
						<el-radio v-model="form.g6_4" label="0">否</el-radio>
					</el-form-item>
					<el-form-item label="G6.5 该病是否导致原有认知功能障碍加重" prop="g6_5">
						<el-radio v-model="form.g6_5" label="1">是</el-radio>
						<el-radio v-model="form.g6_5" label="0">否</el-radio>
					</el-form-item>

					<el-form-item label="G7 是否有脑外伤史" prop="g7">
						<el-radio v-model="form.g7" label="1">是</el-radio>
						<el-radio v-model="form.g7" label="0">否</el-radio>
					</el-form-item>
					<p>如果是：</p>
					<el-form-item label="G7.1 患脑外伤多少年" prop="g7_1">
						<el-input v-model="form.g7_1"></el-input>
					</el-form-item>
					<el-form-item label="G7.2 脑外伤是否导致急性认知功能障碍" prop="g7_2">
						<el-radio v-model="form.g7_2" label="1">是</el-radio>
						<el-radio v-model="form.g7_2" label="0">否</el-radio>
					</el-form-item>
					<el-form-item label="G7.3 该病是否导致原有认知障碍加重" prop="g7_3">
						<el-radio v-model="form.g7_3" label="1">是</el-radio>
						<el-radio v-model="form.g7_3" label="0">否</el-radio>
					</el-form-item>
					<el-form-item label="G8 是否有颅内感染病史" prop="g8">
						<el-radio v-model="form.g8" label="1">是</el-radio>
						<el-radio v-model="form.g8" label="0">否</el-radio>
					</el-form-item>
					<p>如果是：</p>
					<el-form-item label="G8.1 感染是哪种类型" prop="g8_1">
						<el-checkbox-group v-model="form.g8_1">
							<el-checkbox label="1">脑炎</el-checkbox>
							<el-checkbox label="2">脑膜炎</el-checkbox>
							<el-checkbox label="3">其他</el-checkbox>
						</el-checkbox-group>
					</el-form-item>
					<el-form-item label="G8.2 该病是否导致急性认知障碍" prop="g8_2">
						<el-radio v-model="form.g8_2" label="1">是</el-radio>
						<el-radio v-model="form.g8_2" label="0">否</el-radio>
					</el-form-item>
					<el-form-item label="G8.3 该病是否导致原有认知障碍加重" prop="g8_3">
						<el-radio v-model="form.g8_3" label="1">是</el-radio>
						<el-radio v-model="form.g8_3" label="0">否</el-radio>
					</el-form-item>

					<el-form-item label="G9 是否有颜面部位感染病史" prop="g9">
						<el-radio v-model="form.g9" label="1">是</el-radio>
						<el-radio v-model="form.g9" label="0">否</el-radio>
					</el-form-item>
					<p>如果是：</p>
					<el-form-item label="G9.1 哪种类型" prop="g9_1">
						<el-checkbox-group v-model="form.g9_1">
							<el-checkbox label="1">中耳炎</el-checkbox>
							<el-checkbox label="2">鼻窦炎</el-checkbox>
							<el-checkbox label="3">牙周及口腔炎</el-checkbox>
							<el-checkbox label="4">其他</el-checkbox>
						</el-checkbox-group>
					</el-form-item>
					<el-form-item label="G9.2 该病是否导致急性认知障碍" prop="g9_2">
						<el-radio v-model="form.g9_2" label="1">是</el-radio>
						<el-radio v-model="form.g9_2" label="0">否</el-radio>
					</el-form-item>
					<el-form-item label="G9.3 该病是否导致原有认知障碍加重" prop="g9_3">
						<el-radio v-model="form.g9_3" label="1">是</el-radio>
						<el-radio v-model="form.g9_3" label="0">否</el-radio>
					</el-form-item>

					<el-form-item label="G10 是否有牙痛及拔牙史" prop="g10">
						<el-radio v-model="form.g10" label="1">是</el-radio>
						<el-radio v-model="form.g10" label="0">否</el-radio>
					</el-form-item>
					<p>如果是：</p>
					<el-form-item label="G10.1 一共拔牙几颗" prop="g10_1">
						<el-input v-model="form.g10_1"></el-input>
					</el-form-item>

					<el-form-item label="G11 是否有甲状腺功能异常史" prop="g11">
						<el-radio v-model="form.g11" label="1">是</el-radio>
						<el-radio v-model="form.g11" label="0">否</el-radio>
					</el-form-item>
					<p>如果是：</p>
					<el-form-item label="G11.1 诊断甲状腺功能异常多少年" prop="g11_1">
						<el-input v-model="form.g11_1"></el-input>
					</el-form-item>
					<el-form-item label="G11.2 是否规律服药" prop="g11_2">
						<el-radio v-model="form.g11_2" label="1">是</el-radio>
						<el-radio v-model="form.g11_2" label="0">否</el-radio>
					</el-form-item>
					<el-form-item label="G11.3 该病病情是否稳定" prop="g11_3">
						<el-radio v-model="form.g11_3" label="1">是</el-radio>
						<el-radio v-model="form.g11_3" label="0">否</el-radio>
					</el-form-item>

					<el-form-item label="G12 是否有颈椎病史" prop="g12">
						<el-radio v-model="form.g12" label="1">是</el-radio>
						<el-radio v-model="form.g12" label="0">否</el-radio>
					</el-form-item>
					<p>如果是：</p>
					<el-form-item label="G12.1 患颈椎病多少年" prop="g12_1">
						<el-input v-model="form.g12_1"></el-input>
					</el-form-item>
					<el-form-item label="G12.2 该病是否导致急性认知障碍" prop="g12_2">
						<el-radio v-model="form.g12_2" label="1">是</el-radio>
						<el-radio v-model="form.g12_2" label="0">否</el-radio>
					</el-form-item>
					<el-form-item label="G12.3 该病是否导致原有认知障碍加重" prop="g12_3">
						<el-radio v-model="form.g12_3" label="1">是</el-radio>
						<el-radio v-model="form.g12_3" label="0">否</el-radio>
					</el-form-item>

					<el-form-item label="G13 是否有手术全身麻醉史" prop="g13">
						<el-radio v-model="form.g13" label="1">是</el-radio>
						<el-radio v-model="form.g13" label="0">否</el-radio>
					</el-form-item>
					<p>如果是：</p>
					<el-form-item label="G13.1 有几次" prop="g13_1">
						<el-input v-model="form.g13_1"></el-input>
					</el-form-item>
					<el-form-item label="G13.2 首次手术全麻距今多少年" prop="g13_2">
						<el-input v-model="form.g13_2"></el-input>
					</el-form-item>
					<el-form-item label="G13.3 手术全身麻醉是否导致急性认知障碍" prop="g13_3">
						<el-radio v-model="form.g13_3" label="1">是</el-radio>
						<el-radio v-model="form.g13_3" label="0">否</el-radio>
					</el-form-item>
					<el-form-item label="G13.4 麻醉是否导致原有认知障碍加重" prop="g13_4">
						<el-radio v-model="form.g13_4" label="1">是</el-radio>
						<el-radio v-model="form.g13_4" label="0">否</el-radio>
					</el-form-item>

					<el-form-item label="G14 是否有CO中毒史" prop="g14">
						<el-radio v-model="form.g14" label="1">是</el-radio>
						<el-radio v-model="form.g14" label="0">否</el-radio>
					</el-form-item>
					<p>如果是：</p>
					<el-form-item label="G14.1 突发CO中毒距离现在多少年" prop="g14_1">
						<el-input v-model="form.g14_1"></el-input>
					</el-form-item>
					<el-form-item label="G14.2 CO中毒是否导致急性认知障碍" prop="g14_2">
						<el-radio v-model="form.g14_2" label="1">是</el-radio>
						<el-radio v-model="form.g14_2" label="0">否</el-radio>
					</el-form-item>
					<el-form-item label="G14.3 CO中毒是否导致原有认知障碍加重" prop="g14_3">
						<el-radio v-model="form.g14_3" label="1">是</el-radio>
						<el-radio v-model="form.g14_3" label="0">否</el-radio>
					</el-form-item>

					<el-form-item
						label="G15 您是否曾经有过一段时间（持续两周或以上）几乎每天的大部分时候都感觉到很沮丧或者忧郁"
						prop="g15"
					>
						<el-radio v-model="form.g15" label="1">是</el-radio>
						<el-radio v-model="form.g15" label="0">否</el-radio>
					</el-form-item>

					<el-form-item label="G15.1 您是否曾经被医生诊断患有忧郁症？" prop="g15_1">
						<el-radio v-model="form.g15_1" label="1">是</el-radio>
						<el-radio v-model="form.g15_1" label="0">否</el-radio>
					</el-form-item>
					<el-form-item label="G15.2 您是否曾经服用药物治疗忧郁症？" prop="g15_2">
						<el-radio v-model="form.g15_2" label="1">是</el-radio>
						<el-radio v-model="form.g15_2" label="0">否</el-radio>
					</el-form-item>

					<el-form-item label="G16 您是否被诊断为帕金森病" prop="g16">
						<el-radio v-model="form.g16" label="1">是</el-radio>
						<el-radio v-model="form.g16" label="0">否</el-radio>
					</el-form-item>
					<p>如果是：</p>
					<el-form-item label="G16.1 震颤多少年" prop="g16_1">
						<el-input v-model="form.g16_1"></el-input>
					</el-form-item>
					<el-form-item label="G16.2 肢体僵硬多少年" prop="g16_2">
						<el-input v-model="form.g16_2"></el-input>
					</el-form-item>
					<el-form-item label="G16.3 写字小多少年" prop="g16_3">
						<el-input v-model="form.g16_3"></el-input>
					</el-form-item>
					<el-form-item label="G16.4 动作变慢多少年" prop="g16_4">
						<el-input v-model="form.g16_4"></el-input>
					</el-form-item>

					<el-form-item>
						<el-button type="primary" @click="updateForm()">提交</el-button>
					</el-form-item>
				</el-form>
			</el-collapse-item>
		</el-collapse>

		<el-collapse v-model="activeNames">
			<el-collapse-item title="H 家族史" name="8">
				<el-form
					style="width: 50%"
					:model="form"
					:rules="rules"
					ref="form"
					label-width="100px"
					class="demo-form"
				>
				<p>您家人是否曾经患病</p>
					<el-form-item label="H1 父亲是否曾经患病" prop="h1">
						<el-radio v-model="form.h_1_1" label="1">是</el-radio>
						<el-radio v-model="form.h_1_1" label="2">否</el-radio>
						<el-radio v-model="form.h_1_1" label="3">不明</el-radio>
					</el-form-item>
					<el-form-item v-if="form.h_1_1=='1'" label="H1.1 有下列哪些疾病">
						<el-checkbox-group v-model="form.h_1_2">
							<el-checkbox label="1">老年痴呆</el-checkbox>
							<el-checkbox label="2">脑血管病</el-checkbox>
							<el-checkbox label="3">高血压病</el-checkbox>
							<el-checkbox label="4">糖尿病</el-checkbox>
							<el-checkbox label="5">冠心病</el-checkbox>
							<el-checkbox label="6">高血脂症</el-checkbox>
							<el-checkbox label="7">贫血</el-checkbox>
							<el-checkbox label="8">其他</el-checkbox>
						</el-checkbox-group>
					</el-form-item>
					<el-form-item label="H2 母亲是否曾经患病" prop="h1">
						<el-radio v-model="form.h_2_1" label="1">是</el-radio>
						<el-radio v-model="form.h_2_1" label="2">否</el-radio>
						<el-radio v-model="form.h_2_1" label="3">不明</el-radio>
					</el-form-item>
					<el-form-item v-if="form.h_2_1=='1'" label="H2.2 有下列哪些疾病">
						<el-checkbox-group v-model="form.h_2_2">
							<el-checkbox label="1">老年痴呆</el-checkbox>
							<el-checkbox label="2">脑血管病</el-checkbox>
							<el-checkbox label="3">高血压病</el-checkbox>
							<el-checkbox label="4">糖尿病</el-checkbox>
							<el-checkbox label="5">冠心病</el-checkbox>
							<el-checkbox label="6">高血脂症</el-checkbox>
							<el-checkbox label="7">贫血</el-checkbox>
							<el-checkbox label="8">其他</el-checkbox>
						</el-checkbox-group>
					</el-form-item>
					<el-form-item label="H3 兄弟姐妹是否曾经患病" prop="h1">
						<el-radio v-model="form.h_3_1" label="1">是</el-radio>
						<el-radio v-model="form.h_3_1" label="2">否</el-radio>
						<el-radio v-model="form.h_3_1" label="3">不明</el-radio>
					</el-form-item>
					<el-form-item v-if="form.h_3_1=='1'" label="H3.3 有下列哪些疾病">
						<el-checkbox-group v-model="form.h_3_2">
							<el-checkbox label="1">老年痴呆</el-checkbox>
							<el-checkbox label="2">脑血管病</el-checkbox>
							<el-checkbox label="3">高血压病</el-checkbox>
							<el-checkbox label="4">糖尿病</el-checkbox>
							<el-checkbox label="5">冠心病</el-checkbox>
							<el-checkbox label="6">高血脂症</el-checkbox>
							<el-checkbox label="7">贫血</el-checkbox>
							<el-checkbox label="8">其他</el-checkbox>
						</el-checkbox-group>
					</el-form-item>
					<el-form-item>
						<el-button type="primary" @click="updateForm()">提交</el-button>
					</el-form-item>
				</el-form>
			</el-collapse-item>
		</el-collapse>

		<el-collapse v-model="activeNames">
			<el-collapse-item title="I 个人生活与行为史" name="9">
				<el-form
					style="width: 50%"
					:model="form"
					:rules="rules"
					ref="form"
					label-width="100px"
					class="demo-form"
				>
					<el-form-item label="I1 您是否有吸烟史" prop="i1">
						<el-radio v-model="form.i1" label="1">是</el-radio>
						<el-radio v-model="form.i1" label="0">否</el-radio>
					</el-form-item>
					<p>如果是：</p>
					<el-form-item label="I1.1 吸烟多少年" prop="i1_1">
						<el-input v-model="form.i1_1"></el-input>
					</el-form-item>
					<el-form-item label="I1.2 吸烟量多少支/日" prop="i1_2">
						<el-input v-model="form.i1_2"></el-input>
					</el-form-item>
					<el-form-item label="I1.3 是否已经戒烟" prop="i1_3">
						<el-radio v-model="form.i1_3" label="1">是</el-radio>
						<el-radio v-model="form.i1_3" label="0">否</el-radio>
					</el-form-item>
					<el-form-item label="I1.4 戒烟多少年了">
						<el-input v-model="form.i1_4"></el-input>
					</el-form-item>
					<el-form-item
						label="I1.5 您戒烟的原因是（尽量单选，重要性相当时可多选）"
						prop="i1_5"
					>
						<el-checkbox-group v-model="form.i1_5">
							<el-checkbox label="1">身体疾病原因/医生建议</el-checkbox>
							<el-checkbox label="2">家人身体疾病原因</el-checkbox>
							<el-checkbox label="3">家人朋友反对</el-checkbox>
							<el-checkbox label="4">经济原因</el-checkbox>
							<el-checkbox label="5"
								>电视、报纸、包装等的健康提示语</el-checkbox
							>
							<el-checkbox label="6">其他</el-checkbox>
						</el-checkbox-group>
					</el-form-item>
					<el-form-item
						label="I1.6 您每周在家里、工作的地方及室内公共场所接触二手烟（至少15分钟）的天数是"
						prop="i1_6"
					>
						<el-radio v-model="form.i1_6" label="1">每天</el-radio>
						<el-radio v-model="form.i1_6" label="2">4-6天/周</el-radio>
						<el-radio v-model="form.i1_6" label="3">1-3天/周</el-radio>
						<el-radio v-model="form.i1_6" label="4">小于1天/周</el-radio>
						<el-radio v-model="form.i1_6" label="5">没有</el-radio>
						<el-radio v-model="form.i1_6" label="6">不知道/不清楚</el-radio>
					</el-form-item>
					<el-form-item
						label="I2 近一年，您经常饮酒吗（每周至少一次，并且持续超过6个月）"
						prop="i2"
					>
						<el-radio v-model="form.i2" label="1">是的，经常喝</el-radio>
						<el-radio v-model="form.i2" label="2"
							>以前经常喝，现在偶尔喝</el-radio
						>
						<el-radio v-model="form.i2" label="3"
							>以前经常喝，现在不喝</el-radio
						>
						<el-radio v-model="form.i2" label="4">偶尔喝</el-radio>
						<el-radio v-model="form.i2" label="5">从不喝</el-radio>
					</el-form-item>
					<el-form-item label="I2.1 您是从几岁开始喝酒的" prop="i2_1">
						<el-input v-model="form.i2_1"></el-input>
					</el-form-item>
					<el-form-item label="I2.2 通常一天喝多少？" prop="i2_2">
						<el-input v-model="form.i2_2"></el-input>
					</el-form-item>
					<el-form-item
						label="I2.3 您戒酒的原因是（尽量单选，重要性相当时可多选）"
						prop="i2_3"
					>
						<el-checkbox-group v-model="form.i2_3">
							<el-checkbox label="1">身体疾病原因/医生建议</el-checkbox>
							<el-checkbox label="2">家人朋友反对</el-checkbox>
							<el-checkbox label="3">经济原因</el-checkbox>
							<el-checkbox label="4"
								>电视、报纸、包装等的健康提示语</el-checkbox
							>
							<el-checkbox label="5">其他</el-checkbox>
						</el-checkbox-group>
					</el-form-item>
					<el-form-item label="I2.4 最近一次戒酒是几岁" prop="i2_4">
						<el-input v-model="form.i2_4"></el-input>
					</el-form-item>
					<el-form-item
						label="I3 近一年，您经常喝茶吗（每周至少一次，并且持续超过6个月）"
						prop="i3"
					>
						<el-radio v-model="form.i3" label="1">是的，经常喝</el-radio>
						<el-radio v-model="form.i3" label="2"
							>以前经常喝，现在偶尔喝</el-radio
						>
						<el-radio v-model="form.i3" label="3"
							>以前经常喝，现在不喝</el-radio
						>
						<el-radio v-model="form.i3" label="4">偶尔喝</el-radio>
						<el-radio v-model="form.i3" label="5">从不喝</el-radio>
					</el-form-item>
					<el-form-item label="I3.1 您是从几岁开始经常喝茶的" prop="i3_1">
						<el-input v-model="form.i3_1"></el-input>
					</el-form-item>
					<el-form-item label="I3.2 过去12个月里，您喝茶频率" prop="i3_2">
						<el-radio v-model="form.i3_2" label="1">每天</el-radio>
						<el-radio v-model="form.i3_2" label="2">5-6天/周</el-radio>
						<el-radio v-model="form.i3_2" label="3">3-4天/周</el-radio>
						<el-radio v-model="form.i3_2" label="4">1-2天/周</el-radio>
					</el-form-item>
					<el-form-item label="I4 有没有不吃早餐的习惯/情况" prop="i4">
						<el-radio v-model="form.i4" label="1">每顿都吃早餐</el-radio>
						<el-radio v-model="form.i4" label="2">≤1次/周</el-radio>
						<el-radio v-model="form.i4" label="3">2-5次/周</el-radio>
						<el-radio v-model="form.i4" label="4">≥6次/周</el-radio>
					</el-form-item>
					<el-form-item
						label="I5 除了早中晚餐，有没有其他规律的进餐习惯（可多选）"
						prop="i5"
					>
						<el-checkbox-group v-model="form.i5">
							<el-checkbox label="1">早午餐</el-checkbox>
							<el-checkbox label="2">下午茶</el-checkbox>
							<el-checkbox label="3">夜宵</el-checkbox>
							<el-checkbox label="4">半夜醒来进食</el-checkbox>
							<el-checkbox label="5">不吃午饭</el-checkbox>
							<el-checkbox label="6">不吃晚饭</el-checkbox>
							<el-checkbox label="7">无</el-checkbox>
						</el-checkbox-group>
					</el-form-item>
					<el-form-item
						label="I6 过去一个月，有没有暴饮暴食的情况（无法控制摄入量，吃到吃不下为止）"
						prop="i6"
					>
						<el-radio v-model="form.i6" label="1">0次</el-radio>
						<el-radio v-model="form.i6" label="2">1-2次</el-radio>
						<el-radio v-model="form.i6" label="3">3-4次</el-radio>
						<el-radio v-model="form.i6" label="4">5-6次</el-radio>
						<el-radio v-model="form.i6" label="5">≥7次</el-radio>
					</el-form-item>
          <p>您自我感觉平时饮食口味是？（单选）</p>
					<el-form-item label="I7.1 是否偏辣？" prop="i7_1">
						<el-radio v-model="form.i7_1" label="1">不辣</el-radio>
						<el-radio v-model="form.i7_1" label="2">微辣</el-radio>
						<el-radio v-model="form.i7_1" label="3">中度辣</el-radio>
						<el-radio v-model="form.i7_1" label="4">很辣</el-radio>
						<el-radio v-model="form.i7_1" label="5">不确定</el-radio>
					</el-form-item>
					<el-form-item label="I7.2 多久吃一次辣食？" prop="i7_2">
						<el-radio v-model="form.i7_2" label="1">不吃/极少</el-radio>
						<el-radio v-model="form.i7_2" label="2">1-3次/月</el-radio>
						<el-radio v-model="form.i7_2" label="3">1-2次/周</el-radio>
						<el-radio v-model="form.i7_2" label="4">3-5次/周</el-radio>
						<el-radio v-model="form.i7_2" label="5">每天</el-radio>
					</el-form-item>
					<el-form-item label="I7.3 是否偏甜？" prop="i7_3">
						<el-radio v-model="form.i7_3" label="1">不甜</el-radio>
						<el-radio v-model="form.i7_3" label="2">微甜</el-radio>
						<el-radio v-model="form.i7_3" label="3">中度甜</el-radio>
						<el-radio v-model="form.i7_3" label="4">很甜</el-radio>
						<el-radio v-model="form.i7_3" label="5">不确定</el-radio>
					</el-form-item>
					<el-form-item label="I7.4 多久吃一次甜食？" prop="i7_4">
						<el-radio v-model="form.i7_4" label="1">不吃/极少</el-radio>
						<el-radio v-model="form.i7_4" label="2">1-3次/月</el-radio>
						<el-radio v-model="form.i7_4" label="3">1-2次/周</el-radio>
						<el-radio v-model="form.i7_4" label="4">3-5次/周</el-radio>
						<el-radio v-model="form.i7_4" label="5">每天</el-radio>
					</el-form-item>
					<el-form-item label="I7.5 是否偏咸？" prop="i7_5">
						<el-radio v-model="form.i7_5" label="1">不咸，比较清淡</el-radio>
						<el-radio v-model="form.i7_5" label="2">一般</el-radio>
						<el-radio v-model="form.i7_5" label="3">比较咸</el-radio>
						<el-radio v-model="form.i7_5" label="4">很咸</el-radio>
						<el-radio v-model="form.i7_5" label="5">不确定</el-radio>
					</el-form-item>
					<el-form-item label="I7.6 多久吃一次腌菜？" prop="i7_6">
						<el-radio v-model="form.i7_6" label="1">不吃/极少</el-radio>
						<el-radio v-model="form.i7_6" label="2">1-3次/月</el-radio>
						<el-radio v-model="form.i7_6" label="3">1-2次/周</el-radio>
						<el-radio v-model="form.i7_6" label="4">3-5次/周</el-radio>
						<el-radio v-model="form.i7_6" label="5">每天</el-radio>
					</el-form-item>
					<el-form-item label="I7.7 是否偏油腻？" prop="i7_7">
						<el-radio v-model="form.i7_7" label="1">不油腻，比较清淡</el-radio>
						<el-radio v-model="form.i7_7" label="2">一般</el-radio>
						<el-radio v-model="form.i7_7" label="3">比较油腻</el-radio>
						<el-radio v-model="form.i7_7" label="4">很油腻</el-radio>
						<el-radio v-model="form.i7_7" label="5">不确定</el-radio>
					</el-form-item>
					<el-form-item label="I7.8 多久吃一次油炸食品？" prop="i7_8">
						<el-radio v-model="form.i7_8" label="1">不吃/极少</el-radio>
						<el-radio v-model="form.i7_8" label="2">1-3次/月</el-radio>
						<el-radio v-model="form.i7_8" label="3">1-2次/周</el-radio>
						<el-radio v-model="form.i7_8" label="4">3-5次/周</el-radio>
						<el-radio v-model="form.i7_8" label="5">每天</el-radio>
					</el-form-item>
					<el-form-item label="I7.9 平常的饮食偏向下列哪一种" prop="i7_9">
						<el-radio v-model="form.i7_9" label="1">素食</el-radio>
						<el-radio v-model="form.i7_9" label="2">肉食</el-radio>
						<el-radio v-model="form.i7_9" label="3">普通饮食</el-radio>
					</el-form-item>
					<el-form-item label="I7.10 平时是否吃鱼" prop="i7_10">
						<el-radio v-model="form.i7_10" label="1">是</el-radio>
						<el-radio v-model="form.i7_10" label="0">否</el-radio>
					</el-form-item>
					<p>如果是：</p>
					<el-form-item label="I7.10.1 频率为" prop="i7_10_1">
						<el-radio v-model="form.i7_10_1" label="1">每天</el-radio>
						<el-radio v-model="form.i7_10_1" label="2">多次/周</el-radio>
						<el-radio v-model="form.i7_10_1" label="3">1次/周</el-radio>
						<el-radio v-model="form.i7_10_1" label="4">很少</el-radio>
						<el-radio v-model="form.i7_10_1" label="5">从不</el-radio>
					</el-form-item>
					<el-form-item label="I7.11 平时是否吃动物油脂" prop="i7_11">
						<el-radio v-model="form.i7_11" label="1">是</el-radio>
						<el-radio v-model="form.i7_11" label="0">否</el-radio>
					</el-form-item>
					<p>如果是：</p>
					<el-form-item label="I7.11.1 频率为" prop="i7_11_1">
						<el-radio v-model="form.i7_11_1" label="1">每天</el-radio>
						<el-radio v-model="form.i7_11_1" label="2">多次/周</el-radio>
						<el-radio v-model="form.i7_11_1" label="3">1次/周</el-radio>
						<el-radio v-model="form.i7_11_1" label="4">很少</el-radio>
						<el-radio v-model="form.i7_11_1" label="5">从不</el-radio>
					</el-form-item>
					<el-form-item label="I7.12 平时是否吃蔬菜" prop="i7_12">
						<el-radio v-model="form.i7_12" label="1">是</el-radio>
						<el-radio v-model="form.i7_12" label="0">否</el-radio>
					</el-form-item>
					<p>如果是：</p>
					<el-form-item label="I7.12.1 频率为" prop="i7_12_1">
						<el-radio v-model="form.i7_12_1" label="1">每天</el-radio>
						<el-radio v-model="form.i7_12_1" label="2">多次/周</el-radio>
						<el-radio v-model="form.i7_12_1" label="3">1次/周</el-radio>
						<el-radio v-model="form.i7_12_1" label="4">很少</el-radio>
						<el-radio v-model="form.i7_12_1" label="5">从不</el-radio>
					</el-form-item>
					<el-form-item label="I7.13 平时是否吃水果" prop="i7_13">
						<el-radio v-model="form.i7_13" label="1">是</el-radio>
						<el-radio v-model="form.i7_13" label="0">否</el-radio>
					</el-form-item>
					<p>如果是：</p>
					<el-form-item label="I7.13.1 频率为" prop="i7_13_1">
						<el-radio v-model="form.i7_13_1" label="1">每天</el-radio>
						<el-radio v-model="form.i7_13_1" label="2">多次/周</el-radio>
						<el-radio v-model="form.i7_13_1" label="3">1次/周</el-radio>
						<el-radio v-model="form.i7_13_1" label="4">很少</el-radio>
						<el-radio v-model="form.i7_13_1" label="5">从不</el-radio>
					</el-form-item>
					<el-form-item label="I8 您排便的频率是？" prop="i8">
						<el-radio v-model="form.i8" label="1">一天3次及以上</el-radio>
						<el-radio v-model="form.i8" label="2">一天1-2次</el-radio>
						<el-radio v-model="form.i8" label="3">两天一次</el-radio>
						<el-radio v-model="form.i8" label="4">三天1次或更少</el-radio>
						<el-radio v-model="form.i8" label="5">说不清</el-radio>
					</el-form-item>
					<el-form-item label="I8.1 近三个月，您是否发生过排便困难？" prop="i8_1">
						<el-radio v-model="form.i8_1" label="1">总是（>75%）</el-radio>
						<el-radio v-model="form.i8_1" label="2">经常（>50%）</el-radio>
						<el-radio v-model="form.i8_1" label="3">有时（>25%）</el-radio>
						<el-radio v-model="form.i8_1" label="4">很少或基本没有</el-radio>
						<el-radio v-model="form.i8_1" label="5">记不清</el-radio>
					</el-form-item>
					<el-form-item label="I9 是否有体育锻炼习惯" prop="i9">
						<el-radio v-model="form.i9" label="1">是</el-radio>
						<el-radio v-model="form.i9" label="0">否</el-radio>
					</el-form-item>
					<p>如果是：</p>
					<el-form-item label="I9.1 频率为" prop="i9_1">
						<el-radio v-model="form.i9_1" label="1">每天</el-radio>
						<el-radio v-model="form.i9_1" label="2">多次/周</el-radio>
						<el-radio v-model="form.i9_1" label="3">1次/周</el-radio>
						<el-radio v-model="form.i9_1" label="4">很少</el-radio>
						<el-radio v-model="form.i9_1" label="5">从不</el-radio>
					</el-form-item>
					<el-form-item label="I9.2 锻炼方式" prop="i9_2">
						<el-checkbox-group v-model="form.i9_2">
							<el-checkbox label="1">散步</el-checkbox>
							<el-checkbox label="2">舞蹈</el-checkbox>
							<el-checkbox label="3">太极拳</el-checkbox>
							<el-checkbox label="4">球类</el-checkbox>
							<el-checkbox label="5">其他</el-checkbox>
						</el-checkbox-group>
					</el-form-item>
					<el-form-item label="I9.3 锻炼时间" prop="i9_3">
						<el-radio v-model="form.i9_3" label="1">半小时/天</el-radio>
						<el-radio v-model="form.i9_3" label="2">1小时/天</el-radio>
						<el-radio v-model="form.i9_3" label="3">2小时/天</el-radio>
					</el-form-item>
					<el-form-item label="I9.4 锻炼年限为多少年" prop="i9_4">
						<el-input v-model="form.i9_4"></el-input>
					</el-form-item>
					<el-form-item label="I10 是否有智力活动习惯" prop="i10">
						<el-radio v-model="form.i10" label="1">是</el-radio>
						<el-radio v-model="form.i10" label="0">否</el-radio>
					</el-form-item>
					<p>如果是：</p>
					<el-form-item label="I10.1 频率为" prop="i10_1">
						<el-radio v-model="form.i10_1" label="1">每天</el-radio>
						<el-radio v-model="form.i10_1" label="2">多次/周</el-radio>
						<el-radio v-model="form.i10_1" label="3">1次/周</el-radio>
						<el-radio v-model="form.i10_1" label="4">很少</el-radio>
						<el-radio v-model="form.i10_1" label="5">从不</el-radio>
					</el-form-item>
					<el-form-item label="I10.2 方式为" prop="i10_2">
						<el-checkbox-group v-model="form.i10_2">
							<el-checkbox label="1">读书</el-checkbox>
							<el-checkbox label="2">看报</el-checkbox>
							<el-checkbox label="3">棋牌</el-checkbox>
							<el-checkbox label="4">游戏</el-checkbox>
							<el-checkbox label="5">书法</el-checkbox>
							<el-checkbox label="6">绘画</el-checkbox>
							<el-checkbox label="7">其他</el-checkbox>
						</el-checkbox-group>
					</el-form-item>
					<el-form-item label="I11 平时有无失眠" prop="i11">
						<el-radio v-model="form.i11" label="1">是</el-radio>
						<el-radio v-model="form.i11" label="0">否</el-radio>
					</el-form-item>
					<el-form-item label="I11.1 入睡时间（关灯后到睡着的时间）" prop="i11_1">
						<el-radio v-model="form.i11_1" label="1">没问题</el-radio>
						<el-radio v-model="form.i11_1" label="2">轻微延迟</el-radio>
						<el-radio v-model="form.i11_1" label="3">显著延迟</el-radio>
						<el-radio v-model="form.i11_1" label="4"
							>延迟严重或没有睡觉</el-radio
						>
					</el-form-item>
					<el-form-item label="I11.2 夜间苏醒" prop="i11_2">
						<el-radio v-model="form.i11_2" label="1">没问题</el-radio>
						<el-radio v-model="form.i11_2" label="2">轻微影响</el-radio>
						<el-radio v-model="form.i11_2" label="3">显著影响</el-radio>
						<el-radio v-model="form.i11_2" label="4"
							>严重影响或没有睡觉</el-radio
						>
					</el-form-item>
					<el-form-item label="I11.3 比期望的时间早醒" prop="i11_3">
						<el-radio v-model="form.i11_3" label="1">没问题</el-radio>
						<el-radio v-model="form.i11_3" label="2">轻微提早</el-radio>
						<el-radio v-model="form.i11_3" label="3">显著提早</el-radio>
						<el-radio v-model="form.i11_3" label="4"
							>严重提早或没有睡觉</el-radio
						>
					</el-form-item>
					<el-form-item label="I11.4 总睡眠时间" prop="i11_4">
						<el-radio v-model="form.i11_4" label="1">足够</el-radio>
						<el-radio v-model="form.i11_4" label="2">轻微不足</el-radio>
						<el-radio v-model="form.i11_4" label="3">显著不足</el-radio>
						<el-radio v-model="form.i11_4" label="4"
							>严重不足或没有睡觉</el-radio
						>
					</el-form-item>
					<el-form-item label="I11.5 总睡眠质量（无论睡多长）" prop="i11_5">
						<el-radio v-model="form.i11_5" label="1">满意</el-radio>
						<el-radio v-model="form.i11_5" label="2">轻微不满</el-radio>
						<el-radio v-model="form.i11_5" label="3">显著不满</el-radio>
						<el-radio v-model="form.i11_5" label="4"
							>严重不满或没有睡觉</el-radio
						>
					</el-form-item>
					<el-form-item label="I11.6 白天情绪" prop="i11_6">
						<el-radio v-model="form.i11_6" label="1">正常</el-radio>
						<el-radio v-model="form.i11_6" label="2">轻微低落</el-radio>
						<el-radio v-model="form.i11_6" label="3">显著低落</el-radio>
						<el-radio v-model="form.i11_6" label="4">严重低落</el-radio>
					</el-form-item>
					<el-form-item
						label="I11.7 白天身体功能（体力或精神：如记忆力、认知力和注意力等）"
						prop="i11_7"
					>
						<el-radio v-model="form.i11_7" label="1">足够</el-radio>
						<el-radio v-model="form.i11_7" label="2">轻微影响</el-radio>
						<el-radio v-model="form.i11_7" label="3">显著影响</el-radio>
						<el-radio v-model="form.i11_7" label="4">严重影响</el-radio>
					</el-form-item>
					<el-form-item label="I11.8 白天思睡" prop="i11_8">
						<el-radio v-model="form.i11_8" label="1">无思睡</el-radio>
						<el-radio v-model="form.i11_8" label="2">轻微思睡</el-radio>
						<el-radio v-model="form.i11_8" label="3">显著思睡</el-radio>
						<el-radio v-model="form.i11_8" label="4">严重思睡</el-radio>
					</el-form-item>
					<el-form-item>
						<el-button type="primary" @click="updateForm()">提交</el-button>
					</el-form-item>
				</el-form>
			</el-collapse-item>
		</el-collapse>

		<el-collapse v-model="activeNames">
			<el-collapse-item title="J 主观认知下降调查问卷" name="10">
				<el-form
					style="width: 50%"
					:model="form"
					:rules="rules"
					ref="form"
					label-width="100px"
					class="demo-form"
				>
					<el-form-item label="J1 您觉得以下方面哪方面有问题？" prop="j1">
						<el-checkbox-group v-model="form.j1">
							<el-checkbox label="1">记忆力</el-checkbox>
							<el-checkbox label="2">语言/找词困难</el-checkbox>
							<el-checkbox label="3">组织能力/计划能力</el-checkbox>
							<el-checkbox label="4">注意力/专心</el-checkbox>
							<el-checkbox label="5">其他认知功能方面</el-checkbox>
						</el-checkbox-group>
					</el-form-item>
					<el-form-item label="J2.1 你是否觉得你的记性变差了？" prop="j2_1">
						<el-radio v-model="form.j2_1" label="1">是</el-radio>
						<el-radio v-model="form.j2_1" label="0">否</el-radio>
					</el-form-item>
					<el-form-item label="J2.1.1 你是否会担心" prop="j2_1_1">
						<el-radio v-model="form.j2_1_1" label="1">是</el-radio>
						<el-radio v-model="form.j2_1_1" label="0">否</el-radio>
					</el-form-item>
					<el-form-item
						label="J2.1.2 你是否觉得你这方面表现的较同龄人差？"
						prop="j2_1_2"
					>
						<el-radio v-model="form.j2_1_2" label="1">是</el-radio>
						<el-radio v-model="form.j2_1_2" label="0">否</el-radio>
					</el-form-item>
					<el-form-item label="J2.1.3 你觉得什么时候情况变差的？" prop="j2_1_3">
						<el-radio v-model="form.j2_1_3" label="1">近6个月内</el-radio>
						<el-radio v-model="form.j2_1_3" label="2">近6个月-2年</el-radio>
						<el-radio v-model="form.j2_1_3" label="3">2-5年</el-radio>
						<el-radio v-model="form.j2_1_3" label="4">超过5年</el-radio>
						<el-radio v-model="form.j2_1_3" label="5">不清楚</el-radio>
					</el-form-item>
					<el-form-item label="J2.1.4 你是否去看过医生？" prop="j2_1_4">
						<el-radio v-model="form.j2_1_4" label="1">是</el-radio>
						<el-radio v-model="form.j2_1_4" label="0">否</el-radio>
					</el-form-item>
					<el-form-item
						label="J2.1.5 你第一次跟你的医生谈这些问题是什么时候？"
						prop="j2_1_5"
					>
						<el-input v-model="form.j2_1_5"></el-input>
					</el-form-item>
					<el-form-item label="J2.2 你是否比以前更频繁得寻找适合的词？" prop="j2_2">
						<el-radio v-model="form.j2_2" label="1">是</el-radio>
						<el-radio v-model="form.j2_2" label="0">否</el-radio>
					</el-form-item>
					<el-form-item label="J2.2.1 你是否会担心" prop="j2_2_1">
						<el-radio v-model="form.j2_2_1" label="1">是</el-radio>
						<el-radio v-model="form.j2_2_1" label="0">否</el-radio>
					</el-form-item>
					<el-form-item
						label="J2.2.2 你是否觉得你这方面表现的较同龄人差？"
						prop="j2_2_2"
					>
						<el-radio v-model="form.j2_2_2" label="1">是</el-radio>
						<el-radio v-model="form.j2_2_2" label="0">否</el-radio>
					</el-form-item>
					<el-form-item label="J2.2.3 你觉得什么时候情况变差的？" prop="j2_2_3">
						<el-radio v-model="form.j2_2_3" label="1">近6个月内</el-radio>
						<el-radio v-model="form.j2_2_3" label="2">近6个月-2年</el-radio>
						<el-radio v-model="form.j2_2_3" label="3">2-5年</el-radio>
						<el-radio v-model="form.j2_2_3" label="4">超过5年</el-radio>
						<el-radio v-model="form.j2_2_3" label="5">不清楚</el-radio>
					</el-form-item>
					<el-form-item label="J2.2.4 你是否去看过医生？" prop="j2_2_4">
						<el-radio v-model="form.j2_2_4" label="1">是</el-radio>
						<el-radio v-model="form.j2_2_4" label="0">否</el-radio>
					</el-form-item>
					<el-form-item
						label="J2.2.5 你第一次跟你的医生谈这些问题是什么时候？"
						prop="j2_2_5"
					>
						<el-input v-model="form.j2_2_5"></el-input>
					</el-form-item>
					<el-form-item
						label="J2.3 你是否感觉自己在做计划或有序安排事情时越来越困难？"
						prop="j2_3"
					>
						<el-radio v-model="form.j2_3" label="1">是</el-radio>
						<el-radio v-model="form.j2_3" label="0">否</el-radio>
					</el-form-item>
					<el-form-item label="J2.3.1 你是否会担心" prop="j2_3_1">
						<el-radio v-model="form.j2_3_1" label="1">是</el-radio>
						<el-radio v-model="form.j2_3_1" label="0">否</el-radio>
					</el-form-item>
					<el-form-item
						label="J2.3.2 你是否觉得你这方面表现的较同龄人差？"
						prop="j2_3_2"
					>
						<el-radio v-model="form.j2_3_2" label="1">是</el-radio>
						<el-radio v-model="form.j2_3_2" label="0">否</el-radio>
					</el-form-item>
					<el-form-item label="J2.3.3 你觉得什么时候情况变差的？" prop="j2_3_3">
						<el-radio v-model="form.j2_3_3" label="1">近6个月内</el-radio>
						<el-radio v-model="form.j2_3_3" label="2">近6个月-2年</el-radio>
						<el-radio v-model="form.j2_3_3" label="3">2-5年</el-radio>
						<el-radio v-model="form.j2_3_3" label="4">超过5年</el-radio>
						<el-radio v-model="form.j2_3_3" label="5">不清楚</el-radio>
					</el-form-item>
					<el-form-item label="J2.3.4 你是否去看过医生？" prop="j2_3_4">
						<el-radio v-model="form.j2_3_4" label="1">是</el-radio>
						<el-radio v-model="form.j2_3_4" label="0">否</el-radio>
					</el-form-item>
					<el-form-item
						label="J2.3.5 你第一次跟你的医生谈这些问题是什么时候？"
						prop="j2_3_5"
					>
						<el-input v-model="form.j2_3_5"></el-input>
					</el-form-item>
					<el-form-item
						label="J2.4 如果你不专心做一件事时，是否比以前更容易犯错？"
						prop="j2_4"
					>
						<el-radio v-model="form.j2_4" label="1">是</el-radio>
						<el-radio v-model="form.j2_4" label="0">否</el-radio>
					</el-form-item>
					<el-form-item label="J2.4.1 你是否会担心" prop="j2_4_1">
						<el-radio v-model="form.j2_4_1" label="1">是</el-radio>
						<el-radio v-model="form.j2_4_1" label="0">否</el-radio>
					</el-form-item>
					<el-form-item
						label="J2.4.2 你是否觉得你这方面表现的较同龄人差？"
						prop="j2_4_2"
					>
						<el-radio v-model="form.j2_4_2" label="1">是</el-radio>
						<el-radio v-model="form.j2_4_2" label="0">否</el-radio>
					</el-form-item>
					<el-form-item label="J2.4.3 你觉得什么时候情况变差的？" prop="j2_4_3">
						<el-radio v-model="form.j2_4_3" label="1">近6个月内</el-radio>
						<el-radio v-model="form.j2_4_3" label="2">近6个月-2年</el-radio>
						<el-radio v-model="form.j2_4_3" label="3">2-5年</el-radio>
						<el-radio v-model="form.j2_4_3" label="4">超过5年</el-radio>
						<el-radio v-model="form.j2_4_3" label="5">不清楚</el-radio>
					</el-form-item>
					<el-form-item label="J2.4.4 你是否去看过医生？" prop="j2_4_4">
						<el-radio v-model="form.j2_4_4" label="1">是</el-radio>
						<el-radio v-model="form.j2_4_4" label="0">否</el-radio>
					</el-form-item>
					<el-form-item
						label="J2.4.5 你第一次跟你的医生谈这些问题是什么时候？"
						prop="j2_4_5"
					>
						<el-input v-model="form.j2_4_5"></el-input>
					</el-form-item>
					<el-form-item label="J2.5 你是否意识到其他认知方面的问题" prop="j2_5">
						<el-radio v-model="form.j2_5" label="1">是</el-radio>
						<el-radio v-model="form.j2_5" label="0">否</el-radio>
					</el-form-item>
					<el-form-item label="J2.5.a 它们是什么" prop="j2_5_a">
						<el-input v-model="form.j2_5_a"></el-input>
					</el-form-item>
					<el-form-item label="J2.5.1 你是否会担心" prop="j2_5_1">
						<el-radio v-model="form.j2_5_1" label="1">是</el-radio>
						<el-radio v-model="form.j2_5_1" label="0">否</el-radio>
					</el-form-item>
					<el-form-item
						label="J2.5.2 你是否觉得你这方面表现的较同龄人差？"
						prop="j2_5_2"
					>
						<el-radio v-model="form.j2_5_2" label="1">是</el-radio>
						<el-radio v-model="form.j2_5_2" label="0">否</el-radio>
					</el-form-item>
					<el-form-item label="J2.5.3 你觉得什么时候情况变差的？" prop="j2_5_3">
						<el-radio v-model="form.j2_5_3" label="1">近6个月内</el-radio>
						<el-radio v-model="form.j2_5_3" label="2">近6个月-2年</el-radio>
						<el-radio v-model="form.j2_5_3" label="3">2-5年</el-radio>
						<el-radio v-model="form.j2_5_3" label="4">超过5年</el-radio>
						<el-radio v-model="form.j2_5_3" label="5">不清楚</el-radio>
					</el-form-item>
					<el-form-item label="J2.5.4 你是否去看过医生？" prop="j2_5_4">
						<el-radio v-model="form.j2_5_4" label="1">是</el-radio>
						<el-radio v-model="form.j2_5_4" label="0">否</el-radio>
					</el-form-item>
					<el-form-item
						label="J2.5.5 你第一次跟你的医生谈这些问题是什么时候？"
						prop="j2_5_5"
					>
						<el-input v-model="form.j2_5_5"></el-input>
					</el-form-item>
					<el-form-item
						label="J3.a 需要知情者回答的问题（知情者可以当着受访者的面回答）"
						prop="j3_a"
					>
						<el-radio v-model="form.j3_a" label="1">无知情者</el-radio>
						<el-radio v-model="form.j3_a" label="2"
							>受访者不希望知情者提供信息</el-radio
						>
					</el-form-item>
					<el-form-item
						label="J3.b 提供信息的知情者身份：（只可以选择一个）"
						prop="j3_b"
					>
						<el-radio v-model="form.j3_b" label="1">配偶</el-radio>
						<el-radio v-model="form.j3_b" label="2">孩子</el-radio>
						<el-radio v-model="form.j3_b" label="3">兄弟姐妹</el-radio>
						<el-radio v-model="form.j3_b" label="4">朋友</el-radio>
						<el-radio v-model="form.j3_b" label="5">其他</el-radio>
					</el-form-item>
					<el-form-item label="J3.c 减退是从什么时候开始的？" prop="j3_c">
						<el-radio v-model="form.j3_c" label="1">近6个月内</el-radio>
						<el-radio v-model="form.j3_c" label="2">近6个月-2年</el-radio>
						<el-radio v-model="form.j3_c" label="3">2-5年</el-radio>
						<el-radio v-model="form.j3_c" label="4">超过5年</el-radio>
						<el-radio v-model="form.j3_c" label="5">不清楚</el-radio>
					</el-form-item>
					<el-form-item label="J3.1 你是否觉得受访者的记性变差了？" prop="j3_1">
						<el-radio v-model="form.j3_1" label="1">是</el-radio>
						<el-radio v-model="form.j3_1" label="0">否</el-radio>
					</el-form-item>
					<el-form-item label="J3.2 受访者是否比以前要找词困难？" prop="j3_2">
						<el-radio v-model="form.j3_2" label="1">是</el-radio>
						<el-radio v-model="form.j3_2" label="0">否</el-radio>
					</el-form-item>
					<el-form-item
						label="J3.3 受访者是否越来越难做计划、有序安排事情？"
						prop="j3_3"
					>
						<el-radio v-model="form.j3_3" label="1">是</el-radio>
						<el-radio v-model="form.j3_3" label="0">否</el-radio>
					</el-form-item>
					<el-form-item
						label="J3.4 如果受访者不专心做一件事情时是否比以前更容易犯错？"
						prop="j3_4"
					>
						<el-radio v-model="form.j3_4" label="1">是</el-radio>
						<el-radio v-model="form.j3_4" label="0">否</el-radio>
					</el-form-item>
					<el-form-item label="J3.5 受访者在其他认知方面是否变差？" prop="j3_5">
						<el-radio v-model="form.j3_5" label="1">是</el-radio>
						<el-radio v-model="form.j3_5" label="0">否</el-radio>
					</el-form-item>
					<el-form-item label="J3.5.1 是哪些方面？" prop="j3_5_1">
						<el-input v-model="form.j3_5_1"></el-input>
					</el-form-item>
					<el-form-item label="J3.6 受访者行为或性格是否有变化？" prop="j3_6">
						<el-radio v-model="form.j3_6" label="1">是</el-radio>
						<el-radio v-model="form.j3_6" label="0">否</el-radio>
					</el-form-item>
					<el-form-item>
						<el-button type="primary" @click="updateForm()">提交</el-button>
					</el-form-item>
				</el-form>
			</el-collapse-item>
		</el-collapse>

		<el-collapse v-model="activeNames">
			<el-collapse-item title="H 量表得分" name="11">
				<el-form
					style="width: 50%"
					:model="form"
					:rules="rules"
					ref="form"
					label-width="100px"
					class="demo-form"
				>
					<el-form-item
						label="H1 简易精神状态量表（mini-mental state examination, MMSE） 得分"
						prop="h1"
					>
						<el-input v-model="form.h1"></el-input>
					</el-form-item>
					<el-form-item label="H2 老年抑郁量表（ HDS） 得分" prop="h2">
						<el-input v-model="form.h2"></el-input>
					</el-form-item>
					<el-form-item
						label="H3 日常生活能力量表（activity of daily livinH, ADL） 得分"
						prop="h3"
					>
						<el-input v-model="form.h3"></el-input>
					</el-form-item>
					<el-form-item label="H4 神经精神量表（NPI） 得分" prop="h4">
						<el-input v-model="form.h4"></el-input>
					</el-form-item>
					<el-form-item label="H4.1 须知情者完成，知情者是否在现场" prop="h4">
						<el-input v-model="form.h4_1"></el-input>
					</el-form-item>
					<el-form-item label="H4.2 如果“是”，知情者与患者的关系为" prop="h4">
						<el-input v-model="form.h4_2"></el-input>
					</el-form-item>
					<el-form-item
						label="H5 蒙特利尔认知评估基础量表中文版（Montreal CoHnitive Assessment-Hasic( MoCA-H) Chinese Version） 得分"
						prop="h4"
					>
						<el-input v-model="form.h5"></el-input>
					</el-form-item>
					<el-form-item label="H6 词语流畅性（VFT） 得分" prop="h4">
						<el-input v-model="form.h6"></el-input>
					</el-form-item>
					<p style="width=200%">H7 听觉词汇学习测试（auditory verHal learninH test, AVLT） 得分</p>
					<el-form-item label="H7.1">
						<el-input v-model="form.h7_1"></el-input>
					</el-form-item>
					<el-form-item label="H7.2">
						<el-input v-model="form.h7_2"></el-input>
					</el-form-item>
					<el-form-item label="H7.3">
						<el-input v-model="form.h7_3"></el-input>
					</el-form-item>
					<el-form-item label="H7.4">
						<el-input v-model="form.h7_4"></el-input>
					</el-form-item>
					<el-form-item label="H7.5">
						<el-input v-model="form.h7_5"></el-input>
					</el-form-item>
					<el-form-item label="H7.6">
						<el-input v-model="form.h7_6"></el-input>
					</el-form-item>
					<el-form-item label="H7.7">
						<el-input v-model="form.h7_7"></el-input>
					</el-form-item>
					<el-form-item
						label="H8 画钟试验（Clock DrawinH Task, CDT） 得分"
						prop="h4"
					>
						<el-input v-model="form.h8"></el-input>
					</el-form-item>
					<el-form-item label="H9 波士顿命名测验（HNT） 得分" prop="h4">
						<el-input v-model="form.h9"></el-input>
					</el-form-item>
					<el-form-item label="H10 连线测试（STT-A）得分" prop="h4">
						<el-input v-model="form.h10"></el-input>
					</el-form-item>
					<el-form-item label="H11 STT-H部分得分" prop="h4">
						<el-input v-model="form.h11"></el-input>
					</el-form-item>
					<el-form-item
						label="H12 数字广度测验（ 数字广度测验（ 数字广度测验（ 数字广度测验（ DiHit span test，DST） 得分"
						prop="h4"
					>
						<el-input v-model="form.h12"></el-input>
					</el-form-item>
					<el-form-item label="H13 临床痴呆评定表（CDR） 得分" prop="h4">
						<el-input v-model="form.h13"></el-input>
					</el-form-item>
					<el-form-item>
						<el-button type="primary" @click="updateForm()">提交</el-button>
						<el-button @click="resetForm('h1Form')">重置</el-button>
					</el-form-item>
				</el-form>
			</el-collapse-item>
		</el-collapse>
	</div>
</template>

<script>
	import baseUrl from "../../utils/baseURL";
	export default {
		data() {
			return {
				activeNames: [
					"0",
					"1",
					"2",
					"3",
					"4",
					"5",
					"6",
					"7",
					"8",
					"9",
					"10",
					"11",
					"12",
					"13",
					"14",
					"15",
					"16",
				],
				form: {
					file_id: "",
					survey_area:'',
					interviewee: "",
					id_number: "",
					address: "",
					nation: "",
					researcher: "",
					date: "",
					phone: "",
					remarks: "",
					a1: "",
					a2: "",
					a3: "",
					a4: "",
					b1: "",
					b2: "",
					b3: "",
					b4: "",
					b5: "",
					b6_1: "",
					b6_2: "",
					b7: "",
					b8_1_1: "",
					b8_1_2: "",
					b8_2_1: "",
					b8_2_2: "",
					b9_1: "",
					b9_2: "",
					b10_1: "",
					b10_2: "",
					b11: "",
					b12_1: "",
					b12_2: "",
					b13: "",
					b14: "",
					c1: "",
					c1_1: "",
					c2: "",
					c3: [],
					c4: "",
					c4_1: "",
					c4_2: "",
					c4_3: "",
					d1: "",
					d2: "",
					d3: "",
					d4: "",
					d5: "",
					d6: "",
					e: "",
					f: "",
					g1: "",
					g1_1: "",
					g1_2_1: "",
					g1_2_2: "",
					g1_3: "",
					g1_4: "",
					g2: "",
					g2_1: "",
					g2_2: "",
					g2_3: "",
					g3: "",
					g3_1: "",
					g3_2: "",
					g3_3: "",
					g3_4: "",
					g4: "",
					g4_1: "",
					g4_2: "",
					g4_3: "",
					g5: "",
					g5_1: "",
					g5_2: "",
					g5_3: "",
					g6: "",
					g6_1: "",
					g6_2: "",
					g6_3: "",
					g6_4: "",
					g6_5: "",
					g7: "",
					g7_1: "",
					g7_2: "",
					g7_3: "",
					g8: "",
					g8_1: [],
					g8_2: "",
					g8_3: "",
					g9: "",
					g9_1: [],
					g9_2: "",
					g9_3: "",
					g10: "",
					g10_1: "",
					g11: "",
					g11_1: "",
					g11_2: "",
					g11_3: "",
					g12: "",
					g12_1: "",
					g12_2: "",
					g12_3: "",
					g13: "",
					g13_1: "",
					g13_2: "",
					g13_3: "",
					g13_4: "",
					g14: "",
					g14_1: "",
					g14_2: "",
					g14_3: "",
					g15: "",
					g15_1: "",
					g15_2: "",
					g16: "",
					g16_1: "",
					g16_2: "",
					g16_3: "",
					g16_4: "",
					h_1_1: "",
					h_1_2: [],
					h_2_1: "",
					h_2_2: [],
					h_3_1: "",
					h_3_2: [],
					i1: "",
					i1_1: "",
					i1_2: "",
					i1_3: "",
					i1_4: "",
					i1_5: [],
					i1_6: "",
					i2: "",
					i2_1: "",
					i2_2: "",
					i2_3: [],
					i2_4: "",
					i3: "",
					i3_1: "",
					i3_2: "",
					i4: "",
					i5: [],
					i6: "",
					i7_1: "",
					i7_2: "",
					i7_3: "",
					i7_4: "",
					i7_5: "",
					i7_6: "",
					i7_7: "",
					i7_8: "",
					i7_9: "",
					i7_10: "",
					i7_10_1: "",
					i7_11: "",
					i7_11_1: "",
					i7_12: "",
					i7_12_1: "",
					i7_13: "",
					i7_13_1: "",
					i8: "",
					i8_1: "",
					i9: "",
					i9_1: "",
					i9_2: [],
					i9_3: "",
					i9_4: "",
					i10: "",
					i10_1: "",
					i10_2: [],
					i11: "",
					i11_1: "",
					i11_2: "",
					i11_3: "",
					i11_4: "",
					i11_5: "",
					i11_6: "",
					i11_7: "",
					i11_8: "",
					j1: [],
					j2_1: "",
					j2_1_1: "",
					j2_1_2: "",
					j2_1_3: "",
					j2_1_4: "",
					j2_1_5: "",
					j2_2: "",
					j2_2_1: "",
					j2_2_2: "",
					j2_2_3: "",
					j2_2_4: "",
					j2_2_5: "",
					j2_3: "",
					j2_3_1: "",
					j2_3_2: "",
					j2_3_3: "",
					j2_3_4: "",
					j2_3_5: "",
					j2_4: "",
					j2_4_1: "",
					j2_4_2: "",
					j2_4_3: "",
					j2_4_4: "",
					j2_4_5: "",
					j2_5: "",
					j2_5_a: "",
					j2_5_1: "",
					j2_5_2: "",
					j2_5_3: "",
					j2_5_4: "",
					j2_5_5: "",
					j3_a: "",
					j3_b: "",
					j3_c: "",
					j3_1: "",
					j3_2: "",
					j3_3: "",
					j3_4: "",
					j3_5: "",
					j3_5_1: "",
					j3_6: "",
					h1: "",
					h2: "",
					h3: "",
					h4_1: "",
					h4_2: "",
					h5: "",
					h6: "",
					h7_1: "",
					h7_2: "",
					h7_3: "",
					h7_4: "",
					h7_5: "",
					h7_6: "",
					h7_7: "",
					h8: "",
					h9: "",
					h10: "",
					h11: "",
					h12: "",
					h13: "",
				},
				rules: {

					region: [
						{ required: true, message: "请选择活动区域", trigger: "change" },
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
			createdFunction: function () {
				const _this = this;
				axios
					.post(baseUrl + "/fileInfo/selectFileInfo", {
						file_id: _this.$route.params.file_id,
						pageSize: 1,
						pageNum: 1,
					})
					.then(function (resp) {
						_this.form = resp.data.data.records[0];
						// 将多选初始化
						if (resp.data.data.records[0].c3 != null) {
							_this.form.c3 = resp.data.data.records[0].c3.split(",");
						} else {
							_this.form.c3 = [];
						}
						if (resp.data.data.records[0].g8_1 != null) {
							_this.form.g8_1 = resp.data.data.records[0].g8_1.split(",");
						} else {
							_this.form.g8_1 = [];
						}
						if (resp.data.data.records[0].g9_1 != null) {
							_this.form.g9_1 = resp.data.data.records[0].g9_1.split(",");
						} else {
							_this.form.g9_1 = [];
						}
						if (resp.data.data.records[0].h_1_2 != null) {
							_this.form.h_1_2 = resp.data.data.records[0].h_1_2.split(",");
						} else {
							_this.form.h_1_2 = [];
						}
						if (resp.data.data.records[0].h_2_2 != null) {
							_this.form.h_2_2 = resp.data.data.records[0].h_2_2.split(",");
						} else {
							_this.form.h_2_2 = [];
						}
						if (resp.data.data.records[0].h_3_2 != null) {
							_this.form.h_3_2 = resp.data.data.records[0].h_3_2.split(",");
						} else {
							_this.form.h_3_2 = [];
						}
						if (resp.data.data.records[0].i1_5 != null) {
							_this.form.i1_5 = resp.data.data.records[0].i1_5.split(",");
						} else {
							_this.form.i1_5 = [];
						}
						if (resp.data.data.records[0].i2_3 != null) {
							_this.form.i2_3 = resp.data.data.records[0].i2_3.split(",");
						} else {
							_this.form.i2_3 = [];
						}
						if (resp.data.data.records[0].i5 != null) {
							_this.form.i5 = resp.data.data.records[0].i5.split(",");
						} else {
							_this.form.i5 = [];
						}
						if (resp.data.data.records[0].i9_2 != null) {
							_this.form.i9_2 = resp.data.data.records[0].i9_2.split(",");
						} else {
							_this.form.i9_2 = [];
						}
						if (resp.data.data.records[0].i10_2 != null) {
							_this.form.i10_2 = resp.data.data.records[0].i10_2.split(",");
						} else {
							_this.form.i10_2 = [];
						}
						if (resp.data.data.records[0].j1 != null) {
							_this.form.j1 = resp.data.data.records[0].j1.split(",");
						} else {
							_this.form.j1 = [];
						}
					});
			},
			updateForm: function () {
				const _this = this;
				_this.form.c3 = _this.form.c3.join(",");
				_this.form.g8_1 = _this.form.g8_1.join(",");
				_this.form.g9_1 = _this.form.g9_1.join(",");
				_this.form.h_1_2 = _this.form.h_1_2.join(",");
				_this.form.h_2_2 = _this.form.h_2_2.join(",");
				_this.form.h_3_2 = _this.form.h_3_2.join(",");
				_this.form.i1_5 = _this.form.i1_5.join(",");
				_this.form.i2_3 = _this.form.i2_3.join(",");
				_this.form.i5 = _this.form.i5.join(",");
				_this.form.i9_2 = _this.form.i9_2.join(",");
				_this.form.i10_2 = _this.form.i10_2.join(",");
				_this.form.j1 = _this.form.j1.join(",");
				axios
					.post(baseUrl + "/fileInfo/updateFileInfo", _this.form)
					.then(function (resp) {
						if (resp.data.code == 200) {
							_this.$message({
								message: "更新成功！",
								type: "success",
							});
							_this.createdFunction();
						}
					});
			},
		},
		created() {
			this.createdFunction();
		},
	};
</script>

<style scoped>
	.aaa {
		margin-top: 30px;
	}
	.aaa /deep/ .el-collapse-item__header {
		background-color: rgb(188, 222, 233);
		font-size: 15px !important;
		font-weight: bolder;
		text-indent: 20px;
	}
  p{
    font-size: 15px;
    font-weight: bold;
  }
	.el-row {
		margin-bottom: 20px;
	}
	.el-col {
		border-radius: 4px;
	}
	.demo-form {
		margin-top: 20px;
		margin-left: 30px;
	}
	.demo-form /deep/ .el-form-item .el-form-item__label {
		/*float: left;*/
		width: 2000px !important;
		text-align: left;
	}
	.demo-form /deep/ .el-form-item .el-form-item__content {
		float: left;
		margin-left: 0px !important;
	}
	.bg-purple-dark {
		background: #99a9bf;
	}
	.bg-purple {
		background: #d3dce6;
	}
	.bg-purple-light {
		background: #e5e9f2;
	}
	.grid-content {
		border-radius: 4px;
		min-height: 36px;
	}
	.row-bg {
		padding: 10px 0;
		background-color: #f9fafc;
	}
</style>