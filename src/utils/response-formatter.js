export function makeResponse({ data }) {
  const formattedObject = serialize(data)

  return {
    status: 200,
    response: formattedObject
  }
}

export function serialize(obj) {
  const formattedObject = {}

  if (Array.isArray(obj)) {
    return obj.map((object) => serialize(object))
  }

  Object.keys(obj).forEach((key) => {
    formattedObject[formatKeyName(key)] = obj[key]
  })

  return formattedObject
}

function formatKeyName(name) {
  const formattedName = name
    .split('_')
    .map((fragment) => fragment.charAt(0).toUpperCase() + fragment.slice(1))
    .join('')

  return formattedName.charAt(0).toLocaleLowerCase() + formattedName.slice(1)
}
