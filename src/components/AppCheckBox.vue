<template>
  <div>
    <input id="checkbox" v-model="proxyValue" type="checkbox">
    <label for="checkbox" class="checkbox-text">
      <slot />
    </label>
  </div>
</template>

<style>
#checkbox {
  position: absolute;
  z-index: -1;
  opacity: 0;
}
#checkbox + label {
  position: relative;
  padding: 0 0 0 29px;
  cursor: pointer;
}
#checkbox + label:before {
  content: '';
  position: absolute;
  top: 1px;
  left: 0;
  width: 17px;
  height: 17px;
  border: 1px solid #000000;
  transition: .2s;
}
#checkbox + label:after {
  content: '';
  position: absolute;
  top: 4px;
  left: 3px;
  width: 13px;
  height: 13px;
}
#checkbox:checked + label:after {
  background: #00FF38;

}

.checkbox-text{
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 21px;
  vertical-align: center;

  color: #B5B5B5;
}
.checkbox-text a{
  color: #B200F0;
  text-decoration: none;
}
.checkbox-text a:hover{
  color: #B200F0;
}
.checkbox-text a:visited{
  color: #B200F0;
  text-decoration: none;
}
</style>

<script>
export default {
  name: 'AppCheckBox',
  computed: {
    proxyValue: {
      get() { return this.value },
      set(newValue) { this.$emit('input', newValue) }
    }
  }
};
</script>
