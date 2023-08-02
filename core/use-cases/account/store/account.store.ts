import * as data from "../../__data__";

// This is a mock store that we can use to test our functions
function createStore() {
  return {
    data: data.scenarios.stubs.accountsTree
  };
}

export default createStore();