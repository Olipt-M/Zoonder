import { defineStore } from 'pinia';

export const useCrushStore = defineStore('crush', {
  state: () => {
    return {
      crushNumber: 0,
      matchOverlayOpened: false,
      lastMatchedProfile:undefined,
      matchs: []
    }
  },
  actions: {
    triggerMatch(profile) {
      this.matchOverlayOpened = true;
      this.lastMatchedProfile = profile;
      if(!this.matchs.includes(profile)) {
        this.matchs.push(profile);
        this.crushNumber++;
      }
    },
    closeOverlay() {
      this.matchOverlayOpened = false;
    }
  }
});
