class ObserverHandler {
  constructor() {
    this.observers = [];
  }
  subscribe(subscribe) {
    this.observers.push(subscribe);
  }
  unsubscribe(subscribe) {}
  notify(change) {
    this.observers.forEach((observer) => {
      const data = observer(change);
      return data;
    });
  }
}
