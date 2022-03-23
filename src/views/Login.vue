<template>
  <form style="margin: 100px">
    <v-text-field
      v-model="id"
      :error-messages="idErrors"
      :counter="10"
      label="아이디"
      required
      @input="$v.id.$touch()"
      @blur="$v.id.$touch()"
    ></v-text-field>
    <v-text-field
      v-model="password"
      :error-messages="passwordErrors"
      label="비밀번호"
      required
      @input="$v.password.$touch()"
      @blur="$v.password.$touch()"
    ></v-text-field>
    <v-btn class="mr-4" @click="submit"> submit </v-btn>
    <v-btn @click="clear"> clear </v-btn>
  </form>
</template>

<script>
import { required } from 'vuelidate/lib/validators'
export default {
  validations: {
    id: { required },
    password: { required }
  },

  data: () => ({
    id: '',
    password: ''
  }),

  computed: {
    idErrors () {
      const errors = []
      if (!this.$v.id.$dirty) return errors
      !this.$v.id.required && errors.push('아이디를 입력해주세요.')
      return errors
    },
    passwordErrors () {
      const errors = []
      if (!this.$v.password.$dirty) return errors
      !this.$v.password.required && errors.push('비밀번호를 입력해주세요.')
      return errors
    }
  },

  methods: {
    submit () {
      this.$v.$touch()
    },
    clear () {
      this.$v.$reset()
      this.id = ''
      this.password = ''
    }
  }
}
</script>

<style></style>
