import React from 'react';

export const USER_STORAGE_KEY = 'APP_USER_DATA';

export const storeUser = user => {
  localStorage.setItem(USER_STORAGE_KEY, JSON.stringify(user));
}

export const getUser = async () => JSON.parse(await localStorage.getItem(USER_STORAGE_KEY));