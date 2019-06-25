<template>
  <div class="input">
    <div class="input-title">
      <div>
        {{ title }}
      </div>
      <div v-if="help.length>0" class="input-help">
        <div class="input-help-button">
          ?
        </div>
        <div class="input-help-text">{{ help }}</div>
      </div>
      <div v-if="bad.length>0" class="input-bad">
        {{ bad }}
      </div>
    </div>
    <div class="input-content">
      <slot />
    </div>
  </div>
</template>

<style>
.input-title {
  display: flex;
  align-items: baseline;
  font-size: 24px;

  color: #B7B7B7;
  margin-bottom: 13px;
}
.input{
  margin-bottom: 40px;
}
.input-content input {
  width: 100%;
  padding: 14px 18px;

  background: #F7F7F7;
  border: 1px solid #F5F5F5;
  box-sizing: border-box;
  border-radius: 5px;

  font-size: 18px;
  line-height: 21px;

  color: #B7B7B7;
}
.input-content input.notValid {
  border: 1px solid #FF0000;
}
.input-content input.valid {
  border: 1px solid #00FF38;
}
.input-help{
  position: relative;
  width: 12px;
}
.input-help-text{
  display: none;
  width: 198px;
  position: absolute;
  bottom: 20px;
  left: 16px;
  padding: 5px 17px;

  font-size: 14px;
  line-height: 19px;
  white-space: pre;

  color: #B200F0;

  background: #FEFEFE;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.05);
  border-radius: 3px;
}
.input-help-text::after{
  content: '';
  position: absolute;
  border: 10px solid transparent;
  border-left: 20px solid #FEFEFE;
  bottom:-10px;
  left:0;
}
.input-help:hover .input-help-text{
  display: block;
}
.input-help-button{
  position: absolute;
  width: 11px;
  height: 11px;
  margin-left: 3px;
  bottom: 0px;

  border-radius: 50%;
  border: 1px solid #000000;
  box-sizing: border-box;

  font-family: Roboto;
  font-style: normal;
  font-weight: 900;
  font-size: 6px;
  line-height: 7px;
  text-align: center;
  user-select: none;

  color: #000000;
}
.input-bad{
  margin-left: 7px;
  font-size: 13px;
  line-height: 15px;

  color: #FF0000;
}
</style>

<script>
export default {
  name: 'AppInput',
  props: {
    title: { type: String, default: '' },
    help: { type: String, default: '' },
    bad: { type: String, default: '' }
  }
};
</script>
