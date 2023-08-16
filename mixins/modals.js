export default {
  methods: {
    openedModal() {
      document.body.classList.add('modal-open')
    },
    closedModal() {
      document.body.classList.remove('modal-open')
      this.clearData()
    },
    clearData() {},
  },
}
