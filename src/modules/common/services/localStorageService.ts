function saveInStorage({ name, data }: { name: string; data: string }): void {
  /* A la hora de analizar posibles errores me gusta tener esta opción */
  if (typeof localStorage.getItem(name) === 'string') {
    console.log(`An entity in localStorage with name ${name} was overwritten`)
  }

  localStorage.setItem(name, JSON.stringify(data))
}

function getItemFromStorage({ name }: { name: string }): string | Error {
  const data = localStorage.getItem(name)
  /* De nuevo, programo defensivamente para por lo menos tener algo de info si lo que estoy buscando creo que existe pero resulta no ser así */
  if (data === null) {
    throw new Error(`No item with name ${name} was found on localStorage`)
  }

  return data
}

export { saveInStorage, getItemFromStorage }
