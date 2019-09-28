<template>
	<v-content>
		<!-- <Dashboard /> -->
		<Login />
	</v-content>
</template>

<script>
import Dashboard from '../components/Dashboard';
import Login from '../components/Login';

export default {
  components: {
    Dashboard,
    Login,
  },
};
</script>
