import { createContext, useEffect, useState } from 'react'

interface Patients {
  id: string
  name: string
  document: string
  city: string
  address: string
  phone: string
  email: string
  birth: string
  status: string
  status_type: 'admission' | 'discharged'
  createdAt: string
}

interface PatientContextType {
  patients: Patients[]
  fetchPatients: (query?: string) => Promise<void>
}

interface PatientProviderProps {
  children: React.ReactNode
}

export const PatientContext = createContext({} as PatientContextType)

export function PatientProvider({ children }: PatientProviderProps) {
  const [patients, setPatients] = useState<Patients[]>([])

  async function fetchPatients(query?: string) {
    const url = new URL('http://localhost:31012/patients')

    if (query) {
      console.log(query)
      url.searchParams.append('q', query)
    }

    const response = await fetch(url)
    const data = await response.json()

    console.log(response)

    setPatients(data)
  }
  useEffect(() => {
    fetchPatients()
  }, [])

  return (
    <PatientContext.Provider
      value={{
        patients,
        fetchPatients,
      }}
    >
      {children}
    </PatientContext.Provider>
  )
}
