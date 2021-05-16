<template>
	<div class="clearfix" id="login_wrap">
		<h2 class="title">
      <img src="./lg.png" alt="" />
    </h2>
		<div id="login">
			<div class="login--account">
				<span>账号：</span>
				<input
					type="text"
					placeholder="用户名"
					name="account"
					v-model.trim="account"
				/>
			</div>
			<div class="login--password">
				<span>密码：</span>
				<input
					type="password"
					placeholder="密码"
					name="password"
					v-model.trim="password"
					@keyup.enter="login"
				/>
			</div>
			<p class="login--btn">
				<button id="loginBtn" @click="login">登录</button>
			</p>
		</div>
	</div>
</template>

<script>
	import baseUrl from "../../utils/baseURL";
	export default {
		data() {
			return {
				account: "",
				password: "",
			};
		},
		methods: {
			login() {
				// 网络请求
				const _this = this;
				axios
					.post(baseUrl + "/login", {
						account: _this.account,
						password: _this.password,
					})
					.then(function (resp) {
						console.log(resp.data);
						if (resp.data.code == 0) {
							let token = resp.data.data.token;
							// 本地  vuex
							_this.$store.commit("LOGIN_IN", token);
							_this.$router.replace("/");
						} else if (resp.data.code == -1) {
							_this.$message({
								message: "用户名错误！",
								type: "warning",
							});
						} else {
							_this.$message({
								message: "密码错误！",
								type: "warning",
							});
						}
					});
			},
		},
		mounted() {},
	};
</script>
<style scoped lang="scss">
	img {
		width: 160px;
		height: 160px;
	}
	.title {
		text-align: center;
		font-size: 25px;
    font-weight: bold;
    letter-spacing: 10px;
		padding-top: 50px;
	}
	#login_wrap {
		position: relative;
		background: rgba(64, 64, 194, 0.1);
		> div {
			background: #fff;
			width: 479px;
			height: 325px;
			padding: 30px 40px;
			position: absolute;
			top: 55%;
			left: 50%;
			transform: translate(-50%, -50%);
			> div {
				padding: 10px 0;
				border-bottom: 1px solid #ddd;
				&.login--account {
					margin: 25px 0 30px;
				}
				span {
					color: #666;
					display: inline-block;
					width: 84px;
					font-size: 20px;
				}
				input {
					background: none;
					font-size: 16px;
					border: none;
					height: 30px;
					width: 280px;
					padding-left: 12px;
					box-sizing: border-box;
					color: #666;
					&.error {
						border: 1px solid #f00;
					}
					&::-webkit-input-placeholder {
						color: #aaa;
					}
				}
			}

			p {
				text-align: right;
				&.login--btn {
					button {
						width: 100%;
						height: 50px;
						font-size: 18px;
						background: rgb(79,109,160);
						border: none;
						margin-top: 30px;
						color: #fff;
						border-radius: 6px;
						cursor: pointer;
					}
				}
				a {
					color: #fff;
					display: inline-block;
					padding: 0 15px;
					font-size: 14px;
				}
			}
		}
	}
</style>
