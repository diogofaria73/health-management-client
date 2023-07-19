import {
  ArrowArcRight,
  ArrowElbowDownRight,
  Bandaids,
  Pencil,
  Trash,
} from 'phosphor-react'
import {
  PriceHighLight,
  TransactionsContainer,
  TransactionsTable,
} from './styles'
import { Header } from '../../components/Header'
import { Summary } from '../../components/Summary'
import { FilterForm } from '../../components/Filter'

export function Home() {
  return (
    <>
      <Header />
      <Summary />
      <TransactionsContainer>
        <FilterForm />
        <TransactionsTable>
          <tbody>
            <tr>
              <td>Joaquim da Silva Costa</td>
              <td>
                <PriceHighLight variant="admitted">Admitido</PriceHighLight>
              </td>
              <td>13/04/1972</td>
              <td>3 meses</td>
              <td title="Editar">
                <span>
                  <Pencil size={20} color="#EAB308" />
                </span>
              </td>
              <td>
                <span>
                  <Trash size={20} color="#7A1921" />
                </span>
              </td>
              <td>
                <span>
                  <Bandaids size={20} color="#0E7490" />
                </span>
              </td>
              <td>
                <span>
                  <ArrowArcRight size={20} color="#4ADE80" />
                </span>
              </td>
            </tr>
            <tr>
              <td>Joaquim da Silva Costa</td>
              <td>
                <span>
                  <PriceHighLight variant="discharged">Alta</PriceHighLight>
                </span>
              </td>
              <td>13/04/1972</td>
              <td>3 meses</td>
              <td>
                <span>
                  <Pencil size={20} color="#EAB308" />
                </span>
              </td>
              <td>
                <span>
                  <Trash size={20} color="#7A1921" />
                </span>
              </td>
              <td>
                <span>
                  <Bandaids size={20} color="#0E7490" />
                </span>
              </td>
              <td>
                <span>
                  <ArrowArcRight size={20} color="#4ADE80" />
                </span>
              </td>
            </tr>
          </tbody>
        </TransactionsTable>
      </TransactionsContainer>
    </>
  )
}
