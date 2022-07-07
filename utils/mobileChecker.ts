
export default {
    Android() {
      return navigator.userAgent.match(/Android/i) === null ? false : true;
    },
    BlackBerry() {
      return navigator.userAgent.match(/BlackBerry/i) === null ? false : true;
    },
    IOS() {
      return navigator.userAgent.match(/iPhone|iPad|iPod/i) === null ? false : true;
    },
    Opera() {
      return navigator.userAgent.match(/Opera Mini/i) === null ? false : true;
    },
    Windows() {
      return navigator.userAgent.match(/IEMobile/i) === null ? false : true;
    },
    any() {
      return (this.Android() || this.BlackBerry() || this.IOS() || this.Opera() || this.Windows());
    }
  };
  