<template>
	<div>
		<el-form class="detail-form-content" ref="ruleForm" :model="ruleForm" label-width="80px">
			<el-row>
				<el-col :span="12">
					<el-form-item v-if="flag=='jiashu'" label='家属名称' prop="jiashuName">
						<el-input v-model="ruleForm.jiashuName" placeholder='家属名称' clearable></el-input>
					</el-form-item>
				</el-col>

				<el-col :span="12">
					<el-form-item v-if="flag=='jiashu'" label='家属照片' prop="jiashuPhoto">
						<file-upload tip="点击上传照片" action="file/upload" :limit="3" :multiple="true"
							:fileUrls="ruleForm.jiashuPhoto?$base.url+ruleForm.jiashuPhoto:''"
							@change="jiashuPhotoUploadChange"></file-upload>
					</el-form-item>
				</el-col>
				<el-col :span="12">
					<el-form-item v-if="flag=='jiashu'" label='联系电话' prop="jiashuPhone">
						<el-input v-model="ruleForm.jiashuPhone" placeholder='联系电话' clearable></el-input>
					</el-form-item>
				</el-col>

				<el-col :span="12">
					<el-form-item v-if="flag=='jiashu'" label='邮箱' prop="jiashuEmail">
						<el-input v-model="ruleForm.jiashuEmail" placeholder='邮箱' clearable></el-input>
					</el-form-item>
				</el-col>

				<el-col :span="12">
					<el-form-item v-if="flag=='jiashu'" label='身份' prop="jiashuTypes">
						<el-select v-model="ruleForm.jiashuTypes" placeholder='请选择身份'>
							<el-option v-for="(item,index) in jiashuTypesOptions" v-bind:key="item.codeIndex"
								:label="item.indexName" :value="item.codeIndex">
							</el-option>
						</el-select>
					</el-form-item>
				</el-col>
				<el-col :span="12">
					<el-form-item v-if="flag=='yonghu'" label='老人姓名' prop="yonghuName">
						<el-input v-model="ruleForm.yonghuName" placeholder='老人姓名' clearable></el-input>
					</el-form-item>
				</el-col>

				<el-col :span="12">
					<el-form-item v-if="flag=='yonghu'" label='头像' prop="yonghuPhoto">
						<file-upload tip="点击上传照片" action="file/upload" :limit="3" :multiple="true"
							:fileUrls="ruleForm.yonghuPhoto?$base.url+ruleForm.yonghuPhoto:''"
							@change="yonghuPhotoUploadChange"></file-upload>
					</el-form-item>
				</el-col>
				<el-col :span="12">
					<el-form-item v-if="flag=='yonghu'" label='健康状态' prop="jiankangTypes">
						<el-select v-model="ruleForm.jiankangTypes" placeholder='请选择健康状态'>
							<el-option v-for="(item,index) in jiankangTypesOptions" v-bind:key="item.codeIndex"
								:label="item.indexName" :value="item.codeIndex">
							</el-option>
						</el-select>
					</el-form-item>
				</el-col>
				<el-col :span="12">
					<el-form-item v-if="flag=='yonghu'" label='年龄' prop="yonghuAge">
						<el-input v-model="ruleForm.yonghuAge" placeholder='年龄' clearable></el-input>
					</el-form-item>
				</el-col>

				<el-col :span="12">
					<el-form-item v-if="flag=='yonghu'" label='紧急联系方式' prop="yonghuPhone">
						<el-input v-model="ruleForm.yonghuPhone" placeholder='紧急联系方式' clearable></el-input>
					</el-form-item>
				</el-col>

				<el-col :span="12">
					<el-form-item v-if="flag=='yonghu'" label='住址' prop="yonghuAddress">
						<el-input v-model="ruleForm.yonghuAddress" placeholder='住址' clearable></el-input>
					</el-form-item>
				</el-col>

				<el-col :span="12">
					<el-form-item v-if="flag=='yonghu'" label='健康报警' prop="baojingTypes">
						<el-select v-model="ruleForm.baojingTypes" placeholder='请选择健康报警'>
							<el-option v-for="(item,index) in baojingTypesOptions" v-bind:key="item.codeIndex"
								:label="item.indexName" :value="item.codeIndex">
							</el-option>
						</el-select>
					</el-form-item>
				</el-col>
				<!--<el-col :span="12" v-if="flag=='yonghu'">
            <el-form-item class="select" label="家属" prop="jiashuId">
                <el-select v-model="ruleForm.jiashuId" filterable placeholder="请选择家属" @change="jiashuChange">
                    <el-option
                            v-for="(item,index) in jiashuOptions"
                            v-bind:key="item.id"
                                            :label="item.jiashuName"
                            :value="item.id">
                    </el-option>
                </el-select>
            </el-form-item>
        </el-col>-->
				<el-col :span="12">
					<el-form-item v-if="flag=='yonghu'" label='家属名称' prop="jiashuName">
						<el-input v-model="jiashuForm.jiashuName" disabled></el-input>
					</el-form-item>
				</el-col>
				<el-col :span="12">
					<el-form-item v-if="flag=='yonghu'" label='家属照片' prop="jiashuPhoto">
						<el-image style="width: 100px; height: 100px"
							:src="jiashuForm.jiashuPhoto?$base.url+jiashuForm.jiashuPhoto:''" :fit="fit">
						</el-image>
					</el-form-item>
				</el-col>
				<el-col :span="12">
					<el-form-item v-if="flag=='yonghu'" label='联系电话' prop="jiashuPhone">
						<el-input v-model="jiashuForm.jiashuPhone" disabled></el-input>
					</el-form-item>
				</el-col>
				<el-col :span="12">
					<el-form-item v-if="flag=='yonghu'" label='邮箱' prop="jiashuEmail">
						<el-input v-model="jiashuForm.jiashuEmail" disabled></el-input>
					</el-form-item>
				</el-col>
				<el-col :span="12">
					<el-form-item v-if="flag=='yonghu'" label='身份' prop="jiashuTypes">
						<el-input v-model="jiashuForm.jiashuValue" disabled></el-input>
					</el-form-item>
				</el-col>
				<el-form-item v-if="flag=='users'" label="用户名" prop="username">
					<el-input v-model="ruleForm.username" placeholder="用户名"></el-input>
				</el-form-item>
				<el-col :span="12">
					<el-form-item v-if="flag!='users'" label="性别" prop="sexTypes">
						<el-select v-model="ruleForm.sexTypes" placeholder="请选择性别">
							<el-option v-for="(item,index) in sexTypesOptions" v-bind:key="item.codeIndex"
								:label="item.indexName" :value="item.codeIndex">
							</el-option>
						</el-select>
					</el-form-item>
				</el-col>
				<el-col :span="24">
					<el-form-item>
						<el-button type="primary" @click="onUpdateHandler">修 改</el-button>
					</el-form-item>
				</el-col>
			</el-row>
		</el-form>
	</div>
</template>
<script>
	// 数字，邮件，手机，url，身份证校验
	import {
		isNumber,
		isIntNumer,
		isEmail,
		isMobile,
		isPhone,
		isURL,
		checkIdCard
	} from "@/utils/validate";

	export default {
		data() {
			return {
				ruleForm: {},
				flag: '',
				usersFlag: false,
				// sexTypesOptions : [],
				// 注册表 老人
				// 注册的类型字段 老人
				// 性别
				sexTypesOptions: [],
				// 健康状态
				jiankangTypesOptions: [],
				// 健康报警
				baojingTypesOptions: [],
				// 注册的级联表 老人
				// 家属列表
				jiashuOptions: [],
				jiashuForm: {},
				// 注册表 家属
				// 注册的类型字段 家属
				// 性别
				sexTypesOptions: [],
				// 身份
				jiashuTypesOptions: [],
			};
		},
		mounted() {
			//获取当前登录用户的信息
			var table = this.$storage.get("sessionTable");
			this.sessionTable = this.$storage.get("sessionTable");
			this.role = this.$storage.get("role");
			if (this.role != "管理员") {}

			this.flag = table;
			this.$http({
				url: `${this.$storage.get("sessionTable")}/session`,
				method: "get"
			}).then(({
				data
			}) => {
				if (data && data.code === 0) {
					this.ruleForm = data.data;
					// 注册表 老人
					// 注册的级联表 老人
					if (table == 'yonghu') {
						this.jiashuChange(this.ruleForm.jiashuId);
					}
					// 注册表 家属
				} else {
					this.$message.error(data.msg);
				}
			});

			// 注册表 老人 的级联表
			// 注册的级联表 老人
			// 家属列表
			this.$http({
				url: `jiashu/page?page=1&limit=100`,
				method: "get"
			}).then(({
				data
			}) => {
				if (data && data.code === 0) {
					this.jiashuOptions = data.data.list;
				} else {
					this.$message.error(data.msg);
				}
			});
			// 注册表 家属 的级联表

			this.$http({
				url: `dictionary/page?page=1&limit=100&sort=&order=&dicCode=sex_types`,
				method: "get"
			}).then(({
				data
			}) => {
				if (data && data.code === 0) {
					this.sexTypesOptions = data.data.list;
				} else {
					this.$message.error(data.msg);
				}
			});
			this.$http({
				url: `dictionary/page?page=1&limit=100&sort=&order=&dicCode=jiashu_types`,
				method: "get"
			}).then(({
				data
			}) => {
				if (data && data.code === 0) {
					this.jiashuTypesOptions = data.data.list;
				} else {
					this.$message.error(data.msg);
				}
			});
			this.$http({
				url: `dictionary/page?page=1&limit=100&sort=&order=&dicCode=jiankang_types`,
				method: "get"
			}).then(({
				data
			}) => {
				if (data && data.code === 0) {
					this.jiankangTypesOptions = data.data.list;
				} else {
					this.$message.error(data.msg);
				}
			});
			this.$http({
				url: `dictionary/page?page=1&limit=100&sort=&order=&dicCode=baojing_types`,
				method: "get"
			}).then(({
				data
			}) => {
				if (data && data.code === 0) {
					this.baojingTypesOptions = data.data.list;
				} else {
					this.$message.error(data.msg);
				}
			});
		},
		methods: {
			chongzhi() {
				this.$router.replace({
					path: "/pay"
				});
			},
			jiashuPhotoUploadChange(fileUrls) {
				this.ruleForm.jiashuPhoto = fileUrls;
			},
			yonghuPhotoUploadChange(fileUrls) {
				this.ruleForm.yonghuPhoto = fileUrls;
			},
			// 注册表的级联表
			jiashuChange(id) {
				this.$http({
					url: `jiashu/info/` + id,
					method: "get"
				}).then(({
					data
				}) => {
					if (data && data.code === 0) {
						this.jiashuForm = data.data;
					}
				});
			},


			onUpdateHandler() {
				if ((!this.ruleForm.jiashuName) && 'jiashu' == this.flag) {
					this.$message.error('家属名称不能为空');
					return
				}

				if ((!this.ruleForm.jiashuPhoto) && 'jiashu' == this.flag) {
					this.$message.error('家属照片不能为空');
					return
				}

				if ((!this.ruleForm.jiashuPhone) && 'jiashu' == this.flag) {
					this.$message.error('联系电话不能为空');
					return
				}

				if ('jiashu' == this.flag && this.ruleForm.jiashuEmail && (!isEmail(this.ruleForm.jiashuEmail))) {
					this.$message.error(`邮箱应输入邮箱格式`);
					return
				}
				if ((!this.ruleForm.jiashuTypes) && 'jiashu' == this.flag) {
					this.$message.error('身份不能为空');
					return
				}

				if ((!this.ruleForm.yonghuName) && 'yonghu' == this.flag) {
					this.$message.error('老人姓名不能为空');
					return
				}

				if ((!this.ruleForm.yonghuPhoto) && 'yonghu' == this.flag) {
					this.$message.error('头像不能为空');
					return
				}

				if ((!this.ruleForm.jiankangTypes) && 'yonghu' == this.flag) {
					this.$message.error('健康状态不能为空');
					return
				}

				if ((!this.ruleForm.yonghuAge) && 'yonghu' == this.flag) {
					this.$message.error('年龄不能为空');
					return
				}

				if ((!this.ruleForm.yonghuPhone) && 'yonghu' == this.flag) {
					this.$message.error('紧急联系方式不能为空');
					return
				}

				if ((!this.ruleForm.yonghuAddress) && 'yonghu' == this.flag) {
					this.$message.error('住址不能为空');
					return
				}

				if ((!this.ruleForm.baojingTypes) && 'yonghu' == this.flag) {
					this.$message.error('健康报警不能为空');
					return
				}

				if ((!this.ruleForm.jiashuId) && 'yonghu' == this.flag) {
					this.$message.error('家属不能为空');
					return
				}

				if ((!this.ruleForm.sexTypes) && this.flag != 'users') {
					this.$message.error('性别不能为空');
					return
				}
				if ('users' == this.flag && this.ruleForm.username.trim().length < 1) {
					this.$message.error(`用户名不能为空`);
					return
				}
				debugger
				this.$http({
					url: `${this.$storage.get("sessionTable")}/update`,
					method: "post",
					data: this.ruleForm
				}).then(({
					data
				}) => {
					if (data && data.code === 0) {
						this.$message({
							message: "修改信息成功",
							type: "success",
							duration: 1500,
							onClose: () => {}
						});
					} else {
						this.$message.error(data.msg);
					}
				});
			}
		}
	};
</script>
<style lang="scss" scoped>
</style>
