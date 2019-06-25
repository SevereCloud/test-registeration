<template>
  <div class="button" @click="$emit('click')" @mouseover="$emit('mouseover')">
    {{ title }}
  </div>
</template>

<style>
.button {
  padding: 11px 73px;

  background: #0075FF;
  border: 1px solid #F5F5F5;
  box-sizing: border-box;
  border-radius: 5px;

  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  line-height: 28px;
  color: #FFFFFF;

  cursor: pointer;
  user-select: none;
}
.button:active {
  background: rgb(0, 97, 207);
}
</style>

<script>
export default {
  name: 'AppButton',
  props: {
    title: { type: String, default: '' }
  }
};
</script>
