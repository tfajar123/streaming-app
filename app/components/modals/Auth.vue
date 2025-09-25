<template>
  <div
    class="fixed top-0 start-0 w-screen h-screen flex justify-center items-center bg-black/50 z-50 text-white"
  >
    <Transition name="slide" mode="out-in">
      <div :key="isRegister" class="min-w-100 min-h-100">
        <div class="bg-gray-900 rounded-2xl p-5">
          <div class="flex justify-between items-center">
            <div class="flex flex-col">
              <h1 class="text-2xl font-bold">KuhakuAnime</h1>
              <p class="text-gray-400 text-sm">
                {{ isRegister ? 'Create an Account' : 'Login to your account' }}
              </p>
            </div>
            <ButtonsMain
              variant="secondary"
              title="Close"
              icon="none"
              @click="$emit('close')"
            />
          </div>
          <form
            class="flex flex-col mt-5"
            @submit.prevent="isRegister ? onRegisterSubmit() : onLoginSubmit()"
          >
            <div v-if="isRegister" class="mb-3">
              <label for="email" class="text-sm font-bold">Email</label>
              <input
                v-if="isRegister"
                id="email"
                v-model="formObj.email"
                type="email"
                placeholder="Email"
                class="w-full border border-gray-400 px-3 py-2 rounded-lg"
              />
            </div>
            <div class="mb-3">
              <label for="username" class="text-sm font-bold">Username</label>
              <input
                id="username"
                v-model="formObj.username"
                type="text"
                placeholder="Username"
                class="w-full border border-gray-400 px-3 py-2 rounded-lg"
              />
            </div>
            <div class="mb-3">
              <label for="password" class="text-sm font-bold">Password</label>
              <input
                id="password"
                v-model="formObj.password"
                type="password"
                placeholder="Password"
                class="w-full border border-gray-400 px-3 py-2 rounded-lg"
              />
            </div>
            <h3 v-if="!isRegister" class="text-center text-sm my-3 font-bold">
              Forgot Password?
            </h3>
            <ButtonsMain
              variant="white"
              :title="isRegister ? 'Register' : 'Login'"
              icon="none"
              :class="{ 'mt-5': isRegister }"
            />
          </form>
          <div class="flex justify-center items-center mt-5">
            <p class="text-sm text-gray-400">
              {{
                isRegister
                  ? 'Already have an account?'
                  : "Don't have an account?"
              }}
              <span
                class="text-white font-bold"
                @click="isRegister = !isRegister"
                >{{ isRegister ? 'Login' : 'Register' }}</span
              >
            </p>
          </div>
        </div>
      </div>
    </Transition>
  </div>
</template>

<script setup>
import { useAuthStore } from '~/stores/authStore';

defineEmits(['close']);

const formObj = reactive({
  email: '',
  username: '',
  password: '',
});

const authStore = useAuthStore();
const isRegister = ref(false);
const isLoading = ref(false);
const errorList = reactive([]);

const onRegisterSubmit = async () => {
  isLoading.value = true;
  errorList.length = 0;
  if (formObj.email === undefined || formObj.email.length === 0) {
    errorList.push('Email is required');
  }
  if (formObj.username === undefined || formObj.username.length === 0) {
    errorList.push('Username is required');
  }
  if (formObj.password === undefined || formObj.password.length === 0) {
    errorList.push('Password is required');
  }
  if (errorList.length > 0) {
    isLoading.value = false;
    return;
  }

  try {
    const response = await authStore.register(formObj);
    console.log(response);
    if (response.success) {
      console.log('success');
    } else {
      console.log('error');
    }
  } catch (err) {
    errorList.push(err);
  } finally {
    isLoading.value = false;
  }
};

const onLoginSubmit = async () => {
  isLoading.value = true;
  errorList.length = 0;
  if (formObj.username === undefined || formObj.username.length === 0) {
    errorList.push('Username is required');
  }
  if (formObj.password === undefined || formObj.password.length === 0) {
    errorList.push('Password is required');
  }
  if (errorList.length > 0) {
    isLoading.value = false;
    return;
  }
  try {
    const response = await authStore.login(formObj);
    if (response.success) {
      console.log('success');
    } else {
      console.log('error');
    }
  } catch (err) {
    errorList.push(err);
  } finally {
    isLoading.value = false;
  }
};
</script>
