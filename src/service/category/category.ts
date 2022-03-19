import { instance } from '../index'


export function getcategorylist(value: any) {
  return instance.get({
    url: '/goodscategory'
  })
}

export function addcategory(value: any) {
  return instance.post({
    url: '/goodscategory',
    data: value,
    headers: {
      'content-type': 'application/json'
    }
  })
}

export function updatecategory(value: any) {
  return instance.put({
    url: `/goodscategory/${value.id}`,
    data: value,
    headers: {
      'content-type': 'application/json'
    }
  })
}

export function delcategory(id: any) {
  return instance.delete({
    url: `/goodscategory/${id}`
  })
}
