const currentVersion = 1;
const nameStore = "reduxState";

function loadState() {
  try {
    const serializedState = localStorage.getItem(nameStore);

    if (serializedState === null) {
      return undefined;
    }

    const { version, state } = JSON.parse(serializedState);
    if (version === currentVersion) {
      return state;
    } else {
      return undefined;
    }

  } catch (err) {
    return undefined;
  }
}

function saveState(state) {
  try {
    const subsetState = {
      auth: state.auth
    };

    const serializedState = JSON.stringify({
      version: currentVersion,
      state: subsetState,
    });

    localStorage.setItem(nameStore, serializedState);
  } catch {
    // Ignorar errores de escritura en el almacenamiento local
  }
}

const persistConfig = {
  loadState,
  saveState,
};

export default persistConfig;
