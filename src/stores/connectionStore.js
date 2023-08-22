import { defineStore } from 'pinia';

export const useConnectionStore = defineStore('connection', {
  state: () => {
    return {
      isConnected: false,
      isLoginOverlayOpened: true,
    }
  },
  actions: {
    closeOverlay() {
      this.isLoginOverlayOpened = false;
    },
    openOverlay() {
      this.isLoginOverlayOpened = true;
    },
    switchToConnected() {
      this.isConnected = true;
    },
    switchToDisconnected() {
      this.isConnected = false;
    }
  }
});
