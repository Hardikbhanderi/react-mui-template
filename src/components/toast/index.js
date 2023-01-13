import { toast as toastify } from 'react-toastify'

const toast = {
  error: msg => toastify(msg, { hideProgressBar: true, autoClose: 2000, type: 'error' })
}

export default toast
