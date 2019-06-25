<template>
  <div id="app" class="layout">
    <div class="body">
      <div class="header">
        РЕГИСТРАЦИЯ
      </div>
      <div class="content">
        <app-input title="E-mail" :bad="badEmail">
          <input
            v-model="email"
            :class="{
              valid: validEmail && validEmailScore,
              notValid: (!validEmail || !validEmailScore) && viewErr
            }"
            type="text"
            @change="checkEmail"
          >
        </app-input>
        <app-input title="Phone number" :bad="badPhone">
          <input
            v-model="phone"
            :class="{
              valid: validPhone,
              notValid: !validPhone && viewErr
            }"
            type="text"
            @change="checkPhone"
          >
          <span>
            {{ country }}
          </span>
        </app-input>
        <app-input
          title="Password"
          :help="helpPassword"
          :bad="badPassword"
          mask="*"
        >
          <input
            v-model="password"
            :class="{
              valid: validPassword,
              notValid: !validPassword && viewErr
            }"
            type="password"
          >
        </app-input>
        <app-input title="Сonfirm Password" :bad="badConfirmPassword">
          <input
            v-model="confirmPassword"
            :class="{
              valid: validConfirmPassword,
              notValid: !validConfirmPassword && viewErr
            }"
            type="password"
            mask="*"
          >
        </app-input>
        <div style="margin-bottom:50px;">
          <app-check-box v-model="accept">
            <span>
              I accept privacy policy and it so
            </span>
            <a href="#">
              cool
            </a>
          </app-check-box>
        </div>
        <div class="right">
          <app-button
            title="Subscribe"
            @click="subAlert"
            @mouseover="viewErr=true"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.layout {
  display: flex;
  min-height: 100vh;
}
.body {
  width: 650px;
  margin: auto;
  background: #fefefe;
  box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.05);
  border-radius: 10px;
}
.header {
  background: #373737;
  box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.05);
  border-radius: 10px 10px 0px 0px;
  text-align: center;
  padding: 34px;

  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 36px;

  color: #ffffff;
}
.content {
  padding: 60px 100px;
}
.right {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}
</style>


<script>
import AppInput from './components/AppInput.vue';
import AppButton from './components/AppButton.vue';
import AppCheckBox from './components/AppCheckBox.vue';


let minScore = process.env.MIN_SCORE;
const tokenEmail = process.env.TOKEN_EMAIL;
const tokenPhone = process.env.TOKEN_PHONE;
console.log(tokenPhone);

let controllerPhone = new AbortController();
let controllerEmail = new AbortController();

export default {
  name: 'App',
  components: { AppInput, AppButton, AppCheckBox },
  data: function () {
    return {
      email: '',
      phone: '',
      password: '',
      confirmPassword: '',
      accept: false,
      country: '',
      internationalFormat: '',
      validPhone: false,
      validEmail: false,
      validEmailScore: false,
      viewErr: false,
      helpPassword: `Password\n(!@#$%^&*(),.)\nabcde 1- A 2- a\n123`,
    };
  },
  computed: {
    badEmail: {
      get() {
        if (!this.viewErr) {
          return '';
        }
        if (!this.validEmail) {
          return 'Not valid';
        }
        if (!this.validEmailScore) {
          return 'Not meet the requirements';
        }
        return '';
      },
      set() {}
    },
    badPhone: {
      get() {
        if (!this.viewErr) {
          return '';
        }
        if (!this.validPhone) {
          return 'Not valid';
        }
        return '';
      }
    },
    badPassword: {
      get() {
        if (!this.viewErr) {
          return '';
        }
        if (!this.validPassword) {
          return 'Not valid';
        }
        return '';
      }
    },
    badConfirmPassword: {
      get() {
        if (!this.viewErr) {
          return '';
        }
        if (!this.validConfirmPassword) {
          return 'Not match';
        }
        return '';
      }
    },
    validPassword: {
      get() {
        return this.password.length > 5 &&
          this.password.search(/.*?[!@#$%^&*(),.].*?/) > -1 &&
          this.password.search(/.*?abcde.*?/) === -1 &&
          this.password.search(/.*?123.*?/) === -1 &&
          this.password.search(/.*?[0-9].*?[0-9].*?/) > -1 &&
          this.password.charAt(0) === this.password.charAt(0).toUpperCase() &&
          true;
      }
    },
    validConfirmPassword: {
      get() {
        return this.password === this.confirmPassword &&
        this.confirmPassword !== '';
      }
    }
  },
  methods: {
    checkPhone: function () {
      controllerPhone.abort();
      controllerPhone = new AbortController();
      const signal = controllerPhone.signal;
      fetch(
        `https://apilayer.net/api/validate?access_key=${tokenPhone}&number=${this.phone}`,
        {
          signal: signal,
        }
      )
        .then(response => {
          return response.json();
        })
        .then(data => {
          this.country = data.country_name;
          this.internationalFormat = data.international_format;
          this.validPhone = data.valid;
        })
        .catch(error => console.log(error));
    },
    checkEmail: function () {
      controllerEmail.abort();
      controllerEmail = new AbortController();
      const signal = controllerEmail.signal;
      fetch(
        `https://apilayer.net/api/check?access_key=${tokenEmail}&email=${this.email}`,
        {
          signal: signal,
        }
      )
        .then(response => {
          return response.json();
        })
        .then(data => {
          this.validEmail = data.format_valid;
          this.validEmailScore = data.score >= minScore && !data.disposable;
        })
        .catch(error => console.log(error));
    },
    subAlert: function () {
      if (
        this.accept &&
        this.validPassword &&
        this.validConfirmPassword &&
        this.validPhone &&
        this.validEmail &&
        this.validEmailScore) {
        /* eslint-disable no-alert */
        alert(`e-mail: ${this.email}\n` +
          `phone: ${this.internationalFormat}\n` +
          `password: ${this.password}`);
      }
    }
  },
};
</script>
