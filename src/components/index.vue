<style lang="less" module="a">
.entry {
  min-width: 1200px;
  height: 100%;
  overflow-y: auto;
  background: #F5F5F5;
  .leftMenu {
    width: 200px;
    background: white;
    margin-right: 10px;
  }
  .mainContent {
    height: 100%;
    box-sizing: border-box;
    background: white;
  }
}
</style>
<style lang="less" module="b">
:global {
  .templateDetailEntry {
      padding-top: 20px;
      line-height: 16px;
      .simditor-body{
        img {
          max-width: 100%;
          height:auto;
        }
      }
    }
  .superviseManagerHeadTab {
    .tab {
      position: relative;
      height: 60px;
      line-height: 60px;
      padding: 0 20px;
      text-align: center;
      font-size: 14px;
      color: #333;
      font-weight: 500;
      cursor: pointer;
    }
    .tab.selected {
      color: #ee2223;
    }
    .tab.selected:after {
      position: absolute;
      content: "";
      bottom: 7px;
      left: 50%;
      margin-left: -15px;
      width: 30px;
      height: 4px;
      border-radius: 2px;
      background: #ee2223;
    }
  }
  .superviseManagerTable {
    .el-table .cell {
      padding-left: 16px;
      line-height: 14px;
    }
    .el-table .is-center .cell {
      padding-left: 10px;
    }
    .el-table td,
    .el-table th {
      padding: 9px 0;
      font-size: 12px;
    }
    .el-table td,
    .el-table th.is-leaf {
      border-bottom: 1px solid #f0f0f0;
    }
    .el-table--border td,
    .el-table--border th,
    .el-table__body-wrapper
      .el-table--border.is-scrolling-left
      ~ .el-table__fixed {
      border-right: 1px solid #f0f0f0;
    }
    .el-table--border,
    .el-table--group {
      border-bottom: 0;
    }
    .el-table__header-wrapper table tr th {
      text-align: center;
      box-sizing: border-box;
      height: 34px;
      color: #333;
      font-weight: 400;
      background: #f7f9fd;
    }
    .el-table__body-wrapper table tr td {
      color: #333;
    }
    .el-table::before {
      display: none;
    }
    .el-table__row {
      cursor: pointer;
    }
    .el-table__row:hover {
      background: #f0f3f9;
    }
    .el-table--border,
    .el-table--group {
      border-top: 1px solid #aaa;
      border-left: 0;
      border-right: 0;
    }
    .el-checkbox__input.is-checked .el-checkbox__inner {
      background: white;
    }
    .el-checkbox__inner::after {
      box-sizing: content-box;
      content: "";
      border: 2px solid #ee2223;
      border-left: 0;
      border-top: 0;
      height: 7px;
      left: 4px;
      position: absolute;
      top: 1px;
      transform: rotate(45deg) scaleY(0);
      width: 3px;
      transition: transform 0.15s ease-in 0.05s;
      transform-origin: center;
    }
    .el-checkbox__input.is-checked .el-checkbox__inner {
      border: 1px solid #ccc;
      border-radius: 3px;
    }
    .el-checkbox__input .el-checkbox__inner:hover {
      border: 1px solid #dcdfe6;
    }
    .el-table__header-wrapper .is-indeterminate .el-checkbox__inner {
      border: 1px solid #ee2223;
      background: #ee2223;
    }
  }
  .superviseManagerSearchAndUpload {
    height: 32px;
    margin-bottom: 12px;
    & > div:first-of-type {
      width: 240px;
    }
  }
  .superviseManagerRecommendOrCarefullyChosen {
    // position: relative;
    min-width:257px;
    height: 32px;
    cursor: pointer;
    div {
      // position: absolute;
      font-size: 12px;
      color: #333;
      width: auto;
      padding: 0 12px;
      height: 32px;
      text-align: center;
      line-height: 30px;
      box-sizing: border-box;
      border: 1px solid #d9d9d9;
      background: white;
    }
    div.selected {
      border: 1px solid #ee2223;
      color: #ee2223;
      z-index: 1;
    }
    .recommend {
      // left: 0;
      // top: 0;
      border-radius: 3px 0 0 3px;
      min-width:74px
    }
    .carefullyChosen {
      // right: 0;
      // top: 0;
      border-radius: 0 3px 3px 0;
      min-width: 74px;
    }
  }
  .superviseManagerBusinessOrIndustryClassificationDialog,
  .superviseManagerAdvertisingSpace {
    .yy-dialog-inner-content {
      overflow: hidden;
    }
    .YYSwitchHeight {
      min-height: 16px !important;
      .leftTip {
        line-height: 16px;
      }
    }
    .mb-flex:first-of-type {
      margin-top: 10px;
    }
    .mb-flex {
      margin-bottom: 16px;
    }
    .leftTip {
      width: 72px;
      margin-right: 12px;
    }
    .leftTip {
      text-align: right;
      line-height: 32px;
      span.must::before {
        content: "*";
        color: #ee2223;
      }
    }
    .yy-radio-wrapper {
      margin-right: 24px;
    }
  }
  .superviseManagerBodyNoPading {
    .yy-dialog-inner-content {
      padding: 0;
    }
  }
  .superviseManagerPageArea {
    padding: 12px;
  }
  .superviseManagerAdvertisingSpace {
    .mb-flex.noMargin {
      margin: 0;
    }
    .leftTip {
      width: 80px;
    }
    .advertisingPreviewArea {
      width: 429px;
      height: 76px;
      // margin-right: 12px;
      div {
        width: 429px;
        height: 76px;
        background-position: center center;
        background-repeat: no-repeat;
        background-size: contain;
        background-color: #f3f3f3;
      }
    }
    .advertisingPreviewArea + div {
        width: 230px;
    }
    .defaultImageSize {
      div {
        background-size: 167px 57px;
      }
    }
    .sizeInstructions {
      margin-top: 6px;
      color: #999;
      font-size: 12px;
      line-height: 18px;
    }
  }
  .superviseManagerSimditor {
    .simditor {
      width: 736px;
      .simditor-body {
        overflow: auto;
      }
    }
  }
  .superviseManagerUpload {
    position: relative;
    .uploadAnnexFileTips {
      position: absolute;
      top: 10px;
      left: 102px;
      font-size: 12px;
      color: #999;
    }
    .el-upload-list__item .el-progress {
      width: 90%;
    }
    .el-upload-list__item {
      padding: 0 62px 0 20px;
      color: #333;
      font-size: 12px;
      height: 36px;
      line-height: 36px;
      background: #f0f3f9;
    }
    .el-upload-list__item-name {
      color: #333;
      padding-left: 0;
    }
    .el-upload-list__item-status-label {
      right: 16px;
    }
    .el-upload-list__item .el-icon-upload-success {
      color: #17b57f;
    }
    .el-upload-list__item .el-icon-close {
      top: 12px;
      right: 16px;
      color: #666;
    }
  }
  .supervisePageMain {
    /*包裹自定义分页器的div的位置等CSS样式*/
    .swiper-pagination-custom {
      bottom: 10px;
      left: 0;
      width: 100%;
    }
    /*自定义分页器的样式*/
    .swiper-pagination-customs {
      width: 10px;
      height: 10px;
      border-radius: 5px;
      display: inline-block;
      background: rgba(255, 255, 255, 0.3);
      opacity: 0.3;
      z-index: 10;
      margin: 0 6px;
    }
    /*自定义分页器激活时的样式表现*/
    .swiper-pagination-customs-active {
      opacity: 1;
      width: 22px;
      height: 10px;
      background: rgba(255, 255, 255, 1);
      border-radius: 6px;
    }
  }
  .superviseBusinessTemplate .businessTemplateEntry .supervisePagination {
    position: fixed;
    bottom: 10px;
    right: 20px;
    left: 20px;
    background: white;
    padding: 14px 22px 20px 0;
  }
  .superviseMyTemplate .myTemplateEntry .superviseTips {
    .yy-btn-default {
      display: none;
    }
    .notSupport {
      box-sizing: border-box;
      margin: 22px 0 0;
      width: 285px;
      height: 22px;
      font-size: 14px;
      font-family: PingFangSC;
      font-weight: 400;
      color: rgba(153, 153, 153, 1);
      line-height: 22px;
    }
  }
  .superviseTable {
    td:last-of-type {
      color: #3b76dd;
      cursor: pointer;
    }
  }
  .superviseTemplateDetail {
    .yy-message {
      span {
        word-break: break-all;
      }
    }
    .superviseTips .yy-dialog-inner-content {
      padding-top: 15px;
      height: 22px;
      font-size: 14px;
      font-family: PingFangSC;
      font-weight: 400;
      color: rgba(153, 153, 153, 1);
      line-height: 22px;
    }
    .yy-dialog {
      z-index: 10;
    }
  }
  .templateDetailDialog .yy-dialog-inner-content {
      padding: 0;
    }
    .templateDetailDialog {
      .yy-dialog {
        z-index: 100 !important;
      }
      
    }
  .superviseBusinessTemplate{
    .yy-btn-ghost{
      background: rgba(255,255,255,1);
    }
    .yy-btn-ghost:hover{
      color: #555;
      background-color: rgba(0, 0, 0, 0.1);
      border-color: #bbb;
    }
  }
  // 全局滚动条样式
  .superviseScrollBar::-webkit-scrollbar-track {
    background-color: #F9F9F9;
  }
  .superviseScrollBar::-webkit-scrollbar {
    width: 10px;
  }
  .superviseScrollBar::-webkit-scrollbar-thumb {
    border-radius: 4px;
    background-color: rgba(0, 0, 0, 15%);
  }
  .superviseScrollBar::-webkit-scrollbar-thumb:hover {
    background-color: rgba(0, 0, 0, 30%);
  }
}
</style>
<template>
<div :class="[a.entry]" class="mb-flex">
  <div :class="[a.leftMenu]">

  </div>
  <div :class="[a.mainContent]" class="superviseScrollBar mb-flex-1">
    <router-view></router-view>
  </div>
</div>
</template>
<script>

export default {
  data() {
    return {};
  },
  components: {

  },
  methods: {

  },
  created() {

  },
  mounted() {

  }
};
</script>
