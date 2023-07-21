import { useContext as UseContext } from 'react'
import { PatientContext } from '../../context/PatientContext'

export function useDashboard() {
  const { patients } = UseContext(PatientContext)

  const useDashboard = patients.reduce(
    (acc, transaction) => {
      if (transaction.status_type === 'admission') {
        acc.admission += 1
        acc.total += 1
      } else {
        acc.discharged += 1
        acc.total += 1
      }
      return acc
    },
    {
      admission: 0,
      discharged: 0,
      total: 0,
    },
  )

  return useDashboard
}
