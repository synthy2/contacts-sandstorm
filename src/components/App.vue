<template>
	<div>
    <toolbar-menu />
		<router-view></router-view>
	</div>
</template>

<script>
	/*
	 * libs
	 */
	import { mapGetters }					from "vuex";

  import ToolbarMenu            from "./Toolbar/Toolbar.vue"



	export default {
		name: "app",
    components: {
      ToolbarMenu
    }
	}

</script>

<style >

		html {
			margin: 0;
			padding: 0;
			font-size: 100%;
      overflow: hidden;
		}

		body {
			margin: 0;
			padding: 0;
			font-family: 'Cuprum', sans-serif;
			font-size: 24px;
		}

		h1, h2, h3, h4, h5, h6, p, ul, li {
			margin: 0;
			padding: 0;
		}

		a {
			text-decoration: none;
      letter-spacing: 2px;
      font-size: 0.8em;
      color: white;
		}

    .fullpage-widget {
      width: 100vw;
      height: 100vh;
      text-align: center;
      vertical-align: middle;
    }


		::-webkit-scrollbar {
		  width: 9px;
		  height: 9px;
		}
		::-webkit-scrollbar-button {
		  width: 0px;
		  height: 0px;
		}
		::-webkit-scrollbar-thumb {
		  background: rgb(16, 13, 19);
		  border: 0px none #ffffff;
		  border-radius: 50px;
		}
		::-webkit-scrollbar-thumb:hover {
		  background: rgb(16, 13, 20);
		}
		::-webkit-scrollbar-thumb:active {
		  background: rgb(16, 13, 20);
		}
		::-webkit-scrollbar-track {
		  background: rgba(0,0,0,0.25);
		  border: 0px none #ffffff;
		  border-radius: 16px;

		}
		::-webkit-scrollbar-track:hover {
		  background: rgba(0,0,0,0.2);
		}
		::-webkit-scrollbar-track:active {
		  background: rgba(0,0,0,0.35);
		}
		::-webkit-scrollbar-corner {
		  background: transparent;
		}

</style>
