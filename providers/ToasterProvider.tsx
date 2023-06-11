'use client';

import { Toaster } from 'react-hot-toast';

const ToasterProvider = () => {
  return (
    <Toaster
      toastOptions={{
        style: {
          background: '#a742ff',
          color: '#fff'
        }
      }}
    />
  )
}

export default ToasterProvider;