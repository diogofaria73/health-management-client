import {
  ArrowArcRight,
  ArrowElbowDownRight,
  Bandaids,
  Pencil,
  Trash,
} from 'phosphor-react'
import { useContext } from 'react'
import {
  PriceHighLight,
  TransactionsContainer,
  TransactionsTable,
} from './styles'
import { Header } from '../../components/Header'
import { Summary } from '../../components/Summary'
import { FilterForm } from '../../components/Filter'
import { PatientContext } from '../../shared/context/PatientContext'

export function Home() {
  const { patients } = useContext(PatientContext)

  return (
    <>
      <Header />
      <Summary />
      <TransactionsContainer>
        <FilterForm />
        <TransactionsTable>
          <tbody>
            {patients.map((patient) => {
              return (
                <tr key={patient.id}>
                  <td>{patient.name}</td>
                  <td>
                    <PriceHighLight variant={patient.status_type}>
                      {patient.status}
                    </PriceHighLight>
                  </td>
                  <td>{patient.city}</td>
                  <td>{patient.phone}</td>
                  <td>
                    <Pencil size={20} color="#EAB308" />
                  </td>
                  <td>
                    <Trash size={20} color="#7A1921" />
                  </td>
                  <td>
                    <Bandaids size={20} color="#0E7490" />
                  </td>
                </tr>
              )
            })}
          </tbody>
        </TransactionsTable>
      </TransactionsContainer>
    </>
  )
}
