enum LOCAL_STORAGE_ERR_MESSAGES {
  NOT_FOUND = 'No item with this name was found on localStorage',
}

function saveInStorage({ name, data }: { name: string; data: string }): void {
  /* A la hora de analizar posibles errores me gusta tener esta opción */
  if (typeof localStorage.getItem(name) === 'string') {
    console.log(`An entity in localStorage with name ${name} was overwritten`)
  }

  localStorage.setItem(name, data)
}

function getItemFromStorage({ name }: { name: string }): string | Error {
  const data = localStorage.getItem(name)
  /* De nuevo, programo defensivamente para por lo menos tener algo de info si lo que estoy buscando creo que existe pero resulta no ser así */
  if (data === null) {
    throw new Error(LOCAL_STORAGE_ERR_MESSAGES.NOT_FOUND)
  }

  return data
}

function deleteItemInStorage({ name }: { name: string }) {
  localStorage.removeItem(name)
}

export { LOCAL_STORAGE_ERR_MESSAGES, saveInStorage, getItemFromStorage, deleteItemInStorage }
