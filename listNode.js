export default class ListNode {
  constructor(data, next) {
    this.value = data;
    this.nextNode = next || null;
  }

  changeValue(newValue) {
    this.value = newValue;
  }
}
