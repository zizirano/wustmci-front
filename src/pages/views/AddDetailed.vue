<template>
	<div>
		<el-collapse v-model="activeNames">
			<el-collapse-item
				title="一般资料"
				class="grid-content bg-purple-dark"
				name="1"
			>
				<el-form
					style="width: 90%"
					:model="aForm"
					:rules="rules"
					ref="aForm"
					label-width="100px"
					class="demo-ruleForm"
				>
					<el-form-item label="性别" prop="a1">
						<el-radio v-model="aForm.a1" label="1">男</el-radio>
						<el-radio v-model="aForm.a1" label="2">女</el-radio>
					</el-form-item>
					<el-form-item label="年龄" prop="a2">
						<el-input v-model="aForm.a2" number></el-input>
					</el-form-item>
					<el-form-item
						label="受教育程度（包括职业教育及函授等）（年）"
						prop="a3"
					>
						<el-input v-model="aForm.a3"></el-input>
					</el-form-item>
					<el-form-item label="出生日期" prop="a4">
						<el-date-picker
							v-model="aForm.a4"
							type="date"
							placeholder="选择日期"
						>
						</el-date-picker>
					</el-form-item>
					<el-form-item>
						<el-button type="primary" @click.once="submitForm('aForm', 'a')"
							>提交</el-button
						>
						<el-button @click="resetForm('aForm')">重置</el-button>
					</el-form-item>
				</el-form>
			</el-collapse-item>
		</el-collapse>

		<el-collapse v-model="activeNames">
			<el-collapse-item title="体格检查" name="2">
				<el-form
					style="width: 90%"
					:model="bForm"
					:rules="rules"
					ref="bForm"
					label-width="100px"
					class="demo-ruleForm"
				>
					<el-form-item label="身高（cm）" prop="b1">
						<el-input v-model.number="bForm.b1"></el-input>
					</el-form-item>
					<el-form-item label="体重（Kg）" prop="b2">
						<el-input v-model.number="bForm.b2"></el-input>
					</el-form-item>
					<el-form-item label="头围（cm）" prop="b3">
						<el-input v-model.number="bForm.b3"></el-input>
					</el-form-item>
					<el-form-item label="腰围（cm）" prop="b4">
						<el-input v-model.number="bForm.b4"></el-input>
					</el-form-item>
					<el-form-item label="臀围（cm）" prop="b5">
						<el-input v-model.number="bForm.b5"></el-input>
					</el-form-item>
					<h1 style="font-weight: normal">血压（mmHg）</h1>
					<el-form-item label="收缩压" prop="b6_1">
						<el-input v-model.number="bForm.b6_1"></el-input>
					</el-form-item>
					<el-form-item label="舒张压" prop="b6_2">
						<el-input v-model.number="bForm.b6_2"></el-input>
					</el-form-item>
					<el-form-item label="心率（次/分）" prop="b7">
						<el-input v-model.number="bForm.a4"></el-input>
					</el-form-item>
					<h1 style="font-weight: normal">握力（kg）</h1>
					<el-form-item label="左手（一）" prop="b8_1_1">
						<el-input v-model.number="bForm.b8_1_1"></el-input>
					</el-form-item>
					<el-form-item label="左手（二）" prop="b8_1_2">
						<el-input v-model.number="bForm.b8_1_2"></el-input>
					</el-form-item>
					<el-form-item label="右手（一）" prop="b8_2_1">
						<el-input v-model.number="bForm.b8_2_1"></el-input>
					</el-form-item>
					<el-form-item label="右手（二）" prop="b8_2_2">
						<el-input v-model.number="bForm.b8_2_2"></el-input>
					</el-form-item>
					<h1 style="font-weight: normal">视力</h1>
					<el-form-item label="左眼" prop="b9_1">
						<el-input v-model.number="bForm.b9_1"></el-input>
					</el-form-item>
					<el-form-item label="右眼" prop="b9_2">
						<el-input v-model.number="bForm.b9_2"></el-input>
					</el-form-item>
					<h1 style="font-weight: normal">听力</h1>
					<el-form-item label="左耳" prop="b10_1">
						<el-input v-model.number="bForm.b10_1"></el-input>
					</el-form-item>
					<el-form-item label="右耳" prop="b10_2">
						<el-input v-model.number="bForm.b10_2"></el-input>
					</el-form-item>
					<el-form-item label="嗅觉" prop="b11">
						<el-radio v-model="bForm.b11" label="1">正常</el-radio>
						<el-radio v-model="bForm.b11" label="2">轻度减退</el-radio>
						<el-radio v-model="bForm.b11" label="3">中度减退</el-radio>
						<el-radio v-model="bForm.b11" label="4">重度减退</el-radio>
					</el-form-item>
					<el-form-item label="客观观察步态" prop="b12_1">
						<el-radio v-model="bForm.b12_1" label="1">正常</el-radio>
						<el-radio v-model="bForm.b12_1" label="2">异常</el-radio>
					</el-form-item>
					<el-form-item label="跟以前相比，您走路的步频" prop="b12_2">
						<el-radio v-model="bForm.b12_2" label="1">变慢</el-radio>
						<el-radio v-model="bForm.b12_2" label="2">不变</el-radio>
						<el-radio v-model="bForm.b12_2" label="3">加快</el-radio>
					</el-form-item>
					<el-form-item label="跟以前相比，您的嗅觉" prop="b13">
						<el-radio v-model="bForm.b13" label="1">变迟钝</el-radio>
						<el-radio v-model="bForm.b13" label="2">不变</el-radio>
						<el-radio v-model="bForm.b13" label="3">变灵敏</el-radio>
					</el-form-item>
					<el-form-item label="跟以前相比，您的听觉" prop="b14">
						<el-radio v-model="bForm.b14" label="1">变迟钝</el-radio>
						<el-radio v-model="bForm.b14" label="2">不变</el-radio>
						<el-radio v-model="bForm.b14" label="3">变灵敏</el-radio>
					</el-form-item>
					<el-form-item>
						<el-button type="primary" @click.once="submitForm('bForm', 'b')"
							>提交</el-button
						>
						<el-button @click="resetForm('bForm')">重置</el-button>
					</el-form-item>
				</el-form>
			</el-collapse-item>
		</el-collapse>

		<el-collapse v-model="activeNames">
			<el-collapse-item title="社会经济状况" name="3">
				<el-form
					style="width: 50%"
					:model="cForm"
					:rules="rules"
					ref="cForm"
					label-width="100px"
					class="demo-ruleForm"
				>
					<el-form-item label="您退休前职业" prop="c1">
						<el-radio v-model="cForm.c1" label="1">干部</el-radio>
						<el-radio v-model="cForm.c1" label="2">农民</el-radio>
						<el-radio v-model="cForm.c1" label="3">个体及商业人员</el-radio>
						<el-radio v-model="cForm.c1" label="4">工人</el-radio>
						<el-radio v-model="cForm.c1" label="5">家务</el-radio>
						<el-radio v-model="cForm.c1" label="6">其他</el-radio>
					</el-form-item>
					<el-form-item label="工作性质" prop="c1_1">
						<el-radio v-model="cForm.c1_1" label="1">脑力劳动者</el-radio>
						<el-radio v-model="cForm.c1_1" label="2">体力劳动者</el-radio>
						<el-radio v-model="cForm.c1_1" label="3">脑力＋体力</el-radio>
						<el-radio v-model="cForm.c1_1" label="4">其他</el-radio>
					</el-form-item>
					<el-form-item label="婚姻状况" prop="c2">
						<el-radio v-model="cForm.c2" label="1">未婚</el-radio>
						<el-radio v-model="cForm.c2" label="2">已婚</el-radio>
						<el-radio v-model="cForm.c2" label="2"
							>已婚 但由于工作暂时没住在一起</el-radio
						>
						<el-radio v-model="cForm.c2" label="3">分居</el-radio>
						<el-radio v-model="cForm.c2" label="4">离婚</el-radio>
						<el-radio v-model="cForm.c2" label="5">丧偶</el-radio>
					</el-form-item>
					<el-form-item label="您参加那些医疗保险（多选）" prop="c3">
						<el-checkbox-group v-model="cForm.c3">
							<el-checkbox label="1">新型农村合作医疗</el-checkbox>
							<el-checkbox label="2">商业医疗保险模式</el-checkbox>
							<el-checkbox label="3">公费医疗</el-checkbox>
							<el-checkbox label="4">其他</el-checkbox>
							<el-checkbox label="5">不清楚</el-checkbox>
							<el-checkbox label="6">没有</el-checkbox>
						</el-checkbox-group>
					</el-form-item>
					<el-form-item label="您有稳定的收入吗？" prop="c4">
						<el-radio v-model="cForm.c4" label="1">是</el-radio>
						<el-radio v-model="cForm.c4" label="0">否</el-radio>
					</el-form-item>
					<el-form-item label="您每月的收入来源" prop="c4_1">
						<el-radio v-model="cForm.c4_1" label="1">养老金</el-radio>
						<el-radio v-model="cForm.c4_1" label="2">子女亲人</el-radio>
						<el-radio v-model="cForm.c4_1" label="3">自己工作</el-radio>
						<el-radio v-model="cForm.c4_1" label="4">其他</el-radio>
					</el-form-item>
					<el-form-item label="您每月收入" prop="c4_2">
						<el-radio v-model="cForm.c4_2" label="1">1000以下</el-radio>
						<el-radio v-model="cForm.c4_2" label="2">1000-2000</el-radio>
						<el-radio v-model="cForm.c4_2" label="3">2000-3000</el-radio>
						<el-radio v-model="cForm.c4_2" label="4">4000以上</el-radio>
					</el-form-item>
					<el-form-item label="您对每月收入满意吗？" prop="c4_3">
						<el-radio v-model="cForm.c4_3" label="1">是</el-radio>
						<el-radio v-model="cForm.c4_3" label="0">否</el-radio>
					</el-form-item>

					<el-form-item>
						<el-button type="primary" @click.once="submitForm('cForm', 'c')"
							>提交</el-button
						>
						<el-button @click="resetForm('cForm')">重置</el-button>
					</el-form-item>
				</el-form>
			</el-collapse-item>
		</el-collapse>

		<el-collapse v-model="activeNames">
			<el-collapse-item title="社交网络" name="4">
				<el-form
					style="width: 50%"
					:model="dForm"
					:rules="rules"
					ref="dForm"
					label-width="100px"
					class="demo-ruleForm"
				>
					<el-form-item label="近一年来您和谁住在一起？" prop="d1">
						<el-radio v-model="dForm.d1" label="1">一个人住</el-radio>
						<el-radio v-model="dForm.d1" label="2">和家人一起住</el-radio>
						<el-radio v-model="dForm.d1" label="3">养老机构</el-radio>
					</el-form-item>
					<el-form-item label="您有子女吗？" prop="d2">
						<el-radio v-model="dForm.d2" label="1">无</el-radio>
						<el-radio v-model="dForm.d2" label="2">1个</el-radio>
						<el-radio v-model="dForm.d2" label="3">2个</el-radio>
						<el-radio v-model="dForm.d2" label="4">3个以上</el-radio>
					</el-form-item>
					<el-form-item label="您有健在的兄弟姐妹吗？" prop="d3">
						<el-radio v-model="dForm.d3" label="1">无</el-radio>
						<el-radio v-model="dForm.d3" label="0">有</el-radio>
					</el-form-item>
					<el-form-item
						label="您有多少关系密切，可以得到支持和帮助的朋友？"
						prop="d4"
					>
						<el-radio v-model="dForm.d4" label="1">一个也没有</el-radio>
						<el-radio v-model="dForm.d4" label="2">1-2个</el-radio>
						<el-radio v-model="dForm.d4" label="3">3-5个</el-radio>
						<el-radio v-model="dForm.d4" label="4">6个及以上</el-radio>
					</el-form-item>
					<el-form-item label="您与邻居的关系" prop="d5">
						<el-radio v-model="dForm.d5" label="1"
							>相互之间从不关心，只是点头之交</el-radio
						>
						<el-radio v-model="dForm.d5" label="2"
							>遇到困难可能稍微关心</el-radio
						>
						<el-radio v-model="dForm.d5" label="3">有些邻居很关心您</el-radio>
						<el-radio v-model="dForm.d5" label="4">大多数邻居都很关心</el-radio>
					</el-form-item>
					<el-form-item
						label="您参加的社交活动（跳舞，打牌，唱歌，旅游，购物，打零工，看望亲友，外出吃饭等）"
						prop="d6"
					>
						<el-radio v-model="dForm.d6" label="1">一年一次或者更少</el-radio>
						<el-radio v-model="dForm.d6" label="2">一年几次</el-radio>
						<el-radio v-model="dForm.d6" label="3">一个月几次</el-radio>
						<el-radio v-model="dForm.d6" label="4">一周几次</el-radio>
						<el-radio v-model="dForm.d6" label="5"
							>每一天，或者几乎每一天</el-radio
						>
					</el-form-item>

					<el-form-item>
						<el-button type="primary" @click.once="submitForm('dForm', 'd')"
							>提交</el-button
						>
						<el-button @click="resetForm('dForm')">重置</el-button>
					</el-form-item>
				</el-form>
			</el-collapse-item>
		</el-collapse>

		<el-collapse v-model="activeNames">
			<el-collapse-item title="利手习惯" name="5">
				<el-form
					style="width: 50%"
					:model="eForm"
					:rules="rules"
					ref="eForm"
					label-width="100px"
					class="demo-ruleForm"
				>
					<el-form-item label="利手习惯" prop="e1">
						<el-radio v-model="eForm.e1" label="1">右利手</el-radio>
						<el-radio v-model="eForm.e1" label="2">左利手</el-radio>
						<el-radio v-model="eForm.e1" label="3">双利手</el-radio>
					</el-form-item>
					<el-form-item>
						<el-button type="primary" @click.once="submitForm('eForm', 'e')"
							>提交</el-button
						>
						<el-button @click="resetForm('eForm')">重置</el-button>
					</el-form-item>
				</el-form>
			</el-collapse-item>
		</el-collapse>

		<el-collapse v-model="activeNames">
			<el-collapse-item title="性格" name="6">
				<el-form
					style="width: 50%"
					:model="fForm"
					:rules="rules"
					ref="fForm"
					label-width="100px"
					class="demo-ruleForm"
				>
					<el-form-item label="您的性格是" prop="f1">
						<el-radio v-model="fForm.f1" label="1"
							>中性，情绪稳定、社会适应均衡</el-radio
						>
						<el-radio v-model="fForm.f1" label="2">外向，社会适应好</el-radio>
						<el-radio v-model="fForm.f1" label="3">外向，社会适应差</el-radio>
						<el-radio v-model="fForm.f1" label="4">内向，社会适应好</el-radio>
						<el-radio v-model="fForm.f1" label="5">内向，社会适应差</el-radio>
					</el-form-item>
					<el-form-item>
						<el-button type="primary" @click.once="submitForm('fForm', 'f')"
							>提交</el-button
						>
						<el-button @click="resetForm('fForm')">重置</el-button>
					</el-form-item>
				</el-form>
			</el-collapse-item>
		</el-collapse>

		<el-collapse v-model="activeNames">
			<el-collapse-item title="既往史" name="7">
				<el-form
					style="width: 50%"
					:model="gForm"
					:rules="rules"
					ref="gForm"
					label-width="100px"
					class="demo-ruleForm"
				>
					<el-form-item label="是否有高血压病史" prop="g1">
						<el-radio v-model="gForm.g1" label="1">是</el-radio>
						<el-radio v-model="gForm.g1" label="0">否</el-radio>
					</el-form-item>
					<p>如果是：</p>
					<el-form-item label="患高血压多少年" prop="g1_1">
						<el-input v-model="gForm.g1_1"></el-input>
					</el-form-item>
					<el-form-item label="最高血压（mmHg）（低压）" prop="g1_2_1">
						<el-input v-model="gForm.g1_2_1"></el-input>
					</el-form-item>
					<el-form-item label="最高血压（mmHg）（高压）" prop="g1_2_2">
						<el-input v-model="gForm.g1_2_2"></el-input>
					</el-form-item>
					<el-form-item label="高血压是否规律服药">
						<el-radio v-model="gForm.g1_3" label="1">是</el-radio>
						<el-radio v-model="gForm.g1_3" label="0">否</el-radio>
					</el-form-item>
					<el-form-item label="血压是否稳定" prop="g1_4">
						<el-radio v-model="gForm.g1_4" label="1">是</el-radio>
						<el-radio v-model="gForm.g1_4" label="0">否</el-radio>
					</el-form-item>

					<el-form-item label="是否有糖尿病病史" prop="g2">
						<el-radio v-model="gForm.g2" label="1">是</el-radio>
						<el-radio v-model="gForm.g2" label="0">否</el-radio>
					</el-form-item>
					<p>如果是：</p>
					<el-form-item label="患糖尿病多少年" prop="g2_1">
						<el-input v-model="gForm.g2_1"></el-input>
					</el-form-item>
					<el-form-item label="是否规律服药" prop="g2_2">
						<el-radio v-model="gForm.g2_2" label="1">是</el-radio>
						<el-radio v-model="gForm.g2_2" label="0">否</el-radio>
					</el-form-item>
					<el-form-item label="血糖是否稳定" prop="g2_3">
						<el-radio v-model="gForm.g2_3" label="1">是</el-radio>
						<el-radio v-model="gForm.g2_3" label="0">否</el-radio>
					</el-form-item>

					<el-form-item label="是否有冠心病病史" prop="g3">
						<el-radio v-model="gForm.g3" label="1">是</el-radio>
						<el-radio v-model="gForm.g3" label="0">否</el-radio>
					</el-form-item>
					<p>如果是：</p>
					<el-form-item label="患冠心病多少年" prop="g3_1">
						<el-input v-model="gForm.g3_1"></el-input>
					</el-form-item>
					<el-form-item label="是否规律服药" prop="g3_2">
						<el-radio v-model="gForm.g3_2" label="1">是</el-radio>
						<el-radio v-model="gForm.g3_2" label="0">否</el-radio>
					</el-form-item>
					<el-form-item label="冠心病病情是否稳定" prop="g3_3">
						<el-radio v-model="gForm.g3_3" label="1">是</el-radio>
						<el-radio v-model="gForm.g3_3" label="0">否</el-radio>
					</el-form-item>
					<el-form-item label="是否有心功能不全" prop="g3_4">
						<el-radio v-model="gForm.g3_4" label="1">是</el-radio>
						<el-radio v-model="gForm.g3_4" label="0">否</el-radio>
					</el-form-item>

					<el-form-item label="是否有高脂血症史" prop="g4">
						<el-radio v-model="gForm.g4" label="1">是</el-radio>
						<el-radio v-model="gForm.g4" label="0">否</el-radio>
					</el-form-item>
					<p>如果是：</p>
					<el-form-item label="患高脂血症多少年" prop="g4_1">
						<el-input v-model="gForm.b4_1"></el-input>
					</el-form-item>
					<el-form-item label="是否规律服药" prop="g4_2">
						<el-radio v-model="gForm.g4_2" label="1">是</el-radio>
						<el-radio v-model="gForm.g4_2" label="0">否</el-radio>
					</el-form-item>
					<el-form-item label="高脂血症病情是否稳定" prop="g4_3">
						<el-radio v-model="gForm.g4_3" label="1">是</el-radio>
						<el-radio v-model="gForm.g4_3" label="0">否</el-radio>
					</el-form-item>

					<el-form-item label="是否有贫血病史" prop="g5">
						<el-radio v-model="gForm.g5" label="1">是</el-radio>
						<el-radio v-model="gForm.g5" label="0">否</el-radio>
					</el-form-item>
					<p>如果是：</p>
					<el-form-item label="患贫血多少年" prop="g5_1">
						<el-input v-model="gForm.g5_1"></el-input>
					</el-form-item>
					<el-form-item label="是否规律服药" prop="g5_2">
						<el-radio v-model="gForm.g5_2" label="1">是</el-radio>
						<el-radio v-model="gForm.g5_2" label="0">否</el-radio>
					</el-form-item>
					<el-form-item label="贫血病情是否稳定" prop="g5_3">
						<el-radio v-model="gForm.g5_3" label="1">是</el-radio>
						<el-radio v-model="gForm.g5_3" label="0">否</el-radio>
					</el-form-item>

					<el-form-item label="是否有脑血管病史" prop="g6">
						<el-radio v-model="gForm.g6" label="1">是</el-radio>
						<el-radio v-model="gForm.g6" label="0">否</el-radio>
					</el-form-item>
					<p>如果是：</p>
					<el-form-item label="患脑血管病多少年" prop="g6_1">
						<el-input v-model="gForm.g6_1"></el-input>
					</el-form-item>
					<el-form-item label="该病是否规律服药" prop="g6_2">
						<el-radio v-model="gForm.g6_2" label="1">是</el-radio>
						<el-radio v-model="gForm.g6_2" label="0">否</el-radio>
					</el-form-item>
					<el-form-item label="该病情是否稳定">
						<el-radio v-model="gForm.g6_3" label="1">是</el-radio>
						<el-radio v-model="gForm.g6_3" label="0">否</el-radio>
					</el-form-item>
					<el-form-item label="该病是否导致急性认知功能障碍" prop="g6_4">
						<el-radio v-model="gForm.g6_4" label="1">是</el-radio>
						<el-radio v-model="gForm.g6_4" label="0">否</el-radio>
					</el-form-item>
					<el-form-item label="该病是否导致原有认知功能障碍加重" prop="g6_5">
						<el-radio v-model="gForm.g6_5" label="1">是</el-radio>
						<el-radio v-model="gForm.g6_5" label="0">否</el-radio>
					</el-form-item>

					<el-form-item label="是否有脑外伤史" prop="g7">
						<el-radio v-model="gForm.g7" label="1">是</el-radio>
						<el-radio v-model="gForm.g7" label="0">否</el-radio>
					</el-form-item>
					<p>如果是：</p>
					<el-form-item label="患脑外伤多少年" prop="g7_1">
						<el-input v-model="gForm.g7_1"></el-input>
					</el-form-item>
					<el-form-item label="脑外伤是否导致急性认知功能障碍" prop="g7_2">
						<el-radio v-model="gForm.g7_2" label="1">是</el-radio>
						<el-radio v-model="gForm.g7_2" label="0">否</el-radio>
					</el-form-item>
					<el-form-item label="该病是否导致原有认知障碍加重" prop="g7_3">
						<el-radio v-model="gForm.g7_3" label="1">是</el-radio>
						<el-radio v-model="gForm.g7_3" label="0">否</el-radio>
					</el-form-item>
					<el-form-item label="是否有颅内感染病史" prop="g8">
						<el-radio v-model="gForm.g8" label="1">是</el-radio>
						<el-radio v-model="gForm.g8" label="0">否</el-radio>
					</el-form-item>
					<p>如果是：</p>
					<el-form-item label="感染是哪种类型" prop="g8_1">
						<el-checkbox-group v-model="gForm.g8_1">
							<el-checkbox label="1">脑炎</el-checkbox>
							<el-checkbox label="2">脑膜炎</el-checkbox>
							<el-checkbox label="3">其他</el-checkbox>
						</el-checkbox-group>
					</el-form-item>
					<el-form-item label="该病是否导致急性认知障碍" prop="g8_2">
						<el-radio v-model="gForm.g8_2" label="1">是</el-radio>
						<el-radio v-model="gForm.g8_2" label="0">否</el-radio>
					</el-form-item>
					<el-form-item label="该病是否导致原有认知障碍加重" prop="g8_3">
						<el-radio v-model="gForm.g8_3" label="1">是</el-radio>
						<el-radio v-model="gForm.g8_3" label="0">否</el-radio>
					</el-form-item>

					<el-form-item label="是否有颜面部位感染病史" prop="g9">
						<el-radio v-model="gForm.g9" label="1">是</el-radio>
						<el-radio v-model="gForm.g9" label="0">否</el-radio>
					</el-form-item>
					<p>如果是：</p>
					<el-form-item label="哪种类型" prop="g9_1">
						<el-checkbox-group v-model="gForm.g9_1">
							<el-checkbox label="1">中耳炎</el-checkbox>
							<el-checkbox label="2">鼻窦炎</el-checkbox>
							<el-checkbox label="3">牙周及口腔炎</el-checkbox>
							<el-checkbox label="4">其他</el-checkbox>
						</el-checkbox-group>
					</el-form-item>
					<el-form-item label="该病是否导致急性认知障碍" prop="g9_2">
						<el-radio v-model="gForm.g9_2" label="1">是</el-radio>
						<el-radio v-model="gForm.g9_2" label="0">否</el-radio>
					</el-form-item>
					<el-form-item label="该病是否导致原有认知障碍加重" prop="g9_3">
						<el-radio v-model="gForm.g9_3" label="1">是</el-radio>
						<el-radio v-model="gForm.g9_3" label="0">否</el-radio>
					</el-form-item>

					<el-form-item label="是否有牙痛及拔牙史" prop="g10">
						<el-radio v-model="gForm.g10" label="1">是</el-radio>
						<el-radio v-model="gForm.g10" label="0">否</el-radio>
					</el-form-item>
					<p>如果是：</p>
					<el-form-item label="一共拔牙几颗" prop="g10_1">
						<el-input v-model="gForm.g10_1"></el-input>
					</el-form-item>

					<el-form-item label="是否有甲状腺功能异常史" prop="g11">
						<el-radio v-model="gForm.g11" label="1">是</el-radio>
						<el-radio v-model="gForm.g11" label="0">否</el-radio>
					</el-form-item>
					<p>如果是：</p>
					<el-form-item label="诊断甲状腺功能异常多少年" prop="g11_1">
						<el-input v-model="gForm.g11_1"></el-input>
					</el-form-item>
					<el-form-item label="是否规律服药" prop="g11_2">
						<el-radio v-model="gForm.g11_2" label="1">是</el-radio>
						<el-radio v-model="gForm.g11_2" label="0">否</el-radio>
					</el-form-item>
					<el-form-item label="该病病情是否稳定" prop="g11_3">
						<el-radio v-model="gForm.g11_3" label="1">是</el-radio>
						<el-radio v-model="gForm.g11_3" label="0">否</el-radio>
					</el-form-item>

					<el-form-item label="是否有颈椎病史" prop="g12">
						<el-radio v-model="gForm.g12" label="1">是</el-radio>
						<el-radio v-model="gForm.g12" label="0">否</el-radio>
					</el-form-item>
					<p>如果是：</p>
					<el-form-item label="患颈椎病多少年" prop="g12_1">
						<el-input v-model="gForm.g12_1"></el-input>
					</el-form-item>
					<el-form-item label="该病是否导致急性认知障碍" prop="g12_2">
						<el-radio v-model="gForm.g12_2" label="1">是</el-radio>
						<el-radio v-model="gForm.g12_2" label="0">否</el-radio>
					</el-form-item>
					<el-form-item label="该病是否导致原有认知障碍加重" prop="g12_3">
						<el-radio v-model="gForm.g12_3" label="1">是</el-radio>
						<el-radio v-model="gForm.g12_3" label="0">否</el-radio>
					</el-form-item>

					<el-form-item label="是否有手术全身麻醉史" prop="g13">
						<el-radio v-model="gForm.g13" label="1">是</el-radio>
						<el-radio v-model="gForm.g13" label="0">否</el-radio>
					</el-form-item>
					<p>如果是：</p>
					<el-form-item label="有几次" prop="g13_1">
						<el-input v-model="gForm.g13_1"></el-input>
					</el-form-item>
					<el-form-item label="首次手术全麻距今多少年" prop="g13_2">
						<el-input v-model="gForm.g13_2"></el-input>
					</el-form-item>
					<el-form-item label="手术全身麻醉是否导致急性认知障碍" prop="g13_3">
						<el-radio v-model="gForm.g13_3" label="1">是</el-radio>
						<el-radio v-model="gForm.g13_3" label="0">否</el-radio>
					</el-form-item>
					<el-form-item label="麻醉是否导致原有认知障碍加重" prop="g13_4">
						<el-radio v-model="gForm.g13_4" label="1">是</el-radio>
						<el-radio v-model="gForm.g13_4" label="0">否</el-radio>
					</el-form-item>

					<el-form-item label="是否有CO中毒史" prop="g14">
						<el-radio v-model="gForm.g14" label="1">是</el-radio>
						<el-radio v-model="gForm.g14" label="0">否</el-radio>
					</el-form-item>
					<p>如果是：</p>
					<el-form-item label="突发CO中毒距离现在多少年" prop="g14_1">
						<el-input v-model="gForm.g14_1"></el-input>
					</el-form-item>
					<el-form-item label="CO中毒是否导致急性认知障碍" prop="g14_2">
						<el-radio v-model="gForm.g14_2" label="1">是</el-radio>
						<el-radio v-model="gForm.g14_2" label="0">否</el-radio>
					</el-form-item>
					<el-form-item label="CO中毒是否导致原有认知障碍加重" prop="g14_3">
						<el-radio v-model="gForm.g14_3" label="1">是</el-radio>
						<el-radio v-model="gForm.g14_3" label="0">否</el-radio>
					</el-form-item>

					<el-form-item
						label="您是否曾经有过一段时间（持续两周或以上）几乎每天的大部分时候都感觉到很沮丧或者忧郁"
						prop="g15"
					>
						<el-radio v-model="gForm.g15" label="1">是</el-radio>
						<el-radio v-model="gForm.g15" label="0">否</el-radio>
					</el-form-item>

					<el-form-item label="您是否曾经被医生诊断患有忧郁症？" prop="g15_1">
						<el-radio v-model="gForm.g15_1" label="1">是</el-radio>
						<el-radio v-model="gForm.g15_1" label="0">否</el-radio>
					</el-form-item>
					<el-form-item label="您是否曾经服用药物治疗忧郁症？" prop="g15_2">
						<el-radio v-model="gForm.g15_2" label="1">是</el-radio>
						<el-radio v-model="gForm.g15_2" label="0">否</el-radio>
					</el-form-item>

					<el-form-item label="您是否被诊断为帕金森病" prop="g16">
						<el-radio v-model="gForm.g16" label="1">是</el-radio>
						<el-radio v-model="gForm.g16" label="0">否</el-radio>
					</el-form-item>
					<p>如果是：</p>
					<el-form-item label="震颤多少年" prop="g16_1">
						<el-input v-model="gForm.g16_1"></el-input>
					</el-form-item>
					<el-form-item label="肢体僵硬多少年" prop="g16_2">
						<el-input v-model="gForm.g16_2"></el-input>
					</el-form-item>
					<el-form-item label="写字小多少年" prop="g16_3">
						<el-input v-model="gForm.g16_3"></el-input>
					</el-form-item>
					<el-form-item label="动作变慢多少年" prop="g16_4">
						<el-input v-model="gForm.g16_4"></el-input>
					</el-form-item>

					<el-form-item>
						<el-button type="primary" @click.once="submitForm('gForm', 'g')"
							>提交</el-button
						>
						<el-button @click="resetForm('gForm')">重置</el-button>
					</el-form-item>
				</el-form>
			</el-collapse-item>
		</el-collapse>

		<el-collapse v-model="activeNames">
			<el-collapse-item title="家族史" name="8">
				<el-form
					style="width: 50%"
					:model="hForm"
					:rules="rules"
					ref="hForm"
					label-width="100px"
					class="demo-ruleForm"
				>
					<el-form-item label="您家人是否曾经患病" prop="h1">
						<el-radio v-model="hForm.h1" label="1">是</el-radio>
						<el-radio v-model="hForm.h1" label="2">否</el-radio>
						<el-radio v-model="hForm.h1" label="3">不明</el-radio>
					</el-form-item>
					<el-form-item label="有下列哪些疾病">
						<el-checkbox-group v-model="hForm.h1_1">
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
						<el-button type="primary" @click.once="submitForm('hForm', 'h')"
							>提交</el-button
						>
						<el-button @click="resetForm('hForm')">重置</el-button>
					</el-form-item>
				</el-form>
			</el-collapse-item>
		</el-collapse>

		<el-collapse v-model="activeNames">
			<el-collapse-item title="个人史" name="9">
				<el-form
					style="width: 50%"
					:model="iForm"
					:rules="rules"
					ref="iForm"
					label-width="100px"
					class="demo-ruleForm"
				>
					<el-form-item label="您是否有吸烟史" prop="i1">
						<el-radio v-model="iForm.i1" label="1">是</el-radio>
						<el-radio v-model="iForm.i1" label="0">否</el-radio>
					</el-form-item>
					<p>如果是：</p>
					<el-form-item label="吸烟多少年" prop="i1_1">
						<el-input v-model="iForm.i1_1"></el-input>
					</el-form-item>
					<el-form-item label="吸烟量多少支/日" prop="i1_2">
						<el-input v-model="iForm.i1_2"></el-input>
					</el-form-item>
					<el-form-item label="是否已经戒烟" prop="i1_3">
						<el-radio v-model="iForm.i1_3" label="1">是</el-radio>
						<el-radio v-model="iForm.i1_3" label="0">否</el-radio>
					</el-form-item>
					<el-form-item label="戒烟多少年了">
						<el-input v-model="iForm.i1_4"></el-input>
					</el-form-item>
					<el-form-item
						label="您戒烟的原因是（尽量单选，重要性相当时可多选）"
						prop="i1_5"
					>
						<el-checkbox-group v-model="iForm.i1_5">
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
						label="您每周在家里、工作的地方及室内公共场所接触二手烟（至少15分钟）的天数是"
						prop="i1_6"
					>
						<el-radio v-model="iForm.i1_6" label="1">每天</el-radio>
						<el-radio v-model="iForm.i1_6" label="2">4-6天/周</el-radio>
						<el-radio v-model="iForm.i1_6" label="3">1-3天/周</el-radio>
						<el-radio v-model="iForm.i1_6" label="4">小于1天/周</el-radio>
						<el-radio v-model="iForm.i1_6" label="5">没有</el-radio>
						<el-radio v-model="iForm.i1_6" label="6">不知道/不清楚</el-radio>
					</el-form-item>
					<el-form-item
						label="近一年，您经常饮酒吗（每周至少一次，并且持续超过6个月）"
						prop="i2"
					>
						<el-radio v-model="iForm.i2" label="1">是的，经常喝</el-radio>
						<el-radio v-model="iForm.i2" label="2"
							>以前经常喝，现在偶尔喝</el-radio
						>
						<el-radio v-model="iForm.i2" label="3"
							>以前经常喝，现在不喝</el-radio
						>
						<el-radio v-model="iForm.i2" label="4">偶尔喝</el-radio>
						<el-radio v-model="iForm.i2" label="5">从不喝</el-radio>
					</el-form-item>
					<el-form-item label="您是从几岁开始喝酒的" prop="i2_1">
						<el-input v-model="iForm.i2_1"></el-input>
					</el-form-item>
					<el-form-item label="通常一天喝多少？" prop="i2_2">
						<el-input v-model="iForm.i2_2"></el-input>
					</el-form-item>
					<el-form-item
						label="您戒酒的原因是（尽量单选，重要性相当时可多选）"
						prop="i2_3"
					>
						<el-checkbox-group v-model="iForm.i2_3">
							<el-checkbox label="1">身体疾病原因/医生建议</el-checkbox>
							<el-checkbox label="2">家人朋友反对</el-checkbox>
							<el-checkbox label="3">经济原因</el-checkbox>
							<el-checkbox label="4"
								>电视、报纸、包装等的健康提示语</el-checkbox
							>
							<el-checkbox label="5">其他</el-checkbox>
						</el-checkbox-group>
					</el-form-item>
					<el-form-item label="最近一次戒酒是几岁" prop="i2_4">
						<el-input v-model="iForm.i2_4"></el-input>
					</el-form-item>
					<el-form-item
						label="近一年，您经常喝茶吗（每周至少一次，并且持续超过6个月）"
						prop="i3"
					>
						<el-radio v-model="iForm.i3" label="1">是的，经常喝</el-radio>
						<el-radio v-model="iForm.i3" label="2"
							>以前经常喝，现在偶尔喝</el-radio
						>
						<el-radio v-model="iForm.i3" label="3"
							>以前经常喝，现在不喝</el-radio
						>
						<el-radio v-model="iForm.i3" label="4">偶尔喝</el-radio>
						<el-radio v-model="iForm.i3" label="5">从不喝</el-radio>
					</el-form-item>
					<el-form-item label="您是从几岁开始经常喝茶的" prop="i3_1">
						<el-input v-model="iForm.i3_1"></el-input>
					</el-form-item>
					<el-form-item label="过去12个月里，您喝茶频率" prop="i3_2">
						<el-radio v-model="iForm.i3_2" label="1">每天</el-radio>
						<el-radio v-model="iForm.i3_2" label="2">5-6天/周</el-radio>
						<el-radio v-model="iForm.i3_2" label="3">3-4天/周</el-radio>
						<el-radio v-model="iForm.i3_2" label="4">1-2天/周</el-radio>
					</el-form-item>
					<el-form-item label="有没有不吃早餐的习惯/情况" prop="i4">
						<el-radio v-model="iForm.i4" label="1">每顿都吃早餐</el-radio>
						<el-radio v-model="iForm.i4" label="2">≤1次/周</el-radio>
						<el-radio v-model="iForm.i4" label="3">2-5次/周</el-radio>
						<el-radio v-model="iForm.i4" label="4">≥6次/周</el-radio>
					</el-form-item>
					<el-form-item
						label="除了早中晚餐，有没有其他规律的进餐习惯（可多选）"
						prop="i5"
					>
						<el-checkbox-group v-model="iForm.i5">
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
						label="过去一个月，有没有暴饮暴食的情况（无法控制摄入量，吃到吃不下为止）"
						prop="i6"
					>
						<el-radio v-model="iForm.i6" label="1">0次</el-radio>
						<el-radio v-model="iForm.i6" label="2">1-2次</el-radio>
						<el-radio v-model="iForm.i6" label="3">3-4次</el-radio>
						<el-radio v-model="iForm.i6" label="4">5-6次</el-radio>
						<el-radio v-model="iForm.i6" label="5">≥7次</el-radio>
					</el-form-item>
					<p>您自我感觉平时饮食口味是？（单选）</p>
					<el-form-item label="是否偏辣？" prop="i7_1">
						<el-radio v-model="iForm.i7_1" label="1">不辣</el-radio>
						<el-radio v-model="iForm.i7_1" label="2">微辣</el-radio>
						<el-radio v-model="iForm.i7_1" label="3">中度辣</el-radio>
						<el-radio v-model="iForm.i7_1" label="4">很辣</el-radio>
						<el-radio v-model="iForm.i7_1" label="5">不确定</el-radio>
					</el-form-item>
					<el-form-item label="多久吃一次辣食？" prop="i7_2">
						<el-radio v-model="iForm.i7_2" label="1">不吃/极少</el-radio>
						<el-radio v-model="iForm.i7_2" label="2">1-3次/月</el-radio>
						<el-radio v-model="iForm.i7_2" label="3">1-2次/周</el-radio>
						<el-radio v-model="iForm.i7_2" label="4">3-5次/周</el-radio>
						<el-radio v-model="iForm.i7_2" label="5">每天</el-radio>
					</el-form-item>
					<el-form-item label="是否偏甜？" prop="i7_3">
						<el-radio v-model="iForm.i7_3" label="1">不甜</el-radio>
						<el-radio v-model="iForm.i7_3" label="2">微甜</el-radio>
						<el-radio v-model="iForm.i7_3" label="3">中度甜</el-radio>
						<el-radio v-model="iForm.i7_3" label="4">很甜</el-radio>
						<el-radio v-model="iForm.i7_3" label="5">不确定</el-radio>
					</el-form-item>
					<el-form-item label="多久吃一次甜食？" prop="i7_4">
						<el-radio v-model="iForm.i7_4" label="1">不吃/极少</el-radio>
						<el-radio v-model="iForm.i7_4" label="2">1-3次/月</el-radio>
						<el-radio v-model="iForm.i7_4" label="3">1-2次/周</el-radio>
						<el-radio v-model="iForm.i7_4" label="4">3-5次/周</el-radio>
						<el-radio v-model="iForm.i7_4" label="5">每天</el-radio>
					</el-form-item>
					<el-form-item label="是否偏咸？" prop="i7_5">
						<el-radio v-model="iForm.i7_5" label="1">不咸，比较清淡</el-radio>
						<el-radio v-model="iForm.i7_5" label="2">一般</el-radio>
						<el-radio v-model="iForm.i7_5" label="3">比较咸</el-radio>
						<el-radio v-model="iForm.i7_5" label="4">很咸</el-radio>
						<el-radio v-model="iForm.i7_5" label="5">不确定</el-radio>
					</el-form-item>
					<el-form-item label="多久吃一次腌菜？" prop="i7_6">
						<el-radio v-model="iForm.i7_6" label="1">不吃/极少</el-radio>
						<el-radio v-model="iForm.i7_6" label="2">1-3次/月</el-radio>
						<el-radio v-model="iForm.i7_6" label="3">1-2次/周</el-radio>
						<el-radio v-model="iForm.i7_6" label="4">3-5次/周</el-radio>
						<el-radio v-model="iForm.i7_6" label="5">每天</el-radio>
					</el-form-item>
					<el-form-item label="是否偏油腻？" prop="i7_7">
						<el-radio v-model="iForm.i7_7" label="1">不油腻，比较清淡</el-radio>
						<el-radio v-model="iForm.i7_7" label="2">一般</el-radio>
						<el-radio v-model="iForm.i7_7" label="3">比较油腻</el-radio>
						<el-radio v-model="iForm.i7_7" label="4">很油腻</el-radio>
						<el-radio v-model="iForm.i7_7" label="5">不确定</el-radio>
					</el-form-item>
					<el-form-item label="多久吃一次油炸食品？" prop="i7_8">
						<el-radio v-model="iForm.i7_8" label="1">不吃/极少</el-radio>
						<el-radio v-model="iForm.i7_8" label="2">1-3次/月</el-radio>
						<el-radio v-model="iForm.i7_8" label="3">1-2次/周</el-radio>
						<el-radio v-model="iForm.i7_8" label="4">3-5次/周</el-radio>
						<el-radio v-model="iForm.i7_8" label="5">每天</el-radio>
					</el-form-item>
					<el-form-item label="平常的饮食偏向下列哪一种" prop="i7_9">
						<el-radio v-model="iForm.i7_9" label="1">素食</el-radio>
						<el-radio v-model="iForm.i7_9" label="2">肉食</el-radio>
						<el-radio v-model="iForm.i7_9" label="3">普通饮食</el-radio>
					</el-form-item>
					<el-form-item label="平时是否吃鱼" prop="i7_10">
						<el-radio v-model="iForm.i7_10" label="1">是</el-radio>
						<el-radio v-model="iForm.i7_10" label="0">否</el-radio>
					</el-form-item>
					<p>如果是，</p>
					<el-form-item label="频率为" prop="i7_10_1">
						<el-radio v-model="iForm.i7_10_1" label="1">每天</el-radio>
						<el-radio v-model="iForm.i7_10_1" label="2">多次/周</el-radio>
						<el-radio v-model="iForm.i7_10_1" label="3">1次/周</el-radio>
						<el-radio v-model="iForm.i7_10_1" label="4">很少</el-radio>
						<el-radio v-model="iForm.i7_10_1" label="5">从不</el-radio>
					</el-form-item>
					<el-form-item label="平时是否吃动物油脂" prop="i7_11">
						<el-radio v-model="iForm.i7_11" label="1">是</el-radio>
						<el-radio v-model="iForm.i7_11" label="0">否</el-radio>
					</el-form-item>
					<p>如果是，</p>
					<el-form-item label="频率为" prop="i7_11_1">
						<el-radio v-model="iForm.i7_11_1" label="1">每天</el-radio>
						<el-radio v-model="iForm.i7_11_1" label="2">多次/周</el-radio>
						<el-radio v-model="iForm.i7_11_1" label="3">1次/周</el-radio>
						<el-radio v-model="iForm.i7_11_1" label="4">很少</el-radio>
						<el-radio v-model="iForm.i7_11_1" label="5">从不</el-radio>
					</el-form-item>
					<el-form-item label="平时是否吃蔬菜" prop="i7_12">
						<el-radio v-model="iForm.i7_12" label="1">是</el-radio>
						<el-radio v-model="iForm.i7_12" label="0">否</el-radio>
					</el-form-item>
					<p>如果是，</p>
					<el-form-item label="频率为" prop="i7_12_1">
						<el-radio v-model="iForm.i7_12_1" label="1">每天</el-radio>
						<el-radio v-model="iForm.i7_12_1" label="2">多次/周</el-radio>
						<el-radio v-model="iForm.i7_12_1" label="3">1次/周</el-radio>
						<el-radio v-model="iForm.i7_12_1" label="4">很少</el-radio>
						<el-radio v-model="iForm.i7_12_1" label="5">从不</el-radio>
					</el-form-item>
					<el-form-item label="平时是否吃水果" prop="i7_13">
						<el-radio v-model="iForm.i7_13" label="1">是</el-radio>
						<el-radio v-model="iForm.i7_13" label="0">否</el-radio>
					</el-form-item>
					<p>如果是，</p>
					<el-form-item label="频率为" prop="i7_13_1">
						<el-radio v-model="iForm.i7_13_1" label="1">每天</el-radio>
						<el-radio v-model="iForm.i7_13_1" label="2">多次/周</el-radio>
						<el-radio v-model="iForm.i7_13_1" label="3">1次/周</el-radio>
						<el-radio v-model="iForm.i7_13_1" label="4">很少</el-radio>
						<el-radio v-model="iForm.i7_13_1" label="5">从不</el-radio>
					</el-form-item>
					<el-form-item label="您排便的频率是？" prop="i8">
						<el-radio v-model="iForm.i8" label="1">一天3次及以上</el-radio>
						<el-radio v-model="iForm.i8" label="2">一天1-2次</el-radio>
						<el-radio v-model="iForm.i8" label="3">两天一次</el-radio>
						<el-radio v-model="iForm.i8" label="4">三天1次或更少</el-radio>
						<el-radio v-model="iForm.i8" label="5">说不清</el-radio>
					</el-form-item>
					<el-form-item label="近三个月，您是否发生过排便困难？" prop="i8_1">
						<el-radio v-model="iForm.i8_1" label="1">总是（>75%）</el-radio>
						<el-radio v-model="iForm.i8_1" label="2">经常（>50%）</el-radio>
						<el-radio v-model="iForm.i8_1" label="3">有时（>25%）</el-radio>
						<el-radio v-model="iForm.i8_1" label="4">很少或基本没有</el-radio>
						<el-radio v-model="iForm.i8_1" label="5">记不清</el-radio>
					</el-form-item>
					<el-form-item label="是否有体育锻炼习惯" prop="i9">
						<el-radio v-model="iForm.i9" label="1">是</el-radio>
						<el-radio v-model="iForm.i9" label="0">否</el-radio>
					</el-form-item>
					<p>如果是，</p>
					<el-form-item label="频率为" prop="i9_1">
						<el-radio v-model="iForm.i9_1" label="1">每天</el-radio>
						<el-radio v-model="iForm.i9_1" label="2">多次/周</el-radio>
						<el-radio v-model="iForm.i9_1" label="3">1次/周</el-radio>
						<el-radio v-model="iForm.i9_1" label="4">很少</el-radio>
						<el-radio v-model="iForm.i9_1" label="5">从不</el-radio>
					</el-form-item>
					<el-form-item label="锻炼方式" prop="i9_2">
						<el-checkbox-group v-model="iForm.i9_2">
							<el-checkbox label="1">散步</el-checkbox>
							<el-checkbox label="2">舞蹈</el-checkbox>
							<el-checkbox label="3">太极拳</el-checkbox>
							<el-checkbox label="4">球类</el-checkbox>
							<el-checkbox label="5">其他</el-checkbox>
						</el-checkbox-group>
					</el-form-item>
					<el-form-item label="锻炼时间" prop="i9_3">
						<el-radio v-model="iForm.i9_3" label="1">半小时/天</el-radio>
						<el-radio v-model="iForm.i9_3" label="2">1小时/天</el-radio>
						<el-radio v-model="iForm.i9_3" label="3">2小时/天</el-radio>
					</el-form-item>
					<el-form-item label="锻炼年限为多少年" prop="i9_4">
						<el-input v-model="iForm.i9_4"></el-input>
					</el-form-item>
					<el-form-item label="是否有智力活动习惯" prop="i10">
						<el-radio v-model="iForm.i10" label="1">是</el-radio>
						<el-radio v-model="iForm.i10" label="0">否</el-radio>
					</el-form-item>
					<p>如果是，</p>
					<el-form-item label="频率为" prop="i10_1">
						<el-radio v-model="iForm.i10_1" label="1">每天</el-radio>
						<el-radio v-model="iForm.i10_1" label="2">多次/周</el-radio>
						<el-radio v-model="iForm.i10_1" label="3">1次/周</el-radio>
						<el-radio v-model="iForm.i10_1" label="4">很少</el-radio>
						<el-radio v-model="iForm.i10_1" label="5">从不</el-radio>
					</el-form-item>
					<el-form-item label="方式为" prop="i10_2">
						<el-checkbox-group v-model="iForm.i10_2">
							<el-checkbox label="1">读书</el-checkbox>
							<el-checkbox label="2">看报</el-checkbox>
							<el-checkbox label="3">棋牌</el-checkbox>
							<el-checkbox label="4">游戏</el-checkbox>
							<el-checkbox label="5">书法</el-checkbox>
							<el-checkbox label="6">绘画</el-checkbox>
							<el-checkbox label="7">其他</el-checkbox>
						</el-checkbox-group>
					</el-form-item>
					<el-form-item label="平时有无失眠" prop="i11">
						<el-radio v-model="iForm.i11" label="1">是</el-radio>
						<el-radio v-model="iForm.i11" label="0">否</el-radio>
					</el-form-item>
					<el-form-item label="入睡时间（关灯后到睡着的时间）" prop="i11_1">
						<el-radio v-model="iForm.i11_1" label="1">没问题</el-radio>
						<el-radio v-model="iForm.i11_1" label="2">轻微延迟</el-radio>
						<el-radio v-model="iForm.i11_1" label="3">显著延迟</el-radio>
						<el-radio v-model="iForm.i11_1" label="4"
							>延迟严重或没有睡觉</el-radio
						>
					</el-form-item>
					<el-form-item label="夜间苏醒" prop="i11_2">
						<el-radio v-model="iForm.i11_2" label="1">没问题</el-radio>
						<el-radio v-model="iForm.i11_2" label="2">轻微影响</el-radio>
						<el-radio v-model="iForm.i11_2" label="3">显著影响</el-radio>
						<el-radio v-model="iForm.i11_2" label="4"
							>严重影响或没有睡觉</el-radio
						>
					</el-form-item>
					<el-form-item label="比期望的时间早醒" prop="i11_3">
						<el-radio v-model="iForm.i11_3" label="1">没问题</el-radio>
						<el-radio v-model="iForm.i11_3" label="2">轻微提早</el-radio>
						<el-radio v-model="iForm.i11_3" label="3">显著提早</el-radio>
						<el-radio v-model="iForm.i11_3" label="4"
							>严重提早或没有睡觉</el-radio
						>
					</el-form-item>
					<el-form-item label="总睡眠时间" prop="i11_4">
						<el-radio v-model="iForm.i11_4" label="1">足够</el-radio>
						<el-radio v-model="iForm.i11_4" label="2">轻微不足</el-radio>
						<el-radio v-model="iForm.i11_4" label="3">显著不足</el-radio>
						<el-radio v-model="iForm.i11_4" label="4"
							>严重不足或没有睡觉</el-radio
						>
					</el-form-item>
					<el-form-item label="总睡眠质量（无论睡多长）" prop="i11_5">
						<el-radio v-model="iForm.i11_5" label="1">满意</el-radio>
						<el-radio v-model="iForm.i11_5" label="2">轻微不满</el-radio>
						<el-radio v-model="iForm.i11_5" label="3">显著不满</el-radio>
						<el-radio v-model="iForm.i11_5" label="4"
							>严重不满或没有睡觉</el-radio
						>
					</el-form-item>
					<el-form-item label="白天情绪" prop="i11_6">
						<el-radio v-model="iForm.i11_6" label="1">正常</el-radio>
						<el-radio v-model="iForm.i11_6" label="2">轻微低落</el-radio>
						<el-radio v-model="iForm.i11_6" label="3">显著低落</el-radio>
						<el-radio v-model="iForm.i11_6" label="4">严重低落</el-radio>
					</el-form-item>
					<el-form-item
						label="白天身体功能（体力或精神：如记忆力、认知力和注意力等）"
						prop="i11_7"
					>
						<el-radio v-model="iForm.i11_7" label="1">足够</el-radio>
						<el-radio v-model="iForm.i11_7" label="2">轻微影响</el-radio>
						<el-radio v-model="iForm.i11_7" label="3">显著影响</el-radio>
						<el-radio v-model="iForm.i11_7" label="4">严重影响</el-radio>
					</el-form-item>
					<el-form-item label="白天思睡" prop="i11_8">
						<el-radio v-model="iForm.i11_8" label="1">无思睡</el-radio>
						<el-radio v-model="iForm.i11_8" label="2">轻微思睡</el-radio>
						<el-radio v-model="iForm.i11_8" label="3">显著思睡</el-radio>
						<el-radio v-model="iForm.i11_8" label="4">严重思睡</el-radio>
					</el-form-item>
					<el-form-item>
						<el-button type="primary" @click.once="submitForm('iForm', 'i')"
							>提交</el-button
						>
						<el-button @click="resetForm('iForm')">重置</el-button>
					</el-form-item>
				</el-form>
			</el-collapse-item>
		</el-collapse>

		<el-collapse v-model="activeNames">
			<el-collapse-item title="主观认知下降调查问卷" name="10">
				<el-form
					style="width: 50%"
					:model="jForm"
					:rules="rules"
					ref="jForm"
					label-width="100px"
					class="demo-ruleForm"
				>
					<el-form-item label="您觉得以下方面哪方面有问题？" prop="j1">
						<el-checkbox-group v-model="jForm.j1">
							<el-checkbox label="1">记忆力</el-checkbox>
							<el-checkbox label="2">语言/找词困难</el-checkbox>
							<el-checkbox label="3">组织能力/计划能力</el-checkbox>
							<el-checkbox label="4">注意力/专心</el-checkbox>
							<el-checkbox label="5">其他认知功能方面</el-checkbox>
						</el-checkbox-group>
					</el-form-item>
					<el-form-item label="你是否觉得你的记性变差了？" prop="j2_1">
						<el-radio v-model="jForm.j2_1" label="1">是</el-radio>
						<el-radio v-model="jForm.j2_1" label="0">否</el-radio>
					</el-form-item>
					<el-form-item label="你是否会担心" prop="j2_1_1">
						<el-radio v-model="jForm.j2_1_1" label="1">是</el-radio>
						<el-radio v-model="jForm.j2_1_1" label="0">否</el-radio>
					</el-form-item>
					<el-form-item
						label="你是否觉得你这方面表现的较同龄人差？"
						prop="j2_1_2"
					>
						<el-radio v-model="jForm.j2_1_2" label="1">是</el-radio>
						<el-radio v-model="jForm.j2_1_2" label="0">否</el-radio>
					</el-form-item>
					<el-form-item label="你觉得什么时候情况变差的？" prop="j2_1_3">
						<el-radio v-model="jForm.j2_1_3" label="1">近6个月内</el-radio>
						<el-radio v-model="jForm.j2_1_3" label="2">近6个月-2年</el-radio>
						<el-radio v-model="jForm.j2_1_3" label="3">2-5年</el-radio>
						<el-radio v-model="jForm.j2_1_3" label="4">超过5年</el-radio>
						<el-radio v-model="jForm.j2_1_3" label="5">不清楚</el-radio>
					</el-form-item>
					<el-form-item label="你是否去看过医生？" prop="j2_1_4">
						<el-radio v-model="jForm.j2_1_4" label="1">是</el-radio>
						<el-radio v-model="jForm.j2_1_4" label="0">否</el-radio>
					</el-form-item>
					<el-form-item
						label="你第一次跟你的医生谈这些问题是什么时候？"
						prop="j2_1_5"
					>
						<el-input v-model="jForm.j2_1_5"></el-input>
					</el-form-item>
					<el-form-item label="你是否比以前更频繁得寻找适合的词？" prop="j2_2">
						<el-radio v-model="jForm.j2_2" label="1">是</el-radio>
						<el-radio v-model="jForm.j2_2" label="0">否</el-radio>
					</el-form-item>
					<el-form-item label="你是否会担心" prop="j2_2_1">
						<el-radio v-model="jForm.j2_2_1" label="1">是</el-radio>
						<el-radio v-model="jForm.j2_2_1" label="0">否</el-radio>
					</el-form-item>
					<el-form-item
						label="你是否觉得你这方面表现的较同龄人差？"
						prop="j2_2_2"
					>
						<el-radio v-model="jForm.j2_2_2" label="1">是</el-radio>
						<el-radio v-model="jForm.j2_2_2" label="0">否</el-radio>
					</el-form-item>
					<el-form-item label="你觉得什么时候情况变差的？" prop="j2_2_3">
						<el-radio v-model="jForm.j2_2_3" label="1">近6个月内</el-radio>
						<el-radio v-model="jForm.j2_2_3" label="2">近6个月-2年</el-radio>
						<el-radio v-model="jForm.j2_2_3" label="3">2-5年</el-radio>
						<el-radio v-model="jForm.j2_2_3" label="4">超过5年</el-radio>
						<el-radio v-model="jForm.j2_2_3" label="5">不清楚</el-radio>
					</el-form-item>
					<el-form-item label="你是否去看过医生？" prop="j2_2_4">
						<el-radio v-model="jForm.j2_2_4" label="1">是</el-radio>
						<el-radio v-model="jForm.j2_2_4" label="0">否</el-radio>
					</el-form-item>
					<el-form-item
						label="你第一次跟你的医生谈这些问题是什么时候？"
						prop="j2_2_5"
					>
						<el-input v-model="jForm.j2_2_5"></el-input>
					</el-form-item>
					<el-form-item
						label="你是否感觉自己在做计划或有序安排事情时越来越困难？"
						prop="j2_3"
					>
						<el-radio v-model="jForm.j2_3" label="1">是</el-radio>
						<el-radio v-model="jForm.j2_3" label="0">否</el-radio>
					</el-form-item>
					<el-form-item label="你是否会担心" prop="j2_3_1">
						<el-radio v-model="jForm.j2_3_1" label="1">是</el-radio>
						<el-radio v-model="jForm.j2_3_1" label="0">否</el-radio>
					</el-form-item>
					<el-form-item
						label="你是否觉得你这方面表现的较同龄人差？"
						prop="j2_3_2"
					>
						<el-radio v-model="jForm.j2_3_2" label="1">是</el-radio>
						<el-radio v-model="jForm.j2_3_2" label="0">否</el-radio>
					</el-form-item>
					<el-form-item label="你觉得什么时候情况变差的？" prop="j2_3_3">
						<el-radio v-model="jForm.j2_3_3" label="1">近6个月内</el-radio>
						<el-radio v-model="jForm.j2_3_3" label="2">近6个月-2年</el-radio>
						<el-radio v-model="jForm.j2_3_3" label="3">2-5年</el-radio>
						<el-radio v-model="jForm.j2_3_3" label="4">超过5年</el-radio>
						<el-radio v-model="jForm.j2_3_3" label="5">不清楚</el-radio>
					</el-form-item>
					<el-form-item label="你是否去看过医生？" prop="j2_3_4">
						<el-radio v-model="jForm.j2_3_4" label="1">是</el-radio>
						<el-radio v-model="jForm.j2_3_4" label="0">否</el-radio>
					</el-form-item>
					<el-form-item
						label="你第一次跟你的医生谈这些问题是什么时候？"
						prop="j2_3_5"
					>
						<el-input v-model="jForm.j2_3_5"></el-input>
					</el-form-item>
					<el-form-item
						label="如果你不专心做一件事时，是否比以前更容易犯错？"
						prop="j2_4"
					>
						<el-radio v-model="jForm.j2_4" label="1">是</el-radio>
						<el-radio v-model="jForm.j2_4" label="0">否</el-radio>
					</el-form-item>
					<el-form-item label="你是否会担心" prop="j2_4_1">
						<el-radio v-model="jForm.j2_4_1" label="1">是</el-radio>
						<el-radio v-model="jForm.j2_4_1" label="0">否</el-radio>
					</el-form-item>
					<el-form-item
						label="你是否觉得你这方面表现的较同龄人差？"
						prop="j2_4_2"
					>
						<el-radio v-model="jForm.j2_4_2" label="1">是</el-radio>
						<el-radio v-model="jForm.j2_4_2" label="0">否</el-radio>
					</el-form-item>
					<el-form-item label="你觉得什么时候情况变差的？" prop="j2_4_3">
						<el-radio v-model="jForm.j2_4_3" label="1">近6个月内</el-radio>
						<el-radio v-model="jForm.j2_4_3" label="2">近6个月-2年</el-radio>
						<el-radio v-model="jForm.j2_4_3" label="3">2-5年</el-radio>
						<el-radio v-model="jForm.j2_4_3" label="4">超过5年</el-radio>
						<el-radio v-model="jForm.j2_4_3" label="5">不清楚</el-radio>
					</el-form-item>
					<el-form-item label="你是否去看过医生？" prop="j2_4_4">
						<el-radio v-model="jForm.j2_4_4" label="1">是</el-radio>
						<el-radio v-model="jForm.j2_4_4" label="0">否</el-radio>
					</el-form-item>
					<el-form-item
						label="你第一次跟你的医生谈这些问题是什么时候？"
						prop="j2_4_5"
					>
						<el-input v-model="jForm.j2_4_5"></el-input>
					</el-form-item>
					<el-form-item label="你是否意识到其他认知方面的问题" prop="j2_5">
						<el-radio v-model="jForm.j2_5" label="1">是</el-radio>
						<el-radio v-model="jForm.j2_5" label="0">否</el-radio>
					</el-form-item>
					<el-form-item label="它们是什么" prop="j2_5_a">
						<el-input v-model="jForm.j2_5_a"></el-input>
					</el-form-item>
					<el-form-item label="你是否会担心" prop="j2_5_1">
						<el-radio v-model="jForm.j2_5_1" label="1">是</el-radio>
						<el-radio v-model="jForm.j2_5_1" label="0">否</el-radio>
					</el-form-item>
					<el-form-item
						label="你是否觉得你这方面表现的较同龄人差？"
						prop="j2_5_2"
					>
						<el-radio v-model="jForm.j2_5_2" label="1">是</el-radio>
						<el-radio v-model="jForm.j2_5_2" label="0">否</el-radio>
					</el-form-item>
					<el-form-item label="你觉得什么时候情况变差的？" prop="j2_5_3">
						<el-radio v-model="jForm.j2_5_3" label="1">近6个月内</el-radio>
						<el-radio v-model="jForm.j2_5_3" label="2">近6个月-2年</el-radio>
						<el-radio v-model="jForm.j2_5_3" label="3">2-5年</el-radio>
						<el-radio v-model="jForm.j2_5_3" label="4">超过5年</el-radio>
						<el-radio v-model="jForm.j2_5_3" label="5">不清楚</el-radio>
					</el-form-item>
					<el-form-item label="你是否去看过医生？" prop="j2_5_4">
						<el-radio v-model="jForm.j2_5_4" label="1">是</el-radio>
						<el-radio v-model="jForm.j2_5_4" label="0">否</el-radio>
					</el-form-item>
					<el-form-item
						label="你第一次跟你的医生谈这些问题是什么时候？"
						prop="j2_5_5"
					>
						<el-input v-model="jForm.j2_5_5"></el-input>
					</el-form-item>
					<el-form-item
						label="需要知情者回答的问题（知情者可以当着受访者的面回答）"
						prop="j3_a"
					>
						<el-radio v-model="jForm.j3_a" label="1">无知情者</el-radio>
						<el-radio v-model="jForm.j3_a" label="2"
							>受访者不希望知情者提供信息</el-radio
						>
					</el-form-item>
					<el-form-item
						label="提供信息的知情者身份：（只可以选择一个）"
						prop="j3_b"
					>
						<el-radio v-model="jForm.j3_b" label="1">配偶</el-radio>
						<el-radio v-model="jForm.j3_b" label="2">孩子</el-radio>
						<el-radio v-model="jForm.j3_b" label="3">兄弟姐妹</el-radio>
						<el-radio v-model="jForm.j3_b" label="4">朋友</el-radio>
						<el-radio v-model="jForm.j3_b" label="5">其他</el-radio>
					</el-form-item>
					<el-form-item label="你是否觉得受访者的记性变差了？" prop="j3_1">
						<el-radio v-model="jForm.j3_1" label="1">是</el-radio>
						<el-radio v-model="jForm.j3_1" label="0">否</el-radio>
					</el-form-item>
					<el-form-item label="减退是从什么时候开始的？" prop="j3_1_1">
						<el-radio v-model="jForm.j3_1_1" label="1">近6个月内</el-radio>
						<el-radio v-model="jForm.j3_1_1" label="2">近6个月-2年</el-radio>
						<el-radio v-model="jForm.j3_1_1" label="3">2-5年</el-radio>
						<el-radio v-model="jForm.j3_1_1" label="4">超过5年</el-radio>
						<el-radio v-model="jForm.j3_1_1" label="5">不清楚</el-radio>
					</el-form-item>
					<el-form-item label="受访者是否比以前要找词困难？" prop="j3_2">
						<el-radio v-model="jForm.j3_2" label="1">是</el-radio>
						<el-radio v-model="jForm.j3_2" label="0">否</el-radio>
					</el-form-item>
					<el-form-item label="减退是从什么时候开始的？" prop="j3_2_1">
						<el-radio v-model="jForm.j3_2_1" label="1">近6个月内</el-radio>
						<el-radio v-model="jForm.j3_2_1" label="2">近6个月-2年</el-radio>
						<el-radio v-model="jForm.j3_2_1" label="3">2-5年</el-radio>
						<el-radio v-model="jForm.j3_2_1" label="4">超过5年</el-radio>
						<el-radio v-model="jForm.j3_2_1" label="5">不清楚</el-radio>
					</el-form-item>
					<el-form-item
						label="受访者是否越来越难做计划、有序安排事情？"
						prop="j3_3"
					>
						<el-radio v-model="jForm.j3_3" label="1">是</el-radio>
						<el-radio v-model="jForm.j3_3" label="0">否</el-radio>
					</el-form-item>
					<el-form-item label="减退是从什么时候开始的？" prop="j3_3_1">
						<el-radio v-model="jForm.j3_3_1" label="1">近6个月内</el-radio>
						<el-radio v-model="jForm.j3_3_1" label="2">近6个月-2年</el-radio>
						<el-radio v-model="jForm.j3_3_1" label="3">2-5年</el-radio>
						<el-radio v-model="jForm.j3_3_1" label="4">超过5年</el-radio>
						<el-radio v-model="jForm.j3_3_1" label="5">不清楚</el-radio>
					</el-form-item>
					<el-form-item
						label="如果受访者不专心做一件事情时是否比以前更容易犯错？"
						prop="j3_4"
					>
						<el-radio v-model="jForm.j3_4" label="1">是</el-radio>
						<el-radio v-model="jForm.j3_4" label="0">否</el-radio>
					</el-form-item>
					<el-form-item label="减退是从什么时候开始的？" prop="j3_4_1">
						<el-radio v-model="jForm.j3_4_1" label="1">近6个月内</el-radio>
						<el-radio v-model="jForm.j3_4_1" label="2">近6个月-2年</el-radio>
						<el-radio v-model="jForm.j3_4_1" label="3">2-5年</el-radio>
						<el-radio v-model="jForm.j3_4_1" label="4">超过5年</el-radio>
						<el-radio v-model="jForm.j3_4_1" label="5">不清楚</el-radio>
					</el-form-item>
					<el-form-item label="受访者在其他认知方面是否变差？" prop="j3_5">
						<el-radio v-model="jForm.j3_5" label="1">是</el-radio>
						<el-radio v-model="jForm.j3_5" label="0">否</el-radio>
					</el-form-item>
					<el-form-item label="是哪些方面？" prop="j3_5_a">
						<el-input v-model="jForm.j3_5_a"></el-input>
					</el-form-item>
					<el-form-item label="减退是从什么时候开始的？" prop="j3_5_1">
						<el-radio v-model="jForm.j3_5_1" label="1">近6个月内</el-radio>
						<el-radio v-model="jForm.j3_5_1" label="2">近6个月-2年</el-radio>
						<el-radio v-model="jForm.j3_5_1" label="3">2-5年</el-radio>
						<el-radio v-model="jForm.j3_5_1" label="4">超过5年</el-radio>
						<el-radio v-model="jForm.j3_5_1" label="5">不清楚</el-radio>
					</el-form-item>
					<el-form-item label="受访者行为或性格是否有变化？" prop="j3_6">
						<el-radio v-model="jForm.j3_6" label="1">是</el-radio>
						<el-radio v-model="jForm.j3_6" label="0">否</el-radio>
					</el-form-item>
					<el-form-item>
						<el-button type="primary" @click.once="submitForm('jForm', 'j')"
							>提交</el-button
						>
						<el-button @click="resetForm('jForm')">重置</el-button>
					</el-form-item>
				</el-form>
			</el-collapse-item>
		</el-collapse>

		<el-collapse v-model="activeNames">
			<el-collapse-item title="简易精神状态量表(MMSE)" name="11">
				<el-form
					style="width: 50%"
					:model="h1Form"
					:rules="rules"
					ref="h1Form"
					label-width="100px"
					class="demo-ruleForm"
				>
					<el-form-item label="现在是哪一年？" prop="h11">
						<el-radio v-model="h1Form.h11" label="1">正确</el-radio>
						<el-radio v-model="h1Form.h11" label="0">错误</el-radio>
					</el-form-item>
					<el-form-item label="什么季节？" prop="h12">
						<el-radio v-model="h1Form.h12" label="1">正确</el-radio>
						<el-radio v-model="h1Form.h12" label="0">错误</el-radio>
					</el-form-item>
					<el-form-item label="几月份？" prop="h13">
						<el-radio v-model="h1Form.h13" label="1">正确</el-radio>
						<el-radio v-model="h1Form.h13" label="0">错误</el-radio>
					</el-form-item>
					<el-form-item label="几号？" prop="h14">
						<el-radio v-model="h1Form.h14" label="1">正确</el-radio>
						<el-radio v-model="h1Form.h14" label="0">错误</el-radio>
					</el-form-item>
					<el-form-item label="星期几？">
						<el-radio v-model="h1Form.h15" label="1">正确</el-radio>
						<el-radio v-model="h1Form.h15" label="0">错误</el-radio>
					</el-form-item>
					<el-form-item label="什么城市？" prop="h16">
						<el-radio v-model="h1Form.h16" label="1">正确</el-radio>
						<el-radio v-model="h1Form.h16" label="0">错误</el-radio>
					</el-form-item>
					<el-form-item label="街区？" prop="h17">
						<el-radio v-model="h1Form.h17" label="1">正确</el-radio>
						<el-radio v-model="h1Form.h17" label="0">错误</el-radio>
					</el-form-item>
					<el-form-item label="街道？" prop="h18">
						<el-radio v-model="h1Form.h18" label="1">正确</el-radio>
						<el-radio v-model="h1Form.h18" label="0">错误</el-radio>
					</el-form-item>
					<el-form-item label="几层楼？" prop="h19">
						<el-radio v-model="h1Form.h19" label="1">正确</el-radio>
						<el-radio v-model="h1Form.h19" label="0">错误</el-radio>
					</el-form-item>
					<el-form-item label="什么地方" prop="h110">
						<el-radio v-model="h1Form.h110" label="1">正确</el-radio>
						<el-radio v-model="h1Form.h110" label="0">错误</el-radio>
					</el-form-item>
					<h1 style="font-weight: normal">
						下面我说3样东西，请重复并记住，后面还需要你回答（皮球、国旗、树木）
					</h1>
					<el-form-item label="皮球" prop="h111">
						<el-radio v-model="h1Form.h111" label="1">正确</el-radio>
						<el-radio v-model="h1Form.h111" label="0">错误</el-radio>
					</el-form-item>
					<el-form-item label="国旗" prop="h112">
						<el-radio v-model="h1Form.h112" label="1">正确</el-radio>
						<el-radio v-model="h1Form.h112" label="0">错误</el-radio>
					</el-form-item>
					<el-form-item label="树木" prop="h113">
						<el-radio v-model="h1Form.h113" label="1">正确</el-radio>
						<el-radio v-model="h1Form.h113" label="0">错误</el-radio>
					</el-form-item>
					<h1 style="font-weight: normal">
						现在请您算一算，100减去7，所得的数再减7，一直算下去，将每次的得数都告诉我，直到我说“停”为止。
					</h1>
					<el-form-item label="100-7=93" prop="h114">
						<el-radio v-model="h1Form.h114" label="1">正确</el-radio>
						<el-radio v-model="h1Form.h114" label="0">错误</el-radio>
					</el-form-item>
					<el-form-item label="93-7=86" prop="h115">
						<el-radio v-model="h1Form.h115" label="1">正确</el-radio>
						<el-radio v-model="h1Form.h115" label="0">错误</el-radio>
					</el-form-item>
					<el-form-item label="86-7=79" prop="h116">
						<el-radio v-model="h1Form.h116" label="1">正确</el-radio>
						<el-radio v-model="h1Form.h116" label="0">错误</el-radio>
					</el-form-item>
					<el-form-item label="79-7=72" prop="h117">
						<el-radio v-model="h1Form.h117" label="1">正确</el-radio>
						<el-radio v-model="h1Form.h117" label="0">错误</el-radio>
					</el-form-item>
					<el-form-item label="72-7=65" prop="h118">
						<el-radio v-model="h1Form.h118" label="1">正确</el-radio>
						<el-radio v-model="h1Form.h118" label="0">错误</el-radio>
					</el-form-item>
					<h1 style="font-weight: normal">
						刚才我让您记了三种东西，现在请您回忆一下是哪三种东西？
					</h1>
					<el-form-item label="皮球" prop="h119">
						<el-radio v-model="h1Form.h119" label="1">正确</el-radio>
						<el-radio v-model="h1Form.h119" label="0">错误</el-radio>
					</el-form-item>
					<el-form-item label="国旗" prop="h120">
						<el-radio v-model="h1Form.h120" label="1">正确</el-radio>
						<el-radio v-model="h1Form.h120" label="0">错误</el-radio>
					</el-form-item>
					<el-form-item label="树木" prop="h121">
						<el-radio v-model="h1Form.h121" label="1">正确</el-radio>
						<el-radio v-model="h1Form.h121" label="0">错误</el-radio>
					</el-form-item>
					<el-form-item label="（检查者出示手表）这叫什么？" prop="h122">
						<el-radio v-model="h1Form.h122" label="1">正确</el-radio>
						<el-radio v-model="h1Form.h122" label="0">错误</el-radio>
					</el-form-item>
					<el-form-item label="（检查者出示铅笔）这叫什么" prop="h123">
						<el-radio v-model="h1Form.h123" label="1">正确</el-radio>
						<el-radio v-model="h1Form.h123" label="0">错误</el-radio>
					</el-form-item>
					<el-form-item label="跟我说：“大家齐心协力拉紧绳。”" prop="h124">
						<el-radio v-model="h1Form.h124" label="1">正确</el-radio>
						<el-radio v-model="h1Form.h124" label="0">错误</el-radio>
					</el-form-item>
					<el-form-item label="我说你做：“请闭上您的眼睛。”" prop="h125">
						<el-radio v-model="h1Form.h125" label="1">正确</el-radio>
						<el-radio v-model="h1Form.h125" label="0">错误</el-radio>
					</el-form-item>
					<h1 style="font-weight: normal">
						给您一张纸，请按我说的做：“用右手拿着这张纸，双手把它对折起来，放在您的左腿上”。现在开始。
					</h1>
					<el-form-item label="右手拿纸" prop="h126">
						<el-radio v-model="h1Form.h126" label="1">正确</el-radio>
						<el-radio v-model="h1Form.h126" label="0">错误</el-radio>
					</el-form-item>
					<el-form-item label="双手对折" prop="h127">
						<el-radio v-model="h1Form.h127" label="1">正确</el-radio>
						<el-radio v-model="h1Form.h127" label="0">错误</el-radio>
					</el-form-item>
					<el-form-item label="放到左腿上" prop="h128">
						<el-radio v-model="h1Form.h128" label="1">正确</el-radio>
						<el-radio v-model="h1Form.h128" label="0">错误</el-radio>
					</el-form-item>
					<el-form-item label="请说一个完整的句子：" prop="h129">
						<el-radio v-model="h1Form.h129" label="1">正确</el-radio>
						<el-radio v-model="h1Form.h129" label="0">错误</el-radio>
					</el-form-item>
					<h1 style="font-weight: normal">
						必需画出10个角，2个五边形交叉，交叉图形呈四边形方能得分，线条不平滑可忽略。
					</h1>
					<el-form-item label="照着这个图画图" prop="h130">
						<el-radio v-model="h1Form.h130" label="1">正确</el-radio>
						<el-radio v-model="h1Form.h130" label="0">错误</el-radio>
					</el-form-item>
					<el-form-item>
						<el-button type="primary" @click.once="submitForm('h1Form', 'h1')"
							>提交</el-button
						>
						<el-button @click="resetForm('h1Form')">重置</el-button>
					</el-form-item>
				</el-form>
			</el-collapse-item>
		</el-collapse>

		<el-collapse v-model="activeNames">
			<el-collapse-item title="老年抑郁量表（GDS）" name="12">
				<el-form
					style="width: 50%"
					:model="h2Form"
					:rules="rules"
					ref="h2Form"
					label-width="100px"
					class="demo-ruleForm"
				>
					<el-form-item label="你对你的生活基本满意吗?" prop="h21">
						<el-radio v-model="h2Form.h21" label="1">满意</el-radio>
						<el-radio v-model="h2Form.h21" label="0">不满意</el-radio>
					</el-form-item>
					<el-form-item label="你是否己经放弃了许多爱好与兴趣？" prop="h22">
						<el-radio v-model="h2Form.h22" label="1">是</el-radio>
						<el-radio v-model="h2Form.h22" label="0">否</el-radio>
					</el-form-item>
					<el-form-item label="你是否觉得生活空虚?" prop="h23">
						<el-radio v-model="h2Form.h23" label="1">是</el-radio>
						<el-radio v-model="h2Form.h23" label="0">否</el-radio>
					</el-form-item>
					<el-form-item label="你是否感到厌倦?" prop="h24">
						<el-radio v-model="h2Form.h24" label="1">是</el-radio>
						<el-radio v-model="h2Form.h24" label="0">否</el-radio>
					</el-form-item>
					<el-form-item label="你是否大部分时间精力充沛?" prop="h25">
						<el-radio v-model="h2Form.h25" label="1">是</el-radio>
						<el-radio v-model="h2Form.h25" label="0">否</el-radio>
					</el-form-item>
					<el-form-item label="你是否害怕会有不幸的事落到你头上?" prop="h26">
						<el-radio v-model="h2Form.h26" label="1">是</el-radio>
						<el-radio v-model="h2Form.h26" label="0">否</el-radio>
					</el-form-item>
					<el-form-item label="你是否大部分时间感到幸福?" prop="h27">
						<el-radio v-model="h2Form.h27" label="1">是</el-radio>
						<el-radio v-model="h2Form.h27" label="0">否</el-radio>
					</el-form-item>
					<el-form-item label="你是否经常感到孤立无援?" prop="h28">
						<el-radio v-model="h2Form.h28" label="1">是</el-radio>
						<el-radio v-model="h2Form.h28" label="0">否</el-radio>
					</el-form-item>
					<el-form-item
						label="你是否愿意呆在家里而不愿去室外做且新鲜事?"
						prop="h29"
					>
						<el-radio v-model="h2Form.h29" label="1">是</el-radio>
						<el-radio v-model="h2Form.h29" label="0">否</el-radio>
					</el-form-item>
					<el-form-item label="你是否觉得记忆力比以前差?" prop="h210">
						<el-radio v-model="h2Form.h210" label="1">是</el-radio>
						<el-radio v-model="h2Form.h210" label="0">否</el-radio>
					</el-form-item>
					<el-form-item label="你觉得现在活着很开心吗?" prop="h211">
						<el-radio v-model="h2Form.h211" label="1">开心</el-radio>
						<el-radio v-model="h2Form.h211" label="0">不开心</el-radio>
					</el-form-item>
					<el-form-item label="你是否觉得像现在这样活着毫无意义?" prop="h212">
						<el-radio v-model="h2Form.h212" label="1">是</el-radio>
						<el-radio v-model="h2Form.h212" label="0">否</el-radio>
					</el-form-item>
					<el-form-item label="你觉得生活充满活力吗?" prop="h213">
						<el-radio v-model="h2Form.h213" label="1">是</el-radio>
						<el-radio v-model="h2Form.h213" label="0">否</el-radio>
					</el-form-item>
					<el-form-item label="你是否觉得你的处境己毫无希望?" prop="h214">
						<el-radio v-model="h2Form.h214" label="1">是</el-radio>
						<el-radio v-model="h2Form.h214" label="0">否</el-radio>
					</el-form-item>
					<el-form-item label="你是否觉得大多数人比你强得多?" prop="h215">
						<el-radio v-model="h2Form.h215" label="1">是</el-radio>
						<el-radio v-model="h2Form.h215" label="0">否</el-radio>
					</el-form-item>
					<el-form-item>
						<el-button type="primary" @click.once="submitForm('h2Form', 'h2')"
							>提交</el-button
						>
						<el-button @click="resetForm('h2Form')">重置</el-button>
					</el-form-item>
				</el-form>
			</el-collapse-item>
		</el-collapse>

		<el-collapse v-model="activeNames">
			<el-collapse-item title="日常生活能力量表（ADL）" name="13">
				<el-form
					style="width: 50%"
					:model="h3Form"
					:rules="rules"
					ref="h3Form"
					label-width="100px"
					class="demo-ruleForm"
				>
					<el-form-item label="做饭" prop="h31">
						<el-radio v-model="h3Form.h31" label="1">完全自理</el-radio>
						<el-radio v-model="h3Form.h31" label="2">有些困难</el-radio>
						<el-radio v-model="h3Form.h31" label="3">需要帮助</el-radio>
						<el-radio v-model="h3Form.h31" label="4">无法完成</el-radio>
					</el-form-item>
					<el-form-item label="穿脱衣服" prop="h32">
						<el-radio v-model="h3Form.h32" label="1">完全自理</el-radio>
						<el-radio v-model="h3Form.h32" label="2">有些困难</el-radio>
						<el-radio v-model="h3Form.h32" label="3">需要帮助</el-radio>
						<el-radio v-model="h3Form.h32" label="4">无法完成</el-radio>
					</el-form-item>
					<el-form-item label="洗漱" prop="h33">
						<el-radio v-model="h3Form.h33" label="1">完全自理</el-radio>
						<el-radio v-model="h3Form.h33" label="2">有些困难</el-radio>
						<el-radio v-model="h3Form.h33" label="3">需要帮助</el-radio>
						<el-radio v-model="h3Form.h33" label="4">无法完成</el-radio>
					</el-form-item>
					<el-form-item label="上下床、坐下或站起" prop="h34">
						<el-radio v-model="h3Form.h34" label="1">完全自理</el-radio>
						<el-radio v-model="h3Form.h34" label="2">有些困难</el-radio>
						<el-radio v-model="h3Form.h34" label="3">需要帮助</el-radio>
						<el-radio v-model="h3Form.h34" label="4">无法完成</el-radio>
					</el-form-item>
					<el-form-item label="室内走动" prop="h35">
						<el-radio v-model="h3Form.h35" label="1">完全自理</el-radio>
						<el-radio v-model="h3Form.h35" label="2">有些困难</el-radio>
						<el-radio v-model="h3Form.h35" label="3">需要帮助</el-radio>
						<el-radio v-model="h3Form.h35" label="4">无法完成</el-radio>
					</el-form-item>
					<el-form-item label="上厕所" prop="h36">
						<el-radio v-model="h3Form.h36" label="1">完全自理</el-radio>
						<el-radio v-model="h3Form.h36" label="2">有些困难</el-radio>
						<el-radio v-model="h3Form.h36" label="3">需要帮助</el-radio>
						<el-radio v-model="h3Form.h36" label="4">无法完成</el-radio>
					</el-form-item>
					<el-form-item label="大小便控制" prop="h37">
						<el-radio v-model="h3Form.h37" label="1">完全自理</el-radio>
						<el-radio v-model="h3Form.h37" label="2">有些困难</el-radio>
						<el-radio v-model="h3Form.h37" label="3">需要帮助</el-radio>
						<el-radio v-model="h3Form.h37" label="4">无法完成</el-radio>
					</el-form-item>
					<el-form-item label="洗澡" prop="h38">
						<el-radio v-model="h3Form.h38" label="1">完全自理</el-radio>
						<el-radio v-model="h3Form.h38" label="2">有些困难</el-radio>
						<el-radio v-model="h3Form.h38" label="3">需要帮助</el-radio>
						<el-radio v-model="h3Form.h38" label="4">无法完成</el-radio>
					</el-form-item>
					<el-form-item label="自己搭乘公共汽车" prop="h39">
						<el-radio v-model="h3Form.h39" label="1">完全自理</el-radio>
						<el-radio v-model="h3Form.h39" label="2">有些困难</el-radio>
						<el-radio v-model="h3Form.h39" label="3">需要帮助</el-radio>
						<el-radio v-model="h3Form.h39" label="4">无法完成</el-radio>
					</el-form-item>
					<el-form-item label="在住地附近活动" prop="h310">
						<el-radio v-model="h3Form.h310" label="1">完全自理</el-radio>
						<el-radio v-model="h3Form.h310" label="2">有些困难</el-radio>
						<el-radio v-model="h3Form.h310" label="3">需要帮助</el-radio>
						<el-radio v-model="h3Form.h310" label="4">无法完成</el-radio>
					</el-form-item>
					<el-form-item label="自己做饭" prop="h311">
						<el-radio v-model="h3Form.h311" label="1">完全自理</el-radio>
						<el-radio v-model="h3Form.h311" label="2">有些困难</el-radio>
						<el-radio v-model="h3Form.h311" label="3">需要帮助</el-radio>
						<el-radio v-model="h3Form.h311" label="4">无法完成</el-radio>
					</el-form-item>
					<el-form-item
						label="吃药（能记住按时服药，且能服用正确的药）"
						prop="h312"
					>
						<el-radio v-model="h3Form.h312" label="1">完全自理</el-radio>
						<el-radio v-model="h3Form.h312" label="2">有些困难</el-radio>
						<el-radio v-model="h3Form.h312" label="3">需要帮助</el-radio>
						<el-radio v-model="h3Form.h312" label="4">无法完成</el-radio>
					</el-form-item>
					<el-form-item label="一般轻家务（如扫地，擦桌子等）" prop="h313">
						<el-radio v-model="h3Form.h313" label="1">完全自理</el-radio>
						<el-radio v-model="h3Form.h313" label="2">有些困难</el-radio>
						<el-radio v-model="h3Form.h313" label="3">需要帮助</el-radio>
						<el-radio v-model="h3Form.h313" label="4">无法完成</el-radio>
					</el-form-item>
					<el-form-item label="较重家务（如擦地擦窗，搬东西）" prop="h314">
						<el-radio v-model="h3Form.h314" label="1">完全自理</el-radio>
						<el-radio v-model="h3Form.h314" label="2">有些困难</el-radio>
						<el-radio v-model="h3Form.h314" label="3">需要帮助</el-radio>
						<el-radio v-model="h3Form.h314" label="4">无法完成</el-radio>
					</el-form-item>
					<el-form-item label="洗自己的衣服" prop="h315">
						<el-radio v-model="h3Form.h315" label="1">完全自理</el-radio>
						<el-radio v-model="h3Form.h315" label="2">有些困难</el-radio>
						<el-radio v-model="h3Form.h315" label="3">需要帮助</el-radio>
						<el-radio v-model="h3Form.h315" label="4">无法完成</el-radio>
					</el-form-item>
					<el-form-item label="剪脚趾甲" prop="h316">
						<el-radio v-model="h3Form.h316" label="1">完全自理</el-radio>
						<el-radio v-model="h3Form.h316" label="2">有些困难</el-radio>
						<el-radio v-model="h3Form.h316" label="3">需要帮助</el-radio>
						<el-radio v-model="h3Form.h316" label="4">无法完成</el-radio>
					</el-form-item>
					<el-form-item label="购物" prop="h317">
						<el-radio v-model="h3Form.h317" label="1">完全自理</el-radio>
						<el-radio v-model="h3Form.h317" label="2">有些困难</el-radio>
						<el-radio v-model="h3Form.h317" label="3">需要帮助</el-radio>
						<el-radio v-model="h3Form.h317" label="4">无法完成</el-radio>
					</el-form-item>
					<el-form-item label="使用电话（必须会拨号）" prop="h318">
						<el-radio v-model="h3Form.h318" label="1">完全自理</el-radio>
						<el-radio v-model="h3Form.h318" label="2">有些困难</el-radio>
						<el-radio v-model="h3Form.h318" label="3">需要帮助</el-radio>
						<el-radio v-model="h3Form.h318" label="4">无法完成</el-radio>
					</el-form-item>
					<el-form-item
						label="管理个人钱财（即自己能买东西、找零钱、算钱等）"
						prop="h319"
					>
						<el-radio v-model="h3Form.h319" label="1">完全自理</el-radio>
						<el-radio v-model="h3Form.h319" label="2">有些困难</el-radio>
						<el-radio v-model="h3Form.h319" label="3">需要帮助</el-radio>
						<el-radio v-model="h3Form.h319" label="4">无法完成</el-radio>
					</el-form-item>
					<el-form-item label="独自在家（是否能独自在家呆一天）" prop="h320">
						<el-radio v-model="h3Form.h320" label="1">完全自理</el-radio>
						<el-radio v-model="h3Form.h320" label="2">有些困难</el-radio>
						<el-radio v-model="h3Form.h320" label="3">需要帮助</el-radio>
						<el-radio v-model="h3Form.h320" label="4">无法完成</el-radio>
					</el-form-item>
					<el-form-item>
						<el-button type="primary" @click.once="submitForm('h3Form', 'h3')"
							>提交</el-button
						>
						<el-button @click="resetForm('h3Form')">重置</el-button>
					</el-form-item>
				</el-form>
			</el-collapse-item>
		</el-collapse>

		<el-collapse v-model="activeNames">
			<el-collapse-item title="老年抑郁量表（GDS）" name="14">
				<el-form
					style="width: 50%"
					:model="h4Form"
					:rules="rules"
					ref="h4Form"
					label-width="100px"
					class="demo-ruleForm"
				>
					<el-form-item label="妄想" prop="h41">
						<el-radio v-model="h4Form.h41" label="1">有</el-radio>
						<el-radio v-model="h4Form.h41" label="0">无</el-radio>
					</el-form-item>
					<el-form-item label="幻觉" prop="h42">
						<el-radio v-model="h4Form.h42" label="1">有</el-radio>
						<el-radio v-model="h4Form.h42" label="0">无</el-radio>
					</el-form-item>
					<el-form-item label="激越/攻击性" prop="h43">
						<el-radio v-model="h4Form.h43" label="1">有</el-radio>
						<el-radio v-model="h4Form.h43" label="0">无</el-radio>
					</el-form-item>
					<el-form-item label="抑郁/心境恶劣" prop="h44">
						<el-radio v-model="h4Form.h44" label="1">有</el-radio>
						<el-radio v-model="h4Form.h44" label="0">无</el-radio>
					</el-form-item>
					<el-form-item label="焦虑" prop="h45">
						<el-radio v-model="h4Form.h45" label="1">有</el-radio>
						<el-radio v-model="h4Form.h45" label="0">无</el-radio>
					</el-form-item>
					<el-form-item label="情绪高涨/欣快" prop="h46">
						<el-radio v-model="h4Form.h46" label="1">有</el-radio>
						<el-radio v-model="h4Form.h46" label="0">无</el-radio>
					</el-form-item>
					<el-form-item label="情绪淡漠" prop="h47">
						<el-radio v-model="h4Form.h47" label="1">有</el-radio>
						<el-radio v-model="h4Form.h47" label="0">无</el-radio>
					</el-form-item>
					<el-form-item label="去抑制" prop="h48">
						<el-radio v-model="h4Form.h48" label="1">有</el-radio>
						<el-radio v-model="h4Form.h48" label="0">无</el-radio>
					</el-form-item>
					<el-form-item label="易激惹/不稳定" prop="h49">
						<el-radio v-model="h4Form.h49" label="1">有</el-radio>
						<el-radio v-model="h4Form.h49" label="0">无</el-radio>
					</el-form-item>
					<el-form-item label="异常运动行为" prop="h410">
						<el-radio v-model="h4Form.h410" label="1">有</el-radio>
						<el-radio v-model="h4Form.h410" label="0">无</el-radio>
					</el-form-item>
					<el-form-item label="睡眠/夜间行为" prop="h411">
						<el-radio v-model="h4Form.h411" label="1">有</el-radio>
						<el-radio v-model="h4Form.h411" label="0">无</el-radio>
					</el-form-item>
					<el-form-item label="食欲和进食障碍" prop="h412">
						<el-radio v-model="h4Form.h412" label="1">有</el-radio>
						<el-radio v-model="h4Form.h412" label="0">无</el-radio>
					</el-form-item>
					<el-form-item>
						<el-button type="primary" @click.once="submitForm('h4Form', 'h4')"
							>提交</el-button
						>
						<el-button @click="resetForm('h4Form')">重置</el-button>
					</el-form-item>
				</el-form>
			</el-collapse-item>
		</el-collapse>

		<el-collapse v-model="activeNames">
			<el-collapse-item title="蒙特利尔认知评估基础量表(MoCA)" name="15">
				<el-form
					style="width: 50%"
					:model="h5Form"
					:rules="rules"
					ref="h5Form"
					label-width="100px"
					class="demo-ruleForm"
				>
					<el-form-item label="执行功能得分（1分）" prop="h51">
						<el-input v-model="h5Form.h51"></el-input>
					</el-form-item>
					<el-form-item
						label="流畅性得分（2分）≤7为0，8-12为1，≥13为2"
						prop="h52"
					>
						<el-input v-model="h5Form.h52"></el-input>
					</el-form-item>
					<el-form-item label="定向得分（6分）" prop="h53">
						<el-input v-model="h5Form.h53"></el-input>
					</el-form-item>
					<el-form-item label="计算得分（3分）" prop="h54">
						<el-input v-model="h5Form.h54"></el-input>
					</el-form-item>
					<el-form-item label="抽象得分（3分）">
						<el-input v-model="h5Form.h55"></el-input>
					</el-form-item>
					<el-form-item label="延迟回忆得分（5分）" prop="h56">
						<el-input v-model="h5Form.h56"></el-input>
					</el-form-item>
					<el-form-item label="视知觉得分（3分）" prop="h57">
						<el-input v-model="h5Form.h57"></el-input>
					</el-form-item>
					<el-form-item label="命名得分（4分）">
						<el-input v-model="h5Form.h58"></el-input>
					</el-form-item>
					<el-form-item label="注意力一得分（1分）">
						<el-input v-model="h5Form.h59"></el-input>
					</el-form-item>
					<el-form-item label="注意力二得分（2分）" prop="h510">
						<el-input v-model="h5Form.h510"></el-input>
					</el-form-item>
					<el-form-item>
						<el-button type="primary" @click.once="submitForm('h5Form', 'h5')"
							>提交</el-button
						>
						<el-button @click="resetForm('h5Form')">重置</el-button>
					</el-form-item>
				</el-form>
			</el-collapse-item>
		</el-collapse>

    <el-collapse v-model="activeNames">
			<el-collapse-item title="词语流畅性（VFT）" name="16">
				<el-form
					style="width: 50%"
					:model="h6Form"
					:rules="rules"
					ref="h6Form"
					label-width="100px"
					class="demo-ruleForm"
				>
					<h1 style="font-weight: normal">
						流畅性 在一分钟内尽可能多的说出动物的名字。
					</h1>
					<el-form-item label="1-15秒" prop="h61">
						<el-input v-model="h6Form.h61"></el-input>
					</el-form-item>
					<el-form-item label="16-30秒" prop="h62">
						<el-input v-model="h6Form.h62"></el-input>
					</el-form-item>
					<el-form-item label="31-45秒" prop="h63">
						<el-input v-model="h6Form.h63"></el-input>
					</el-form-item>
					<el-form-item label="46-60秒" prop="h64">
						<el-input v-model="h6Form.h64"></el-input>
					</el-form-item>
					<el-form-item>
						<el-button type="primary" @click.once="submitForm('h6Form', 'h6')"
							>提交</el-button
						>
						<el-button @click="resetForm('h6Form')">重置</el-button>
					</el-form-item>
				</el-form>
			</el-collapse-item>
		</el-collapse>

		<!--        <el-row>-->
		<!--            <el-col :span="24"><div class="grid-content bg-purple-dark"><i class="el-icon-reading">蒙特利尔认知评估基础量表(MoCA)</i></div></el-col>-->
		<!--        </el-row>-->
	</div>
</template>

<script>
	export default {
		name: "AddDetailed",
		data() {
			return {
				activeNames: [
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
          "16"
				],
				ruleForm: {
					file_id: "",
					name: "",
					id_num: "",
					addr: "",
					nation: "",
					r_name: "",
					start_date: "",
				},
				aForm: {
					id: "",
					file_id: "",
					a1: "",
					a2: "",
					a3: "",
					a4: "",
				},
				bForm: {
					id: "",
					file_id: "",
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
				},
				cForm: {
					id: "",
					file_id: "",
					c1: "",
					c1_1: "",
					c2: "",
					c3: [],
					c4: "",
					c4_1: "",
					c4_2: "",
					c4_3: "",
				},
				dForm: {
					id: "",
					file_id: "",
					d1: "",
					d2: "",
					d3: "",
					d4: "",
					d5: "",
					d6: "",
				},
				eForm: {
					id: "",
					file_id: "",
					e1: "",
				},
				fForm: {
					id: "",
					file_id: "",
					f1: "",
				},
				gForm: {
					id: "",
					file_id: "",
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
				},
				hForm: {
					id: "",
					file_id: "",
					h1: "",
					h1_1: [],
				},
				iForm: {
					id: "",
					file_id: "",
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
					i9_2: "",
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
				},
				jForm: {
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
					j3_1: "",
					j3_1_1: "",
					j3_2: "",
					j3_2_1: "",
					j3_3: "",
					j3_3_1: "",
					j3_4: "",
					j3_4_1: "",
					j3_5: "",
					j3_5_a: "",
					j3_5_1: "",
					j3_6: "",
				},
				h1Form: {
					id: "",
					file_id: "",
					h11: "",
					h12: "",
					h13: "",
					h14: "",
					h15: "",
					h16: "",
					h17: "",
					h18: "",
					h19: "",
					h110: "",
					h111: "",
					h112: "",
					h113: "",
					h114: "",
					h115: "",
					h116: "",
					h117: "",
					h118: "",
					h119: "",
					h120: "",
					h121: "",
					h122: "",
					h123: "",
					h124: "",
					h125: "",
					h126: "",
					h127: "",
					h128: "",
					h129: "",
					h130: "",
					h1_score: "",
				},
				h2Form: {
					id: "",
					file_id: "",
					h21: "",
					h22: "",
					h23: "",
					h24: "",
					h25: "",
					h26: "",
					h27: "",
					h28: "",
					h29: "",
					h210: "",
					h211: "",
					h212: "",
					h213: "",
					h214: "",
					h215: "",
					h2_score: "",
				},
				h3Form: {
					id: "",
					file_id: "",
					h31: "",
					h32: "",
					h33: "",
					h34: "",
					h35: "",
					h36: "",
					h37: "",
					h38: "",
					h39: "",
					h310: "",
					h311: "",
					h312: "",
					h313: "",
					h314: "",
					h315: "",
					h316: "",
					h317: "",
					h318: "",
					h319: "",
					h320: "",
					h3_score: "",
				},
        h4Form: {
					id: "",
					file_id: "",
					h41: "",
					h42: "",
					h43: "",
					h44: "",
					h45: "",
					h46: "",
					h47: "",
					h48: "",
					h49: "",
					h410: "",
					h411: "",
					h412: "",
					h4_score: "",
				},
				h5Form: {
					id: "",
					file_id: "",
					h51: "",
					h52: "",
					h53: "",
					h54: "",
					h55: "",
					h56: "",
					h57: "",
					h58: "",
					h59: "",
					h510: "",
					h5_score: "",
				},
        h6Form: {
					id: "",
					file_id: "",
					h61: "",
					h62: "",
					h63: "",
					h64: "",
					h6_score: "",
				},
				rules: {
					num: [{ type: "number", message: "年龄必须为数字值" }],
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
		mounted(){
			console.log("==========" + this.$route.params.file_id)
			console.log("==========" + this.$route.params)
		},
		methods: {
			submitForm(formName, form) {
				const _this = this;
				_this[formName].file_id = _this.$route.query.file_id + "";
				_this.$refs[formName].validate((valid) => {
					if (valid) {
						if (from == "b") {
							if (
								_this.bForm.b2 != "" &&
								_this.bForm.b2 != null &&
								_this.bForm.b1 != "" &&
								_this.bForm.b1 != null
							) {
								let num1 = parseFloat(_this.bForm.b1) / 100;
								let num2 = parseFloat(_this.bForm.b2);
								let bmi = num2 / (num1 * num1);
								_this.bForm.b2_1 = bmi.toFixed(2);
							}
							if (
								_this.bForm.b4 != "" &&
								_this.bForm.b4 != null &&
								_this.bForm.b5 != "" &&
								_this.bForm.b5 != null
							) {
								let num1 = parseFloat(_this.bForm.b4);
								let num2 = parseFloat(_this.bForm.b5);
								let num = num1 / num2;
								_this.bForm.b4_2 = num.toFixed(2);
							}
						}
						if (from == "c") {
							_this.cForm.c3.push(100);
							_this.cForm.c3 = _this.cForm.c3.join(",");
						}
						if (form == "g") {
							_this.gForm.g8_1.push(100);
							_this.gForm.g9_1.push(100);
							_this.gForm.g8_1 = _this.gForm.g8_1.join(",");
							_this.gForm.g9_1 = _this.gForm.g9_1.join(",");
						}
						if (form == "h") {
							_this.hForm.h1_1.push(100);
							_this.hForm.h1_1 = _this.hForm.h1_1.join(",");
						}
						if (form == "i") {
							_this.iForm.i1_5.push(100);
							_this.iForm.i2_3.push(100);
							_this.iForm.i5.push(100);
							_this.iForm.i9_2.push(100);
							_this.iForm.i10_2.push(100);
							_this.iForm.i1_5 = _this.iForm.i1_5.join(",");
							_this.iForm.i2_3 = _this.iForm.i2_3.join(",");
							_this.iForm.i5 = _this.iForm.i5.join(",");
							_this.iForm.i9_2 = _this.iForm.i9_2.join(",");
							_this.iForm.i10_2 = _this.iForm.i10_2.join(",");
						}
						if (form == "j") {
							_this.jForm.j1.push(100);
							_this.jForm.j1 = _this.jForm.j1.join(",");
						}
						if (form == "h1") {
							var sum = 0;
							for (var num = 1; num <= 30; num++) {
								var emp = 0;
								if (
									_this.h1Form["h1" + [num]] != "0" &&
									_this.h1Form["h1" + [num]] != "" &&
									_this.h1Form["h1" + [num]] != null
								) {
									emp = parseInt(_this.h1Form["h1" + [num]]);
									sum = sum + emp;
								}
							}
							if (sum != "0" && sum != "" && sum != null) {
								_this.h1Form.h1_score = sum;
							}
						}
						if (form == "h2") {
							var h2 = _this.h2Form;
							var sum = 0;
							if (h2.h21 == "0") {
								sum++;
							}
							if (h2.h22 == "1") {
								sum++;
							}
							if (h2.h23 == "1") {
								sum++;
							}
							if (h2.h24 == "1") {
								sum++;
							}
							if (h2.h25 == "0") {
								sum++;
							}
							if (h2.h26 == "1") {
								sum++;
							}
							if (h2.h27 == "0") {
								sum++;
							}
							if (h2.h28 == "1") {
								sum++;
							}
							if (h2.h29 == "1") {
								sum++;
							}
							if (h2.h210 == "1") {
								sum++;
							}
							if (h2.h211 == "0") {
								sum++;
							}
							if (h2.h212 == "1") {
								sum++;
							}
							if (h2.h213 == "0") {
								sum++;
							}
							if (h2.h214 == "1") {
								sum++;
							}
							if (h2.h215 == "1") {
								sum++;
							}
							if (sum != "0" && sum != "" && sum != null) {
								_this.h2Form.h2_score = sum;
							}
						}
						if (form == "h3") {
							var sum = 0;
							for (var num = 1; num <= 20; num++) {
								var emp = 0;
								if (
									_this.h3Form["h3" + [num]] != "0" &&
									_this.h3Form["h3" + [num]] != "" &&
									_this.h3Form["h3" + [num]] != null
								) {
									emp = parseInt(_this.h3Form["h3" + [num]]);
									sum = sum + emp;
								}
							}
							if (sum != "0" && sum != "" && sum != null) {
								_this.h3Form.h3_score = sum;
							}
						}
            if (form == "h4") {
							var sum = 0;
							for (var num = 1; num <= 12; num++) {
								var emp = 0;
								if (
									_this.h4Form["h4" + [num]] != "0" &&
									_this.h4Form["h4" + [num]] != "" &&
									_this.h4Form["h4" + [num]] != null
								) {
									emp = parseInt(_this.h4Form["h4" + [num]]);
									sum = sum + emp;
								}
							}
							if (sum != "0" && sum != "" && sum != null) {
								_this.h4Form.h4_score = sum;
							}
						}
						if (form == "h5") {
							var sum = 0;
							for (var num = 1; num <= 10; num++) {
								var emp = 0;
								if (
									_this.h5Form["h5" + [num]] != "0" &&
									_this.h5Form["h5" + [num]] != "" &&
									_this.h5Form["h5" + [num]] != null
								) {
									emp = parseInt(_this.h5Form["h5" + [num]]);
									sum = sum + emp;
								}
							}
							if (sum != "0" && sum != "" && sum != null) {
								_this.h5Form.h5_score = sum;
							}
						}
						if (form == "h6") {
							var sum = 0;
							for (var num = 1; num <= 4; num++) {
								var emp = 0;
								if (
									_this.h6Form["h6" + [num]] != "0" &&
									_this.h6Form["h6" + [num]] != "" &&
									_this.h6Form["h6" + [num]] != null
								) {
									emp = parseInt(_this.h6Form["h6" + [num]]);
									sum = sum + emp;
								}
							}
							if (sum != "0" && sum != "" && sum != null) {
								_this.h6Form.h6_score = sum;
							}
						}
						axios
							.post(
								"http://47.103.201.247:8080/sys/" +
									form +
									"/add" +
									form.toUpperCase(),
								this[formName]
							)
							.then(function (resp) {
								if (resp.data.success == true) {
									_this.$alert("添加成功", "标题名称", {
										confirmButtonText: "确定",
										// callback: action => {
										//     _this.$router.push({
										//         path: '/addDetailed',
										//         query:{
										//             file_id:_this.ruleForm.file_id
										//         }
										//     })
										// }
									});
								}
							});
					} else {
						console.log("error submit!!");
						return false;
					}
				});
			},
			resetForm(formName) {
				this.$refs[formName].resetFields();
			},
		},
	};
</script>

<style scoped>
	.el-row .el-collapse-item {
		margin-bottom: 20px;
	}

	.el-col .el-collapse-item {
		border-radius: 4px;
	}
	.demo-ruleForm /deep/ .el-form-item .el-form-item__label {
		/*float: left;*/
		width: 230px !important;
		text-align: left;
	}
	.demo-ruleForm /deep/ .el-form-item .el-form-item__content {
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
	.el-collapse-item__header {
		background-color: #d8cfcf;
	}
</style>