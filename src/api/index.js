import requests from './request'

export const reqCity = () => {
  return requests({
    url: '/houseInCity',
    method: 'GET'
  })
}

export const getCityList = () => {
  return requests({
    url: '/city',
    method: 'GET'
  })
}

export const getAllAvgPrice = () => {
  return requests({
    url: '/allAvgPrice',
    method: 'GET'
  })
}

export const getMaxPrice = () => {
  return requests({
    url: '/maxPrice',
    method: 'GET'
  })
}

export const getCityPrice = (city) => {
  return requests({
    url: '/cityPrice',
    method: 'GET',
    params: {
      cityname: city
    }
  })
}

export const getHuxingData = (city = '') => {
  if (city === '') {
    return requests({
      url: '/allHuxingCount',
      method: 'GET'
    })
  } else {
    return requests({
      url: `/allHuxingCount/${city}`,
      method: 'GET'
    })
  }
}

export const getOrientationData = (city = '') => {
  if (city === '') {
    return requests({
      url: '/allOrientation',
      method: 'GET'
    })
  } else {
    return requests({
      url: `/allOrientation/${city}`,
      method: 'GET'
    })
  }
}

export const getTypeData = (city = '') => {
  if (city === '') {
    return requests({
      url: '/houseType',
      method: 'GET'
    })
  } else {
    return requests({
      url: `/houseType/${city}`,
      method: 'GET'
    })
  }
}

export const getFloorData = (city = '') => {
  if (city === '') {
    return requests({
      url: '/allCityFloor',
      method: 'GET'
    })
  } else {
    return requests({
      url: `/allCityFloor/${city}`,
      method: 'GET'
    })
  }
}
