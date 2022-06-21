import { IResponse } from '../types'

type DynamicObject = { [x: string]: any }

interface IMakeResponseOptions<T> {
  data: T
}

export function makeResponse<T extends DynamicObject>({
  data
}: IMakeResponseOptions<T>): IResponse<T> {
  const formattedObject = serialize(data)

  return {
    status: 200,
    response: formattedObject as T
  }
}

type ISerialized = DynamicObject | Array<DynamicObject>
type ISerializeObject = DynamicObject | Array<DynamicObject>

export function serialize(obj: ISerializeObject): ISerialized {
  const formattedObject: DynamicObject = {}

  if (Array.isArray(obj)) {
    return obj.map((object) => serialize(object))
  }

  Object.keys(obj).forEach((key) => {
    formattedObject[formatKeyName(key)] = obj[key]
  })

  return formattedObject
}

function formatKeyName(name: string): string {
  const formattedName = name
    .split('_')
    .map((fragment) => fragment.charAt(0).toUpperCase() + fragment.slice(1))
    .join('')

  return formattedName.charAt(0).toLocaleLowerCase() + formattedName.slice(1)
}
